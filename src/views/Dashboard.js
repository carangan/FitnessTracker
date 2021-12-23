import { useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {
    if (process.env.REACT_APP_AWS_KEY) {
      const body = {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        "firstName": firstName,
        "lastName": lastName
      }

      axios.post(process.env.REACT_APP_AWS_KEY, body)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(process.env.REACT_APP_AWS_KEY);
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
      <input value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
      <button onClick={() => handleSubmit ()}></button>
      <div>{firstName} {lastName} is stupid.</div>
    </>
  )
}

export default Dashboard;