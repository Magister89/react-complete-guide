import "./Expenses.css";
import React, { useState } from 'react';
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const items = props.expenses.filter(element =>
        element.date.getFullYear().toString() === filteredYear)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={items}/>
            <ExpensesList items={items} />
        </Card>
    );

}

export default Expenses;
