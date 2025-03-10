import { chaptersApi } from '@api/chapters-api';
import { IGetChaptersListResponse } from '@api/types/chapter-types';
import { ICoursesResponse } from '@api/types/course-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface IChapterState {
    selectedChapterId: number,
    chapters: ICoursesResponse | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: IChapterState = {
    selectedChapterId: 0,
    chapters: {},
    loading: false,
    error: false,
    success: false,
    message: '',
};

const chaptersSlice = createSlice({
    name: 'chapters',
    initialState,
    reducers: {
        setSelectedChapterId: (state, action: PayloadAction<number>) => {
            console.log('------', action.payload)
            state.selectedChapterId = action.payload;
        },
    },
    extraReducers: (builder) => {

        // GET CHAPTERS LIST QUERY
        builder
            .addMatcher(
                chaptersApi.endpoints.getChapters.matchPending,
                (state) => {
                    state.loading = true;
                    state.error = false;
                }
            )
            .addMatcher(
                chaptersApi.endpoints.getChapters.matchFulfilled,
                (state, action: PayloadAction<IGetChaptersListResponse>) => {
                    state.loading = false;
                    state.chapters = action.payload;
                }
            )
            .addMatcher(
                chaptersApi.endpoints.getChapters.matchRejected,
                (state, action) => {
                    state.loading = false;
                    state.error = action.error?.message || 'Failed to fetch chapters list';
                }
            );
    },
});

export const { setSelectedChapterId } = chaptersSlice.actions;

export default chaptersSlice.reducer;
