import { createContext, ReactElement, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import * as localStorage from '../../utils/localStorage';

interface IAuthContext {
  createInkId: Function | null;
  refreshSession: Function | null;
  getUserInfo: Function | null;
  resetPassword: Function | null;
  sessionToken: string | null;
  refreshToken: string | null;
  displayName: string | null;
  email: string | null;
  inkId: string | null;
  login: Function | null;
  purchase: Function | null;
}

export const AuthContext = createContext<IAuthContext>({
  createInkId: null,
  refreshSession: null,
  getUserInfo: null,
  resetPassword: null,
  sessionToken: null,
  refreshToken: null,
  displayName: null,
  email: null,
  inkId: null,
  login: null,
  purchase: null,
});

type AuthProviderPropType = {
  children: ReactElement | ReactElement[];
};

const AuthProvider = ({ children }: AuthProviderPropType) => {
  axios.defaults.baseURL = 'https://ip-api.ip.d.inksrv.com';
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [inkId, setInkId] = useState<string | null>(null);

  useEffect(() => {
    const store = localStorage.loadStates();
    if (store.refresh_token !== undefined) {
      setRefreshToken(store.refresh_token);
    }
  }, []);

  const refreshSession = useCallback(async () => {
    const res = await axios
      .post('/user/session-refresh', { ig_app_id: 'inkpay', refresh_token: refreshToken })
      .then((res) => res.data)
      .catch((err) => err);
    if (res.status === 0) {
      axios.defaults.headers.post['Authorization'] = `SessionToken=${res.session_token}`;
      setSessionToken(res.session_token);
    } else {
      console.log('error: ' + res.error);
      localStorage.setStates({});
    }
    return res.status;
  }, [refreshToken]);

  const createInkId = useCallback(async (props): Promise<number> => {
    const res = await axios
      .post('/auth/create', props)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    if (res.status === 0) {
      axios.defaults.headers.post['Authorization'] = `SessionToken=${res.session_token}`;

      setSessionToken(res.session_token);
      setRefreshToken(res.refresh_token);
      setDisplayName(res.display_name);
      setEmail(res.email);
      setInkId(res.ink_id);
      localStorage.setStates({ refresh_token: res.refresh_token });
    } else if (res.status === 5) {
      console.log('error: ' + res.error);
    }
    return res.status;
  }, []);

  const getUserInfo = useCallback(async () => {
    const res = await axios
      .post('/user/info')
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (res.status === 0) {
      setDisplayName(res.full_name);
      setEmail(res.email);
      setInkId(res.ink_id);
    }
    return res;
  }, []);

  const resetPassword = useCallback(async () => {
    const res = await axios
      .post('/auth/password-reset', { email })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (res.status !== 0) {
      console.log(res.error);
    }
    return res.status;
  }, [email]);

  const login = useCallback(async (props) => {
    const res = await axios
      .post('/auth/login', props)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (res.status === 0) {
      setSessionToken(res.session_token);
      setRefreshToken(res.refresh_token);
      setEmail(props.email);
      setInkId(res.ink_id);
      localStorage.setStates({ refresh_token: res.refresh_token });
    } else {
      console.log('error: ' + res.error);
    }
    return res.status;
  }, []);

  const purchase = useCallback(async (props) => {
    const res = await axios
      .post('/web3/purchase', props)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    if (res.status !== 0) {
      console.log('error: ' + res.error);
    }
    return res.status;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        createInkId,
        refreshSession,
        resetPassword,
        sessionToken,
        refreshToken,
        displayName,
        email,
        inkId,
        getUserInfo,
        login,
        purchase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
