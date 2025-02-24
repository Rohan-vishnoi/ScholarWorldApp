 export interface RegistrationState {
    registrationData: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
        mobileNumber: string;
        gender: ''
    };
}

export const initialState: RegistrationState = {
    registrationData: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        mobileNumber: '',
        gender: ''
    }
}