import { coursesApi } from '@api/courses-api';
import { ICoursesResponse } from '@api/types/course-types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


interface ICourseState {
    courses: ICoursesResponse | {},
    loading: boolean,
    error?: string | boolean,
    success?: string | boolean,
    message?: string,
}

const initialState: ICourseState = {
    courses: {},
    loading: false,
    error: false,
    success: false,
    message: '',
};

const coursesSlice = createSlice({
    name: 'courses',
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

        // // GET ATTENDED COMPETITIONS QUERY
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.getAttendedCompetitions.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getAttendedCompetitions.matchFulfilled,
        //         (state, action: PayloadAction<IAttendedCompetitionsResponse>) => {
        //             state.loading = false;
        //             state.attended = action.payload;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getAttendedCompetitions.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to fetch competitions';
        //         }
        //     );

        // // GET SCOREBOARD QUERY
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.getScoreBoard.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getScoreBoard.matchFulfilled,
        //         (state, action: PayloadAction<IScoreboardResponse>) => {
        //             state.loading = false;
        //             state.scoreboard = action.payload;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getScoreBoard.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to fetch competitions';
        //         }
        //     );

        // // GET COMPETITION INFO QUERY
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.getCompetitionInfo.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getCompetitionInfo.matchFulfilled,
        //         (state, action: PayloadAction<ICompetition>) => {
        //             state.loading = false;
        //             state.competitionInfo = action.payload;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.getCompetitionInfo.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to fetch competition info';
        //         }
        //     );

        // // JOIN COMPETITION MUTATION
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.joinCompetition.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.joinCompetition.matchFulfilled,
        //         (state, action: PayloadAction<IMessageResponse>) => {
        //             state.loading = false;
        //             state.message = action.payload?.message;
        //             toast.success(action.payload?.message || 'Joined successfully', { position: "bottom-left" });
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.joinCompetition.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to join competition';
        //         }
        //     );

        // // POST COMPETITION COMMENT MUTATION
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.createCompetitionComment.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.createCompetitionComment.matchFulfilled,
        //         (state, action: PayloadAction<ICompetitionCreateCommentResponse>) => {
        //             state.loading = false;
        //             // state.datasets = action.payload;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.createCompetitionComment.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to post the comment';
        //         }
        //     );

        // // POST DATASET COMMENT MUTATION
        // builder
        //     .addMatcher(
        //         competitionApi.endpoints.updateCompetitionComment.matchPending,
        //         (state) => {
        //             state.loading = true;
        //             state.error = false;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.updateCompetitionComment.matchFulfilled,
        //         (state, action: PayloadAction<IMessageResponse>) => {
        //             state.loading = false;
        //             // state.datasets = action.payload;
        //         }
        //     )
        //     .addMatcher(
        //         competitionApi.endpoints.updateCompetitionComment.matchRejected,
        //         (state, action) => {
        //             state.loading = false;
        //             state.error = action.error?.message || 'Failed to update the comment';
        //         }
        //     );
    },
});

export const { } = coursesSlice.actions;

export default coursesSlice.reducer;
