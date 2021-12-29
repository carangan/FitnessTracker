import { 
  Typography, 
  Divider, 
  Box,
  FormControl,
  InputLabel,
  Input,
  ButtonGroup,
  Button
} from "@mui/material";
//import muscleGroups from '../utils/MuscleGroups.json';
import { useState } from "react";
import axios from "axios";

const Records = () => {

  const [username, setUserName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault ();
    if (process.env.REACT_APP_AWS_KEY) {
      console.log(username)
      const queryStringParam = username.replace(' ', '+')
      const response = await axios.get(process.env.REACT_APP_AWS_KEY + '/get-personal-exercise?id=' + queryStringParam)
      console.log(response)
      
    }
  };

  return (
    <>
      <Typography variant="h2">Records</Typography>
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
          <InputLabel htmlFor="username">First Name</InputLabel>
          <Input required id="username" value={username} onChange={(e) => setUserName(e.target.value)}></Input>
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

export default Records;