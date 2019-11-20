import React, { useContext } from 'react';
import { BillContext } from '../Context/BillContext';

const EditBills = () => {
  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(
    BillContext
  );
  return (
    <div className="container" style={{ maxWidth: '600px' }}>
      <div
        className="btn btn-dark text-warning"
        onClick={() => setEditModeEnabled(false)}
        style={{ cursor: 'pointer' }}
      >
        Done
      </div>
      <div
        className="div p-3 my-3"
        style={{
          boxShadow: '0 0 20px black',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          borderRadius: '1rem'
        }}
      >
        {bills.map((bill, index) => (
          <div key={index} className="row my-3">
            {/* <div className=""> */}
            <div className="col-3">
              <p className="lead">{bill.title}</p>
            </div>
            <div className="col-6">
              <input
                type="number"
                className="rounded p-1 w-75 mx-2"
                value={bill.monthlyCost}
                onChange={e =>
                  editBill({
                    title: bill.title,
                    enabled: bill.enabled,
                    monthlyCost: e.target.value
                  })
                }
              />
            </div>
            <div className="col-3">
              <div
                className="btn btn-danger text-dark"
                onClick={() => {
                  deleteBill(bill);
                  if (bills.length === 1) setEditModeEnabled(false);
                }}
                style={{ cursor: 'pointer' }}
              >
                <i className="fas fa-trash-alt fa-lg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditBills;
