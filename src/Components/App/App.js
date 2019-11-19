import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import { BillProvider } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';

const App = () => {
  return (
    <div className="bills-container">
      <BillProvider>
        <AddBill />
        <BillTotal />
        <BillList />
      </BillProvider>
    </div>
  );
};

export default App;
