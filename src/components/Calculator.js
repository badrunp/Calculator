import React, { useReducer } from "react";
import actions from "../actions";
import reducer from "../reducer";
import AddDigit from "./AddDigit";
import AddOperation from "./AddOperation";

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="antialiased tracking-tight text-gray-700">
      <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 via-violet-700 to-violet-600">
        <div className="max-w-xs bg-white w-full bg-opacity-20 rounded-lg shadow-md">
          <div className="w-full flex flex-col px-4 text-3xl font-semibold space-y-3 py-6 sm:py-5 text-gray-200">
            <div className="flex items-center justify-end space-x-2 h-9">
              <p className="block overflow-x-auto scrollbar-hide">
                {previousOperand}
              </p>
              <p>{operation}</p>
            </div>
            <div className="flex items-center justify-end h-9">
              <p className="block overflow-x-auto scrollbar-hide">
                {currentOperand}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 px-3 pb-3 text-xl text-gray-200">
            <button
              onClick={() => dispatch({ type: actions.CLEAR })}
              className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25 col-span-2"
            >
              <span>AC</span>
            </button>
            <button
              onClick={() => dispatch({ type: actions.REMOVE_DIGIT })}
              className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25"
            >
              <span>DEL</span>
            </button>
            <AddOperation operand={"+"} dispatch={dispatch} />
            <AddDigit digit={1} dispatch={dispatch} />
            <AddDigit digit={2} dispatch={dispatch} />
            <AddDigit digit={3} dispatch={dispatch} />
            <AddOperation operand={"*"} dispatch={dispatch} />
            <AddDigit digit={4} dispatch={dispatch} />
            <AddDigit digit={5} dispatch={dispatch} />
            <AddDigit digit={6} dispatch={dispatch} />
            <AddOperation operand={"/"} dispatch={dispatch} />
            <AddDigit digit={7} dispatch={dispatch} />
            <AddDigit digit={8} dispatch={dispatch} />
            <AddDigit digit={9} dispatch={dispatch} />
            <AddOperation operand={"-"} dispatch={dispatch} />

            <AddDigit digit={0} dispatch={dispatch} />
            <AddDigit digit={"."} dispatch={dispatch} />
            <button
              onClick={() => dispatch({ type: actions.EVALUATE })}
              className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25 col-span-2"
            >
              <span>=</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
