import React,{useState, useEffect,} from 'react';
import { artists, MenuItems } from './MenuItems'
import './music.css'
import axios from 'axios'




const Tracks =  ({data, artistIndex}) => {
console.log(data)
const [tracks, setTracks] = useState([]);
const [image, setImage] = useState([]);

useEffect(()=> {
async function GetTracks(artistsname) {
    
    
   
  
    // console.log(process.env.REACT_APP_SPOTIFY_CLIENT_ID + process.env.REACT_APP_SPOTIFY_CLIENT_SECRET)
  
    
        await axios('https://accounts.spotify.com/api/token', {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization':'Basic ' + (new Buffer(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`).toString('base64'))           
            },
            data: 'grant_type=client_credentials'
        }).then( async tokenresponse => {
            console.log(tokenresponse.data.access_token);
          
           await axios(`https://api.spotify.com/v1/artists/${artists[artistsname]}/top-tracks?market=US`,{
              'method': 'GET',
              'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + tokenresponse.data.access_token
              }
            }).then(async trackresponse=> {
                await axios(`https://api.spotify.com/v1/artists/${artists[artistsname]}`,{
                    'method': 'GET',
                    'headers': {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json',
                      'Authorization': 'Bearer ' + tokenresponse.data.access_token
                    }}).then(artistresponse => {
                        console.log(artistresponse)
                        setImage(artistresponse.data.images)
                    }).catch(error=> console.log(error))
            
              setTracks(trackresponse.data.tracks);
              return trackresponse.data.tracks;
            }).catch(error=> console.log(error))
  
        }).catch(error => console.log(error))
  
  
  
  }; GetTracks(data)  }, [])
  return (
    
    <div className="Songs">
    <h1 className='artist-image'>{MenuItems[artistIndex].artist}</h1>

        {/* <img 
        src={image[0]} alt='artist'>
        </img> */}
 
    <ul>
    
   { 
    tracks.map((item, index) => {
        console.log(item)

        return ( 
            <div>
             
         <li key={index}><a value={item.name} className={'trackname'} href={item.external_urls.spotify}>
            {item.name}
           </a></li> 
           
            </div>            
        )
        })
   
    }
    </ul>
    </div>
 
  
    
  )
}

export default Tracks