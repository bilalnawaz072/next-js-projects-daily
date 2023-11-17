"use client";

import { useState } from "react";

export default function WeightConverter() {
  const [unitType, setUnitType] = useState("time");
  const [inputUnit, setInputUnit] = useState("seconds");
  const [outputUnit, setOutputUnit] = useState("minutes");
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const convertToBaseUnit = (value, unit) => {
    if (unitType === "time") {
      switch (unit) {
        case "nanosecond":
          return value * 1e-9;
        case "microsecond":
          return value * 1e-6;
        case "millisecond":
          return value * 1e-3;
        case "second":
          return value;
        case "minute":
          return value * 60;
        case "hour":
          return value * 3600;
        case "day":
          return value * 86400;
        case "week":
          return value * 604800;
        case "month":
          return value * 2.628e6;
        case "year":
          return value * 3.154e7;
        case "decade":
          return value * 3.154e8;
        case "century":
          return value * 3.154e9;
        default:
          return value;
      }
    } else if (unitType === "temperature") {
      switch (unit) {
        case "celsius":
          return value + 273.15;
        case "fahrenheit":
          return ((value + 459.67) * 5) / 9;
        case "kelvin":
          return value;
        default:
          return value;
      }
    } else if (unitType === "volume") {
      switch (unit) {
        case "usLiquidGallon":
          return value * 3.78541;
        case "usLiquidQuart":
          return value * 0.946353;
        case "usLiquidPint":
          return value * 0.473176;
        case "usLegalCup":
          return value * 0.24;
        case "usFluidOunce":
          return value * 0.0295735;
        case "usTablespoon":
          return value * 0.0147868;
        case "usTeaspoon":
          return value * 0.00492892;
        case "cubicMeter":
          return value * 1000;
        case "liter":
          return value;
        case "milliliter":
          return value * 0.001;
        case "imperialGallon":
          return value * 4.54609;
        case "imperialQuart":
          return value * 1.13652;
        case "imperialPint":
          return value * 0.568261;
        case "imperialCup":
          return value * 0.284131;
        case "imperialFluidOunce":
          return value * 0.0284131;
        case "imperialTablespoon":
          return value * 0.0177582;
        case "imperialTeaspoon":
          return value * 0.00591939;
        case "cubicFoot":
          return value * 28.3168;
        case "cubicInch":
          return value * 0.0163871;
        default:
          return value;
      }
    }
  };

  const convertFromBaseUnit = (value, unit) => {
    if (unitType === "time") {
      switch (unit) {
        case "nanosecond":
          return value / 1e-9;
        case "microsecond":
          return value / 1e-6;
        case "millisecond":
          return value / 1e-3;
        case "second":
          return value;
        case "minute":
          return value / 60;
        case "hour":
          return value / 3600;
        case "day":
          return value / 86400;
        case "week":
          return value / 604800;
        case "month":
          return value / 2.628e6;
        case "year":
          return value / 3.154e7;
        case "decade":
          return value / 3.154e8;
        case "century":
          return value / 3.154e9;
        default:
          return value;
      }
    } else if (unitType === "temperature") {
      switch (unit) {
        case "celsius":
          return value - 273.15;
        case "fahrenheit":
          return (value * 9) / 5 - 459.67;
        case "kelvin":
          return value;
        default:
          return value;
      }
    } else if (unitType === "volume")
      switch (unit) {
        case "usLiquidGallon":
          return value / 3.78541;
        case "usLiquidQuart":
          return value / 0.946353;
        case "usLiquidPint":
          return value / 0.473176;
        case "usLegalCup":
          return value / 0.24;
        case "usFluidOunce":
          return value / 0.0295735;
        case "usTablespoon":
          return value / 0.0147868;
        case "usTeaspoon":
          return value / 0.00492892;
        case "cubicMeter":
          return value / 1000;
        case "liter":
          return value;
        case "milliliter":
          return value / 0.001;
        case "imperialGallon":
          return value / 4.54609;
        case "imperialQuart":
          return value / 1.13652;
        case "imperialPint":
          return value / 0.568261;
        case "imperialCup":
          return value / 0.284131;
        case "imperialFluidOunce":
          return value / 0.0284131;
        case "imperialTablespoon":
          return value / 0.0177582;
        case "imperialTeaspoon":
          return value / 0.00591939;
        case "cubicFoot":
          return value / 28.3168;
        case "cubicInch":
          return value / 0.0163871;
        default:
          return value;
      }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const baseValue = convertToBaseUnit(e.target.value, inputUnit);
    setOutputValue(convertFromBaseUnit(baseValue, outputUnit));
  };

  const handleOutputChange = (e) => {
    setOutputValue(e.target.value);
    const baseValue = convertToBaseUnit(e.target.value, outputUnit);
    setInputValue(convertFromBaseUnit(baseValue, inputUnit));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-purple-200 to-purple-500">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-transparent">
        Weight Converter
      </h1>
      <div className="mb-4">
        <select
          className="mb-4 p-2 border rounded bg-gradient-to-b from-blue-400 to-pink-500"
          style={{ width: "-webkit-fill-available" }}
          onChange={(e) => setUnitType(e.target.value)}
        >
          <option value="time">Time</option>
          <option value="temperature">Temperature</option>
          <option value="volume">Volume</option>
          {/* Add other unit types here */}
        </select>
        <div className="flex">
          <input
            type="number"
            className="p-2 border rounded h-10 bg-gradient-to-b from-green-500 to-peach-500  "
            value={inputValue}
            onChange={handleInputChange}
          />
          <span className="px-1 py-2 mr-1">=</span>
          <input
            type="number"
            className="p-2 border rounded h-10 bg-gradient-to-b from-green-500 to-peach-500  "
            value={outputValue}
            onChange={handleOutputChange}
            readOnly={false}
          />
        </div>
      </div>

      <div className="flex">
        <div className="mr-2">
          {/* <label className="block text-sm font-medium text-gray-700">
            Input Unit
          </label> */}
          <select
            className="p-2 w-60 border rounded h-10 bg-gradient-to-b from-indigo-400 to-green-600"
            onChange={(e) => setInputUnit(e.target.value)}
          >
            {unitType === "time" ? (
              <>
                <option value="nanosecond">Nanosecond</option>
                <option value="microsecond">Microsecond</option>
                <option value="millisecond">Millisecond</option>
                <option value="second">Second</option>
                <option value="minute">Minute</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="decade">Decade</option>
                <option value="century">Century</option>
                {/* Add other time units here */}
              </>
            ) : unitType === "temperature" ? (
              <>
                <option value="kelvin">Kelvin</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                {/* Add other temperature units here */}
              </>
            ) : (
              <>
                {/* Volume units */}
                <option value="usLiquidGallon">US liquid gallon</option>
                <option value="usLiquidQuart">US liquid quart</option>
                <option value="usLiquidPint">US liquid pint</option>
                <option value="usLegalCup">US legal cup</option>
                <option value="usFluidOunce">US fluid ounce</option>
                <option value="usTablespoon">US tablespoon</option>
                <option value="usTeaspoon">US teaspoon</option>
                <option value="cubicMeter">Cubic meter</option>
                <option value="liter">Liter</option>
                <option value="milliliter">Milliliter</option>
                <option value="imperialGallon">Imperial gallon</option>
                <option value="imperialQuart">Imperial quart</option>
                <option value="imperialPint">Imperial pint</option>
                <option value="imperialCup">Imperial cup</option>
                <option value="imperialFluidOunce">Imperial fluid ounce</option>
                <option value="imperialTablespoon">Imperial tablespoon</option>
                <option value="imperialTeaspoon">Imperial teaspoon</option>
                <option value="cubicFoot">Cubic foot</option>
                <option value="cubicInch">Cubic inch</option>
                {/* Add other volume units here */}
              </>
            )}
          </select>
        </div>

        <div>
          {/* <label className="block text-sm font-medium text-gray-700">
            Output Unit
          </label> */}
          <select
            className="p-2 border w-60 rounded bg-gradient-to-b from-indigo-400 to-green-600"
            onChange={(e) => setOutputUnit(e.target.value)}
          >
            {unitType === "time" ? (
              <>
                <option value="nanosecond">Nanosecond</option>
                <option value="microsecond">Microsecond</option>
                <option value="millisecond">Millisecond</option>
                <option value="second">Second</option>
                <option value="minute">Minute</option>
                <option value="hour">Hour</option>
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
                <option value="decade">Decade</option>
                <option value="century">Century</option>
                {/* Add other time units here */}
              </>
            ) : unitType === "temperature" ? (
              <>
                <option value="kelvin">Kelvin</option>
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                {/* Add other temperature units here */}
              </>
            ) : (
              <>
                {/* Volume units */}
                <option value="usLiquidGallon">US liquid gallon</option>
                <option value="usLiquidQuart">US liquid quart</option>
                <option value="usLiquidPint">US liquid pint</option>
                <option value="usLegalCup">US legal cup</option>
                <option value="usFluidOunce">US fluid ounce</option>
                <option value="usTablespoon">US tablespoon</option>
                <option value="usTeaspoon">US teaspoon</option>
                <option value="cubicMeter">Cubic meter</option>
                <option value="liter">Liter</option>
                <option value="milliliter">Milliliter</option>
                <option value="imperialGallon">Imperial gallon</option>
                <option value="imperialQuart">Imperial quart</option>
                <option value="imperialPint">Imperial pint</option>
                <option value="imperialCup">Imperial cup</option>
                <option value="imperialFluidOunce">Imperial fluid ounce</option>
                <option value="imperialTablespoon">Imperial tablespoon</option>
                <option value="imperialTeaspoon">Imperial teaspoon</option>
                <option value="cubicFoot">Cubic foot</option>
                <option value="cubicInch">Cubic inch</option>
                {/* Add other volume units here */}
              </>
            )}
          </select>
        </div>
      </div>
    </div>
  );
}
