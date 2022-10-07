import { useState, useMemo } from 'react';
import { HelpCircle } from 'react-feather';
import { ImageProps } from 'rebass';
import polyTokens from '../../assets/json/quickswap-default.tokenlist.json';
import arbiTokens from '../../assets/json/token-list-42161.json';
import optiTokens from '../../assets/json/optimism.tokenlist.json';
import celoTokens from '../../assets/json/celo.tokenlist.json';
import Web3 from 'web3';

export const getTokenLogoURI = (address: string) => {
  const checkSumed = Web3.utils.toChecksumAddress(address);
  const opti = optiTokens.tokens.find((token) => token.address === checkSumed)?.logoURI;
  const celo = celoTokens.tokens.find((token) => token.address === checkSumed)?.logoURI;
  const arbi = arbiTokens.tokens.find((token) => token.address === checkSumed)?.logoURI;
  const poly = polyTokens.tokens.find((token) => token.address === checkSumed)?.logoURI;
  return [
    `https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/${checkSumed}/logo.png`,
    opti,
    celo,
    arbi,
    poly,
  ];
};

const BAD_SRCS: { [tokenAddress: string]: true } = {};

export interface LogoProps extends Pick<ImageProps, 'style' | 'alt' | 'className'> {
  srcs: (string | undefined)[];
}

export const Logo = ({ srcs, alt, ...rest }: LogoProps) => {
  const [, refresh] = useState<number>(0);

  const src: string | undefined = srcs.find((src) => src !== undefined && !BAD_SRCS[src]);

  if (src) {
    return (
      <img
        {...rest}
        alt={alt}
        src={src}
        onError={() => {
          if (src) BAD_SRCS[src] = true;
          refresh((i) => i + 1);
        }}
      />
    );
  }

  return <HelpCircle {...rest} />;
};

export const TokenLogo = ({ address, symbol }: { address: string; symbol: string }) => {
  const srcs = useMemo(() => getTokenLogoURI(address), [address]);
  return <Logo srcs={srcs} alt={symbol} style={{ borderRadius: 24, width: '22px', height: '22px' }} />;
};
