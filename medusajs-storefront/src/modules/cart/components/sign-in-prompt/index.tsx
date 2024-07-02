import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-center justify-between">
      <div>
        <Heading level="h2" className="txt-xlarge">
         Hast du bereits einen Account?
        </Heading>
        <Text className="txt-medium text-ui-fg-subtle mt-2">
        Melde dich an für ein personalisiertes Einkaufserlebnis.
        </Text>
      </div>
      <div>
        <LocalizedClientLink href="/account">
          <div className="w-full text-white bg-red-600 rounded-full text-center font-semibold border-2 border-white px-6 py-3">
           Anmelden
          </div>
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SignInPrompt
