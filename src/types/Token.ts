export type Token = {
  /**
   * @description Chain ID
   * @type {number}
   * @memberof Token
   * @required
   * @example
   * 1
   */
  chainId: number;

  /**
   * @description Token Name
   * @type {string}
   * @memberof Token
   * @required
   * @example
   * USD Coin
   */
  name: string;

  /**
   * @description Token Symbol
   * @type {string}
   * @memberof Token
   * @required
   * @example
   * USDC
   */
  symbol: string;

  /**
   * @description Token Address
   * @type {string}
   * @memberof Token
   * @required
   * @example
   * 0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48
   */
  address: string;

  /**
   * @description Token URI
   * @type {string}
   * @memberof Token
   * @required
   * @example
   * https://s2.coinmarketcap.com/static/img/coins/200x200/11292.png
   */
  logoURI: string;
};
