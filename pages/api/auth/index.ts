import type { NextApiRequest, NextApiResponse } from 'next'


export default async function requestAllBooks(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).send({ error: true, message: 'Only POST' })
    }
   const { method } = req;
   
    
   console.log(method)
        
    //const validatedInfo = validate(email, password);

       /*  if (validatedInfo.error) {
            res.status(400).send({ error: true, message: 'Email or password are incorrect' });
        } else {
            res.status(200).send({ success: true, token: 'testToken' });
        } */
}