import { useAccount, useWriteContract, useReadContract } from 'wagmi';
import { useCallback } from 'react';

// Contract ABI for CipherPayFlow
const CONTRACT_ABI = [
  {
    "inputs": [
      {"internalType": "address", "name": "_verifier", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {"internalType": "string", "name": "_name", "type": "string"},
      {"internalType": "string", "name": "_email", "type": "string"}
    ],
    "name": "registerUser",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_recipient", "type": "address"},
      {"internalType": "bytes", "name": "_amount", "type": "bytes"},
      {"internalType": "string", "name": "_description", "type": "string"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "createPayment",
    "outputs": [
      {"internalType": "uint256", "name": "", "type": "uint256"}
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "uint256", "name": "_paymentId", "type": "uint256"},
      {"internalType": "bytes", "name": "_amount", "type": "bytes"},
      {"internalType": "bytes", "name": "inputProof", "type": "bytes"}
    ],
    "name": "completePayment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"internalType": "address", "name": "_user", "type": "address"}
    ],
    "name": "getUserProfile",
    "outputs": [
      {"internalType": "string", "name": "name", "type": "string"},
      {"internalType": "string", "name": "email", "type": "string"},
      {"internalType": "uint8", "name": "totalPayments", "type": "uint8"},
      {"internalType": "uint8", "name": "totalReceived", "type": "uint8"},
      {"internalType": "uint8", "name": "reputation", "type": "uint8"},
      {"internalType": "bool", "name": "isVerified", "type": "bool"}
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

// Contract address (you'll need to deploy and update this)
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'; // Replace with actual deployed address

export function useContract() {
  const { address } = useAccount();
  const { writeContract, isPending, error } = useWriteContract();

  // Register user function
  const registerUser = useCallback(async (name: string, email: string) => {
    if (!address) throw new Error('No wallet connected');
    
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'registerUser',
      args: [name, email],
    });
  }, [address, writeContract]);

  // Create payment function (encrypted)
  const createPayment = useCallback(async (
    recipient: string,
    encryptedAmount: string,
    description: string,
    proof: string
  ) => {
    if (!address) throw new Error('No wallet connected');
    
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'createPayment',
      args: [recipient as `0x${string}`, encryptedAmount, description, proof],
      value: BigInt(0), // No direct ETH transfer
    });
  }, [address, writeContract]);

  // Complete payment function
  const completePayment = useCallback(async (
    paymentId: number,
    encryptedAmount: string,
    proof: string
  ) => {
    if (!address) throw new Error('No wallet connected');
    
    return writeContract({
      address: CONTRACT_ADDRESS as `0x${string}`,
      abi: CONTRACT_ABI,
      functionName: 'completePayment',
      args: [BigInt(paymentId), encryptedAmount, proof],
    });
  }, [address, writeContract]);

  return {
    registerUser,
    createPayment,
    completePayment,
    isPending,
    error,
    contractAddress: CONTRACT_ADDRESS,
  };
}

export function useUserProfile(userAddress?: string) {
  const { data: profile, isLoading, error } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: 'getUserProfile',
    args: userAddress ? [userAddress as `0x${string}`] : undefined,
  });

  return {
    profile,
    isLoading,
    error,
  };
}
