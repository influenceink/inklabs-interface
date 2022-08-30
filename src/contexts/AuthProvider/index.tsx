import { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

interface IAuthContext {
  authorized: boolean;
  avatar: string;
  email: string;
  fullName: string;
  inkId: string;
  sessionToken: string;
  zipCodes: Array<any>;
  signIn: Function;
  viralCount: number;
  directCount: number;
  totalCount: number;
}

export const AuthContext = createContext<IAuthContext>({
  sessionToken: '',
  authorized: false,
  avatar: '',
  email: '',
  fullName: '',
  inkId: '',
  zipCodes: [],
  signIn: () => {},
  viralCount: 0,
  directCount: 0,
  totalCount: 0,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<string>('');
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [avatar, setAvatar] = useState<string>('');
  const [inkId, setInkId] = useState<string>('');
  const [zipCodes, setZipCodes] = useState<Array<any>>([]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [viralCount, setViralCount] = useState<number>(0);
  const [directCount, setDirectCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  axios.defaults.baseURL = 'https://ip-api.ip.d.inksrv.com';
  useEffect(() => {
    const initialize = async () => {
      try {
        const store = localStorage.getItem('ink');
        if (store !== null) {
          const sessionToken = JSON.parse(store).session_token;
          if (sessionToken !== undefined && sessionToken !== '') {
            await axios
              .post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } })
              .then((res) => {
                axios.defaults.headers.common['Authorization'] = 'SessionToken=' + sessionToken;
                setAvatar(res.data.avatar);
                setSessionToken(sessionToken);
                setInkId(res.data.ink_id);
                setAuthorized(true);
                setZipCodes(res.data.zip_codes);
                setFullName(res.data.full_name);
                setViralCount(res.data.viral_count);
                setDirectCount(res.data.direct_count);
                setTotalCount(res.data.total_count);
              });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    initialize();
  }, []);
  const setLocalStore = useCallback(({ session_token }) => {
    const store = JSON.stringify({ session_token });
    localStorage.setItem('ink', store);
  }, []);
  const signIn = useCallback(
    async (email, password) => {
      try {
        const data = await axios.post('/auth/login', { email, password }).then((res) => res.data);
        if (data.status === 0) {
          setAuthorized(true);
          setSessionToken(data.session_token);
          setInkId(data.ink_id);
          setEmail(email);
          setLocalStore({ session_token: data.session_token });
          axios.defaults.headers.common['Authorization'] = 'SessionToken=' + data.session_token;
          await axios.post('/user/info').then((res) => {
            setAvatar(res.data.avatar);
            setZipCodes(res.data.zip_codes);
            setFullName(res.data.full_name);
            setViralCount(res.data.viral_count);
            setDirectCount(res.data.direct_count);
            setTotalCount(res.data.total_count);
          });
          return true;
        }
        return false;
      } catch (err) {
        console.log(err);
      }
    },
    [setLocalStore]
  );
  return (
    <AuthContext.Provider
      value={{
        authorized,
        sessionToken,
        avatar,
        inkId,
        email,
        fullName,
        zipCodes,
        viralCount,
        directCount,
        totalCount,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
