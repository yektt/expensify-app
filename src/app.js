import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'water bill', amount: 500}));
const expenseTwo = store.dispatch(addExpense({description: 'gas bill', amount: 1500}));

store.dispatch(setTextFilter('bill'));
store.dispatch(setTextFilter('water'));

ReactDOM.render( <AppRouter />, document.getElementById('app'));
