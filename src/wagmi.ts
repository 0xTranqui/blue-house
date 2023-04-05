// ConnectKit
import { getDefaultClient } from 'connectkit';
// wagmi
import { createClient, configureChains } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const alchemyId = process.env.NEXT_PUBLIC_ALCHEMY_KEY_GOERLI;

const { provider, chains } = configureChains(
  [goerli],
  [
    alchemyProvider({ apiKey: alchemyId as string }),
    publicProvider()
  ]
);

export const client = createClient(
  getDefaultClient({
    appName: 'skl-template',
    autoConnect: true,
    provider,
    chains
  })
);
