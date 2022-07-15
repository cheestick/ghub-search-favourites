import { configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/gitgub.api";
import { githubReducer } from "./github/github.slice";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer
    },
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), githubApi.middleware]
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>