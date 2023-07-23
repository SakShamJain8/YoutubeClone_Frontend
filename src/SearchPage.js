import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__filter'>
            <TuneIcon />
            <h2>FILTERS</h2>
        </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/EaHjbYWOY1j94LJoZfJYU9GTo2KOsCtKdZ9GLpUVOa1AWYFDFfT10LKX8yFaqnpyRzX9tYxzgQ=s88-c-k-c0x00ffffff-no-rj"
        channel = "MortaL"
        verified
        subs="7.03M"
        noOfVideos={1570}
        description = 'Hey Everyone! This is Naman Mathur here! Welcome to "Mortal" Youtube Channel !! I am a full time Streamer , Entertainer and.......'
      />

      <hr />

      <h3>Latest From MortaL</h3>

      <VideoRow 
        views ="121K"
        description = "& follow me on twitter"
        timestamp= "5 days ago"
        channel="MortaL"
        title="DOUSING EVERYONE IN Among Us"
        image="https://i.ytimg.com/an_webp/ym0OIIGOzqQ/mqdefault_6s.webp?du=3000&sqp=CMyTjJ0G&rs=AOn4CLAGMOdN7_v6yQb6ul09-0sqCbTaBA"
      />

      <VideoRow 
        views ="207K"
        description = "& Follow me on Twitter"
        timestamp= "Streamed 5 days ago"
        channel="MortaL"
        title="LIVE: VALORANT Night Chill #mortalarmy #s8ul"
        image="https://i.ytimg.com/an_webp/0sdKYrkZYHs/mqdefault_6s.webp?du=3000&sqp=CP6TjJ0G&rs=AOn4CLAG7F3t2q9ZeoT4OYwAO94fUjl2Wg"
      />

      <VideoRow 
        views ="212K"
        description = "& Follow me on Twitter"
        timestamp= "Streamed 6 days ago"
        channel="MortaL"
        title="S8UL THE BEST CONTENT GROUP OF THE YEAR #s8ul #mortal #mortalarmy"
        image="https://i.ytimg.com/an_webp/hozMxmmETCI/mqdefault_6s.webp?du=3000&sqp=CPiDjJ0G&rs=AOn4CLCcd4YTRXcdPYfdl6A8U0gpIpWWZw"
      />

      <VideoRow 
        views ="402K"
        description = "& Follow me on Twitter"
        timestamp= "Streamed 7 days ago"
        channel="MortaL"
        title="ESPORTS AWARDS 2022 - WATCH PARTY"
        image="https://i.ytimg.com/an_webp/ccKSEnqgeRc/mqdefault_6s.webp?du=3000&sqp=CP6ljJ0G&rs=AOn4CLAzjd3yn8hLvoD4z5bDEWQ-9fpOHw"
      />
      <hr />
    </div>
    
  )
}

export default SearchPage