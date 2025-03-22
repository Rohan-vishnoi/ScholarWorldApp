export interface AuthState {
    sessionData: {
      fullName: string;
      email: string;
      password: string;
      enabled: boolean;
      username: string;
      authorities: any[];
      accountNonExpired: boolean;
      accountNonLocked: boolean;
      credentialsNonExpired: boolean;
    };

    authData: {
      token:string,
      expiresIn:string
    }

    loginData:{
      email: string;
      password: string;
    }
}

export const initialRegistrationState: AuthState = {
  sessionData: {
    fullName: '',
    email: '',
    password: '',
    enabled: false,
    username: '',
    authorities: [],
    accountNonExpired: false,
    accountNonLocked: false,
    credentialsNonExpired: false
  },
  authData: {
    token: '',
    expiresIn: ''
  },
  loginData: {
    email: '',
    password: ''
  }
}
