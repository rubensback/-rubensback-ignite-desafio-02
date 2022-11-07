import { FC, forwardRef } from 'react'
import { InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  opcional?: boolean
  styles?: {
    width?: string
    flex?: number
  }
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ opcional, styles, ...inputProps }, ref) => {
    const { width, flex } = styles || {}
    return (
      <InputContainer opcional={opcional} width={width} flex={flex}>
        <input {...inputProps} ref={ref} />
      </InputContainer>
    )
  },
)

Input.displayName = 'Input'
