import { Typography, Divider } from '@mui/material';
import ScheduleCalendar from '../components/ScheduleCalendar';

const Calendar = () => {

  /* dates of exercises */
  const eventsList = [
    new Date('12/25/2021'),
    new Date('1/1/2022'),
    new Date('12/7/2021'),
    new Date('12/30/2021')
  ];

  return (
    <>
      <Typography variant="h2">Calendar</Typography>
      <Divider />
      <ScheduleCalendar events={eventsList}/>
    </>
  )
}

export default Calendar;