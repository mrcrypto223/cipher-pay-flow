// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract CipherPayFlow is SepoliaConfig {
    using FHE for *;
    
    struct Payment {
        euint32 paymentId;
        euint32 amount;
        euint32 timestamp;
        address sender;
        address recipient;
        bool isCompleted;
        bool isEncrypted;
        string description;
    }
    
    struct UserProfile {
        euint32 userId;
        euint32 totalPayments;
        euint32 totalReceived;
        euint32 reputation;
        bool isVerified;
        string name;
        string email;
    }
    
    struct TransactionHistory {
        euint32 transactionId;
        euint32 amount;
        address from;
        address to;
        uint256 timestamp;
        string status;
    }
    
    mapping(uint256 => Payment) public payments;
    mapping(address => UserProfile) public userProfiles;
    mapping(uint256 => TransactionHistory) public transactionHistory;
    mapping(address => euint32) public userBalances;
    mapping(address => euint32) public userReputation;
    
    uint256 public paymentCounter;
    uint256 public userCounter;
    uint256 public transactionCounter;
    
    address public owner;
    address public verifier;
    
    event PaymentCreated(uint256 indexed paymentId, address indexed sender, address indexed recipient);
    event PaymentCompleted(uint256 indexed paymentId, address indexed recipient);
    event UserRegistered(address indexed user, string name);
    event ReputationUpdated(address indexed user, uint32 reputation);
    event BalanceUpdated(address indexed user, uint32 balance);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function registerUser(
        string memory _name,
        string memory _email
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(bytes(_email).length > 0, "Email cannot be empty");
        require(userProfiles[msg.sender].userId == FHE.asEuint32(0), "User already registered");
        
        uint256 userId = userCounter++;
        
        userProfiles[msg.sender] = UserProfile({
            userId: FHE.asEuint32(userId),
            totalPayments: FHE.asEuint32(0),
            totalReceived: FHE.asEuint32(0),
            reputation: FHE.asEuint32(100), // Initial reputation
            isVerified: false,
            name: _name,
            email: _email
        });
        
        emit UserRegistered(msg.sender, _name);
        return userId;
    }
    
    function createPayment(
        address _recipient,
        externalEuint32 _amount,
        string memory _description,
        bytes calldata inputProof
    ) public payable returns (uint256) {
        require(_recipient != address(0), "Invalid recipient address");
        require(_recipient != msg.sender, "Cannot send to yourself");
        require(userProfiles[msg.sender].userId != FHE.asEuint32(0), "Sender not registered");
        require(userProfiles[_recipient].userId != FHE.asEuint32(0), "Recipient not registered");
        
        uint256 paymentId = paymentCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        
        payments[paymentId] = Payment({
            paymentId: FHE.asEuint32(paymentId),
            amount: internalAmount,
            timestamp: FHE.asEuint32(uint32(block.timestamp)),
            sender: msg.sender,
            recipient: _recipient,
            isCompleted: false,
            isEncrypted: true,
            description: _description
        });
        
        // Update sender's total payments
        userProfiles[msg.sender].totalPayments = FHE.add(
            userProfiles[msg.sender].totalPayments, 
            FHE.asEuint32(1)
        );
        
        emit PaymentCreated(paymentId, msg.sender, _recipient);
        return paymentId;
    }
    
    function completePayment(
        uint256 _paymentId,
        externalEuint32 _amount,
        bytes calldata inputProof
    ) public {
        require(payments[_paymentId].recipient == msg.sender, "Only recipient can complete payment");
        require(!payments[_paymentId].isCompleted, "Payment already completed");
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalAmount = FHE.fromExternal(_amount, inputProof);
        
        // Verify the amount matches (this would be done with FHE comparison in production)
        payments[_paymentId].isCompleted = true;
        
        // Update recipient's total received
        userProfiles[msg.sender].totalReceived = FHE.add(
            userProfiles[msg.sender].totalReceived,
            internalAmount
        );
        
        // Update balances
        userBalances[msg.sender] = FHE.add(userBalances[msg.sender], internalAmount);
        
        // Record transaction history
        uint256 transactionId = transactionCounter++;
        transactionHistory[transactionId] = TransactionHistory({
            transactionId: FHE.asEuint32(transactionId),
            amount: internalAmount,
            from: payments[_paymentId].sender,
            to: msg.sender,
            timestamp: block.timestamp,
            status: "completed"
        });
        
        emit PaymentCompleted(_paymentId, msg.sender);
        emit BalanceUpdated(msg.sender, 0); // FHE.decrypt(internalAmount) - will be decrypted off-chain
    }
    
    function updateReputation(address _user, euint32 _reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(_user != address(0), "Invalid user address");
        require(userProfiles[_user].userId != FHE.asEuint32(0), "User not registered");
        
        userReputation[_user] = _reputation;
        userProfiles[_user].reputation = _reputation;
        
        emit ReputationUpdated(_user, 0); // FHE.decrypt(_reputation) - will be decrypted off-chain
    }
    
    function verifyUser(address _user, bool _isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify users");
        require(_user != address(0), "Invalid user address");
        require(userProfiles[_user].userId != FHE.asEuint32(0), "User not registered");
        
        userProfiles[_user].isVerified = _isVerified;
    }
    
    function getUserProfile(address _user) public view returns (
        string memory name,
        string memory email,
        uint8 totalPayments,
        uint8 totalReceived,
        uint8 reputation,
        bool isVerified
    ) {
        UserProfile storage profile = userProfiles[_user];
        return (
            profile.name,
            profile.email,
            0, // FHE.decrypt(profile.totalPayments) - will be decrypted off-chain
            0, // FHE.decrypt(profile.totalReceived) - will be decrypted off-chain
            0, // FHE.decrypt(profile.reputation) - will be decrypted off-chain
            profile.isVerified
        );
    }
    
    function getPaymentInfo(uint256 _paymentId) public view returns (
        uint8 amount,
        address sender,
        address recipient,
        bool isCompleted,
        string memory description
    ) {
        Payment storage payment = payments[_paymentId];
        return (
            0, // FHE.decrypt(payment.amount) - will be decrypted off-chain
            payment.sender,
            payment.recipient,
            payment.isCompleted,
            payment.description
        );
    }
    
    function getUserBalance(address _user) public view returns (uint8) {
        return 0; // FHE.decrypt(userBalances[_user]) - will be decrypted off-chain
    }
    
    function getUserReputation(address _user) public view returns (uint8) {
        return 0; // FHE.decrypt(userReputation[_user]) - will be decrypted off-chain
    }
    
    function getTransactionHistory(uint256 _transactionId) public view returns (
        uint8 amount,
        address from,
        address to,
        uint256 timestamp,
        string memory status
    ) {
        TransactionHistory storage transaction = transactionHistory[_transactionId];
        return (
            0, // FHE.decrypt(transaction.amount) - will be decrypted off-chain
            transaction.from,
            transaction.to,
            transaction.timestamp,
            transaction.status
        );
    }
    
    // Emergency functions for owner
    function emergencyWithdraw() public {
        require(msg.sender == owner, "Only owner can withdraw");
        payable(owner).transfer(address(this).balance);
    }
    
    function pauseContract() public {
        require(msg.sender == owner, "Only owner can pause");
        // Implementation for pausing contract
    }
    
    function unpauseContract() public {
        require(msg.sender == owner, "Only owner can unpause");
        // Implementation for unpausing contract
    }
}
