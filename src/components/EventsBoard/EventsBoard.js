// import PropTypes from 'prop-types';
// import { Event } from './components/eventCard/eventCard';
import css from './EventsBoard.module.css';

export const EventsBoard = ({ events }) => {
    return (
        <div className={css.eventBoard}>
            {events.map(event =>(111
                /*<Event key={event.name}/>*/))}
        </div>

    )
}

// EventsBoard.propTypes = {
//     events: 
// }