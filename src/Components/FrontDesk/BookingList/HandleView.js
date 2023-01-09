import moment from "moment";
import React from "react";

function HandleView({ view1 }) {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title " id="exampleModalLabel">
                Booking Details
              </h5>
              <button
                type="button"
                className="btn-close "
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body ">
              <div className="container-fluid ">
                <div className="row gy-4 mb-3 ">
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Booking No
                    </div>

                    <div className="p-2 border text-center">
                      B00{view1.bookingno}
                    </div>
                  </div>
                  {view1.newroomno && (
                    <>
                      <div className="col-lg-4">
                        <div className="p-2 border text-center fw-bold">
                          New Room No
                        </div>

                        <div className="p-2 border text-center">
                          {view1.newroomno}
                        </div>
                      </div>
                    </>
                  )}
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Room No
                    </div>

                    <div className="p-2 border text-center">{view1.roomno}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Room Type
                    </div>

                    <div className="p-2 border text-center">{view1.type}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Meal</div>

                    <div className="p-2 border text-center">{view1.meal}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Mode</div>

                    <div className="p-2 border text-center">{view1.mode}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">AC</div>

                    <div className="p-2 border text-center">{view1.ac}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Bed</div>

                    <div className="p-2 border text-center">{view1.bed}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Advance
                    </div>

                    <div className="p-2 border text-center">
                      {view1.advance}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      No of Guest
                    </div>

                    <div className="p-2 border text-center">
                      {+view1.adult + +view1.child}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Price</div>

                    <div className="p-2 border text-center">{view1.price}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      check In
                    </div>

                    <div className="p-2 border text-center">
                      {moment(view1.checkin).format("DD-MM-YYYY / hh:mm a")}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Check Out
                    </div>

                    <div className="p-2 border text-center">
                      {moment(view1.checkout).format("DD-MM-YYYY / hh:mm a")}
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Name</div>

                    <div className="p-2 border text-center">
                      {view1.firstname}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Email</div>

                    <div className="p-2 border text-center">{view1.email}</div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Gender</div>

                    <div className="p-2 border text-center">{view1.gender}</div>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Contact
                    </div>

                    <div className="p-2 border text-center">
                      {view1.contact}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">
                      Id Type
                    </div>

                    <div className="p-2 border text-center">{view1.idtype}</div>
                  </div>

                  <div className="col-lg-4">
                    <div className="p-2 border text-center fw-bold">Id No</div>

                    <div className="p-2 border text-center ">{view1.idno}</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-2 border text-center fw-bold">Note</div>

                    <div className="p-2 border text-center">{view1.note}</div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-2 border text-center fw-bold">
                      Address
                    </div>

                    <div className="p-2 border text-center">
                      {view1.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HandleView;
