
import { uncategorizedBudgetId, useBudgets } from "../contexts/budgetContext";
import BudgetCard from "./budgetCard.component";

export default function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets()
  const amount = getBudgetExpenses(uncategorizedBudgetId).reduce(
    (total, expense) => total + expense.amount,
    0
  )
  if (amount === 0) return null

  return <BudgetCard amount={amount} name="Uncategorized" gray {...props} />
}