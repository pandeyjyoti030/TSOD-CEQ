import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './UserTable.css'




function UserTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://172.31.0.254:8088');
        const jsonData = await response.json();
        setData(jsonData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }




  return (
    <div>

      <table className='table'>
        <thead>
          <tr style={{ backgroundColor: "#D9D9DC", color: "#595A6C" }}>
            <th>Tickets</th>
            <th>Title</th>
            <th>Discriptions</th>
            <th>Users</th>
            <th>Logged Hours</th>
            <th>Approval</th>
          </tr>
        </thead>
        <tbody>

          {
            data.map((e) => (
              <tr>
                <td>{e.ticketName}</td>
                <td>{e.title}</td>
                <td>{e.desc}</td>
                <td>{e.aasuser}</td>
                <td>{e.logging}</td>
                <td>
                  <button className='buttons1'><span className='button'><FaCheck /></span></button>
                  <button className='buttons2'onClick={toggleModal} ><span className='button' ><ImCross /></span></button>
                </td>
                
              </tr>


            ))
          }





        </tbody>
      </table>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='modal-div'>
              <form  action="" method="post">
                <input  type="text" name="" id="input" placeholder='Enter Total Time' /><br />
                <button id='button-inmodel' type="submit">save</button>
              </form>
            </div>




            <button className="close-modal" onClick={toggleModal}>
            <span className='button' ><ImCross /></span>
            
            </button>
          </div>
        </div>
      )}



    </div>
  );
}

export default UserTable;