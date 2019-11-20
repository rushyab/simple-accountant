import React, { useContext } from 'react';
import { BillContext } from '../Context/BillContext';

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
    <div className="mx-auto text-center" style={{ maxWidth: '400px' }}>
      <div className="h3 my-2 ">
        {selectedCostInterval} bill cost:
        <span className="font-weight-bold">
          {' '}
          &#8360;{' '}
          {bills
            .reduce((acc, val) => {
              return val.enabled
                ? moneyInteralTransform(val.monthlyCost) + acc
                : acc;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
      <div className="h3 my-2">
        {selectedCostInterval} saved:
        <span className="font-weight-bolder">
          {' '}
          &#8360;{' '}
          {bills
            .reduce((acc, val) => {
              return !val.enabled
                ? moneyInteralTransform(val.monthlyCost) + acc
                : acc;
            }, 0)
            .toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default BillTotal;
