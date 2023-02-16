import $api from './index';

export type IMetaResponse = {
  currentPage: number;
  perPage: number;
  totalPages: number;
};

export type IWallet = {
  id: number;
  username: string;
  email: string;
  address: string;
};

export interface WalletResponse {
  meta: IMetaResponse;
  items: IWallet[];
}

export const fetcherWallets = (params: (string | { page: number; perPage: number })[]) => {
  const [url, config] = params;
  return $api.get<WalletResponse[]>(url as string, { params: { ...(config as object) } });
};
