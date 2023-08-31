import React from 'react'
import Avatar from './Images/Avatar.png'
import Notification from './Images/notification.svg'
import logo from './Images/Logos.svg'
import setting from './Images/settings.svg'
import vector from './Images/Vector 7.svg'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img src={logo} alt="" />
        </div>
        <div className='username'>
            <div>
              <img src={Notification} alt="" />
            </div>
            <div>
              <img src={setting} alt="" />
            </div>
            <div>
              <img src={vector} alt="" />
            </div>
        <div style={{color:"white",}}>
            Username
        </div>
        <div>
          <img src={Avatar} alt="" />
        </div>
        </div>
    </div>
  )
}
