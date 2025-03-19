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
  }
}
