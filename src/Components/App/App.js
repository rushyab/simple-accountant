import React from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import { BillProvider } from '../../Context/BillContext';

const App = () => {
  return (
    <div className="bills-container">
      <BillProvider>
        <AddBill />
      </BillProvider>
    </div>
  );
};

export default App;
