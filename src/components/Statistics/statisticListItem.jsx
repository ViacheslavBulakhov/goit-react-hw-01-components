import PropTypes from 'prop-types';
import getRandomHexColor from '../utils/generateColor';

export default function StatisticsListElement({ label, percentage }) {
  return (
    <li
      className="item"
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

StatisticsListElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
