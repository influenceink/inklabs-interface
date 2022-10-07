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
  signUp: Function;
  signOut: Function;
  viralCount: number;
  directCount: number;
  totalCount: number;
  showModal: boolean;
  setShowModal: Function;
  setAvatar: Function;
  purchase: Function;
  resetPassword: Function;
  balances: any;
  userInfo: Function;
  authVacancy: Function;
  userVacancy: Function;
  referrerLookup: Function;
}

export const AuthContext = createContext<IAuthContext>({
  sessionToken: '',
  authorized: false,
  avatar: '',
  setAvatar: () => {},
  email: '',
  fullName: '',
  inkId: '',
  zipCodes: [],
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
  viralCount: 0,
  directCount: 0,
  totalCount: 0,
  showModal: false,
  setShowModal: () => {},
  purchase: () => {},
  resetPassword: () => {},
  balances: null,
  userInfo: () => {},
  authVacancy: () => {},
  userVacancy: () => {},
  referrerLookup: () => {},
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
  const [showModal, setShowModal] = useState<boolean>(false);
  const [balances, setBalances] = useState<any>(null);
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
                if (res.data.status) return;
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
                setBalances(res.data.balances);
              });
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    initialize();
  }, []);
  const userInfo = useCallback(async () => {
    await axios.post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } }).then((res) => {
      if (res.data.status) return;
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
      setBalances(res.data.balances);
    });
  }, [sessionToken]);
  const setLocalStore = useCallback(({ session_token }) => {
    const store = JSON.stringify({ session_token });
    localStorage.setItem('ink', store);
  }, []);
  const signIn = useCallback(
    async (email, password) => {
      try {
        const data = await axios.post('/auth/login', { email, password }).then((res) => res.data);
        if (data.status === 0) {
          setSessionToken(data.session_token);
          setEmail(email);
          setLocalStore({ session_token: data.session_token });
          axios.defaults.headers.common['Authorization'] = 'SessionToken=' + data.session_token;
          await axios.post('/user/info').then((res) => {
            setAvatar(res.data.avatar);
            setInkId(res.data.ink_id);
            setAuthorized(true);
            setZipCodes(res.data.zip_codes);
            setFullName(res.data.full_name);
            setViralCount(res.data.viral_count);
            setDirectCount(res.data.direct_count);
            setTotalCount(res.data.total_count);
            setBalances(res.data.balances);
          });
          setShowModal(false);
          return true;
        }
        return false;
      } catch (err) {
        console.log(err);
      }
    },
    [setLocalStore]
  );
  const signUp = useCallback(
    async (props: { email: string; password: string; display_name: string; ink_id: string; referrer_id: string }) => {
      try {
        const data = await axios.post('/auth/create', props).then((res) => res.data);
        if (data.status === 0) {
          setSessionToken(data.session_token);
          setFullName(data.display_name);
          setEmail(data.email);
          setLocalStore({ session_token: data.session_token });
          axios.defaults.headers.common['Authorization'] = 'SessionToken=' + data.session_token;
          await axios.post('/user/info').then((res) => {
            setAvatar(res.data.avatar);
            setInkId(res.data.ink_id);
            setAuthorized(true);
            setZipCodes(res.data.zip_codes);
            setFullName(res.data.full_name);
            setViralCount(res.data.viral_count);
            setDirectCount(res.data.direct_count);
            setTotalCount(res.data.total_count);
            setBalances(res.data.balances);
          });
          setShowModal(false);
          return { status: 0 };
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    [setLocalStore]
  );
  const purchase = useCallback(
    async (props: {
      transaction_id: string;
      usd_amount: number;
      reserved_ink: number;
      paid_coin: string;
      paid_network: string;
    }) => {
      try {
        return axios.post('/web3/purchase', props).then((res) => res.data);
      } catch (err) {
        console.log(err);
      }
    },
    []
  );
  const resetPassword = useCallback(async (props: { email: string }) => {
    try {
      return axios.post('/auth/password-reset', props).then((res) => res.data.status);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const authVacancy = useCallback(async (props: { email: string }) => {
    try {
      return axios.post('/auth/vacancy', props).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const userVacancy = useCallback(async (props: { ink_id: string }) => {
    try {
      return axios.post('/user/vacancy', { web: true, ...props }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const referrerLookup = useCallback(async (props: { referrer_id: string }) => {
    try {
      return axios.post('/referrer/lookup', { web: true, ...props }).then((res) => res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);
  const signOut = useCallback(async () => {
    setSessionToken('');
    setAuthorized(false);
    setAvatar('');
    setInkId('');
    setZipCodes([]);
    setFullName('');
    setEmail('');
    setViralCount(0);
    setDirectCount(0);
    setTotalCount(0);
    setShowModal(false);
    setBalances(null);
    setLocalStore({});
  }, [setLocalStore]);
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
        signUp,
        signOut,
        showModal,
        setShowModal,
        setAvatar,
        purchase,
        resetPassword,
        balances,
        userInfo,
        authVacancy,
        userVacancy,
        referrerLookup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
