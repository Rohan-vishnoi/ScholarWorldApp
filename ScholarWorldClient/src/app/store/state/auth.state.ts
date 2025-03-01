export interface AuthState {
    sessionData: {
        email: string;
        password: string;
    };
}

export const initialRegistrationState: AuthState = {
  sessionData: {
    email: '',
    password: ''
  }
}
