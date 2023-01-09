import axios from "axios";
import React from "react";
import swal from "sweetalert";
import "./BookingList.css";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";

function Checkinmodal({ id }) {
  let navigate = useNavigate();
  const [data, setdata] = useState([]);
  let formik = useFormik({
    initialValues: {
      invoiceno: "",
      date: "",
      bookingno: "",
      roomno: "",
      roomtype: "",
      package: "",
      contact: "",
      checkin: "",
      checkout: "",
      amount: "",
      status: "",
      name: "",
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://api-digi.onrender.com/bill",

          values,
          {
            headers: {
              Authorization: window.localStorage.getItem("myapptoken"),
            },
          }
        );
        swal(" Checkout Successfully", {
          icon: "success",
          timer: 3000,
        });

        navigate("/managerooms");
      } catch (error) {
        alert("Checkout error");
      }
    },
  });
  let handlePay = async (id) => {
    swal({
      title: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`https://api-digi.onrender.com/booking/${id}`, {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        });
        navigate("/frontdesk");
      } else {
      }
    });
  };

  const date = new Date();

  let handleView = async () => {
    try {
      let viewData = await axios.get(
        `https://api-digi.onrender.com/booking/${id}`,
        {
          headers: {
            Authorization: window.localStorage.getItem("myapptoken"),
          },
        }
      );
      setdata(viewData.data);
    } catch (err) {
      alert("booking View Error");
    }
  };
  useEffect(() => {
    handleView();
  }, []);
  let meal = 500;
  let subtotal = data.price + meal;
  let tax = (subtotal * 12) / 100;
  let total = subtotal + tax;
  return (
    <>
      <div className="container-fluid mb-2 mt-1">
        <div className="row">
          <div className="col-md-12 d-flex align-items-center justify-content-between">
            <div>
              <p style={{ color: "#7e8d9f", fontsize: "20px" }}>
                Invoice ID <strong> : #123-123</strong>
              </p>
            </div>

            <div>
              <button
                type="button"
                className="btn-close  mb-2 ms-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          </div>

          <hr />
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between">
              <div>
                <ul className="list-unstyled d-flex flex-column align-items-start justify-content-start">
                  <li className=" p-1">
                    <span className="text-primary">Hotel Name</span>
                  </li>
                  <li className="text-muted  p-1">Street 1</li>
                  <li className="text-muted  p-1">City</li>
                  <li className="text-muted p-1 ">State</li>
                  <li className="text-muted p-1">123-456-7890</li>
                </ul>
              </div>
              <div>
                <ul className="list-unstyled ">
                  <li className="text-muted p-1 text-start">
                    <span className="fw-bold me-5">Date</span>:
                    <span className="ms-1">
                      {moment(date).format("DD-MM-YYYY / hh:mm a")}
                    </span>
                  </li>
                  <li className="text-muted p-1 text-start">
                    <span className="fw-bold ">Booking No</span>:
                    <span className="ms-1">B00{data.bookingno}</span>
                  </li>
                  <li className="text-muted p-1 text-start">
                    <span className="fw-bold me-5">Name</span>:{data.firstname}
                  </li>
                  <li className="text-muted p-1  text-start ">
                    <span className="fw-bold me-3">Check-in </span> :
                    {moment(data.checkin).format("DD-MM-YYYY / hh:mm a")}{" "}
                  </li>
                  <li className="text-muted p-1  text-start">
                    <span className="fw-bold me-1">Check-out </span> :
                    {moment(data.checkout).format("DD-MM-YYYY / hh:mm a")}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="row mt-3 justify-content-center">
            <table className="table table-striped table-bordered">
              <thead
                style={{ backgroundcolor: "#84B0CA " }}
                className="text-dark"
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Plan</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>

                  <td>Room Type</td>
                  <td>{data.type}</td>
                  <td>-</td>

                  <td>{data.price}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Meal Paln</td>
                  <td>{data.meal}</td>
                  <td>1</td>

                  <td>500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-11 ms-5 d-flex justify-content-end ">
              <div>
                <ul className="list-unstyled ">
                  <li className="text-muted p-2 text-start fs-6 ms-3">
                    <span className="fw-bolder me-1">Sub Total </span>:
                    <span className="fw-bold  ms-2"> {subtotal} </span>
                  </li>
                  <li className="text-muted p-2 text-start fs-6 ms-3">
                    <span className="fw-bolder me-1 ">Tax (12%) </span>:
                    <span className="fw-bold  ms-3">{Math.round(tax)}</span>
                  </li>
                  <li className="text-dark p-2  text-start fw-bold fs-5 ms-3">
                    <span className="fw-bold  me-4">Total </span>:{" "}
                    <span className="fw-bold  ms-2">{total} </span>
                  </li>
                  <li className="mt-3 ">
                    {" "}
                    <Form.Select aria-label="Default select example">
                      <option>select Payment Type</option>
                      <option value="Cash">Cash</option>
                      <option value="Card">Card</option>
                      <option value="UPI">UPI</option>
                    </Form.Select>
                  </li>
                  <li className="mt-3 ">
                    <span>
                      <button
                        className="btn btn-success  me-4"
                        onClick={() => handlePay(id)}
                      >
                        Pay Now
                      </button>
                    </span>
                    <span>
                      <button className="btn btn-primary px-4 ">Print</button>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-xl-12 text-center">
              <p>Thanks for Staying at Hotel</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkinmodal;
