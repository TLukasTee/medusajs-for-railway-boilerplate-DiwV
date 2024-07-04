const ErrorMessage = ({ error }: { error?: string | null }) => {
  if (!error) {
    return null
  }

  return (
    <div className=" text-rose-500 text-small-regular">
      <span>{error}</span>
    </div>
  )
}

export default ErrorMessage
