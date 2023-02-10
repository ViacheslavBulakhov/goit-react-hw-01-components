import PropTypes from 'prop-types';
import TransactionElement from './transactionElement';
import css from './TransactionHistory.module.css'


export default function TransactionHistory({items}){
    return (    
            <table className={css.transaction_history}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
            {items.map(({id,type,amount,currency}) => 
                    <TransactionElement
                    key = {id}
                    type = {type}
                    amount = {amount}
                    currency =  {currency}/>
                    )}
            </tbody>
            </table>
            )
    }

TransactionHistory.propTypes = { 
        items: PropTypes.array,
}