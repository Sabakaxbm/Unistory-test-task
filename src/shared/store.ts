import create from 'zustand';

type IUser = {
  id: number;
  username: string;
  address: string;
  email: string;
};

interface StoreState {
  address: string;
  isAuth: boolean;
  isModal: boolean;
  setAddress: (newAddress: string) => void;
  userInfo: IUser;
  setUserInfo: (obj: IUser) => void;
  setIsAuth: (status: boolean) => void;
  setIsModal: (status: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  address: '',
  isAuth: false,
  isModal: false,
  userInfo: {
    id: 123124123,
    username: '',
    address: '',
    email: ''
  },
  setAddress: (newAddress) => set(() => ({ address: newAddress })),
  setIsModal: (status) => set(() => ({ isModal: status })),
  setIsAuth: (status) => set(() => ({ isAuth: status })),
  setUserInfo: (obj) => set((state) => ({ userInfo: { ...state.userInfo, ...obj } }))
}));

export default useStore;
