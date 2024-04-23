import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import GDNEWS3 from "./GDNEWS3.png";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const userData = {
    email: email,
    username: username,
    password: password,
    confirmpassword: confirmpassword,
    register: 1,
  };

  const jsonData = JSON.stringify(userData);
  console.log(jsonData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && username && password && confirmpassword) {
      axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
      // alert("Record saved successfully");

      try {
        let { data } = await axios.post(
          "http://localhost/misdata/login.php",
          userData,
          {
            headers: {
              "Cache-Control": "no-cache",
              "Content-Type": "application/x-www-form-urlencoded",
              "Access-Control-Allow-Origin": "*", // Use the correct origin here
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization",
            },
          }
        );

        // Access response data
        if (data.x == "success") {
          navigate("/");
        } else {
          alert("Error wrong, details provided");
        }

        // Redirect user after successful login
        // navigate("/");
      } catch (error) {
        // Handle err ors
        console.error("Error:", error);
      }
    } else {
      // Failed login
      alert("Invalid email or password. Please try again.");
    }
    // else {
    //   alert("Invalid email or password. Please try again.");
    // }
  };
  return (
    <div className="h-[100%] justify-center items-center flex flex-col bg-white-A700 mx-auto my-1">
      <form
        onSubmit={handleSubmit}
        className="px-10 justify-center items-center  flex flex-col mt-16 shadow-2xl border-2 h-[35rem]"
      >
        {/* <div className="w-[15rem]">
          <img src={GDNEWS3} className="w-[15em] mb-[-2rem]" />
        </div> */}
        <div className=" mb-[rem] ">
          <input
            type="email"
            name="email"
            className="w-[20rem] h-[3rem] my-4 text-center shadow-md sm:ml-0 outline-none border-[2px]"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className=" ">
          <input
            type="text"
            name="username"
            className="w-[20rem] h-[3rem]  shadow-md my-8 px-6 text-center outline-none border-[2px]"
            placeholder="Enter a username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="">
          <input
            type="password"
            name="password"
            minLength={8}
            className="w-[20rem] shadow-md m-4 h-[3rem] outline-none border-[2px] text-center"
            placeholder="Enter your passowrd"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="">
          <input
            type="password"
            name="confirmpassword"
            className="w-[20rem] shadow-md m-4 h-[3rem] outline-none border-[2px] text-center"
            placeholder="Confirm your passowrd"
            required
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <a href="/">
          <button
            type="submit"
            className="bg-[#c9190c] px-8 py-3 mt-2 mb-16 text-white font-bold text-[1.2rem]"
          >
            Register
          </button>
        </a>
        <p>
          Have an account already?{" "}
          <Link to="/" className="text-blue-500">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
