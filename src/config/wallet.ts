// Wallet configuration for Cipher Pay Flow
export const walletConfig = {
  chainId: 11155111, // Sepolia testnet
  rpcUrl: 'https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990',
  walletConnectProjectId: '2ec9743d0d0cd7fb94dee1a7e6d33475',
  infuraApiKey: 'b18fb7e6ca7045ac83c41157ab93f990',
  alternativeRpcUrl: 'https://1rpc.io/sepolia'
};

export const supportedChains = [
  {
    id: 11155111,
    name: 'Sepolia',
    network: 'sepolia',
    nativeCurrency: {
      decimals: 18,
      name: 'Ethereum',
      symbol: 'ETH',
    },
    rpcUrls: {
      default: {
        http: [walletConfig.rpcUrl],
      },
      public: {
        http: [walletConfig.rpcUrl, walletConfig.alternativeRpcUrl],
      },
    },
    blockExplorers: {
      default: { name: 'Etherscan', url: 'https://sepolia.etherscan.io' },
    },
    testnet: true,
  },
];
