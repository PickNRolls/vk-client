import rootReducer from './rootReducer';
import store from './configureStore';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
