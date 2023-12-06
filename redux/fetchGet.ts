import { createAsyncThunk } from '@reduxjs/toolkit';



export const fetchBooks = createAsyncThunk<any, any, { rejectValue: any }>(
    "books/fetchBooks", 
    async (page: any, thunkApi) => { // объект thunkApi содержит функцию rejectWithValue

        const subject = 'Architecture';
        //const page = '0';
    
        const response = await fetch(`http://localhost:3000/api/allBooks?subject=${subject}&page=${page}`);//http://localhost:3000/api/allBooks?subject=${subject}&page=${page}

        const data: any = await response.json();

        if (response.status !== 200) {
        
            return thunkApi.rejectWithValue({  //rejectWithValue проверяет и возвращает ошибку при не удачном запросе
            message: "Failed to fetch books." 
            });
        } 

        return data; // возврвщвет данные при успешном запросе
    }
);

