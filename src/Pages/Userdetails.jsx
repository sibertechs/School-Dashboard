import { useState, useEffect } from "react";
import axios from "axios";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState({});

  const fetchUserDetails = async () => {
    const userData = {
      username: localStorage.getItem("username"),

      loaduserdetails: 1,
    };

    try {
      // Make a request to fetch user details from the backend
      const response = await axios.post(
        "http://localhost/misdata/login.php",
        userData,
        {
          // Pass user's authentication token or credentials
          headers: {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers":
              "Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Authorization",
          },
        }
      );

      // Set user details in state
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // Log userDetails whenever it changes
  useEffect(() => {
    console.log("User details:", userDetails);
  }, [userDetails]);

  return (
    <div>
      <h2>User Details</h2>
      {userDetails ? (
        <div>
          <p>Email: {userDetails.email}</p>
          <p>Username: {userDetails.username}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default UserDetails;
