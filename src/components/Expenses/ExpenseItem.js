import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate expenses={props.expenses} />
                <div className="expense-item__description">
                    <h2>{props.expenses.title}</h2>
                    <div className="expense-item__price">${props.expenses.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;