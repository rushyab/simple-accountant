import React, { useContext } from 'react';
import { BillContext } from '../Context/BillContext';

const BillList = () => {
  const { bills, editBill, setEditModeEnabled } = useContext(BillContext);

  return (
    <>
      {bills.length === 0 ? (
        <></>
      ) : (
        <div className="container" style={{ maxWidth: '300px' }}>
          <div
            className="btn btn-dark text-warning my-3"
            onClick={() => setEditModeEnabled(true)}
            style={{ cursor: 'pointer' }}
          >
            Edit
          </div>

          {bills.map((bill, index) => {
            return (
              <div
                className="mx-2"
                style={{ cursor: 'pointer', letterSpacing: '0.1em' }}
                key={index}
                onClick={() =>
                  editBill({
                    title: bill.title,
                    monthlyCost: bill.monthlyCost,
                    enabled: !bill.enabled
                  })
                }
              >
                <input
                  type="checkbox"
                  checked={bill.enabled}
                  onChange={() =>
                    editBill({
                      title: bill.title,
                      monthlyCost: bill.monthlyCost,
                      enabled: !bill.enabled
                    })
                  }
                />
                <div className="d-inline lead ml-2">
                  {bill.title} - &#8360; {bill.monthlyCost}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default BillList;
