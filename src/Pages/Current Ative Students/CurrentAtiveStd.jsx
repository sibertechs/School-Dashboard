import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { FaRegPauseCircle, FaRegPlayCircle } from "react-icons/fa";
import axios from "axios";
import Sidebar1 from "../../Components/Sidebar1/Sidebar1";

const CurrentActiveStd = () => {
  const [delay, setDelay] = useState(1000);
  const [changebtn, setChangeBtn] = useState(true);
  const handleChangeBtn = () => {
    if (!changebtn) {
      fetchData();
    }
    setChangeBtn(!changebtn);
  };
  const [mode, setMode] = useState("");
  const [userData, setUserData] = useState({
    username: 0,
    mode: mode,
    loadactivestudent: 1,
  });

  const [lineData, setLineData] = useState({
    labels: [],
    datasets: [
      {
        label: "Total",
        data: [],
        borderColor: "pink",
        backgroundColor: "transparent",
      },
    ],
  });
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "https://api.cktutas.edu.gh/reactapp.php?loadactivestudent&username=" +
          userData.username,
        userData,
        {
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization",
          },
        }
      );

      setUserData((prevState) => ({
        ...prevState,
        username: prevState.username + 1,
      }));
      setLineData((prevState) => ({
        ...prevState,
        labels: [...prevState.labels, userData.username + 1],
        datasets: [
          {
            ...prevState.datasets[0],
            data: [...prevState.datasets[0].data, data.total],
          },
        ],
      }));

      if (lineData.datasets[0].data.length > 100) {
        setLineData((prevState) => ({
          ...prevState,
          labels: [...prevState.labels.slice(50), data.labelData],
          datasets: [
            {
              ...prevState.datasets[0],
              data: [...prevState.datasets[0].data.slice(50), data.total],
            },
          ],
        }));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    if (changebtn) {
      const intervalId = setInterval(fetchData, delay);

      return () => clearInterval(intervalId);
    }
  }, [userData.username]);

  const timeOptions = [
    1, 2, 3, 6, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60,
  ];

  const handleTimeChange = (e) => {
    setDelay(e.target.value * 1000);
    setMode(e.target.value);
  };

  return (
    <div className="mt-4">
      <Sidebar1 />
      <div className="justify-between flex">
        <div>
          <label htmlFor="timeSelect" className="mx-8 my-4">
            Select Time:
          </label>
          <select id="timeSelect" value={mode} onChange={handleTimeChange}>
            {timeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div
          onClick={handleChangeBtn}
          className="  absolute lg:left-[15rem] left-[13rem]"
        >
          {changebtn ? (
            <button
              className=" bg-red-600 rounded-full text-[2rem] text-white font-bold"
              title="Pause"
            >
              <FaRegPauseCircle />
            </button>
          ) : (
            <button
              className=" bg-green-700 rounded-full text-[2rem] text-white font-bold"
              title="Resume"
            >
              <FaRegPlayCircle />
            </button>
          )}
        </div>
        <h2 className="font-bold mx-4">Current Active Students</h2>
      </div>
      <div
        className="chart-container justify-center items-center flex lg:mx-8 h-[90%] lg:h-[700px]"
        // style={{ height: "650px", width: "" }}
      >
        <Line
          data={lineData}
          className="lg:w-[95%] md:w-[80%] w-[100%] lg:h-0"
          // style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default CurrentActiveStd;
