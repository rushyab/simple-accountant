import React, { useState, createContext, useEffect } from 'react';

const BillContext = createContext();

const BillProvider = ({ children }) => {
  const [bills, setBills] = useState([]);
  const [selectedCostInterval, setSelectedCostInterval] = useState('Monthly');

  useEffect(() => {
    setBills(JSON.parse(localStorage.getItem('expense-bills')) || []);
  }, [setBills]);

  useEffect(() => {
    console.log(bills);
  }, [bills]);

  const orderAlphabetically = bills => {
    return bills.sort((a, b) =>
      a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 0
    );
  };

  const updateBills = bill => {
    const updatedBills = orderAlphabetically([...bills, bill]);
    localStorage.setItem('expense-bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  const editBills = billToEdit => {
    const otherBills = bills.filter(bill => bill.title !== billToEdit.title);
    const updatedBills = orderAlphabetically([...otherBills, billToEdit]);
    localStorage.setItem('expense-bills', JSON.stringify(updatedBills));
    setBills(updatedBills);
  };

  return (
    <BillContext.Provider
      value={{
        bills,
        updateBills,
        editBills,
        selectedCostInterval
      }}
    >
      {children}
    </BillContext.Provider>
  );
};

export { BillContext, BillProvider };
