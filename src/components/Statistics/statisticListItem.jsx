import PropTypes from 'prop-types';

export default function StatisticsListElement ({label,percentage,color}){
    return (
        <li className="item"  style={{
            backgroundColor: `${color}`,
          }}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </li>
    )
}

StatisticsListElement.propTypes = {
    label : PropTypes.string,
    percentage: PropTypes.number,
    color: PropTypes.string,
}