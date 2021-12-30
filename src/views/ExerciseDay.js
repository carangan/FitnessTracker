import { 
  Typography as T, 
  Divider, 
  List, 
  ListItem,
  ListItemAvatar, 
  ListItemText,
  Button 
} from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';

const ExerciseDay = () => {
  const params = useParams ();
  const navigate = useNavigate ();
  const dateFormat = params.day.replaceAll ('-', '/');

  const sampleExercises = [
    'Pushups',
    'Chinups',
    'Deadlifts'
  ]
  return (
    <>
      <T variant="h2">Exercise List</T>
      <Divider />
      <Button sx={{my: "1em"}} variant="contained" onClick={() => navigate(-1)}>Back to Calendar</Button>
      <T sx={{mt: "4px"}} variant="subtitle1" >Displaying Exercises for { dateFormat }</T>
      <List>
        {
          sampleExercises.map ((elem) => {
            return (
              <ListItem>
                <ListItemAvatar>💪</ListItemAvatar>
                <ListItemText>{elem}</ListItemText>
              </ListItem>
            )
          })
        }
      </List>
    </>
  )
}

export default ExerciseDay;