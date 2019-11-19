import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import { BillProvider } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';

const App = () => {
  return (
    <div className="bills-container">
      <BillProvider>
        <BillOptions />
        <AddBill />
        <BillTotal />
        <BillList />
      </BillProvider>
    </div>
  );
};

export default App;
