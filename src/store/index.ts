import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/gitgub.api";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), githubApi.middleware]
})

setupListeners(store.dispatch)