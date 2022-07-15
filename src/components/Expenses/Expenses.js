import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
    const items = props.expenses.map(element => <ExpenseItem expenses={element} />);

    return (
        <Card className="expenses">
            {items}
        </Card>
    );

}

export default Expenses;