import { coursesApi } from '@api/courses-api';
import { ICoursesResponse } from '@api/types/course-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


interface IChapterState {
    courses: ICoursesResponse | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IChapterState = {
    courses: {},
    loading: false,
    error: false,
    success: false,
    message: '',
};

const chaptersSlice = createSlice({
    name: 'chapters',
    initialState,
    reducers: {
        // setSelectedCategory: (state, action: PayloadAction<number>) => {
        //     state.selectedCategory = action.payload;
        // },
    },
    extraReducers: (builder) => {

        // GET COMPETITIONS QUERY
        builder
            .addMatcher(
                coursesApi.endpoints.getCourses.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                coursesApi.endpoints.getCourses.matchFulfilled,
                (state, action: PayloadAction<ICoursesResponse>) => {
                    state.loading = false;
                    state.courses = action.payload;
                }
            )
            .addMatcher(
                coursesApi.endpoints.getCourses.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch courses list';
                }
            );
    },
});

export const { } = chaptersSlice.actions;

export default chaptersSlice.reducer;
