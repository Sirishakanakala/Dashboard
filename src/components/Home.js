import React, { useState } from "react";
import { BarChart, Bar, XAxis, Legend, ReferenceLine, ResponsiveContainer } from "recharts";
import StudentsData from "../Data/StudentsData.js";
import FeeReceivedData from "../Data/FeeReceivedData.js";
import { BiFilter } from "react-icons/bi";
import ScheduleData from "../Data/ScheduleData.js";
import RandomStudentsData from "../Data/RandomStudentsData.js";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("Last 3 months");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const activeStudents = RandomStudentsData.length;
  console.log("length: " ,activeStudents);
  const ActiveCoaches = 5;
  const totalFeeReceived = RandomStudentsData.reduce((total, student) => total + student.fee_received, 0);

  // Filtered data based on selected option
  const filteredStudentsData =
    selectedOption === "Last 3 months"
      ? StudentsData.slice(-3)
      : selectedOption === "Last 6 months"
      ? StudentsData.slice(-6)
      : StudentsData;

  const filteredFeeReceivedData =
    selectedOption === "Last 3 months"
      ? FeeReceivedData.slice(-3)
      : selectedOption === "Last 6 months"
      ? FeeReceivedData.slice(-6)
      : FeeReceivedData;

  const filteredScheduleData =
    selectedFilter === "All"
      ? ScheduleData
      : ScheduleData.filter((item) => item.type === selectedFilter);

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="container ">
      <div className="main-cards mb-0 ">
        <div className="card bg-gray-100 px-1 py-1">
          <div className="card-inner text-black">
            <div>
              <h6>Active Students</h6>
              <h3>{activeStudents}</h3>
              </div>
            <div>
              <h6>Active Coaches</h6>
              <h3>{ActiveCoaches}</h3>
            </div>
          </div>
        </div>
        <div className="card bg-gray-100 px-1 py-1">
          <div className="card-inner text-black ">
            <h6>Estimated Revenue potential for this month</h6>
            <h3 className="text-black">{totalFeeReceived/100000}L</h3>
          </div>
          <div>
            <div className="progress-container mt-2 flex">
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: "100%" }}
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="progress1 ml-2">
                <div
                  className="progress-bar1"
                  style={{ width: "60%" }}
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -- chart heading */}

      <div className="flex flex-col lg:flex-row justify-between items-center text-black px-4 py-1 mb-1  bg-gray-100">
        <h4 className="flex-none">Month-on-Month growth</h4>
        <select
          className="flex-none w-48 h-8 py-1 px-4 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={handleSelectChange}
        >
          <option>Last 3 months</option>
          <option>Last 6 months</option>
          <option>Total</option>
        </select>
      </div>

      {/* chart */}
      <div className="flex flex-col lg:flex-row justify-between items-center text-black px-4 py-2 bg-gray-100">
        {/* revenue chart */}
        <div className="lg:w-1/2 barchart">
          <h2 className="text-grey-400">Revenue</h2>
          <ResponsiveContainer width="100%" height={200}>
          <BarChart 
            className="barchart"
            width={500}
            height={200}
            data={filteredFeeReceivedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <Legend />
            <Bar dataKey="FeeReceived" fill="#455a64" />
          </BarChart>
          </ResponsiveContainer>
        </div>
       {/* students chart */}
        <div className="lg:w-1/2 mt-4 lg:mt-0 barchart">
          <h2>Students</h2>
          <ResponsiveContainer width="100%" height={200}>
          <BarChart
            width={500}
            height={200}
            data={filteredStudentsData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <Legend />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="ActiveStudents" fill="#455a64" />
            <Bar dataKey="DropOutStudents" fill="#787f82" />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* chart */}

      {/* Schedule */}
      <div className="flex flex-col md:flex-row justify-between items-center text-black  bg-gray-100 px-4 py-2 mt-1">
        <h4 className="mb-2 md:mb-0">Upcoming Schedule</h4>
        <div className="flex items-center  flex-wrap space-x-2 md:flex-nowrap">
          <button
            className="py-1 px-4 md:py-0 md:px-8 mb-2 md:mb-0 bg-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-700 hover:text-white"
            onClick={() => handleFilterChange("All")}
          >
            All
          </button>
          <button
            className="py-1 px-4 md:py-0 md:px-8 mb-2 md:mb-0 bg-gray-300  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-700 hover:text-white"
            onClick={() => handleFilterChange("c")}
          >
            Classes
          </button>
          <button
            className="py-1 px-4 md:py-0 md:px-8 mb-2 md:mb-0  bg-gray-300  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-700 hover:text-white"
            onClick={() => handleFilterChange("m")}
          >
            Meetings
          </button>
          <button
            className="py-1 px-4 md:py-0 md:px-8  mb-2 md:mb-0 bg-gray-300  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 hover:bg-gray-700 hover:text-white"
            onClick={() => handleFilterChange("e")}
          >
            Events
          </button>
          <BiFilter className=" py-1 px-4 md:py-0 md:px-8  mb-2 md:mb-0 text-gray-400 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      <div>
        <div className="overflow-hidden border rounded-lg mt-1 bg-gray-200">
          <div className="flex flex-col bg-gray-100">
            {filteredScheduleData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between bg-gray-100 px-4 py-3 border-b"
              >
                <div className="text-sm text-gray-900 w-[10px]">
                  {item.type && (
                    <div className="rounded-full h-6 w-6 flex items-center justify-center bg-gray-400 text-white">
                      {item.type}
                    </div>
                  )}
                </div>
                <div className="text-sm text-gray-900 w-[80px] text-left ">
                  {item.date}
                </div>
                <div className="text-sm text-gray-900 w-[150px] text-left">
                  {item.time}
                </div>
                <div className="text-sm text-gray-900 w-[650px] text-left">
                  {item.name}
                </div>
                <div className="text-sm text-gray-900 w-[10px] text-left">
                  {item.Members}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Schedule */}
    </div>
  );
}
