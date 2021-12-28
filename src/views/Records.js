import { Typography, Divider, List, ListItem } from "@mui/material";
import muscleGroups from '../utils/MuscleGroups.json';

const Records = () => {
  return (
    <>
      <Typography variant="h2">Records</Typography>
      <Divider />

      {/* <List>
        {
          muscleGroups['MuscleGrpoups'].map ((item, idx) => {
            return (
              <ListItem key={item}>
                <Typography variant="h6">{item}</Typography>
              </ListItem>
            )
          })
        }
      </List> */}
    </>
  )
}

export default Records;