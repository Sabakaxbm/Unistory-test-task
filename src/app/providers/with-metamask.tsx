import { Mainnet, DAppProvider, Config } from '@usedapp/core';
import React from 'react';

const config: Config = {
  readOnlyChainId: Mainnet.chainId
};

export const withMetamask = (component: () => React.ReactNode) => () =>
  <DAppProvider config={config}>{component()}</DAppProvider>;
