// src/Transactions.tsx
import React, { useState } from 'react';
import Balance from './Balance';
import TransactionForm from './TransactionForm';
import TransactionHistory from './TransactionHistory';

const Transactions: React.FC = () => {
    const [transactions, setTransactions] = useState<{ text: string; amount: number }[]>([]);

    const addTransaction = (text: string, amount: number) => {
        const newTransaction = { text, amount };
        setTransactions([...transactions, newTransaction]);
    };

    const totalIncome = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalExpenses = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <>
            <h1>Add New Transaction</h1>
            <div className="transaction-container">
                <TransactionForm onAddTransaction={addTransaction} />
                <Balance totalIncome={totalIncome} totalExpenses={Math.abs(totalExpenses)} />
            </div>
            <TransactionHistory transactions={transactions} />
        </>
    );
};

export default Transactions;
