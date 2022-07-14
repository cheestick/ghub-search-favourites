import { configureStore} from "@reduxjs/toolkit";
import { githubApi } from "./github/gitgub.api";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), githubApi.middleware]
})