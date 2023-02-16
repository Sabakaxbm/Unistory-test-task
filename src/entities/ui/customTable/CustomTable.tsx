import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { IWallet } from '../../../shared/api/WalletService';
import useStore from '../../../shared/store';
import CrossIcon from '../icons/CrossIcon';

interface CustomTableProps {
  wallets: IWallet[];
  deleteUser: (id: number) => void;
  setPage: (num: number) => void;
  maxPage: boolean;
  isLoading: boolean;
}

const arr = ['Name', 'Email', 'Wallet'];

const CustomTable: React.FC<CustomTableProps> = ({
  wallets,
  deleteUser,
  setPage,
  isLoading,
  maxPage
}) => {
  const sliceAddress = (account: string) => {
    return account?.slice(0, 19) + '...';
  };
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useStore();

  const lastElement = useRef(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleOpenUser = (id: number) => {
    if (id === userInfo.id) return;
    navigate(`/member/${id}`);
  };

  useEffect(() => {
    if (load) return;
    if (observer.current) observer.current?.disconnect();
    setLoad(true);
    const callback = function (entries: any) {
      if (entries[0].isIntersecting && maxPage) {
        setPage(1);
        setTimeout(() => {
          setLoad(false);
        }, 1000);
      }
    };
    if (lastElement.current) {
      observer.current = new IntersectionObserver(callback);
      observer.current.observe(lastElement.current);
    }
  }, [load]);

  return (
    <>
      <S.Table>
        <S.TableHeader>
          {arr.map((item) => (
            <S.TableItem key={item}>{item}</S.TableItem>
          ))}
        </S.TableHeader>
        <S.TableBody>
          {wallets.map((item) => (
            <S.TableBodyRow key={item.id} onClick={() => handleOpenUser(item.id)}>
              <S.TableItem>{item.username}</S.TableItem>
              <S.TableItem>{item.email}</S.TableItem>
              <S.TableItem>
                {sliceAddress(item.address)}
                <S.DeleteButton
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteUser(item.id);
                  }}>
                  <CrossIcon />
                </S.DeleteButton>
              </S.TableItem>
            </S.TableBodyRow>
          ))}
          {!isLoading && <div ref={lastElement} />}
        </S.TableBody>
      </S.Table>
    </>
  );
};

export default CustomTable;
