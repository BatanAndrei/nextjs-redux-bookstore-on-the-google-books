import type { NextApiRequest, NextApiResponse } from 'next'


export default async function requestAllBooks(req: NextApiRequest, res: NextApiResponse) {

    const { subject, page } = req.query;

    const gbooksReqParams = new URLSearchParams();
    gbooksReqParams.set('q', `Subject:Architecture`); //${subject}
    gbooksReqParams.set('key', `AIzaSyBcCLzRToIHmdzCQcf7uNtoVDpGU-sVf24`);
    gbooksReqParams.set('printType', `books`);
    gbooksReqParams.set('startIndex', `0`); //${page}
    gbooksReqParams.set('maxResults', `6`);
    gbooksReqParams.set('langRestrict', `en`);
    
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}`) //не тот URL //https://jsonplaceholder.typicode.com/photos/
    
    const booksData = await result.json(); //https://www.googleapis.com/books/v1/volumes?q=isbn:9781443411080,
    res.status(200).send({
        data: booksData, //https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}
})

/* if (!req.query.subject) {
    res.status(400).send({
        error: true,
        message: 'No subject in query params'
    })
} */
}   
