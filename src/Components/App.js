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
    <div className="vh-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
      <div className="container h-100 pt-3 pt-lg-5 text-light">
        <div
          className="p-4 mx-auto"
          style={{
            boxShadow: '0 0 15px black',
            maxWidth: "500px",
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
