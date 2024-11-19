import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@slices/user-slice';
import categoryReducer from '@slices/category-slice';
import competitionReducer from '@slices/competition-slice';
import datasetsReducer from '@slices/dataset-slice';
import uploadReducer from '@slices/upload-slice';
import contactReducer from '@slices/contacts-slice';
import { userApi } from '@api/user-api';
import { categoryApi } from '@api/category-api';
import { competitionApi } from '@api/competition-api';
import { uploadApi } from '@api/upload-api';
import { datasetsApi } from '@api/datasets-api';
import { contactsApi } from '@api/contact-api';


export const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoryReducer,
        competitions: competitionReducer,
        datasets: datasetsReducer,
        uploads: uploadReducer,
        contacts: contactReducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [competitionApi.reducerPath]: competitionApi.reducer,
        [datasetsApi.reducerPath]: datasetsApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            categoryApi.middleware,
            competitionApi.middleware,
            datasetsApi.middleware,
            uploadApi.middleware,
            contactsApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
