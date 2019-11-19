import React, { useContext } from 'react';
import './style.css';
import { BillContext } from '../../Context/BillContext';

const EditBills = () => {
  const { bills, setEditModeEnabled, editBill, deleteBill } = useContext(
    BillContext
  );
  return (
    <div className="edit-bill-container">
      <h6 className="edit-mode-done-btn" onClick={() => setEditModeEnabled(false)}>
        Done
      </h6>
      {bills.map((bill, index) => (
        <div key={index} className="edit-bill-row">
          <div className="edit-bill-row-content">
            <div className="edit-bill-title">{bill.title}</div>
            <input
              type="number"
              className="edit-bill-cost-input"
              value={bill.monthlyCost}
              onChange={e =>
                editBill({
                  title: bill.title,
                  enable: bill.enabled,
                  monthlyCost: e.target.value
                })
              }
            />
            <h6 onClick={() => deleteBill(bill)}>DELETE</h6>
          </div>
          <hr/><hr/>
        </div>
      ))}
    </div>
  );
};

export default EditBills;
