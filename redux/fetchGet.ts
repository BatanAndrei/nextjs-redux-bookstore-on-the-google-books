import { createAsyncThunk } from '@reduxjs/toolkit';
import { TfetchTicketsError, IparamsFetch, IlistBooks } from '@/types/types';



export const fetchBooks = createAsyncThunk<IlistBooks, IparamsFetch, { rejectValue: TfetchTicketsError }>(
    "books/fetchBooks", 
    async ({page, subject}: IparamsFetch, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

    
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${subject}"&key=AIzaSyBcCLzRToIHmdzCQcf7uNtoVDpGU-sVf24&printType=books&startIndex=${page}&maxResults=6&langRestrict=en`);

        const data: IlistBooks = await response.json();

        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Failed to fetch books." 
            });
        } 

        return data; // возврвщвет данные при успешном запросе
    }
);

