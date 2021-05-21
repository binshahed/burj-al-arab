import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import React, { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import { Button } from "@material-ui/core";
import Bookings from "./Bookings/Bookings";

const Book = () => {
  const { bedType } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(),
  });
  const handleCheckInDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };
  const handleCheckOutDate = (date) => {
    const newDates = { ...selectedDate };
    newDates.checkOut = date;
    setSelectedDate(newDates);
  };

  const handleBooking = () => {
    const newBooking = { ...loggedInUser, ...selectedDate };
    fetch("http://localhost:5000/addBooking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log(newBooking);
  };
  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      <h1>
        Hello {loggedInUser.name} lets Book a {bedType} Room
      </h1>

      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Check In"
            onChange={handleCheckInDate}
            value={selectedDate.checkIn}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Check Out"
            format="dd/MM/yyyy"
            onChange={handleCheckOutDate}
            value={selectedDate.checkOut}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </Grid>
        <Button onClick={handleBooking} variant="contained" color="primary">
          Book Now
        </Button>
      </MuiPickersUtilsProvider>
      <Bookings />
    </div>
  );
};

export default Book;
