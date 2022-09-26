import React,{useState, Component} from 'react';
import {MenuItems } from './MenuItems'
import './music.css';
import Tracks from './Tracks';




export class MusicBox extends Component{
  

 
  componentWillMount(){
    
    this.handleClick = this.handleClick.bind(this) //binding on to the component
    this.handleArtistClick = this.handleArtistClick.bind(this)
  
 }


  handleClick = (setClick, clicked) => {
    setClick(!clicked)
  }

  handleArtistClick = (click, setArtist) => {
    setArtist(click)
  }



  render() {
    const[clicked ]= useState(false)
    const[artist, setArtist]= useState('')
    return ( 
      
      <div className='background'>
      <div className="ArtistBox">
        <div className='artistHeader'>Our Top Female Artists</div>
        <br></br>
      <div className="ArtistList">
        <ul className={clicked ? 'artist-menu active' : 'artist-menu'}>
          <li key={0}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[0].artist} className={MenuItems[0].cName} href={MenuItems[0].url}> {MenuItems[0].artist} </button></li> 
          <li key={1}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[1].artist} className={MenuItems[1].cName} href={MenuItems[1].url}> {MenuItems[1].artist} </button></li> 
          <li key={2}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[2].artist} className={MenuItems[2].cName} href={MenuItems[2].url}> {MenuItems[2].artist} </button></li> 
          <li key={3}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[3].artist} className={MenuItems[3].cName} href={MenuItems[3].url}> {MenuItems[3].artist} </button></li> 
          <li key={4}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[4].artist} className={MenuItems[4].cName} href={MenuItems[4].url}> {MenuItems[4].artist} </button></li> 
          <li key={5}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[5].artist} className={MenuItems[5].cName} href={MenuItems[5].url}> {MenuItems[5].artist} </button></li> 
          <li key={6}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[6].artist} className={MenuItems[6].cName} href={MenuItems[6].url}> {MenuItems[6].artist} </button></li> 
          <li key={7}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[7].artist} className={MenuItems[7].cName} href={MenuItems[7].url}> {MenuItems[7].artist} </button></li> 
          <li key={8}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[8].artist} className={MenuItems[8].cName} href={MenuItems[8].url}> {MenuItems[8].artist} </button></li> 
          <li key={9}><button onClick={(x)=> this.handleArtistClick(x.target.value, setArtist)} value={MenuItems[9].artist} className={MenuItems[9].cName} href={MenuItems[9].url}> {MenuItems[9].artist} </button></li> 
      </ul>
      </div>
      
      <div className='SongBox'>
        <header className='songHeader'>
        
        {artist === "Snoh Alegra" && <Tracks data= {artist} artistIndex={0}/> }
        {artist === "Tems" && <Tracks data= {artist} artistIndex={1}/> }
        {artist === "Adele" && <Tracks data= {artist} artistIndex={2}/> }
        {artist === "Rosalia" && <Tracks data= {artist} artistIndex={3}/> }
        {artist === "Amy Winehouse" && <Tracks data= {artist} artistIndex={4}/> }
        {artist === "Doja Cat" && <Tracks data= {artist} artistIndex={5}/> }
        {artist === "Dua Lipa" && <Tracks data= {artist} artistIndex={6}/> }
        {artist === "Karol G" && <Tracks data= {artist} artistIndex={7}/> }
        {artist === "Beyonce" && <Tracks data= {artist} artistIndex={8}/> }
        {artist === "Rihanna" && <Tracks data= {artist} artistIndex={9}/> }
       
        </header>
      </div>
      
      </div>
      </div>
      
    
    

    )
  };
}





