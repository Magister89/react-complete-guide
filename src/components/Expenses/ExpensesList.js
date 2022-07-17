import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {

    const items = props.items.map(element =>
        <ExpenseItem key={element.id} expenses={element} />);

    const noContent = items.length === 0;
    const noContentMessage = <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
    const expenseContent = noContent ? noContentMessage : items;

    return (
        <ul className="expenses-list">
            {expenseContent}
        </ul>
    );
};

export default ExpensesList;