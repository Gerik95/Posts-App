import { Action, configureStore, Dispatch } from '@reduxjs/toolkit';
import { api } from '../api';

const middleware = () => (next: Dispatch<Action>) => (action: Action) => next(action);

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(middleware, api.middleware)
});

export default store;