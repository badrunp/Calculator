import React from "react";

const Calculator = () => {
  return (
    <div className="antialiased tracking-tight text-gray-700">
      <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-200 via-violet-700 to-violet-600">
        <div className="max-w-xs bg-white w-full bg-opacity-20 rounded-lg shadow-md">
          <div className="w-full flex flex-col px-4 text-3xl font-semibold space-y-3 py-6 sm:py-5 text-gray-200">
            <div className="flex items-center justify-end space-x-2">
              <p>123</p>
              <p>+</p>
            </div>
            <div className="flex items-center justify-end">859</div>
          </div>
          <div className="grid grid-cols-4 gap-2 px-3 pb-3 text-xl text-gray-200">
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25 col-span-2">
              <span>AC</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>DEL</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>+</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>1</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>2</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>3</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>*</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>4</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>5</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>6</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>/</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>7</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>8</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>9</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>-</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>.</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25">
              <span>0</span>
            </button>
            <button className="focus:outline-none flex items-center justify-center bg-white bg-opacity-10 shadow-sm rounded-md py-2 px-2 sm:px-4 h-16 hover:bg-opacity-25 transition duration-150 ease-in-out focus:bg-opacity-25 col-span-2">
              <span>=</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
