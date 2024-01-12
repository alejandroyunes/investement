import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "Epic Compras",
  description: "Compra y Venta",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}