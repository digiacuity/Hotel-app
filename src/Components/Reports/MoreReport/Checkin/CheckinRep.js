import React from "react";
import SideBar from "../../../Sidebar/Sidebar";
import TCheckin from "./TCheckin";
import TableModelRep from "./TCheckin";

function CheckinRep() {
  let ciColumns = [
    { id: "no", label: "No", minWidth: 50 },
    {
      id: "Booking No",
      label: "Booking No",
      minWidth: 20,
    },
    {
      id: "Room No",
      label: "Room No",
      minWidth: 20,
    },

    {
      id: "checkin ",
      label: "checkin",
      minWidth: 100,
    },

    {
      id: "Name",
      label: "Name",
      minWidth: 100,
    },
    {
      id: "Mode",
      label: "Mode",
      minWidth: 100,
    },

    {
      id: "Guest",
      label: `Guest
          (Adult & Children)
          `,
      minWidth: 100,
    },
    {
      id: "total",
      label: "total",
      minWidth: 100,
    },
    {
      id: "Tariff",
      label: "Tariff",
      minWidth: 100,
    },

    {
      id: "CheckOut",
      label: "CheckOut",
      minWidth: 100,
    },
    {
      id: "Remark",
      label: "Remark",
      minWidth: 100,
    },
  ];
  let value = [
    {
      no: "1",
      bookingno: "1101",
      roomno: "101",
      checkin: "21-11-2022 12-05",
      name: "name",
      mode: "walkin",
      guest: " 2 & 1",
      total: "3",
      tariff: "1000",
      checkout: "24-1-2022 13-15",
      remark: "-",
    },
  ];
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 p-0">
          <SideBar />
        </div>
        <div className="col-lg-10 ">
          <div>
            <h3 className="ci-rep">Checkin Report</h3>
          </div>
          <hr />
          <TCheckin columns={ciColumns} value={value} />
        </div>
      </div>
    </div>
  );
}

export default CheckinRep;
