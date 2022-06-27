import { useReducer } from "react";

const initialState = 0;
function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return action.payload.count ? state + action.payload.count : state + 1;
    case 'decrement':
      if (state > 0) {
        return action.payload.count ? state - action.payload.count : state - 1
      } else { return state = 0 }

    case 'reset':
      return state = 0;
    default:
      return state;
  }
}

function App() {
  const [count, countDispatch] = useReducer(countReducer, initialState)
  return (
    <div className="m-5">
      {count}
      <div>
        <button onClick={() => countDispatch({ type: 'increment', payload: { count: 50 } })} className="btn btn-primary">+</button>
        <button onClick={() => countDispatch({ type: 'decrement', payload: { count: 50 } })} className="btn btn-error">-</button>

        <button onClick={() => countDispatch({ type: 'reset', payload: { count: 0 } })} className="btn btn-info">reset</button>
      </div>
    </div>
  );
}

export default App;
