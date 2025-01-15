import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@slices/user-slice';
import categoryReducer from '@slices/category-slice';
import coursesReducer from '@slices/courses-slice';
import chaptersReducer from '@slices/chapters-slice';
import datasetsReducer from '@slices/dataset-slice';
import uploadReducer from '@slices/upload-slice';
import contactReducer from '@slices/contacts-slice';
import faqReducer from '@slices/faq-slice';
import { userApi } from '@api/user-api';
import { categoryApi } from '@api/category-api';
import { uploadApi } from '@api/upload-api';
import { datasetsApi } from '@api/datasets-api';
import { contactsApi } from '@api/contact-api';
import { coursesApi } from '@api/courses-api';
import { chaptersApi } from '@api/chapters-api';
import { faqApi } from '@api/faq-api';


export const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoryReducer,
        courses: coursesReducer,
        chapters: chaptersReducer,
        datasets: datasetsReducer,
        uploads: uploadReducer,
        contacts: contactReducer,
        faq: faqReducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [coursesApi.reducerPath]: coursesApi.reducer,
        [chaptersApi.reducerPath]: chaptersApi.reducer,
        [datasetsApi.reducerPath]: datasetsApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
        [contactsApi.reducerPath]: contactsApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            userApi.middleware,
            categoryApi.middleware,
            coursesApi.middleware,
            chaptersApi.middleware,
            datasetsApi.middleware,
            uploadApi.middleware,
            contactsApi.middleware,
            faqApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
