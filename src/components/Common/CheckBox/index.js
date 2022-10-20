import { FormControlLabel as MuiFormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core'
import styled, { css } from 'styled-components'

const FormControlLabel = styled(MuiFormControlLabel)`
  align-items: flex-start;
  margin: unset;

  .MuiTypography-body1 {
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;
    ${({ $bold }) =>
      $bold &&
      css`
        font-weight: 600;
      `}
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const _Checkbox = styled(MuiCheckbox)`
  padding: 0;
`

const Checkbox = ({ bold = true, color = 'primary', label, ...checkboxProps }) => {
  return (
    <FormControlLabel
      control={<_Checkbox color={color} {...checkboxProps} />}
      label={label}
      $bold={bold}
    />
  )
}
export default Checkbox
