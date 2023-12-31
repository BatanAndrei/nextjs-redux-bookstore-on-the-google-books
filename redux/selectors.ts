import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks } from '@/redux/fetchGet';
import { RootState  } from '@/redux/store';
import { listCategories } from '@/datas/categoryData';
import { sliderData } from '@/datas/sliderData';
import { TbooksInitState, IdataBooks, IparamsFetch, IdataSlider } from '@/types/types';

const initialState: TbooksInitState = {
    sliderData,
    sliderIndex: 0,
    dataBooks: {
        items: [],
    },
    error: null,
    status: "idle",
    paramsFetch: {
        subject: 'Architecture',
        maxResults: 6,
    },
    listCategories,
    dataCart: {
        itemsCart: [],
    },
    dataCartDetails: {
        itemsCartDetails: [],
    },
    totalArreyCart: [],
    totalPrice: 0,
};

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {   

    sliderReducer: (state) => {
        if(state.sliderIndex !== state.sliderData.length - 1) {
            state.sliderIndex += 1;
        }else if(state.sliderIndex === state.sliderData.length - 1) {
            state.sliderIndex = 0;
        }
    },

    moveDotsReducer: (state, action) => {
        state.sliderIndex = action.payload;
    },
    
    loadDataReducer: (state, action) => {
        state.paramsFetch.maxResults += action.payload;
    },

    filterCategoryReducer: (state, action) => {
        state.dataBooks.items = [];
        state.paramsFetch.maxResults = 6;
        state.paramsFetch.subject = action.payload;
    },

    addItemsCartReducer: (state, action) => {
        state.dataCart.itemsCart = [...state.dataCart.itemsCart, {...action.payload}];
        state.totalArreyCart = [...state.dataCart.itemsCart, ...state.dataCartDetails.itemsCartDetails];
    },

    deleteItemsCartReducer: (state, action) => {
        state.dataCart.itemsCart = state.dataCart.itemsCart.filter(book => book.id !== action.payload);
        state.totalArreyCart = [...state.dataCart.itemsCart, ...state.dataCartDetails.itemsCartDetails];
    },

    increaseReducer: (state, action) => {
        state.dataCartDetails.itemsCartDetails = [...state.dataCartDetails.itemsCartDetails, {...action.payload}];
        state.totalArreyCart = [...state.dataCart.itemsCart, ...state.dataCartDetails.itemsCartDetails];
    },

    decreaseReducer: (state, action) => {   
        let priceIndex = state.dataCartDetails.itemsCartDetails.findIndex((book) => book.id === action.payload);
        if(priceIndex > -1) state.dataCartDetails.itemsCartDetails.splice(priceIndex, 1); 
        state.totalArreyCart = [...state.dataCart.itemsCart, ...state.dataCartDetails.itemsCartDetails];
    },


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
            state.dataBooks = {...state.dataBooks, ...payload};
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
export const selectCartItems = (state: RootState): IdataBooks[] => state.booksExtraReducer.dataCart.itemsCart;
export const selectViewItemCount = (state: RootState): IdataBooks[] => state.booksExtraReducer.dataCartDetails.itemsCartDetails;
export const selectTotalArreyCart = (state: RootState): IdataBooks[] => state.booksExtraReducer.totalArreyCart;
export const selectTotalPrice = (state: RootState): number | undefined => state.booksExtraReducer.totalPrice;


export const selectLoadParams = (state: RootState): IparamsFetch => state.loadDataReducer.paramsFetch;
export const selectCategoryParams = (state: RootState): string => state.filterCategoryReducer.paramsFetch.subject;
export const selectSlider = (state: RootState): IdataSlider[] => state.sliderReducer.sliderData;
export const selectSliderIndex = (state: RootState): number => state.sliderReducer.sliderIndex;


export const { loadDataReducer, filterCategoryReducer, addItemsCartReducer, deleteItemsCartReducer, sliderReducer, moveDotsReducer, increaseReducer, decreaseReducer } = booksSlice.actions;