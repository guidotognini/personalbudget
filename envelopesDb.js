const envelopes = [
  {
    id: 1,
    category: "Groceries",
    allocation: 0.3,
    amount_spent: 5
  },
  {
    id: 2,
    category: "Gas",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 3,
    category: "Health and Grooming",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 4,
    category: "Clothing",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 5,
    category: "Dining out",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 6,
    category: "Household items",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 7,
    category: "Pet care",
    allocation: 0.05,
    amount_spent: 5
  },
  {
    id: 8,
    category: "Children's items",
    allocation: 0.05,
    amount_spent: 5
  },
  {
    id: 9,
    category: "Savings",
    allocation: 0.1,
    amount_spent: 5
  },
  {
    id: 10,
    category: "Entertainment",
    allocation: 0.05,
    amount_spent: 5
  }
];

const total_budget = 200;
const total_spent = envelopes.reduce((acc, env) => acc + env.amount_spent,0);

const budget = {
  total_budget: total_budget,
  budget_remaining: total_budget - total_spent
}

module.exports = {
  envelopes, 
  budget,
  total_spent,
  total_budget
}