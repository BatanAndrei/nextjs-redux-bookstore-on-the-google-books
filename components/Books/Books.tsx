import { useEffect } from "react";
import { fetchBooks } from '@/redux/fetchGet';
import { useAppSelector, useAppDispatch } from '@/redux/store';
import { selectStatus, selectListBooks } from '@/redux/selectors';




export default function Books() {

    const listBooks = useAppSelector(selectListBooks);
    const dispatch = useAppDispatch();
    
console.log(listBooks)
    useEffect(() => {
        dispatch(fetchBooks(0))
    }, [])
    
    return (
        <>
            {/* {listBooks && listBooks.map(() => {<div></div>})} */}
        </>
    )
}







