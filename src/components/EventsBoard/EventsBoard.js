import PropTypes from 'prop-types';

import { Event } from '../eventCard/eventCard';
import css from './EventsBoard.module.css';

export const EventsBoard = ({ events }) => {
    return (
        <div className={css.eventBoard}>
            {events.map(({name, type, location, speaker, time}) => (
                <Event key={name} name={name} type={type} location={location} speaker={speaker} start={time.start} end={time.end}/>))}
        </div>

    )
}

EventsBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }),
        }),
    ),
};