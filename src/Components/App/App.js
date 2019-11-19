import React, { useContext } from 'react';
import './App.css';
import AddBill from '../AddBill/AddBill';
import { BillContext } from '../../Context/BillContext';
import BillList from '../BillList/BillList';
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';
import EditBills from '../EditBills/EditBills';

const App = () => {
  const { editModeEnabled } = useContext(BillContext);
  return (
    <div className="bills-container">
      {!editModeEnabled ? (
        <span>
          <BillOptions />
          <AddBill />
          <BillTotal />
          <BillList />
        </span>
      ) : (
        <EditBills />
      )}
    </div>
  );
};

export default App;
