import { useState } from "react";
import axios from "axios";

import { 
  Box, 
  Button,
  ButtonGroup, 
  Divider, 
  Typography, 
  FormControl,
  InputLabel,
  Input
} from "@mui/material";

const Dashboard = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");

<<<<<<< HEAD
  const handleSubmit = (e) => {
    e.preventDefault ();
    if (process.env.REACT_APP_AWS_KEY) {
      // const body = {
      //   headers: {
      //     'Access-Control-Allow-Origin': '*',
      //   },
      //   "firstName": firstName,
      //   "lastName": lastName,
      //   "DOB": "1/1/2000",
      //   "email": "malpractice@gmail.com"
      // }
=======
  const handleSubmit = () => {
    if (process.env.REACT_APP_AWS_KEY+"/updatePersonalExercise") {
      const body = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "DOB": dob
      }
>>>>>>> d713323 (format)

      // axios.post(process.env.REACT_APP_AWS_KEY, body)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  };

  return (
    <>
      <Typography variant="h2">Dashboard</Typography>
      <Divider />
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          pt: 3,
          "display": "block",
          "& > :not(style)": { m: 1 },
        }}>
        <FormControl required>
          <InputLabel htmlFor="first-name">First Name</InputLabel>
          <Input required id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input>
        </FormControl>
        <FormControl required>
          <InputLabel htmlFor="last-name">Last Name</InputLabel>
          <Input id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)}></Input>
        </FormControl>
        <ButtonGroup>
          <Button 
            type="submit"
            color="secondary" 
            variant="contained">
              <Typography variant="button">SUBMIT</Typography>
          </Button>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default Dashboard;