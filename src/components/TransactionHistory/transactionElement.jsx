import PropTypes from 'prop-types';

export default function TransactionElement({type,amount,currency}){

    return (    
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
        </tr>
        )
    }

    TransactionElement.propTypes = { 
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
}