import { useFormState } from "react-dom"

import { LOGIN_VIEW } from "@modules/account/templates/login-template"
import Input from "@modules/common/components/input"
import { logCustomerIn } from "@modules/account/actions"
import ErrorMessage from "@modules/checkout/components/error-message"
import { SubmitButton } from "@modules/checkout/components/submit-button"

type Props = {
  setCurrentView: (view: LOGIN_VIEW) => void
}

const Login = ({ setCurrentView }: Props) => {
  const [message, formAction] = useFormState(logCustomerIn, null)

  return (
    <div className="max-w-lg text-center mx-auto sm:ml-28 pb-12 bg-white  ">
       <a href="#" className='inline-flex'>
                  <img
                    className="h-14 w-auto  sm:h-14 sm:w-auto"
                    src="https://res.cloudinary.com/dcfburp7p/image/upload/v1719253729/z-nutritionlogo_qmtyta.png"
                    alt=""
                  />
                                    
                </a>
      <h1 className="text-large-semi font-bold text-xl uppercase mb-6 mt-6">Willkommen zurück!</h1>
      <p className="text-center text-base-regular  mb-8">
        Melde dich hier für ein personalisiertes Einkaufserlebnis an.
      </p>
      <form className="w-full" action={formAction}>
        <div className="flex flex-col w-full gap-y-2">
        <ErrorMessage error={message} />

          <Input
            label="Email"
            name="email"
            type="email"
            title="Enter a valid email address."
            autoComplete="email"
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>
        <div className="mb-4"> </div>
        <SubmitButton className="w-full mb-5  bg-red-700 border-white outline-white">Anmelden</SubmitButton>
      </form>
      <div className="mb-4"> </div>

      <span className="text-center text-ui-fg-base text-small-regular mt-6 pt-12">
        Noch kein Mitgleid?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
         Jetzt registrieren
        </button>
        .
      </span>
    </div>
  )
}

export default Login
