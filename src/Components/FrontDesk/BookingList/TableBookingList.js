import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import moment from "moment";
import HandleView from "./HandleView";
import Checkoutmodal from "./Checkoutmodal";
import Checkinmodal from "./Checkinmodal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#005fc1",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#ecf0f1",
    color: theme.palette.common.black,
    border: theme.palette.common.black,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
    border: theme.palette.common.black,
  },
}));

const columns = [
  {
    id: "Booking No",
    label: "Booking No",
    minWidth: 40,
    fontSize: "14px",
    padding: "5px",
  },
  { id: "Room No", label: "Room No", minWidth: 40 },

  {
    id: "Name",
    label: "Name",
    minWidth: 100,
  },
  {
    id: "contact",
    label: "Contact",
    minWidth: 100,
  },

  {
    id: "Check In",
    label: "Check In",
    minWidth: 130,
  },
  {
    id: "Check Out",
    label: "Check Out",
    minWidth: 130,
  },

  {
    id: "mode",
    label: "Mode",
    minWidth: 120,
  },
  // {
  //   id: "Check In",
  //   label: "Check In",
  //   minWidth: 120,
  // },
  {
    id: "Check Out",
    label: "Check Out",
    minWidth: 100,
  },
  {
    id: "View",
    label: "View",
    minWidth: 120,
  },
];

function TableReserveView({
  booking1,
  Search,
  room,
  view1,
  handleView,
  handleDelete,
  view,
}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      className="table-head  ms-2 "
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 470 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  style={{
                    minWidth: column.minWidth,
                    padding: column.padding,
                    border: "1px solid #ece9e9",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {booking1
              .filter((row) => {
                if (Search === "") {
                  return row;
                } else if (
                  row.checkin.toLowerCase().includes(Search.toLowerCase())
                ) {
                  return row;
                }
              })
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => {
                return a.bookingno - b.bookingno; // or some other logic to determine if a and b should be swapped
              })
              .map((row) => {
                return (
                  <StyledTableRow
                    role="checkbox"
                    tabIndex={-1}
                    style={{
                      border: "1px solid #ece9e9",
                      textAlign: "center",
                    }}
                  >
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      B00{row.bookingno}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomno}
                      <div>
                        {row.newroomno && (
                          <>
                            <b>{row.newroomno}</b>
                          </>
                        )}
                      </div>
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.firstname}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.contact}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkin).format("DD-MM-YYYY / hh:mm a")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {moment(row.checkout).format("DD-MM-YYYY / hh:mm a")}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.mode}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <button
                          className="btn btn-danger btn-sm "
                          data-bs-toggle="modal"
                          data-bs-target="#Modalcheckin"
                        >
                          {row.status === "Checked In" ? "Check Out" : ""}
                        </button>
                        <div
                          className="modal fade"
                          id="Modalcheckin"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content ms-5">
                              <div className="modal-header">
                                <Checkinmodal id={row._id} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    {/* <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <div>
                        <button
                          className="btn btn-danger text-light btn-sm "
                          type="button"
                          onClick={() => handleView(row._id)}
                          data-bs-toggle="modal"
                          data-bs-target="#Modalcheckout"
                        >
                          Check out
                        </button>
                        <div
                          className="modal fade"
                          id="Modalcheckout"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div className="modal-dialog modal-lg">
                            <div className="modal-content ms-5">
                              <Checkoutmodal viewout={view} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TableCell> */}

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      <div className="list-btn-head">
                        <span>
                          <button
                            type="button"
                            className="b-view"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="bi bi-eye-fill "></i>
                          </button>

                          <HandleView view1={view1} />
                        </span>
                        {/* <span>
                          <button
                            type="button"
                            className="b-edit"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="bi bi-pencil "></i>
                          </button>

                          <HandleView view1={view1} />
                        </span> */}
                        {/* <span>
                          <button
                            type="button"
                            className="btn btn-danger bttn-2 ms-3 "
                            onClick={() => handleDelete(row._id, row.roomno)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </span> */}
                      </div>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className="p-0"
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={booking1.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableReserveView;
