export interface IRegisterRequest {
    email: string,
    password: string,
    source?: string,
    compaignId?: string,
    languageId?: number,
}

export interface RegisterResponse {
    data: string,
    key: string | number,
    status: string,
}

export interface ILoginRequest {
    email: string,
    password: string,
    rememberMe?: boolean,
}

export interface IForgetRequest {
    email: string,
}

export interface IChangeRequest {
    password: string,
    token: string,
}


export interface LoginResponse {
    data: {
        language: {
            id: number,
            name: string,
            abbreviation: string,
        },
        token: string,
    }
}


export interface IUser {
    data: {
        avatar: {
            id: number,
            filePath: string,
        },
        birthDate: string,
        campaignId: number | string,
        country: string,
        email: string,
        gender: string,
        id: number,
        languageId: number | string,
        name: string,
        role: string,
        source: string,
        status: string,
        surname: string,
    },
}

export interface IUserUpdateRequest {
    name?: string,
    surname?: string,
    gender?: string,
    birthDate?: string,
    avatarId?: number,
    countryId?: number,
}

export interface IActivateUserResponse {
    success?: string;
    error?: string;
    message?: string;
}


export interface IResetPasswordRequest {
    token: string,
    resetPassword: string,
    confirmResetPassword: string,
}

export interface IResetPasswordResponse {
    // token: string,
}
