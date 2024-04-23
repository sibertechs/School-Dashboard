import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import GDNEWS3 from "./GDNEWS3.png";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    username: username,
    password: password,
    login: 1,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      // Set default headers for Axios outside of the request block
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";

      try {
        let { data } = await axios.post(
          "http://localhost/misdata/login.php",
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

        // Access response data
        if (data.x == "success") {
          localStorage.setItem("username", username);
          navigate("/dashboard");
        } else {
          alert("Error wrong, details provided");
        }

        // Redirect user after successful login
        // navigate("/");
      } catch (error) {
        // Handle errors
        console.error("Error:", error);
      }
    } else {
      // Failed login
      alert("Invalid email or password. Please try again.");
    }
  };

  const jsonData = JSON.stringify(userData);
  console.log(jsonData);
  // console.log(JSON.stringify(username));

  // console.log(JSON.stringify(password));

  return (
    <div className="h-[100%] justify-center items-center flex flex-col bg-white-A700 mx-auto my-16">
      <form
        onSubmit={handleSubmit}
        className="p-8 border-2 justify-center  items-center flex flex-col mt-16 shadow-2xl h-[35rem]"
      >
        {/* <img src={GDNEWS3} className="w-[15rem]" /> */}
        <div className="">
          <input
            type="text"
            name="username"
            className="w-[20rem] h-[3rem] border-2 text-center outline-none"
            placeholder="Enter your username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="">
          <input
            type="password"
            name="password"
            className="w-[20rem] shadow-md border-2 outline-none h-[3rem] mt-8 text-center"
            placeholder="Enter your passowrd"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <a href="/login">
          <button
            type="submit"
            name="submit"
            className="bg-[#c9190c] px-8 py-3 mt-2 mb-16 text-white font-bold text-[1.2rem]"
          >
            Login
          </button>
        </a>
        <p>
          Do not have an account yet?{" "}
          <Link to="/register" className="text-blue-500">
            Signup here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
