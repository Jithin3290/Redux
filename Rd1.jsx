import { createStore }  from "redux";

const initialState = { count: 0 };
function Rd1(){
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
//action creator
function increment() {
  return { type: "INCREMENT" };
}

function decrement() {
  return { type: "DECREMENT" };
}


const store = createStore(counterReducer);

// Log initial state
console.log("Initial State:", store.getState());

// Subscribe to state changes
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// Dispatch actions
store.dispatch(increment()); // +1
store.dispatch(increment()); // +1
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())

}
export default Rd1

// same reducer below without action creator

// import { createStore } from "redux";

// const initialState = { count: 0 };

// function Rd1() {
//   // Reducer
//   function counterReducer(state = initialState, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, count: state.count + 1 };
//       case "DECREMENT":
//         return { ...state, count: state.count - 1 };
//       default:
//         return state;
//     }
//   }

//   // Create store
//   const store = createStore(counterReducer);

//   // Log initial state
//   console.log("Initial State:", store.getState());

//   // Subscribe to state changes
//   store.subscribe(() => {
//     console.log("Updated State:", store.getState());
//   });

//   // Dispatch actions directly (no action creators)
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "INCREMENT" });
//   store.dispatch({ type: "INCREMENT" });

//   store.dispatch({ type: "DECREMENT" });
//   store.dispatch({ type: "DECREMENT" });
//   store.dispatch({ type: "DECREMENT" });
//   store.dispatch({ type: "DECREMENT" });
//   store.dispatch({ type: "DECREMENT" });
// }

// export default Rd1;


// using payload

// import { createStore } from "redux";

// const initialState = { count: 0 };

// function Rd1() {
//   // Reducer that handles payload
//   function counterReducer(state = initialState, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, count: state.count + action.payload };
//       case "DECREMENT":
//         return { ...state, count: state.count - action.payload };
//       default:
//         return state;
//     }
//   }

//   // Action creators with payload
//   function increment(amount) {
//     return { type: "INCREMENT", payload: amount };
//   }

//   function decrement(amount) {
//     return { type: "DECREMENT", payload: amount };
//   }

//   const store = createStore(counterReducer);

//   // Log initial state
//   console.log("Initial State:", store.getState());

//   // Subscribe to state changes
//   store.subscribe(() => {
//     console.log("Updated State:", store.getState());
//   });

//   // Dispatch actions with payload
//   store.dispatch(increment(2)); // +2 → 2
//   store.dispatch(increment(3)); // +3 → 5
//   store.dispatch(decrement(1)); // -1 → 4
//   store.dispatch(increment(5)); // +5 → 9
//   store.dispatch(decrement(4)); // -4 → 5
// }

// export default Rd1;




// import { createStore } from "redux";

// const initialState = { count: 0 };

// function Rd1() {
//   // Reducer that uses payload
//   function counterReducer(state = initialState, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, count: state.count + action.payload };
//       case "DECREMENT":
//         return { ...state, count: state.count - action.payload };
//       default:
//         return state;
//     }
//   }

//   const store = createStore(counterReducer);

//   // Log initial state
//   console.log("Initial State:", store.getState());

//   // Subscribe to state changes
//   store.subscribe(() => {
//     console.log("Updated State:", store.getState());
//   });

//   // Dispatching actions directly with payload
//   store.dispatch({ type: "INCREMENT", payload: 2 }); // +2 → 2
//   store.dispatch({ type: "INCREMENT", payload: 5 }); // +5 → 7
//   store.dispatch({ type: "DECREMENT", payload: 3 }); // -3 → 4
//   store.dispatch({ type: "DECREMENT", payload: 1 }); // -1 → 3
// }

// export default Rd1;