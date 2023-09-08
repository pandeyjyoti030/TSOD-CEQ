import React, { useState, useEffect, useRef } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { BiSolidDownload } from "react-icons/bi";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Calendar } from 'react-date-range';

// import {React,  useState } from 'react';
// import { DateRangePicker } from 'react-date-range';
import { DateRangePicker, DatePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // import the styles
import "react-date-range/dist/theme/default.css"; // import the theme styles

import "./UserTable.css";
import html2pdf from "html2pdf.js";

function UserTable() {
  const [totalHours, setTotalLoggedHours] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [totalTicketCount, setTotalTickets] = useState(0);
  const tableRef = useRef(null);
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  // const handleSelect = (date) => {
  //   console.log(date); // native Date object
  // };

  // const [selectedDate, setSelectedDate] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: 'selection',
  //   },
  // ]);

  // const handleSelect = (ranges) => {
  //   // ranges will contain the selected date range
  //   setSelectedDate([ranges.selection]);
  // };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarVisible, setCalendarVisible] = useState(false);

  const handleDateSelect = (date) => {
    setSelectedDate(date.selection.startDate);
    setCalendarVisible(false); // Close the calendar after selecting a date
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://172.31.0.254:8088");

        const jsonData = await response.json();

        setData(jsonData.data); //it simply change json to
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let totalHours = 0;
    let totalTicketCount = 0;

    data.forEach((e) => {
      totalHours += parseFloat(e.logging);
      totalTicketCount++;
    });

    setTotalLoggedHours(totalHours);
    setTotalTickets(totalTicketCount);
  }, [data]);

  const toggleModal = (index) => {
    setSelectedRowIndex(index);

    setModal(!modal);
  };

  const approveRequest = (index) => {
    const updatedData = [...data];
    updatedData[index].status = "approved";
    setData(updatedData);
  };

  const notapproved = () => {
    if (selectedRowIndex !== null) {
      const updatedData = [...data];
      updatedData[selectedRowIndex].status = "notapproved";
      setData(updatedData);
    }

    setSelectedRowIndex(null);

    toggleModal();
  };

  const HandleDownloadButton = () => {
    const element = document.getElementById("table-to-pdf");

    html2pdf().from(element).save("table.pdf");
  };

  return (
    <div className="mainDiv">
      <div className="downloadbuttondiv">
        <button className="downloadButton" onClick={HandleDownloadButton}>
          <BiSolidDownload /> Download pdf
        </button>
      </div>

      <br />

      <div style={{ marginBottom: "20px" }} id="table-to-pdf">
        <div
          style={{
            marginLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "20px",
            textAlign: "left",
          }}
        >
          <div>
            <div style={{ position: "absolute", zIndex: "2" }}>
              <button className="calendarbutton" onClick={() => setCalendarVisible(!calendarVisible)}>Click here to {calendarVisible ? "close" : "open"} the calendar</button>
              <h4>Selected Date: {selectedDate.toDateString()}</h4>
              {calendarVisible && (
                <DateRangePicker
                  onChange={handleDateSelect}
                  months={1} // Set the number of months displayed in the calendar
                  direction="vertical" // Adjust the direction as needed
                  ranges={[
                    {
                      startDate: selectedDate,
                      endDate: selectedDate,
                      key: "selection",
                    },
                  ]}
                />
              )}
            </div>
          </div>
          <div>
            <h4>Total Tickets: {totalTicketCount}</h4>
            <h4>Total Hours: {totalHours}</h4>
          </div>
        </div>

        <table style={{ zIndex: "39" }} className="table" ref={tableRef}>
          <tr style={{ backgroundColor: "#D9D9DC" }}>
            <th>Tickets</th>
            <th>Title</th>
            <th>Discriptions</th>
            <th>Users</th>
            <th>Logged Hours</th>
            <th>Approved Hours</th>
            <th>Approval</th>
          </tr>

          {data.map((e, index) => (
            <tr key={index}>
              <td>{e.ticketName}</td>
              <td>{e.title}</td>
              <td>{e.desc}</td>
              <td>{e.aasuser}</td>
              <td>{e.logging}</td>
              <td>{}</td>
              <td>
                {e.status === "approved" ? (
                  <div id="approve">Approved</div>
                ) : e.status === "notapproved" ? (
                  <div id="notapprove">Not Approved</div>
                ) : (
                  <>
                    <button
                      className="buttons1"
                      onClick={() => approveRequest(index)}
                    >
                      <span className="button">
                        <FaCheck />
                      </span>
                    </button>

                    <button
                      className="buttons2"
                      onClick={() => toggleModal(index)}
                    >
                      <span className="button">
                        <ImCross />
                      </span>
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}

          {modal && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>

              <div className="modal-content">
                <div className="modal-div">
                  <form>
                    <div style={{ opacity: 0.6, marginBottom: "5px" }}>
                      Enter Total Time
                    </div>

                    <input
                      type="number"
                      name=""
                      id="input"
                      placeholder="Enter Total Time"
                      aria-required
                    />
                    <br />

                    <button style={{ marginTop: "5px" }} onClick={notapproved}>
                      save
                    </button>
                  </form>
                </div>

                <button className="close-modal" onClick={toggleModal}>
                  <span className="button">
                    <ImCross />
                  </span>
                </button>
              </div>
            </div>
          )}

        </table>
      </div>
    </div>
  );
}

export default UserTable;
