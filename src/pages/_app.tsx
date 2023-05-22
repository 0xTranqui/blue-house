// @ts-nocheck
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import * as React from 'react';
import { client } from '../wagmi';
import { Footer } from '../components';
import { Header } from '../components';
import { CurationDataProvider } from "../providers/CurationDataProvider"
import { ChannelAdminProvider } from "../providers/ChannelAdminProvider"

// wagmi + conntext kit
import { WagmiConfig } from 'wagmi';
import { ConnectKitProvider } from 'connectkit';

// determines what curation contract will be used for blog context
const channel = process.env.NEXT_PUBLIC_AP_721_CURATION_CONTRACT;

const channelAdmin_1 = "0x1F257B12b33b5E88257aCb6772A62394Cc7A061C"
const channelAdmin_2 = "0x1056bd9C1993A7A85797006cC13aA7B494888F82"
// const channelAdmin_3 = "0x53D2C7765Bf77E8E2c41A9461FdC1c0F37d09894"
const channelAdmin_3 = "0x153D2A196dc8f1F6b9Aa87241864B3e4d4FEc170"

const favicon = "../public/favicon.png"

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <CurationDataProvider curationContract={channel} >
          <ChannelAdminProvider 
            channelAdmin1={channelAdmin_1} 
            channelAdmin2={channelAdmin_2}
            channelAdmin3={channelAdmin_3}
          >
              <NextHead>
                <title>seeknoevil</title>
                <link rel="icon" type="image/png" sizes="24x24" href={favicon} />
              </NextHead>
              <Header />
              <Footer />
              {mounted && <Component {...pageProps} />}
          </ChannelAdminProvider>
        </CurationDataProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default App;
