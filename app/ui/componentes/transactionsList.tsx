'use client'
import { useState, useMemo } from 'react'
import type { Transaction } from '../../lib/definitions'

interface Props {
  initialTransactions: Transaction[]
}

export default function TransactionsList({ initialTransactions }: Props) {
  const [transactions] = useState<Transaction[]>(initialTransactions)
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date')

  const categories = useMemo(() => {
    const unique = Array.from(
      new Set(initialTransactions.map((t) => t.category))
    )
    return ['all', ...unique]
  }, [initialTransactions])

  const filteredAndSorted = useMemo(() => {
    let data = [...initialTransactions]

    if (category !== 'all') {
      data = data.filter((t) => t.category === category)
    }

    if (search.trim() !== '') {
      data = data.filter((t) =>
        t.description.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (sortBy === 'date') {
      data.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    } else {
      data.sort((a, b) => b.amount - a.amount)
    }

    return data
  }, [initialTransactions, search, category, sortBy])

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-purple-50 to-green-50 rounded-2xl shadow-sm border border-purple-100">
      <h2 className="text-2xl font-semibold text-purple-900 mb-6 text-center">
        Movimientos bancarios
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-purple-100 mb-6">
        <input
          type="text"
          aria-label="Buscar transacciones"
          placeholder="🔍 Buscar..."
          className="flex-1 min-w-[180px] border border-purple-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          aria-label="Filtrar por categoría"
          className="border border-purple-200 rounded-lg p-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'all' ? 'Categorías' : cat}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 font-medium">
            Ordenar por:
          </span>
          <div className="flex bg-purple-100 rounded-lg p-1">
            <button
              onClick={() => setSortBy('date')}
              aria-label="Ordenar por fecha"
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                sortBy === 'date'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-purple-700 hover:bg-purple-200'
              }`}
            >
              Fecha
            </button>
            <button
              onClick={() => setSortBy('amount')}
              aria-label="Ordenar por importe"
              className={`px-3 py-1.5 text-sm rounded-md transition-all ${
                sortBy === 'amount'
                  ? 'bg-green-500 text-white shadow'
                  : 'text-green-700 hover:bg-green-200'
              }`}
            >
              Importe
            </button>
          </div>
        </div>
      </div>

      {/* Lista */}
      <ul
        role="list"
        className="divide-y divide-purple-100 bg-white rounded-xl shadow border border-purple-100"
      >
        {filteredAndSorted.map((t) => (
          <li
            role="listitem"
            key={t.id}
            className="p-4 flex justify-between items-center hover:bg-purple-50 transition-all"
          >
            <div>
              <p className="font-medium text-gray-800">{t.description}</p>
              <p className="text-sm text-gray-500">
                {t.category} •{' '}
                <span className="text-gray-400">
                  {new Date(t.date).toLocaleDateString()}
                </span>
              </p>
            </div>
            <div
              className={`text-sm font-semibold ${
                t.amount < 0 ? 'text-purple-600' : 'text-green-600'
              }`}
            >
              {t.amount < 0 ? '-' : '+'}
              {Math.abs(t.amount).toFixed(2)} €
            </div>
          </li>
        ))}
      </ul>

      {filteredAndSorted.length === 0 && (
        <p className="text-gray-500 text-center mt-6">
          No hay transacciones que coincidan con los filtros.
        </p>
      )}
    </div>
  )
}
