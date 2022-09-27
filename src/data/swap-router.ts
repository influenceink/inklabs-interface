import { AlphaRouter } from '@uniswap/smart-order-router';
import { Token, CurrencyAmount, Percent, Currency } from '@uniswap/sdk-core';
import BigNumber from 'bignumber.js';
import { JsonRpcProvider } from '@ethersproject/providers';
import JSBI from 'jsbi';
import { CHAIN_IDS } from '../types';
import { RPC_URLS } from '../utils/constants';
import { tokenToWei } from '../utils';

const V3_SWAP_ROUTER_ADDRESS = '0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45';

interface TOKEN_FIELD {
  id: string;
  symbol: string;
  name: string;
  decimals: number;
}

export const SwapRouter = async (
  chainId: number,
  token0: TOKEN_FIELD,
  token1: TOKEN_FIELD,
  amount: string | number,
  tradeType: number
) => {
  const web3Provider = new JsonRpcProvider(RPC_URLS[chainId as CHAIN_IDS]);
  const router = new AlphaRouter({ chainId, provider: web3Provider });

  // console.log(token0, token1);
  const TOKEN0 = new Token(chainId, token0.id, token0.decimals, token0.symbol, token0.name);

  const TOKEN1 = new Token(chainId, token1.id, token1.decimals, token1.symbol, token1.name);

  const amountIn = tradeType
    ? CurrencyAmount.fromRawAmount(TOKEN1, JSBI.BigInt(tokenToWei(amount, token1.decimals)))
    : CurrencyAmount.fromRawAmount(TOKEN0, JSBI.BigInt(tokenToWei(amount, token0.decimals)));

  const route = await router.route(amountIn, tradeType ? TOKEN0 : TOKEN1, tradeType, {
    recipient: '0xb367f977d2E88ACFb9206d86c62073dd6ddb7855' || '',
    slippageTolerance: new Percent(5, 100),
    deadline: Math.floor(Date.now() / 1000 + 1800),
  });

  // console.log(`Quote Exact In: ${route?.quote.toFixed(2)}`);
  // console.log(`Gas Adjusted Quote In: ${route?.quoteGasAdjusted.toFixed(2)}`);
  // console.log(`Gas Used USD: ${route?.estimatedGasUsedUSD.toFixed(6)}`);
  // console.log(route);
  return route;

  // const transaction = {
  //   data: route!.methodParameters!.calldata,
  //   to: V3_SWAP_ROUTER_ADDRESS,
  //   value: BigNumber.from(route!.methodParameters!.value),
  //   from: '0xb367f977d2E88ACFb9206d86c62073dd6ddb7855',
  //   gasPrice: BigNumber.from(route!.gasPriceWei),
  // };

  // console.log(await web3Provider.sendTransaction(transaction.toString()));
};
