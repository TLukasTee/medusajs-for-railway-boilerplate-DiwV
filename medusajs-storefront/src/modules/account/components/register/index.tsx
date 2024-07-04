"use client"

import { useFormState } from "react-dom"

import Input from "@modules/common/components/input"
import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import { signUp } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Register = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(signUp, null)

  return (
    <div className="max-w-lg mx-auto sm:ml-28 flex flex-col items-center">
      
      <h1 className="text-large-semi  font-bold sm:text-xl uppercase mb-6">
        Werde ein ZNUTRITION Mitglied!
       
      </h1>
      <p className="text-center text-base-regular text-sm text-ui-fg-base mb-4">
        Erstelle dein Mitgliedsprofil und erhalte exklusive Angebote und Rabatte.
      </p>
      <form className="w-full flex flex-col text-center justify-center mx-auto items-center" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Vorname"
            name="first_name"
            required
            autoComplete="given-name"
          />
          <Input
            label="Nachname"
            name="last_name"
            required
            autoComplete="family-name"
          />
          <Input
            label="Email"
            name="email"
            required
            type="email"
            autoComplete="email"
          />
          <Input label="Telefonnummer" name="phone" type="tel" autoComplete="tel" />
          <Input
            label="Passwort"
            name="password"
            required
            type="password"
            autoComplete="new-password"
          />
        </div>
        <ErrorMessage error={message} />
        <span className="text-center text-ui-fg-base text-small-regular mt-6 ">
        Beim Klicken auf „Jetzt registrieren“ stimmst du den{" "}
          <LocalizedClientLink
            href="/content/privacy-policy"
            className="underline"
          >
            Datenschutzbestimmungen
          </LocalizedClientLink>{" "}
          und{" "}
          <LocalizedClientLink
            href="/content/terms-of-use"
            className="underline"
          >
            Allgemeinen Geschäftsbedingungen 
          </LocalizedClientLink>
          {" "}zu.
        </span>
        <div className="my-3"> </div>
        <SubmitButton className="w-full mt-6 text-center mx-auto flex justify-center items-center ">Jetzt registrieren</SubmitButton>
      </form>
      <span className="text-center text-ui-fg-base text-small-regular mt-6">
        Schon Mitglied ?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Anmelden
        </button>
        .
      </span>
    </div>
  )
}

export default Register
