import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import { booksSlice } from "@/redux/selectors";


export const store = configureStore({
    reducer: {
        booksExtraReducer: booksSlice.reducer,
        loadReducer: booksSlice.reducer,
    }
})

//выведение типов из хранилища RootState и RootDispatch 
export type RootState = ReturnType<typeof store.getState>; //дает возможность не описывать типы редукторов
export type AppDispatch = typeof store.dispatch; //включает типы из thunk middleware

//useAppSelector и useAppDispatch используются во всём проекте TS в место useSelector и useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();