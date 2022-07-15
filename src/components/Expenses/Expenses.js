import "./Expenses.css";
import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const [filteredExpenses, setFilteredExpenses] = useState(props.expenses);
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        setFilteredExpenses(props.expenses.filter(element => element.date.getFullYear().toString() === selectedYear));
    };
    const items = filteredExpenses.map(element => <ExpenseItem expenses={element} />);

    return (
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {items}
        </Card>
    );

}

export default Expenses;
