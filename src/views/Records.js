import { 
  Typography, 
  Divider, 
  Box,
  FormControl,
  InputLabel,
  Input,
  ButtonGroup,
  Button,
  Select,
  MenuItem
} from "@mui/material";
//import muscleGroups from '../utils/MuscleGroups.json';
import { useState } from "react";
import axios from "axios";
import exercisePresets from '../utils/ExcercisePresets.json'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const Records = () => {

  const [username, setUserName] = useState("");
  const [personalExercise, setPersonalExercise] = useState(exercisePresets.exercises);
  const [selectedExercise, setSelectedExercise] = useState("Pushups");

  const handleSubmit = async (e) => {
    e.preventDefault ();
    if (process.env.REACT_APP_AWS_KEY) {
      console.log(username)
      const queryStringParam = username.replace(' ', '+')

      await axios.get(process.env.REACT_APP_AWS_KEY + '/get-personal-exercise?id=' + queryStringParam)
      .then((res) => {
          console.log(res);
          const allExercises = exercisePresets.exercises.concat(res.data);
          setPersonalExercise(allExercises)
          console.log(allExercises)
      })
      .catch((error) => {
        console.log(error)
      });
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
      
      <FormControl fullWidth>
      <InputLabel id="personal-exercise-select-lable">Select Exercise</InputLabel>
        <Select
          labelId="personal-exercise-select-lable"
          id="personal-exercise-select"
          value={selectedExercise}
          label="exercise"
          onChange={(e)=>(setSelectedExercise(e.target.value))}
        >
          {personalExercise.map((obj) => (
                <MenuItem
                  key={obj.name}
                  value={obj.name}
                >
                  {obj.name}
                </MenuItem>
              ))}
        </Select>
      </FormControl>
      
    </>
  )
}

export default Records;