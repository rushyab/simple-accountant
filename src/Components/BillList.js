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
            className="btn btn-warning my-3"
            onClick={() => setEditModeEnabled(true)}
            style={{cursor: 'pointer'}}
          >
            Edit
          </div>
          
            {bills.map((bill, index) => {
              return (
                <div className="mx-2" key={index}>
                  <input
                    type="checkbox"
                    className=""
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
                    {bill.title} - ${bill.monthlyCost}
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
