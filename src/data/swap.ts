import { Pool } from '../types';

class Swap {
  tokens: string[];
  pools: Pool[];

  constructor(_tokens: string[] | undefined, _pools: Pool[]) {
    this.tokens = [..._tokens!];
    this.pools = [..._pools];
  }

  hasPool(token0: string, token1: string) {
    return (
      this.pools.findIndex(
        (pool) =>
          (pool.token0 === token0 && pool.token1 === token1) || (pool.token0 === token1 && pool.token1 === token0)
      ) !== -1
    );
  }

  path(token0: string, token1: string) {
    let queue = [];
    let path: string[] = [];
    let fee = [];
    const unexplored = [...this.tokens.filter((token) => token !== token0)];
    queue.push(token0);

    while (queue.length > 0) {
      let currentNode: string = queue[0];
      path.push(currentNode);

      if (currentNode === token1) {
        const fee: (string | number)[] = [];
        for (let i = 0; i < path.length - 1; i++) {
          let found = false;
          this.pools.forEach((pool) => {
            if (
              (pool.token0 === path[i] && pool.token1 === path[i + 1]) ||
              (pool.token1 === path[i] && pool.token0 === path[i + 1])
            ) {
              if (found) {
                if (Number(fee[fee.length - 1]) > Number(pool.fee)) {
                  fee.shift();
                  fee.push(pool.fee);
                }
              } else fee.push(pool.fee);
              found = true;
            }
          });
        }
        let fullPath = path[0];
        for (let i = 0; i < fee.length; i++) {
          fullPath += ('000000' + Number(fee[i]).toString(16)).slice(-6) + path[i + 1].slice(-40);
        }
        return { tokens: path, fee, path: fullPath };
      }

      unexplored.forEach((token) => {
        if (this.hasPool(token, currentNode)) queue.push(token);
      });
      queue.shift();
    }
    return { path: '' };
  }
}

export default Swap;
