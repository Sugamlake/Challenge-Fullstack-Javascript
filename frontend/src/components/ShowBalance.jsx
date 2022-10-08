import React, { useEffect, useState } from 'react';
import './ShowBalance.css';

const ShowBalance = ({ movements }) => {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const getBalance = (movements) => {
            let balance = 0;
            
            movements.forEach((movement) => {
    console.log(typeof movement.amount);
                if (movement.type === 'income') {
                    balance += movement.amount;
                }
                else {
                    balance -= movement.amount;
                }
    
            });
            setBalance(balance);
        };
        getBalance(movements);
    }, []);
    return (
        <div className="balance">
            <h2>Balance</h2>
            <p>{balance}</p>
        </div>
    );
}
export default ShowBalance;