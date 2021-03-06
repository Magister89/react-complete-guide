import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpanseData) => {
        const expenseData = {
            ...enteredExpanseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        hideFormHandler();
    };

    const showFormHandler = () => setShowForm(true);
    const hideFormHandler = () => setShowForm(false);


    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>}
        </div>
    );
};

export default NewExpense;