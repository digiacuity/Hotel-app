import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import RoomView from "./RoomView";
import RoomEdit from "./RoomEdit";
import { useState } from "react";
import Loadingdot from "../../Spinner/Loadingdot";

const columns = [
  { id: "Room No", label: "Room No", minWidth: 100 },
  {
    id: "floor",
    label: "Floor",
    minWidth: 120,
  },
  {
    id: "Room Type",
    label: "Room Type",
    minWidth: 120,
  },

  {
    id: "AC",
    label: "AC",
    minWidth: 110,
  },
  {
    id: "Bed Capacity",
    label: "Bed",
    minWidth: 100,
  },
  {
    id: "Price",
    label: "Price",
    minWidth: 100,
  },
  // {
  //   id: "Room Status",
  //   label: "Room Status",
  //   minWidth: 120,
  // },

  {
    id: "Action",
    label: "Action",
    minWidth: 160,
  },
];

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
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f6fa",
    color: theme.palette.common.black,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    color: theme.palette.common.black,
  },
}));

function TableRoom({
  view,
  rooms,
  formik,
  handleView,
  handleEdit,
  handleDelete,
  viewloading,
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
      className="table-head ms-2"
      sx={{ width: "100%", overflow: "hidden" }}
    >
      <TableContainer sx={{ maxHeight: 473 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  style={{
                    minWidth: column.minWidth,
                    border: "1px solid #d8d8d8",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .sort((a, b) => {
                return a.roomnumber - b.roomnumber; // or some other logic to determine if a and b should be swapped
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
                      {row.roomnumber}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.floor}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomtype}
                    </TableCell>

                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.ac}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.bed}
                    </TableCell>
                    <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.price}
                    </TableCell>

                    {/* <TableCell
                      style={{
                        border: "1px solid #ece9e9",
                        textAlign: "center",
                      }}
                    >
                      {row.roomstatus === "Available" ? (
                        <h6 className="text-success  ">{row.roomstatus}</h6>
                      ) : (
                        <h6 className="text-danger ">{row.roomstatus}</h6>
                      )}
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
                            className=" btn ms-3 btn-info bttn-2"
                            onClick={() => handleView(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#ModalRoomView"
                          >
                            <i className="bi bi-eye-fill"></i>
                          </button>

                          <div
                            className="modal fade"
                            id="ModalRoomView"
                            tabindex="-1"
                            aria-labelledby="ModalRoomViewL"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h5
                                    className="modal-title"
                                    id="ModelRoomViewL"
                                  >
                                    Room Details
                                  </h5>
                                  <button
                                    type="button"
                                    className="btn-close "
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                {viewloading ? (
                                  <Loadingdot />
                                ) : (
                                  <div className="modal-body">
                                    <RoomView view={view} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-warning  bttn-2"
                            onClick={() => handleEdit(row._id)}
                            data-bs-toggle="modal"
                            data-bs-target="#ModalRoomEdit"
                          >
                            <i className="bi bi-pencil-fill"></i>
                          </button>
                          <div
                            className="modal fade"
                            id="ModalRoomEdit"
                            tabindex="-1"
                            aria-labelledby="ModelRoomEdit"
                            aria-hidden="true"
                          >
                            <div className="modal-dialog modal-lg">
                              <div className="modal-content ">
                                <div className="modal-header ">
                                  <h4 className="modal-title ">Room Details</h4>
                                  <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                {viewloading ? (
                                  <Loadingdot />
                                ) : (
                                  <div className="modal-body ">
                                    <RoomEdit formik={formik} />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </span>
                        <span>
                          <button
                            type="button"
                            className="btn btn-danger bttn-2 "
                            onClick={() => handleDelete(row._id)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </span>
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
        count={rooms.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default TableRoom;
