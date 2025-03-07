import { lessonsApi } from '@api/lessons-api';
import { IGetChaptersListResponse } from '@api/types/chapter-types';
import { IGetLessonsListResponse } from '@api/types/lesson-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface ILessonState {
    selectedLessonId: number | null,
    lessons: IGetLessonsListResponse | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: ILessonState = {
    selectedLessonId: null,
    lessons: {},
    loading: false,
    error: false,
    success: false,
    message: '',
};

const lessonsSlice = createSlice({
    name: 'lessons',
    initialState,
    reducers: {
        setSelectedLessonId: (state, action: PayloadAction<number>) => {
            state.selectedLessonId = action.payload;
        },
    },
    extraReducers: (builder) => {

        // GET LESSONS LIST QUERY
        builder
            .addMatcher(
                lessonsApi.endpoints.getLessons.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                lessonsApi.endpoints.getLessons.matchFulfilled,
                (state, action: PayloadAction<IGetLessonsListResponse>) => {
                    state.loading = false;
                    state.lessons = action.payload;
                }
            )
            .addMatcher(
                lessonsApi.endpoints.getLessons.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch lessons list';
                }
            );
    },
});

export const { setSelectedLessonId } = lessonsSlice.actions;

export default lessonsSlice.reducer;
