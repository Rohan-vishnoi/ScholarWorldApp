export interface SessionState {
    sessionData: {
        email: string;
        password: string;
    };
}

export const initialRegistrationState: SessionState = {
  sessionData: {
    email: '',
    password: ''
  }
}
