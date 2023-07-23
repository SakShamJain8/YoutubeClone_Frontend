import React from 'react';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import './Sidebar.css';
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <section>
    <div className = "sidebar">
        <Link style = {{textDecoration:'none'}} to = '/'>
          <SidebarRow selected Icon={HomeIcon} title="Home"/>
        </Link>
        <Link style = {{textDecoration:'none'}} to = '/Explore'>
          <SidebarRow Icon={ExploreOutlinedIcon} title="Explore"/>
        </Link>
        <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions"/>
        <hr />
        <SidebarRow Icon={VideoLibraryOutlinedIcon} title="Library"/>
        <SidebarRow Icon={HistoryIcon} title="History"/>
        <SidebarRow Icon={WatchLaterOutlinedIcon} title="Watch Later"/>
        <SidebarRow Icon={ThumbUpOutlinedIcon} title="Liked Videos"/>
        <hr />
    </div>
    </section>
  )
}

export default Sidebar