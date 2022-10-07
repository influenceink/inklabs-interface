import { useContext } from 'react';
import { Web3Context } from '../contexts';
import { TOKENS_LIST } from '../utils/constants';

export const useTopTokenDatas = () => {
  const { chainId } = useContext(Web3Context);
  return { tokenDatas: TOKENS_LIST[chainId || 1] };
};
