import { Metadata } from "next"
import "styles/globals.css"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}
import { Lato} from "next/font/google";
const monts = Lato({  weight: ['400', '700', '900'],
subsets: ['latin'], });


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="de" data-mode="light">
      <body>
        <main className={`${monts.className} relative bg-white `}>{props.children}</main>
      </body>
    </html>
  )
}
