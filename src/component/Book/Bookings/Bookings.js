import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";

const Bookings = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookings?email="+loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  });
  return (
    <div>
      <h1>total data {bookings.length}</h1>
      {bookings.map((book) => (
        <div
          style={{ border: "1px solid #000", margin: "5px", padding: "20px" }}
        >
          <p>email: {book.email}</p>
          <p>Check In date: {book.checkIn}</p>
          <p>Check Out Date: {book.checkOut}</p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;


