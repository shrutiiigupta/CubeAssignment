import React, { useState } from 'react';
import CustomerList from './Components/CustomerList';
import CustomerDetails from './Components/CustomerDetails';
import './App.css';

// Sample data 
const customers = [
  { id: 1, name: 'Shruti Gupta', title: 'CEO', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', photos: [] },
  { id: 2, name: 'Joey Tribbani', title: 'CTO', details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores e', photos: [] },
  { id: 3, name: 'Phoebe Buffay', title: 'COO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 4, name: 'Ted Mosby', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 5, name: 'Georgina Sparks', title: 'Developer', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 6, name: 'Robin Scherbasky', title: 'Backend Dev', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 7, name: 'Lily', title: 'Quality Tester', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 8, name: 'Marshall', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 9, name: 'Barney', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 10, name: 'Ken Adams', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 11, name: 'Regina Phalange', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 12, name: 'Blair Waldorf', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 13, name: 'Sheldon', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 14, name: 'Penny', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  { id: 15, name: 'Leonard', title: 'CFO', details: 'Lorem Ipsum is simply dummy text...', photos: [] },
  // Add more 
];

const App = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState(customers[0].id);

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId);

  return (
    <div className="app">
      <h1>Customer Details and Images</h1>
      <div className="content">
        <CustomerList
          customers={customers}
          onSelectCustomer={setSelectedCustomerId}
          selectedCustomerId={selectedCustomerId}
        />
        <CustomerDetails customer={selectedCustomer} />
      </div>
    </div>
  );
};

export default App;
