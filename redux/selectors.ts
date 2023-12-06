import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '@/redux/fetchGet';
import { RootState  } from '@/redux/store';

const initialState: any = {
    listBooks: [],
    error: null,
    status: "idle",
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
            state.listBooks = {...state.listBooks, ...payload}
            //state.listBooks.push(...payload);
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

export const selectStatus = (state: RootState) => state.booksExtraReducer.status; //статус в booksExtraReducer
export const selectListBooks = (state: RootState) => state.booksExtraReducer.listBooks;