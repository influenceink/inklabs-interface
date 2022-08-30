import { sha512 } from 'js-sha512';

export const passwordToHash = (password: string) => {
  const bytes = sha512.array(password);
  const hash = btoa(String.fromCharCode.apply(null, bytes));
  return hash;
};
