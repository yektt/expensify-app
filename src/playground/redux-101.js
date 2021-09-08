import {createStore} from 'redux';

// Action generators: are function that return action objects

// // destructring the function object
// const add = ({ a, b }, c) => {
//   return a + b + c;
// };

// console.log(add({ a:1, b:12 }, 100));

// why we put a default object as payload = {} ?
// because if we will only write payload there,
// when incrementCount will be called without parameters,
// it will throw an error (it will try to find payload.incrementBy)
const incrementCount = ( { incrementBy = 1}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy // or only incrementBy will be enough
});

const store = createStore((state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      };
    default: 
      return state;
  }
});

store.dispatch({
  type: 'SET',
  count: 101
});

// // with store.subscribe, we can watch over the store
// // whenever there is a change, it will be called.
// store.subscribe(() => {
//   console.log(store.getState());
// });

// if we want to stop to watching store, 
// assign the subscribe function to a variable
// when you want to stop it, you need to call the variable as a function.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - nothing more than an object that gets sent to the store
// Actions allow us to change the store state.
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

store.dispatch({
  type: 'DECREMENT',
  decrementBy: 10
});

// // if you will activate this code,
// // the subscribe will stop
// unsubscribe();

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});
