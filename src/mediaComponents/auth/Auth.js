import React from 'react';
const axios = require('axios');
const { useEffect, useState } = require('react');



export const Auth = () => {
    
    const [token, setToken] = useState('');
    
    console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)

    useEffect(()=> {
        axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + (new Buffer(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`).toString('base64'))           
            },
            data: 'grant_type=client_credentials'
        }).then(tokenresponse => {
            console.log(tokenresponse.data.access_token);
            setToken(tokenresponse.data.access_token);


        }).catch(error => console.log(error))

    }, [])
    return (<div></div>)
}
// async function Auth(){

//     const router = express.Router();

//     console.log(process.env.SPOTIFY_CLIENT_ID);


//     router.get('/login', (req, res) => {
//         res.redirect(`https://accounts.spotify.com/authorize?${querystring.stringify({
//             response_type: 'code',
//             client_id: process.env.SPOTIFY_CLIENT_ID,
//             redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
//         })}`);
//     });

//     router.get('/callback', async (req, res) => {
//         const {code} = req.query;
//         const clientId = process.env.SPOTIFY_CLIENT_ID;
//         const secret = process.env.SPOTIFY_CLIENT_SECRET;
//         const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
//         const grant_type = 'authorization_code';

//         const basicHeader = Buffer.from(`${clientId}:${secret}`).toString('base64');
//         const {data} = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
//             grant_type,
//             code,
//             redirect_uri,
//         }), {
//             headers: {
//                 Authorization: `Basic ${basicHeader}`,
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         });

//         const sessionJWTObject = {
//             token: data.access_token,
//         };
//        const jwtToken = '';

//         req.session.jwt = jwt.sign(sessionJWTObject, jwtToken)
//         return req;
//         // return res.redirect('/');
        
//     });

// }


