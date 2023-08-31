import React from 'react'
import dashboard from './Images/machine-learning 1.svg'
import users from './Images/users-mm 1.svg'
import projects from './Images/opening-times 1.svg'
import reports from './Images/paper 1.svg'
import time from './Images/stopwatch 1.svg'
import help from './Images/lifering 1.svg'
import settings from './Images/cogwheel 2.svg'

export const Sidebar = () => {
  return (
    <div className='sidebar'>

        <div className='text'>
            <div style={{display:"flex", gap:"10px"}}> 
                <div style={{display:"flex"}}>
                    <img src={dashboard} alt="" />
                </div>
                <div>Dashboard</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={users} alt="" />
                </div>
                <div>Users</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={projects} alt="" />
                </div>
                <div>Projects</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={dashboard} alt="" />
                </div>
                <div>Skills</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={reports} alt="" />
                </div>
                <div>Reports</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={time} alt="" />
                </div>
                <div>Time Tracker</div>
            </div>
        </div>

        <div className='text'>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={help} alt="" />
                </div>
                <div>Help</div>
            </div>
            <div style={{display:"flex", gap:"10px"}}>
                <div style={{display:"flex"}}>
                    <img src={settings} alt="" />
                </div>
                <div>Settings</div>
            </div>
        </div>
    </div>
  )
}
