import { createContext, ReactNode, useState, useCallback, useEffect } from 'react';
import axios from 'axios';

interface IAuthContext {
  authorized: boolean | null;
  avatar: string;
  email: string;
  fullName: string;
  inkId: string;
  sessionToken: string;
  igSessionToken: string;
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
  avatarUploadRequest: Function;
  web3UserUploadRequestUrl: string;
  purchase: Function;
  resetPassword: Function;
  balances: any;
  directUsers: Array<any>;
  userInfo: Function;
  authVacancy: Function;
  userVacancy: Function;
  referrerLookup: Function;
  avatarUploading: boolean;
  setAvatarUploading: Function;
}

export const AuthContext = createContext<IAuthContext>({
  sessionToken: '',
  igSessionToken: '',
  authorized: null,
  avatar: '',
  setAvatar: () => {},
  avatarUploadRequest: () => {},
  web3UserUploadRequestUrl: '',
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
  directUsers: [],
  userInfo: () => {},
  authVacancy: () => {},
  userVacancy: () => {},
  referrerLookup: () => {},
  avatarUploading: false,
  setAvatarUploading: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [sessionToken, setSessionToken] = useState<string>('');
  const [igSessionToken, setIgSessionToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [authorized, setAuthorized] = useState<boolean | null>(null);
  const [avatar, setAvatar] = useState<string>('');
  const [web3UserUploadRequestUrl, setWeb3UserUploadRequestUrl] = useState<string>('');
  const [inkId, setInkId] = useState<string>('');
  const [zipCodes, setZipCodes] = useState<Array<any>>([]);
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [viralCount, setViralCount] = useState<number>(0);
  const [directCount, setDirectCount] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [balances, setBalances] = useState<any>(null);
  const [directUsers, setDirectUsers] = useState<Array<any>>([]);
  const [avatarUploading, setAvatarUploading] = useState<boolean>(false);
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || 'https://ip-api.ip.d.inksrv.com';
  const igUrl = process.env.REACT_APP_IG_URL || 'https://ig-api.ip.d.inksrv.com';
  useEffect(() => {
    const initialize = async () => {
      try {
        const store = localStorage.getItem('ink');
        if (store !== null) {
          const sessionToken = JSON.parse(store).session_token;
          const refreshToken = JSON.parse(store).refresh_token;
          const igSessionToken = JSON.parse(store).ig_session_token;
          if (sessionToken !== undefined && sessionToken !== '') {
            await axios
              .post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } })
              .then((res) => {
                if (res.data.status) return;
                axios.defaults.headers.common['Authorization'] = 'SessionToken=' + sessionToken;
                setSessionToken(sessionToken);
                setRefreshToken(refreshToken);
                setIgSessionToken(igSessionToken);
                setAvatar(res.data.avatar);
                setInkId(res.data.ink_id);
                setAuthorized(true);
                setZipCodes(res.data.zip_codes);
                setFullName(res.data.full_name);
                setViralCount(res.data.viral_count);
                setDirectCount(res.data.direct_count);
                setTotalCount(res.data.total_count);
                setBalances(res.data.balances);
                setDirectUsers(res.data.direct_users);
              })
          }
          else {
            setAuthorized(false);
          }
        }
        else {
          setAuthorized(false);
        }
      } catch (err) {
        console.log(err);
        setAuthorized(false);
      }
    };
    initialize();
  }, []);
  const userInfo = useCallback(() => {
    axios.post('/user/info', {}, { headers: { Authorization: 'SessionToken=' + sessionToken } }).then((res) => {
      if (res.data.status) return;
      axios.defaults.headers.common['Authorization'] = 'SessionToken=' + sessionToken;
      setAvatar(res.data.avatar);
      setInkId(res.data.ink_id);
      setAuthorized(true);
      setZipCodes(res.data.zip_codes);
      setFullName(res.data.full_name);
      setViralCount(res.data.viral_count);
      setDirectCount(res.data.direct_count);
      setTotalCount(res.data.total_count);
      setBalances(res.data.balances);
      setDirectUsers(res.data.direct_users);
    });
  }, [sessionToken]);
  const updateAvatarUrl = useCallback(async(avatarUrl: string) => {
    await axios.post('/user/update', {"avatar_url": avatarUrl}).then((res) => {
      if(res.data.status) return;
      setAvatar(res.data.avatar);
      setAvatarUploading(false);
    })
  }, [])

  const avatarUploadPut = useCallback(async(file: File, putUrl: string, avatarUrl: string) => {
    const formData = new FormData();
    formData.append('file', file);
    var instance = axios.create();
    delete instance.defaults.headers.common['Authorization'];
    await instance.put(putUrl, file, {headers: {'Content-Type': 'image/png'}}).then((res) => {
      if(res.data.status) return;
      updateAvatarUrl(avatarUrl + "?" + file.lastModified);
      return true;
    });
  }, [updateAvatarUrl])
  const avatarUploadRequest = useCallback(async(file: File) =>{
    await axios.post(igUrl + '/user/avatar-upload-request', {}, {headers: {Authorization: 'SessionToken=' + igSessionToken}}).then(async(res) => {
      if(res.data.status) return;
      setWeb3UserUploadRequestUrl(res.data.uploadUrl);
      await avatarUploadPut(file, res.data.uploadUrl, res.data.avatarProcessingUrl);
    });
  }, [igSessionToken, avatarUploadPut, igUrl]);
  const setLocalStore = useCallback(({ session_token, refresh_token, ig_session_token }) => {
    const store = JSON.stringify({ session_token, refresh_token, ig_session_token });
    localStorage.setItem('ink', store);
  }, []);
  const doRefresh = useCallback(async () => {
    if (!inkId || !refreshToken) return "";
    const data = await axios.post('/user/session-refresh', { ig_app_id: inkId, refresh_token: refreshToken }).then((res) => res.data);
    if (data.status) return "";
    setLocalStore({session_token: data.session_token, refresh_token: refreshToken});
    setSessionToken(data.session_token);
    return data.session_token;
  }, [inkId, refreshToken, setLocalStore])
  useEffect(() => {
    const _interval = setInterval(() => {
      doRefresh()
      // .then((newToken) => {
      //   if (newToken)
      //     console.log("Session token is refreshed into", newToken);
      //   else
      //     console.log("Token refresh failed");
      // })
      // .catch(() => {
      //   console.log("Error while refreshing token");
      // })
    }, 300 * 1000);
    return () => { clearInterval(_interval); }
  }, [doRefresh])
  const signIn = useCallback(
    async (email, password) => {
      try {
        const data = await axios.post('/auth/login', { email, password }).then((res) => res.data);
        if (data.status === 0) {
          setSessionToken(data.session_token);
          setRefreshToken(data.refresh_token);
          setIgSessionToken(data.ig_session_token);
          setEmail(email);
          setLocalStore({ session_token: data.session_token, refresh_token: data.refresh_token, ig_session_token: data.ig_session_token });
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
            setDirectUsers(res.data.direct_users);
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
          setRefreshToken(data.refresh_token);
          setIgSessionToken(data.ig_session_token);
          setFullName(data.display_name);
          setEmail(data.email);
          setLocalStore({ session_token: data.session_token, refresh_token: data.refresh_token });
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
            setDirectUsers(res.data.direct_users);
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
    setRefreshToken('');
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
    setDirectUsers([]);
  }, [setLocalStore]);
  return (
    <AuthContext.Provider
      value={{
        authorized,
        sessionToken,
        igSessionToken,
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
        avatarUploadRequest,
        web3UserUploadRequestUrl,
        purchase,
        resetPassword,
        balances,
        directUsers,
        userInfo,
        authVacancy,
        userVacancy,
        referrerLookup,
        avatarUploading,
        setAvatarUploading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
