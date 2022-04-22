import React from "react";
import { useContext } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import { ExpenseTrackerContext } from 'D:/my_work/Projects/React/expenso/src/Context/context';

const Main = () => {
  const classes = useStyles();
  const { transactions } = useContext(ExpenseTrackerContext);
  const income = transactions.filter((t) => t.type === "Income");
  const totalIncome = income.reduce((acc, currVal) => acc += currVal.amount, 0);
  const expense = transactions.filter((t) => t.type === "Expense");
  const totalExpense = expense.reduce((acc, currVal) => acc += currVal.amount, 0);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="powered by speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance:{totalIncome-totalExpense}
        </Typography>
       
        <Divider />

        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
