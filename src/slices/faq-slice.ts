import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@api/types/user-types';


interface IFaqState {
    isAuthenticated: boolean;
    user: IUser | null;
    loading: boolean;
    error: string | null;
    description: string | null;
}

const initialState: IFaqState = {
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
    description: null,
};

const faqSlice = createSlice({
    name: 'faq',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
});

export const { } = faqSlice.actions;

export default faqSlice.reducer;
