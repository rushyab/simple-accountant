import React, { useContext, useState } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const BillList = () => {
  const { bills, editBills } = useContext(BillContext);

  return (
    <div className="bill-list-container">
      {bills.map((bill, index) => {
        return (
          <div className="bill-list-row" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              checked={bill.enabled}
              onChange={() =>
                editBills({
                  title: bill.title,
                  monthlyCost: bill.monthlyCost,
                  enabled: !bill.enabled
                })
              }
            />
            <div className="bill-list-row-content">
              {bill.title} - ${bill.monthlyCost}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BillList;
