import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
    const {budget, expenses, dispatch} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, expense) => {
        return (total = total + expense.cost)
    }, 0)

    const onChangeBudgetHandler = (event) => {
        const value = event.target.value;

        if(value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending");
        } else if (value > BUDGET_MAX_VALUE){
            alert('You cannot increase the budget more than ' + BUDGET_MAX_VALUE);
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            }); 
        }
    }

    return (
        <div className='alert alert-secondary' style={{display:'flex', alignItems:'center'}}>
            <div>
                <label htmlFor='budget'>Budget: </label>
            </div>

            <div style={{display:'flex', alignItems:'center'}}>
                <span>£</span>
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}
                    step='10'
                    onChange={onChangeBudgetHandler}>
                </input>
            </div>
        </div>
    );
};

export default Budget;
