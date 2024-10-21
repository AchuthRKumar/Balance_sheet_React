// src/Balance.tsx
import React from 'react';

interface BalanceProps {
  totalIncome: number;
  totalExpenses: number;
}

const Balance: React.FC<BalanceProps> = ({ totalIncome, totalExpenses }) => {
  const totalBalance = totalIncome - totalExpenses;

  return (
    <div className="balance">
      <h2>Total Income: ₹{totalIncome.toFixed(2)}</h2>
      <h2>Total Expenses: ₹{totalExpenses.toFixed(2)}</h2>
      <h2>Balance: ₹{totalBalance.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
