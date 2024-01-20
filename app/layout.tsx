import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "Capital Invest",
  description: "Capital invest company",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

