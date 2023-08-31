import React from 'react'
import search from './Images/search 1.svg'

export const Search = () => {
  return (
    <div className='search'>
        <div><h4>Users</h4></div>
        <div className='searchbar'>
            <div>
                <img src={search} alt="" />
            </div>
            <div style={{color:'lightgray'}}>Search user,skill or team</div>
        </div>
        <div className='skill'>Add new skill</div>
    </div>
  )
}
