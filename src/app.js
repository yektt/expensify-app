import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import getVisibleExpenses from "./selectors/expenses";
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "./actions/filters";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill' }));
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render( jsx, document.getElementById('app'));
