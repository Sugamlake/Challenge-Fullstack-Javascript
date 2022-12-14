//Import React elements & axios config
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../config/axios";

//Create a date formater function
const formatDate = (date) => {
  //generate a new date based on the date passed as a parameter
  const newDate = new Date(date);
  //get the day, month and year from the new date
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1; //months start at 0
  const day = newDate.getDate();

  //return the date in the format dd/mm/yyyy
  return `${year}/${month}/${day}`;
};

//Create a Table component with movements and consult state as props
const Table = ({ movements, setConsult }) => {
  const [lastMovements, setLastMovements] = useState(movements);

  //Get the last 10 movements from the movements array
  useEffect(() => {
    const last = movements.slice(-10);
    setLastMovements(last);
  }, []);

  //if the movements array is empty return nothing
  if (movements.length === 0) {
    return null;
  }

  // Deletes a movement from database
  const removeMovement = (id) => {
    axiosClient
      .delete(`/movements/${id}`)
      .then((res) => {
        setConsult(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h3>Summary</h3>
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            //Iterate over the movements array and display the data
            lastMovements.map((movement) => (
              <tr key={movement.id}>
                <td>{movement.concept}</td>
                <td>{movement.amount}</td>
                <td>{formatDate(movement.date)}</td>
                <td>{movement.type}</td>
                <td>
                  {/* Display a button to edit the movement */}
                  <div className="btn">
                    <Link to={`/movement/${movement.id}`}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="-14 0 50 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                        />
                      </svg>
                    </Link>
                  </div>
                </td>

                <td>
                  {/* Display a button to delete the movement */}
                  <div
                    onClick={() => removeMovement(movement.id)}
                    className="btn"
                  >
                    <Link to={"/"}>
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="-14 0 75 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
