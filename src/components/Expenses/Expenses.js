import "./Expenses.css";
import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const items = props.expenses.filter(element =>
        element.date.getFullYear().toString() === filteredYear)
        .map(element =>
            <ExpenseItem key={element.id} expenses={element} />);

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {items}
        </Card>
    );

}

export default Expenses;
