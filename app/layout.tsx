import "./globals.css"
import { ThemeProvider } from "./providers"

export const metadata = {
  title: "Estrella Immobilien GmbH",
  description: "Estrella Immobilien GmbH",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

