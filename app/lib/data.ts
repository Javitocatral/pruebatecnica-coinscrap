import { transactions } from './mock-data'

export async function fetchTransactions() {
  await new Promise((result) => setTimeout(result, 500))
  return transactions
}
