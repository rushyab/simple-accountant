import React, { useContext, useState } from 'react';
import './style.css';

const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');

  const billObjectValid = () => {
    // newBillCost is not empty and is a number
    const costValid = newBillCost && Number.parseFloat(newBillCost);

    // newBillTitle is not empty and does not have all white spaces
    const titleValid =
      newBillTitle && newBillTitle.split('').find(char => char !== ' ');
      
    return titleValid && costValid;
  };

  const updateBill = () => {
    console.log(newBillTitle, newBillCost);
  };

  const clearForm = () => {
    setNewBillTitle('');
    setNewBillCost('');
  };

  return (
    <div className="add-bill-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (billObjectValid()) {
            updateBill();
            clearForm();
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter bill title"
          className="add-bill-form-control form-control"
          onChange={e => setNewBillTitle(e.target.value)}
          value={newBillTitle}
        />
        <input
          type="number"
          placeholder="Enter bill montly cost"
          className="add-bill-form-control form-control"
          onChange={e => setNewBillCost(e.target.value)}
          value={newBillCost}
        />
        <button type="submit" className="add-bill-form-control btn btn-primary">
          Add Bill
        </button>
      </form>
    </div>
  );
};

export default AddBill;
