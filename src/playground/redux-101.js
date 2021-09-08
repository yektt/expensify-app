import {createStore} from 'redux';

const store = createStore((state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT': 
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
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

store.dispatch({
  type: 'DECREMENT'
});

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
