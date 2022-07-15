import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const month = props.expenses.date.toLocaleString('en-EN', { month: 'long' });
    const day = props.expenses.date.toLocaleString('en-EN', { day: '2-digit' });
    const year = props.expenses.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;