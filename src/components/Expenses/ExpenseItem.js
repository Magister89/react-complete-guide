import { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.expenses.title);
    const clickHandler = () => setTitle("Updated");

    return (
        <Card className="expense-item">
            <ExpenseDate expenses={props.expenses} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.expenses.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;