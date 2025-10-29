import { fetchTransactions } from '../lib/data'
import TransactionsList from '../ui/componentes/transactionsList'

export default async function Page() {
  const transactions = await fetchTransactions()
  return (
    <div className=" bg-green-100 mt-[50px]">
      <TransactionsList initialTransactions={transactions} />
    </div>
  )
}
