import css from './statistics.module.css'
import StatisticsListElement from './statisticListItem'
import PropTypes from 'prop-types';

import getRandomHexColor from '../utils/generateColor'


export default function Statistics({title, stats}){
  return (    
  <section className={css.statistics}>
    {title && <h2 className="title">Upload stats</h2>}
  
    <ul className={css.stat_list}>
    {
      stats.map(el => 
         <StatisticsListElement 
        key = {el.id}
        label = {el.label} 
        percentage = {el.percentage}
        color = {getRandomHexColor()}/>
          )
    }
    </ul>
    
  </section>
          )
  }
  
  Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array,
  };


