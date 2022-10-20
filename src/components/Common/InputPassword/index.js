import { useState } from 'react'
import RevealTextField from '../RevealTextField'

const InputPassword = ({ id, label, ...inputProps }) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <RevealTextField
      InputProps={inputProps}
      revealed={showPassword}
      onToggle={() => setShowPassword(!showPassword)}
      variant="filled"
      label={label}
      id={id}
    />
  )
}

export default InputPassword
