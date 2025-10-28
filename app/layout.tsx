import './ui/global.css'

import { montserrat } from './ui/fonts'
import NavBar from './ui/componentes/navbar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased  bg-green-100`}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  )
}
