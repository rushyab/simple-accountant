import React, { useContext } from 'react';
// import './App.css';
import AddBill from './AddBill';
import { BillContext } from '../Context/BillContext';
import BillList from './BillList';
import BillTotal from './BillTotal';
import BillOptions from './BillOptions/BillOptions';
import EditBills from './EditBills';

const App = () => {
  const { editModeEnabled } = useContext(BillContext);
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', minHeight: "100vh" }}>
      <div className="container py-4 text-light">
        <div
          className="p-4 mx-auto"
          style={{
            boxShadow: '0 0 15px black',
            maxWidth: "550px",
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
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
      </div>
    </div>
  );
};

export default App;
