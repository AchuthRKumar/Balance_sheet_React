// src/TransactionHistory.tsx
import React from 'react';

interface Transaction {
    text: string;
    amount: number;
}

interface TransactionHistoryProps {
    transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
    return (
        <>
            <h2>Transaction History</h2>
            <table className="transaction-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.text}</td>
                            <td>{transaction.amount > 0 ? 'Credit' : 'Debit'}</td>
                            <td>₹{Math.abs(transaction.amount)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TransactionHistory;
