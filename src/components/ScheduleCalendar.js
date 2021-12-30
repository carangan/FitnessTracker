import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

import './Calendar.css';

const ScheduleCalendar = ({ events }) => {

  const navigate = useNavigate();

  // replace later due to localization issues
  const sameDate = (date1, date2) => {
    return date1.getTime () === date2.getTime ()
  }

  const dateInEvents = (date) => events.find(d => sameDate(d, date));

  const onChange = (date) => {
    // handle change
    if (dateInEvents (date))
    {
      const dateString = `${date.getMonth () + 1}-${date.getDate ()}-${date.getFullYear ()}`;
      // alert (dateString);
      navigate (dateString);
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month')
    {
      if (dateInEvents (date)) {
        return 'react-calendar__event';
      }
    }
  };

  return (
    <>
      <Calendar 
        value={new Date ()} 
        onChange={onChange}
        minDetail="year"
        tileClassName={tileClassName} />
    </>
  )
};

export default ScheduleCalendar;