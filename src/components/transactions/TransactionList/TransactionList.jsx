import { useState, useEffect } from 'react';
import * as financeService from '../../../services/backendConnection';

export const TransactionList = (user) => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        // create a new async function
        const fetchExpenses = async () => {
            const expenses = await financeService.getTransactions(user);//call the transactions list

            setTransactions(expenses.transactions);
            console.log(transactions)
        };
        // invoke the function
        fetchExpenses();
    },[]);

    const displayTransactions  = transactions.map(transaction => {
        return (
            <li key={transaction._id}>
                <p>{transaction.name}</p>
                <p>{transaction.amount}</p>
                <p>{transaction.type}</p>
            </li>
        )
    })



    return (
        <div>
            <h2>Transaction List:</h2>
            <ul>
                {displayTransactions}
            </ul>
        </div>
    )
}