import React, { useContext, useState } from 'react';
import { BillContext } from '../Context/BillContext';

const AddBill = () => {
  const [newBillTitle, setNewBillTitle] = useState('');
  const [newBillCost, setNewBillCost] = useState('');

  const { updateBill } = useContext(BillContext);

  const billObjectValid = () => {
    // newBillCost is not empty and is a number
    const costValid = newBillCost && Number.parseFloat(newBillCost);

    // newBillTitle is not empty and does not have all white spaces
    const titleValid =
      newBillTitle && newBillTitle.split('').find(char => char !== ' ');

    return titleValid && costValid;
  };

  const clearForm = () => {
    setNewBillTitle('');
    setNewBillCost('');
  };

  return (
    <div className="container" style={{maxWidth:"450px"}}>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (billObjectValid()) {
            updateBill({
              title: newBillTitle,
              monthlyCost: newBillCost,
              enabled: true
            });
            clearForm();
          }
        }}
      >
        <input
          type="text"
          placeholder="Enter bill title"
          className="text-center w-100 p-2 mb-3 form-control border-warning"
          onChange={e => setNewBillTitle(e.target.value)}
          value={newBillTitle}
        />
        <input
          type="number"
          placeholder="Enter bill montly cost"
          className="text-center w-100 p-2 mb-3 form-control border-warning"
          onChange={e => setNewBillCost(e.target.value)}
          value={newBillCost}
        />
        <button type="submit" className="text-center w-100 p-2 mb-2 btn btn-dark text-warning">
          Add Bill
        </button>
      </form>
    </div>
  );
};

export default AddBill;
