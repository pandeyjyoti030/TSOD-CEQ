import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { CiMenuKebab } from 'react-icons/ci'
import one from './Users/1.svg'
import two from './Users/2.svg'
import three from './Users/3.svg'
import four from './Users/4.svg'
import five from './Users/5.svg'
import avatar from './Images/Avatar.png'
import './UserTable.css'
 
function UserTable() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
 
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
 
  const toggleModal = (index) => {
    setSelectedRowIndex(index);
    setModal(!modal);
  };
 
  const approveRequest = (index) => {
    const updatedData = [...data];
    updatedData[index].status = 'approved';
    setData(updatedData);
  };
 
  const notapproved = () => {
    if (selectedRowIndex !== null) {
      const updatedData = [...data];
      updatedData[selectedRowIndex].status = 'notapproved';
      setData(updatedData);
    }
    setSelectedRowIndex(null);
    toggleModal();
  };
 
  return (
    <div className='mainDiv'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>Tickets</th>
            <th>Title</th>
            <th>Discriptions</th>
            <th>Users</th>
            <th>Logged Hours</th>
            <th>Approval</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => (
            <tr className='tr' key={index}>
              <td><img src={one} alt="" /></td>
              <td>{e.ticketName}</td>
              <td>{e.title}</td>
              <td>{e.desc}</td>
              <td>{e.aasuser}</td>
              <td>{e.logging}</td>
              <td>
                {e.status === 'approved' ? (
                  <div id='approve'>Approved</div>
                ) : e.status === 'notapproved' ? (
                  <div id='notapprove'>Not Approved</div>
                ) : (
                  <>
                    <button
                      className='buttons1'
                      onClick={() => approveRequest(index)}
                    >
                      <span className='button'><FaCheck /></span>
                    </button>
                    <button className='buttons2' onClick={() => toggleModal(index)}>
                      <span className='button'><ImCross /></span>
                    </button>
                  </>
                )}
              </td>
              <td><button style={{backgroundColor:"white",border:"none"}}><CiMenuKebab/></button></td>
            </tr>
          ))}
        </tbody>
      </table>
 
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className='modal-div'>
              <form>
                <input type="text" name="" id="input" placeholder='Enter Total Time' /><br />
                <button onClick={notapproved}>save</button>
              </form>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <span className='button'><ImCross /></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
 
export default UserTable;
