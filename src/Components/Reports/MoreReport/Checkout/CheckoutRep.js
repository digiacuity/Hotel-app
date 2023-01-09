import React from "react";
import SideBar from "../../../Sidebar/Sidebar";
import TableModelRep from "../Checkin/TCheckin";
import TCheckout from "./TCheckout";

function CheckoutRep() {
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
      id: "checkout",
      label: "checkout",
      minWidth: 80,
    },

    {
      id: "Name",
      label: "Name",
      minWidth: 80,
    },
    {
      id: "Mode",
      label: "Mode",
      minWidth: 80,
    },

    {
      id: "Guest",
      label: `Guest
          (Adult & Children)
          `,
      minWidth: 80,
    },
    {
      id: "total",
      label: "total",
      minWidth: 80,
    },
    {
      id: "Tariff",
      label: "Tariff",
      minWidth: 80,
    },

    {
      id: "Checkin",
      label: "Checkin",
      minWidth: 80,
    },
    {
      id: "bill",
      label: "bill",
      minWidth: 80,
    },
    {
      id: "no of Days",
      label: "no of Days",
      minWidth: 80,
    },
    {
      id: "Remark",
      label: "Remark",
      minWidth: 80,
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
      bill: "online",
      nodays: "3",

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
            <h3 className="ci-rep">Checkout Report</h3>
          </div>
          <hr />
          <TCheckout columns={ciColumns} value={value} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutRep;
