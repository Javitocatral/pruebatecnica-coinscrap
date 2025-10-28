'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const pathname = usePathname()

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Transacciones', href: '/movimientos' },
  ]

  return (
    <nav className="w-full bg-purple-900 text-white shadow-md border-b border-green-500/30">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-green-300 hover:text-green-400 transition-colors duration-300"
          >
            <h3>Javier Gascón</h3>
          </Link>
        </div>

        {/* MENU */}
        <ul className="flex gap-6">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`
                    relative px-4 py-2 rounded-md font-medium transition-all duration-300
                    ${
                      isActive
                        ? 'text-green-400 border-b-2 border-green-400'
                        : 'text-white hover:text-green-300'
                    }
                  `}
                >
                  {link.name}
                  <span
                    className={`
                      absolute inset-0 rounded-md transition-all duration-300 -z-10
                      ${
                        isActive
                          ? 'bg-green-400/10'
                          : 'hover:bg-green-400/10 hover:shadow-[0_0_10px_2px_rgba(34,197,94,0.3)]'
                      }
                    `}
                  ></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
