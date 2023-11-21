import React, { useState, useEffect } from 'react';
import "./CSS/Feepayments.css"; 

const FeePayments = () => {
  const [feePayments, setFeePayments] = useState([]);

  useEffect(() => {
    // Fetch fee payments data from the server
    fetch('http://localhost:3001/feepayments') // Adjust the endpoint URL according to your server
      .then(response => response.json())
      .then(data => {
        console.log(data); // Check the data structure in the console
        setFeePayments(data);
      })
      .catch(error => console.error('Error fetching fee payments:', error));
  }, []);

  return (
    <div className='feepayments'>
      <h2>Check Fee Payment Details</h2>

      <div>
        <table>
          <thead>
            <tr className='row-headfp'>
              <th>Fee_id</th>
              <th>Amount</th>
              <th>Student_id</th>
              <th>Room_no</th>
              <th>Pending Month</th>
            </tr>
          </thead>
          <tbody>
            {feePayments.map(payment => (
              <tr key={payment.Fee_id} className="rowfp">
                <td className='td1'>{payment.Fee_id}</td>
                <td className='td2'>{payment.Amount}</td>
                <td className='td3'>{payment.Student_id}</td>
                <td className='td4'>{payment.Room_no}</td>
                <td className='td5'>{payment.Month}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeePayments;
