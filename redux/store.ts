import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { booksSlice } from "@/redux/selectors";
//import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';



/* const rootReducer = combineReducers({
    booksExtraReducer: booksSlice.reducer,
    loadDataReducer: booksSlice.reducer,
    filterCategoryReducer: booksSlice.reducer,
    sddItemsCartReducer: booksSlice.reducer,
    deleteItemsCartReducer: booksSlice.reducer,
    sliderReducer: booksSlice.reducer,
    moveDotsReducer: booksSlice.reducer,
    decreaseReducer: booksSlice.reducer,
    increaseReducer: booksSlice.reducer,
    totalPriceReducer: booksSlice.reducer,
}); */


/* const persistConfig = {
    key: 'root',
    storage: storage,
} */

//const persistedReducer = persistReducer(persistConfig, rootReducer)

/* export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
    }),
}) */

//export const persistor = persistStore(store)

export const store = configureStore({
    reducer: {
        booksExtraReducer: booksSlice.reducer,
        loadDataReducer: booksSlice.reducer,
        filterCategoryReducer: booksSlice.reducer,
        sddItemsCartReducer: booksSlice.reducer,
        deleteItemsCartReducer: booksSlice.reducer,
        sliderReducer: booksSlice.reducer,
        moveDotsReducer: booksSlice.reducer,
        decreaseReducer: booksSlice.reducer,
        increaseReducer: booksSlice.reducer,
        totalPriceReducer: booksSlice.reducer,
    }
})

//выведение типов из хранилища RootState и RootDispatch 
export type RootState = ReturnType<typeof store.getState>; //дает возможность не описывать типы редукторов
export type AppDispatch = typeof store.dispatch; //включает типы из thunk middleware

//useAppSelector и useAppDispatch используются во всём проекте TS в место useSelector и useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();