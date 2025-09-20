import React from 'react';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { walletConfig, supportedChains } from '../config/wallet';
import '@rainbow-me/rainbowkit/styles.css';

// Create a wagmi config
const config = getDefaultConfig({
  appName: 'Cipher Pay Flow',
  projectId: walletConfig.walletConnectProjectId,
  chains: supportedChains as any,
  ssr: false, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

interface WalletProviderProps {
  children: React.ReactNode;
}

export function WalletProvider({ children }: WalletProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
