import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '@/redux/fetchGet';
import { RootState  } from '@/redux/store';
import { listCategories } from '@/datas/categoryData';
import { TbooksInitState, IdataBooks, IparamsFetch } from '@/types/types';

const initialState: TbooksInitState = {
    dataBooks: {
        items: [],
    },
    error: null,
    status: "idle",
    paramsFetch: {
        page: 0,
        subject: 'Architecture',
        maxResults: 6,
    },
    listCategories,
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {   
    
    loadDataReducer: (state, action) => {
        state.paramsFetch.maxResults += action.payload;
    },

    filterCategoryReducer: (state, action) => {
        state.dataBooks.items = [];
        state.paramsFetch.maxResults = 6;
        state.paramsFetch.subject = action.payload;
    }

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
export const selectDataBooks = (state: RootState): IdataBooks[] => state.booksExtraReducer.dataBooks.items;
export const selectCategory = (state: RootState): string[] => state.booksExtraReducer.listCategories;

export const selectLoadParams = (state: RootState): IparamsFetch => state.loadDataReducer.paramsFetch;
export const selectCategoryParams = (state: RootState): string => state.filterCategoryReducer.paramsFetch.subject

export const { loadDataReducer, filterCategoryReducer } = booksSlice.actions;