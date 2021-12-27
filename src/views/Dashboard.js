import { useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (process.env.REACT_APP_AWS_KEY) {
      const body = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "DOB": dob
      }

      axios.post(process.env.REACT_APP_AWS_KEY, body)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <input value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
      <input value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
      <input value={dob} onChange={(event) => setDOB(event.target.value)}></input>
      <input value={email} onChange={(event) => setEmail(event.target.value)}></input>
      <button onClick={() => handleSubmit ()}>submit</button>
      <div>{firstName} {lastName} born on {dob} with a the email {email} is stupid.</div>
    </>
  )
}

export default Dashboard;