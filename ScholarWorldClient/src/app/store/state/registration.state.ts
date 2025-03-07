 export interface RegistrationState {
    registrationData: {
        fullName: string;
        email: string;
        password: string;
    };
}

export const initialState: RegistrationState = {
    registrationData: {
        fullName:'',
        email: '',
        password: '',
    }
}
