import { Metadata } from "next"

import LoginTemplate from "@modules/account/templates/login-template"

export const metadata: Metadata = {
  title: "Anmelden - Haumand Digital Agency",
  description: "Anmelden in Z-Nutrition Agency Account.",
}

export default function Login() {
  return <LoginTemplate />
}
