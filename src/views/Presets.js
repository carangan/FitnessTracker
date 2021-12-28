import { 
  Typography,
  Button, 
  Divider,
  Input,
  InputLabel,
  Dialog,
  DialogTitle,
  DialogActions,
  Checkbox,
  FormControlLabel,
  Chip,
  Select,
  FormControl,
  OutlinedInput,
  Box,
  MenuItem
} from "@mui/material";
import { useState } from "react";
import mg from '../utils/MuscleGroups.json'
import axios from 'axios'

const Presets = () => {
  const [open, setOpen] = useState (false);
  const [value, setValue] = useState ("");
  const [name, setName] = useState ("");
  const [muscleName, setMuscleName] = useState([]);
  const [weight, setWeight] = useState(false);
  const [reps, setReps] = useState(false);
  const [time, setTime] = useState(false);
  const [distance, setDistance] = useState(false);

  const handleSubscribe = () => {

    /*
    {
            "name": "Pushups",
            "muscleGroups": [
              "Chest"
              ],
            "reps": true,
            "weight": true,
            "time": false,
            "distance": false
          }, 
    */
    const body = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      "ID": value,
      "personalExercise": [
        {
          "name": name,
          "muscleGroups": muscleName,
          "reps": reps,
          "weight": weight,
          "time": time,
          "distance": distance
        }
        ]
    }

    console.log (body)

    axios.post(process.env.REACT_APP_AWS_KEY + '/update-personal-exercise', body)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    setOpen (false);
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setMuscleName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <Typography variant="h2">Presets</Typography>
      <Divider />
      <Button
        variant="outlined"
        onClick={() => setOpen (true)}>Enter Record</Button>
      <Dialog open={open}>
        <DialogTitle>Exercise </DialogTitle>

        <InputLabel htmlFor="id"></InputLabel>
        <Input required id="id" value={value} onChange={(e) => setValue (e.target.value)}></Input>
        <InputLabel htmlFor="name"></InputLabel>
        <Input required id="name" value={name} onChange={(e) => setName (e.target.value)}></Input>
        <FormControlLabel
          label="Weight"
          control={<Checkbox checked={weight} onChange={() => setWeight(!weight)} />}

        />
        <FormControlLabel
          label="Reps"
          control={<Checkbox checked={reps} onChange={() => setReps(!reps)}/>}
        />
        <FormControlLabel
          label="Time"
          control={<Checkbox checked={time} onChange={() => setTime(!time)} />}

        />
        <FormControlLabel
          label="Distance"
          control={<Checkbox checked={distance} onChange={() => setDistance(!distance)} />}

        />

        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Moosle</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={muscleName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Moosle" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {mg['MuscleGrpoups'].map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <DialogActions>
          <Button onClick={() => setOpen (false)}>Close</Button>
          <Button onClick={handleSubscribe}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Presets;