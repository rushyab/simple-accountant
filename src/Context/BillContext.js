import React, { useState, createContext, useEffect } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState('Monthly');
  const [editModeEnabled, setEditModeEnabled] = useState(false);

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem('expense-bills')) || []);
  }, [setBills]);

  const orderAlphabetically = bills => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  const updateBill = bill => {
    const updatedBills = orderAlphabetically([...bills, bill]);
    localStorage.setItem('expense-bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const editBill = billToEdit => {
    const otherBills = bills.filter(bill => bill.title !== billToEdit.title);
    const updatedBills = orderAlphabetically([...otherBills, billToEdit]);
    localStorage.setItem('expense-bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const deleteBill = (billToDelete) => {
    const filteredBills = bills.filter(bill => bill.title !== billToDelete.title);
    localStorage.setItem('expense-bills', JSON.stringify(filteredBills));
    setBills(filteredBills);
  }

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBill,
        editBill,
        selectedCostInterval,
        setSelectedCostInterval,
        editModeEnabled,
        setEditModeEnabled,
        deleteBill
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
