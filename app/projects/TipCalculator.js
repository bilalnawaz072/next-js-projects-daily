'use client';
import { useState } from 'react';

export default function TipCalculator() {
    // bill : current state value, setBill : function to update state,inside brackets is the initial value of initial state that will be updated in the function.
    
    const [bill, setBill] = useState('');
    const [tipPercent, setTipPercent] = useState(15);
    const [tip, setTip] = useState(0);
    const [people, setPeople] = useState(1);
    const [total, setTotal] = useState(0);
   
    const calculateTip = () => {
        const tipAmount = (bill * tipPercent) / 100;
        setTip(tipAmount);
        setTotal((+bill + tipAmount)/people);
    };

    return (
<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background bg-cover bg-center">
            <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg w-64">
                <h2 className="mb-4 text-xl">Tip Calculator</h2>
                <input
                    type="number"
                    className="border-2 rounded p-2 mb-3"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    placeholder="Bill Amount"
                />
                <select
                    className="border-2 rounded p-2 mb-3"
                    value={tipPercent}
                    onChange={(e) => setTipPercent(e.target.value)}
                >
                    <option value="15">15%</option>
                    <option value="20">20%</option>
                    <option value="25">25%</option>
                </select>
                <input
                    type="number"
                    className="border-2 rounded p-2 mb-3"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder="Number of People"
                />
                <button
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                    onClick={calculateTip}
                >
                    Calculate
                </button>
                <div className="mt-4">
                    <p style={{ color: 'green' }}>Tip Amount: ${tip.toFixed(2)}</p>
                    <p style={{ color: 'teal' }}>Total Amount: ${total.toFixed(2)}</p>
                    {(total > 0 && people > 0) && (
                        <p style={{ color: 'red' }}>Per Person: ${(total / people).toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
    );
}


