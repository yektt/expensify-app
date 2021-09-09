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
const incrementCount = ({ incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy 
});

const decrementBy = ({decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

// Reducers
// 1. Reducers are pure function: output only determined by that could pass it in.

// // this is not a pure function because the output is also
// // depending a global variable.
// let a = 10;
// const add = (b) => {
//   return a + b;
// };

// // this is not a pure function either
// // because it interacts with outside of its scope.
// let result;
// const add = (a, b) => {
//   result = a + b;
// };

// 2. Never change state or action!
// if there are objects, I do not want to mutate them.
// Instead, we should just be reading off of both of those things, 
// returning an object that represents the new state.

// Do not change state or action in Reducers!

const countReducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
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
};

const store = createStore(countReducer);

// // with store.subscribe, we can watch over the store
// // whenever there is a change, it will be called.
// store.subscribe(() => {
//   console.log(store.getState());
// });

// // if we want to stop to watching store, 
// // assign the subscribe function to a variable
// // when you want to stop it, you need to call the variable as a function.
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// // Actions - nothing more than an object that gets sent to the store
// // Actions allow us to change the store state.
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementBy());

store.dispatch(decrementBy( {decrementBy: 10} ));

// // if you will activate this code,
// // the subscribe will stop
// unsubscribe();

store.dispatch(setCount({ count: 101 }));
