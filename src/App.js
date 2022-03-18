import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import PlanComponent from './components/PlanComponent';

function App() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/v1/plans')
      .then(response => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        console.log(data.results);
        setPlans(data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='App'>
      <h1>Choose a Plan</h1>
      {
        plans.length ?
          <div className='plan-container'>
            <div className='plan-item'>
              <div className='item-title'></div>
              <div className='item-check'>General</div>
              <div className='item-check'>Specialist</div>
              <div className='item-check'>Physiotherapy</div>
            </div>
            {plans.map(plan => <PlanComponent key={plan.id} plan={plan} />)}
          </div>
          :
          <div>No Plans</div>
      }
    </div>
  );
}

export default App;
