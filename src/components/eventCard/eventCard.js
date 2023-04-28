import PropTypes from 'prop-types';
import css from './eventCard.module.css'

export const event = ({name, type, location, speaker, start, end}) => {
return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        {/* <FaMapMarkerAlt className={css.icon} size={iconSize.sm} /> */}
        {location}
      </p>
      <p className={css.info}>
        {/* <FaUserAlt className={css.icon} size={iconSize.sm} /> */}
        {speaker}
      </p>
      <p className={css.info}>
        {/* <FaCalendarAlt className={css.icon} size={iconSize.sm} /> */}
        {formattedStart}
      </p>
      <p className={css.info}>
        {/* <FaClock className={css.icon} size={iconSize.sm} /> */}
        {duration}
      </p>
      {/* <span className={`${css.chip} ${css[type]}`}>{type}</span> */}
    </div>
  );
};
    
event.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
}