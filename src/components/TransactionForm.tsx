// src/TransactionForm.tsx
import React, { useState } from 'react';

interface TransactionFormProps {
    onAddTransaction: (text: string, amount: number) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onAddTransaction }) => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!text || amount === 0) return;
        onAddTransaction(text, amount);
        setText('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="text">Transaction Description</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter description"
                />
            </div>
            <div>
                <label htmlFor="amount" className="amount">
                    Amount<br />
                    (negative - expense, positive - income)
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                    placeholder="Enter the amount"
                />
            </div>
            <button className="btn" type="submit">Add Transaction</button>
        </form>
    );
};

export default TransactionForm;
