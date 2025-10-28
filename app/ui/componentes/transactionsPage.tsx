import TransactionsList from './transactionsList'
import { fetchTransactions } from '../../lib/data'

export default async function TransactionsPage() {
  const transactions = await fetchTransactions()
  return (
    <div>
      <TransactionsList initialTransactions={transactions} />
    </div>
  )
}
