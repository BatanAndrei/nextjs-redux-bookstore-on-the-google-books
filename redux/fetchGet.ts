import { createAsyncThunk } from '@reduxjs/toolkit';
import { TfetchTicketsError } from '@/app/types/types';



export const fetchBooks = createAsyncThunk<any, number, { rejectValue: TfetchTicketsError }>(
    "books/fetchBooks", 
    async (page: number, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const subject = 'Architecture';
        //const page = '0';
    
        const response = await fetch(`http://localhost:3000/api/allbooks?subject=${subject}&page=${page}`);

        const data: any = await response.json();

        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Failed to fetch books." 
            });
        } 

        return data; // возврвщвет данные при успешном запросе
    }
);

