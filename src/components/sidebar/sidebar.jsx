import React, { useState } from 'react'
import './sidebar.css'
import {assets} from '../../assets/assets'

const Sidebar = () => {

  const [extended,setExtended]=useState(false);

  function handleExtendedSideBar(){
    setExtended(!extended);
  }

     
  return (

    <div 
         // Toggle between w-64 (256px) and w-20 (80px). Use a template literal `${}` for the className to make it dynamic.
    className= {`sidebar min-h-[100vh] p-[15px] flex flex-col justify-between bg-[#eef2f6] 
             transition-all duration-300 ease-in-out 
             ${extended ? 'w-64' : 'w-20'}`} 

             onMouseEnter={handleExtendedSideBar}
             onMouseLeave={handleExtendedSideBar}>
      <div className="top flex flex-col justify-between">
          <img className="menu block ml-[10px] cursor-pointer" src={assets.menu_icon} alt="" onMouseOver={handleExtendedSideBar} />
          <div className="new-chat mt-[10px] p-[7px] max-w-[fit-content]   rounded-3xl text-[14 px] inline-flex  justify-between items-center gap-[20px] cursor-pointer">
               <img src={assets.plus_icon} alt="" />
               {extended ? <p>New Chat</p> :  false}
          </div>
                {extended ? <div className="recent">
                  <p className="recent-title mt-[30px] mb-[10px]">Recent</p>
                  <div className="recent-entry p-[10px]  rounded-3xl text-[#282828] cursor-pointer flex items-center gap-[10px]
                   hover:bg-[#e2e6eb]">
                      <img src={assets.message_icon} alt="" />
                      <p>What is React...</p>
                  </div>
                </div>
                : null}
          
      </div>
        <div className='flex flex-col gap-[12px]'>
            <div className="bottom ">
              <div className="bottom-item recent-entry flex flex-row items-center gap-[5px]">
                  <img src={assets.question_icon} alt="" />
                  {extended ? <p>Help</p> : null}
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-item recent-entry flex flex-row items-center gap-[5px]">
                  <img src={assets.history_icon} alt="" />
                  {extended ? <p>Activity</p> : null}
              </div>
            </div>
            <div className="bottom">
              <div className="bottom-item recent-entry flex flex-row items-center gap-[5px]">
                  <img src={assets.setting_icon} alt="" />
                  {extended ? <p>Settings</p> : null}
              </div>
            </div>
        </div>
            
      </div>
    
  )
}

export default Sidebar
