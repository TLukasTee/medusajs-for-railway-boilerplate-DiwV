import { Badge } from "@medusajs/ui"

const PaymentTest = ({ className }: { className?: string }) => {
  return (
    <Badge color="orange" className={className}>
      <span className="font-semibold">Aufgepasst!</span>  Nur für Testzwecke
    </Badge>
  )
}

export default PaymentTest
