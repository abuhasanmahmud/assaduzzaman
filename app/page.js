"use client";

import { useState } from "react";

export default function Home() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState("");

  //add two number
  const addNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      setResult(`Result: ${sum}`);
    } else {
      setResult("Please enter valid numbers");
    }
  };

  //subtrac number
  const [subnumber1, setsubNumber1] = useState("");
  const [subnumber2, setsubNumber2] = useState("");
  const [subresult, setsubResult] = useState("");

  const subtractNumbers = () => {
    const num1 = parseFloat(subnumber1);
    const num2 = parseFloat(subnumber2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const difference = num1 - num2;
      setsubResult(`Result: ${difference}`);
    } else {
      setsubResult("Please enter valid numbers");
    }
  };

  //multiply two number
  const [mulNumber1, setmulNumber1] = useState("");
  const [mulNumber2, setmulNumber2] = useState("");
  const [mulResult, setmulResult] = useState("");

  const multiplyNumbers = () => {
    const num1 = parseFloat(mulNumber1);
    const num2 = parseFloat(mulNumber2);

    if (!isNaN(num1) && !isNaN(num2)) {
      const product = num1 * num2;
      setmulResult(`Result: ${product}`);
    } else {
      setmulResult("Please enter valid numbers");
    }
  };

  //modulas two number
  const [monumber1, setmoNumber1] = useState("");
  const [monumber2, setmoNumber2] = useState("");
  const [moresult, setmoResult] = useState("");

  const calculateModulus = () => {
    const num1 = parseFloat(monumber1);
    const num2 = parseFloat(monumber2);

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
      const modulus = num1 % num2;
      setmoResult(`Result: ${modulus}`);
    } else if (num2 === 0) {
      setmoResult("Cannot divide by zero");
    } else {
      setmoResult("Please enter valid numbers");
    }
  };

  return (
    <>
      <div className="divide-y divide-blue-200">
        <div className="bg-gray-200 py-4 ">
          <h1 className="flex justify-center text-3xl text-blue-700 ">শিখন অভিজ্ঞতা- 4</h1>
          <p className="flex justify-center text-2xl my-1">সমস্যার সমাধান চাই, প্রোগ্রামিং জুড়ি নাই</p>
          <p className="flex justify-center text-2xl">
            সেশন -7:দুটি সংখ্যার ইনপুট নিয়ে করি যোগ, বিয়োগ গুন ভাগ এবং মডুলাস
          </p>
        </div>

        <div className="px-10 bg-gray-200 divide-y divide-blue-200">
          {/* add two number */}
          <div className="bg-gray-200 px-6 py-5 shadow-lg hover:shadow-sm">
            <h2 className="my-2 text-2xl font-bold">Add Two Numbers</h2>
            <label htmlFor="number1" className="mr-2 text-xl font-bold">
              Number 1:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="number1"
              value={number1}
              onChange={(e) => setNumber1(e.target.value)}
              required
            />

            <label htmlFor="number1" className="mx-4 text-xl font-bold">
              Number 2:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="number2"
              value={number2}
              onChange={(e) => setNumber2(e.target.value)}
              required
            />

            <button
              className="ml-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={addNumbers}
            >
              Add Number
            </button>

            <p className="text-3xl font-bold py-3 text-red-600" id="result">
              {result}
            </p>
          </div>

          {/* Subtract  two number */}
          <div className="bg-gray-200 px-6 py-5 shadow-lg hover:shadow-sm">
            <h2 className="my-2 text-2xl font-bold">Subtract Two Numbers</h2>
            <label htmlFor="number1" className="mr-2 text-xl font-bold">
              Number 1:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="subnumber1"
              value={subnumber1}
              onChange={(e) => setsubNumber1(e.target.value)}
              required
            />

            <label htmlFor="number1" className="mx-4 text-xl font-bold">
              Number 2:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="subnumber2"
              value={subnumber2}
              onChange={(e) => setsubNumber2(e.target.value)}
              required
            />

            <button
              className="ml-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={subtractNumbers}
            >
              Subtract Number
            </button>

            <p className="text-3xl font-bold py-3 text-red-600" id="result">
              {subresult}
            </p>
          </div>

          {/*  tow number multiply */}
          <div className="bg-gray-200 px-6 py-5 shadow-lg hover:shadow-sm">
            <h2 className="my-2 text-2xl font-bold">Multiply Two Numbers</h2>
            <label htmlFor="number1" className="mr-2 text-xl font-bold">
              Number 1:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="mulNumber1"
              value={mulNumber1}
              onChange={(e) => setmulNumber1(e.target.value)}
              required
            />

            <label htmlFor="number1" className="mx-4 text-xl font-bold">
              Number 2:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="mulNumber2"
              value={mulNumber2}
              onChange={(e) => setmulNumber2(e.target.value)}
              required
            />

            <button
              className="ml-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={multiplyNumbers}
            >
              Multiply Number
            </button>

            <p className="text-3xl font-bold py-3 text-red-600" id="result">
              {mulResult}
            </p>
          </div>

          {/* modulas tow number  */}
          <div className="bg-gray-200 px-6 py-5">
            <h2 className="my-2 text-2xl font-bold">Modulas Two Numbers</h2>
            <label htmlFor="number1" className="mr-2 text-xl font-bold">
              Number 1:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="monumber1"
              value={monumber1}
              onChange={(e) => setmoNumber1(e.target.value)}
              required
            />

            <label htmlFor="number1" className="mx-4 text-xl font-bold">
              Number 2:
            </label>
            <input
              className="p-1 rounded-lg"
              type="number"
              id="monumber2"
              value={monumber2}
              onChange={(e) => setmoNumber2(e.target.value)}
              required
            />

            <button
              className="ml-4 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={calculateModulus}
            >
              Modulus Number
            </button>

            <p className="text-3xl font-bold py-3 text-red-600" id="result">
              {moresult}
            </p>
          </div>

          {/*  */}
        </div>
      </div>
    </>
  );
}
