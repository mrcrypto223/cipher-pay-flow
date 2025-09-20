# Cipher Pay Flow

A secure, privacy-focused payment system built with FHE (Fully Homomorphic Encryption) technology. This application enables encrypted transactions while maintaining user privacy and security.

## Features

- **FHE-Encrypted Payments**: All payment amounts are encrypted using Fully Homomorphic Encryption
- **Wallet Integration**: Seamless connection with popular Web3 wallets via RainbowKit
- **User Profiles**: Encrypted user data with reputation systems
- **Transaction History**: Secure, encrypted transaction records
- **Multi-Chain Support**: Built for Ethereum Sepolia testnet
- **Privacy-First Design**: All sensitive data is encrypted on-chain

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Web3 Integration**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: FHE (Fully Homomorphic Encryption) via Zama
- **Smart Contracts**: Solidity with FHE support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mrcrypto223/cipher-pay-flow.git
cd cipher-pay-flow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Configuration

The application is configured for Ethereum Sepolia testnet with the following settings:

- **Chain ID**: 11155111 (Sepolia)
- **RPC URL**: https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
- **Wallet Connect Project ID**: 2ec9743d0d0cd7fb94dee1a7e6d33475

## Smart Contract

The `CipherPayFlow.sol` contract implements:

- Encrypted payment creation and completion
- User profile management with encrypted data
- Reputation system
- Transaction history tracking
- FHE-based privacy protection

## Security Features

- **FHE Encryption**: All sensitive data is encrypted using Fully Homomorphic Encryption
- **Zero-Knowledge**: Payment amounts remain private even from the blockchain
- **Reputation System**: Encrypted user reputation tracking
- **Verification**: Multi-level user verification system

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Configure environment variables:
   - `NEXT_PUBLIC_CHAIN_ID=11155111`
   - `NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990`
   - `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475`
3. Deploy to Vercel

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support and questions, please open an issue on GitHub or contact the development team.
