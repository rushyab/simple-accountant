import React, { useContext, useState } from 'react';
import { BillContext } from '../../Context/BillContext';
import './style.css';

const BillTotal = () => {
  const { bills, selectedCostInterval } = useContext(BillContext);

  const moneyInteralTransform = cost => {
    const monthlyCost = Number.parseFloat(cost);
    // console.log(cost, selectedCostInterval);

    switch (selectedCostInterval) {
      case 'Monthly':
        return monthlyCost;

      case 'Yearly':
        return monthlyCost * 12;

      case 'Weekly':
        return (monthlyCost * 12) / 52;

      case 'Daily':
        return (monthlyCost * 12) / 365;

      default:
        return 0;
    }
  };

  return (
    <>
      <div className="bill-total-container">
        {selectedCostInterval} bill cost:
        <span className="total-cost">
          {'$' +
            bills
              .reduce((acc, val) => {
                return val.enabled
                  ? moneyInteralTransform(val.monthlyCost) + acc
                  : acc;
              }, 0)
              .toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default BillTotal;
