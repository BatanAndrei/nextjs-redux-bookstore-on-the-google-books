import { useEffect } from "react";

/* export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/');

    const receivedData = await res.json();

    return {
        props: {
            data: receivedData,
        }
    }
} */

export const API_URL = process.env.NEXT_PUBLIC_DB_HOST;
console.log(API_URL)

export default function Books() {

    const subject = 'Architecture';
    const page = '0';

    async function Load() {
        const res = await fetch(`http://localhost:3000/api/allBooks?subject=${subject}&page=${page}`).then(res => res.json());
        console.log(res)
    }

    useEffect(() => {
        Load()
    }, [])
    
    return (
        <>

        </>
    )
}







