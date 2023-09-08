import React from 'react'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import UserTable from './UserTable'
import { Search } from './Search'
import { Table } from './Table'

export const Main = () => {
    return (
        <div>
            {/* <div style={{width:"100%"}}>
            <Navbar/>
        </div>
        <div style={{display:"flex",}}>
            <div>
                <Sidebar/>
            </div>
            <div style={{width:"100%", margin:"30px",}}>
                <div><Search/></div>
                <div style={{marginTop:"16px"}}><UserTable/></div>     
            </div>
        </div> */}

            <div>
                <div>
                    <Navbar />
                    <div style={{ marginTop: "80px", marginLeft: "230px", marginRight: "35px" }}>
                        <UserTable />
                    </div>
                </div>
                <div >
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
