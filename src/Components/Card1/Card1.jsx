import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaRoad } from "react-icons/fa";
import { GrCompliance } from "react-icons/gr";
import IMG2 from "./IMG/IMG2.png";
import IMG1 from "./IMG/IMG1.png";
import IMG3 from "./IMG/IMG3.png";
import PIZZA from "./IMG/PIZZA.png";
const Card1 = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [3345, 2245],
            backgroundColor: ["lightgrey", "purple"],
          },
        ],
      },
      options: {
        cutout: "80%", // Adjust the size of the center hole
        plugins: {
          doughnut3d: {
            enabled: true,
            frames: 60,
            frameAnimate: true,
            size: {
              height: 600,
            },
          },
        },
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  const chartRef1 = useRef(null);
  const chartInstance1 = useRef(null);

  useEffect(() => {
    if (chartInstance1.current) {
      chartInstance1.current.destroy();
    }
    const myChartRef1 = chartRef1.current.getContext("2d");

    chartInstance1.current = new Chart(myChartRef1, {
      type: "line",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursdat", "Friday"],
        datasets: [
          {
            data: [10, 5, 8, 2.6, 4],
            backgroundColor: ["violet"],
          },
        ],
      },
    });
    return () => {
      if (chartInstance1.current) {
        chartInstance1.current.destroy();
      }
    };
  }, []);

  const chartRef2 = useRef(null);
  const chartInstance2 = useRef(null);

  useEffect(() => {
    if (chartInstance2.current) {
      chartInstance2.current.destroy();
    }
    const myChartRef2 = chartRef2.current.getContext("2d");

    chartInstance2.current = new Chart(myChartRef2, {
      type: "bar",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "Octomber",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [150, 200, 50, 215, 45, 58, 23, 127, 154, 189, 369, 108],
            backgroundColor: ["purple"],
          },
        ],
      },
      options: {
        cutout: "80%", // Adjust the size of the center hole
        maintainAspectRatio: false,
        height: 900,
        scales: {
          x: {
            barPercentage: 0.2, // Adjust the width of each bar (80% of the available space)
            categoryPercentage: 0.5, // Adjust the spacing between bars (60% of the available space)
          },
        },
      },
    });
    return () => {
      if (chartInstance2.current) {
        chartInstance2.current.destroy();
      }
    };
  }, []);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <div className="lg:ml-28 lg:flex grid-col-1  w-full gap-6 justify-center items-center ">
        <div className="lg:max-w-[900px] py-8  bg-white w-full lg:flex justify-around shadow-md rounded-xl">
          <div className="flex-col justify-center items-center flex mx-auto">
            <div className="w-full justify-center items-center lg:justify-start lg:items-start flex flex-col">
              <h4 className="text-[1.5rem] font-bold my-4">Overall Balance</h4>
              <h2 className="font-bold text-[2rem] my-2">$3,780,000</h2>
              <div className="flex gap-2">
                <span className="flex gap-2 font-bold text-[#14b8a6]">
                  <BsFillTriangleFill className="mt-1" />
                  6.90%
                </span>
                <p>Year over year</p>
              </div>
            </div>
            <div className="flex bg-[#fbf9f9] px-6 my-8 py-2 rounded-2xl shadow-lg border-2">
              <div className="flex flex-col rounded-md">
                <p className="my-2 text-[1.1rem] font-semibold">
                  Average Income Monthly
                </p>
                <h2 className="font-bold text-[1.8rem] my-2">$23569</h2>
                <p>Compared to last month</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-8">
                <span className="flex gap-2 font-bold text-[#14b8a6]">
                  <BsFillTriangleFill className="mt-1" />
                  6.90%
                </span>
                <img src={IMG2} alt="" className="w-[5rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div>
              <canvas ref={chartRef1} />
            </div>
            <div className="flex bg-[#fbf9f9] px-6 mb-6 mx-8 py-2 rounded-2xl shadow-lg border-2">
              <div className="flex flex-col rounded-md">
                <p className="my-2 text-[1.1rem] font-semibold">
                  Average Income Weekly
                </p>
                <h2 className="font-bold text-[1.8rem] my-2">$569</h2>
                <p>Compared to last week</p>
              </div>
              <div className="flex flex-col justify-center items-center mx-8">
                <span className="flex gap-2 font-bold text-[#14b8a6]">
                  <BsFillTriangleFill className="mt-1" />
                  6.90%
                </span>
                <img src={IMG1} alt="" className="w-[5rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[900px] justify-center items-center bg-white my-8 rounded-2xl">
          <div className="p-4">
            <h3 className="font-bold text-[1.4rem]">Customer Analysis</h3>
            <canvas ref={chartRef} width={100} />
            <div className="flex gap-4 justify-between mx-4">
              <div className="flex flex-col">
                <div className="flex">
                  <span className="text-[3rem] text-[purple]">&#8226;</span>
                  <p className="mt-[1.8rem]">Repeat Orders</p>
                </div>
                <h4 className="font-bold text-[1.3rem]">2345k</h4>
              </div>

              <div className="flex flex-col ">
                <div className="flex">
                  <span className="text-[3rem] text-[#D3D3D3]">&#8226;</span>
                  <p className="mt-[1.8rem]">Repeat Orders</p>
                </div>
                <h4 className="font-bold text-[1.3rem]">3345k</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:grid-cols-1 my-4 lg:ml-[17rem] gap-6 justify-center items-center mx-auto">
        <div className="justify-center items-center w-full">
          <div className="lg:max-w-[900px] py-8 h-[350px] flex-col  bg-white w-full justify-around shadow-md rounded-xl">
            <div className="justify-between  px-8 flex w-full">
              <h3 className="font-bold text-[1.5rem]">Order Analysis</h3>
              <input
                type="date"
                name=""
                id=""
                className="border-2 px-8 rounded-full"
              />
            </div>

            <div className="flex flex-col justify-center relative lg:mb-[15rem] chart-container">
              <canvas
                ref={chartRef2}
                style={{ height: "100%", paddingBottom: "4px" }}
              />
            </div>
          </div>
          <div className="lg:justify-between items-center gap-2  lg:flex my-4 lg:max-w-[900px]">
            <div className="flex flex-col my-6 bg-white px-16 rounded-2xl">
              <h4 className=" text-left font-bold text-[1.4rem] my-8">
                Favourite Foods
              </h4>
              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>
              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>
            </div>
            <div className="flex flex-col bg-white px-16 rounded-2xl">
              <h4 className=" text-left font-bold text-[1.4rem] my-8">
                Out of Stocks
              </h4>
              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>

              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>
              <div className="justify-between items-center  sm:w-[600px] w-[250px] lg:w-[300px] flex my-2 border-b">
                <div className="flex gap-3">
                  <img src={PIZZA} className="w-[3rem]" alt="" />
                  <div className="flex flex-col font-bold">
                    <h4>Udang Semur</h4>
                    <p className=" font-light">Pizza</p>
                  </div>
                </div>
                <span className="border-2 px-4 py-1 rounded-full">$56</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex flex-col mb-[20rem] bg-white py-8 px-12 mr-12 justify-center items-center rounded-2xl">
          <h3 className="font-bold text-[1.3rem]">Location</h3>
          <img src={IMG3} alt="" className="w-[300px] rounded-2xl" />
          <div className="flex  justify-between">
            <div className="flex flex-col my-4">
              <div className="flex">
                <FaLocationDot className="mt-1 mx-1 text-[purple]" />
                <span className="text-[light-grey] font-semibold">
                  Location
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[1.3rem]">234 Places </h3>

              <div className="flex my-2">
                <IoCheckmarkCircle className="mt-1 mx-1 text-[purple]" />
                <span className="text-[light-grey] font-semibold">
                  Location
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[1.3rem]">2394 Orders </h3>
            </div>

            <div className="flex flex-col my-4">
              <div className="flex">
                <FaRoad className="mt-1 mx-1 text-[purple]" />
                <span className="text-[light-grey] font-semibold">
                  Furthest distance
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[1.3rem]">8,900 Km</h3>

              <div className="flex my-2">
                <GrCompliance className="mt-1 mx-1 text-[purple]" />
                <span className="text-[light-grey] font-semibold">
                  Delivery Complainers
                </span>
              </div>
              <h3 className="mx-4 font-bold text-[1.3rem]">23 </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
