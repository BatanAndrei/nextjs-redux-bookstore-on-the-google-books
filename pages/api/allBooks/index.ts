import type { NextApiRequest, NextApiResponse } from 'next'


export default async function requestAllBooks(req: NextApiRequest, res: NextApiResponse) {

    const { subject, page } = req.query;

    const gbooksReqParams = new URLSearchParams();
    gbooksReqParams.set('q', '""');
    gbooksReqParams.set('subject', `${subject}`);//${subject}
    gbooksReqParams.set('key', `AIzaSyBcCLzRToIHmdzCQcf7uNtoVDpGU-sVf24`);
    gbooksReqParams.set('printType', `books`);
    gbooksReqParams.set('startIndex', `${page}`); //${page}
    gbooksReqParams.set('maxResults', `6`);
    gbooksReqParams.set('langRestrict', `en`);
    
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:Business"&key=AIzaSyBcCLzRToIHmdzCQcf7uNtoVDpGU-sVf24&printType=books&startIndex=0&maxResults=6&langRestrict=en`)
    
    const booksData = await result.json();//https://www.googleapis.com/books/v1/volumes?${gbooksReqParams.toString()}


    res.status(200).send({ data: booksData, })
    
/* if (!req.query.subject || !req.query.page) {
    res.status(400).send({
        error: true,
        message: 'No subject or page in query params'
    })
} */ 
}   
