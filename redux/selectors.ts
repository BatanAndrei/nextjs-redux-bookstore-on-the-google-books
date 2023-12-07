import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '@/redux/fetchGet';
import { RootState  } from '@/redux/store';
import { TbooksInitState, IlistBooks, IparamsFetch } from '@/types/types';

const initialState: TbooksInitState = {
    dataBooks: {
        items: [],
    },
    error: null,
    status: "idle",
    paramsFetch: {
        page: 0,
        subject: 'Architecture',
    }
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state) => {
        
            state.status = "loading";
            state.error = null;
    });

        builder
        .addCase(fetchBooks.fulfilled, 
            (state, { payload }) => { 
            state.dataBooks = {...state.dataBooks, ...payload}
            state.status = "idle";
    });

        builder
        .addCase(fetchBooks.rejected, 
            (state, { payload }) => {

            if (payload) state.error = payload.message; //В payload.message приходит из fetchBooks => return thunkApi.rejectWithValue({ message: "Failed to fetch books." })
            state.status = "idle";
    })
    }
})

export const selectStatus = (state: RootState): "loading" | "idle" => state.booksExtraReducer.status; //статус в booksExtraReducer
export const selectDataBooks = (state: RootState) => state.booksExtraReducer.dataBooks;

export const selectLoadParams = (state: RootState): IparamsFetch => state.loadReducer.paramsFetch;