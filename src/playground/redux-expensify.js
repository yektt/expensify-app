import { createStore, combineReducers } from "redux";
// combineReducers will allow us to create multiple 
// functions that define how our redux app changes.

const demoState = {
  expenses: [{
    id: '1',
    description: 'January rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }], 
  filters: {
    text: 'rent', 
    sortBy: 'amount', // date or amount can be written for sortBy
    startDate: undefined,
    endDate: undefined
  }
};