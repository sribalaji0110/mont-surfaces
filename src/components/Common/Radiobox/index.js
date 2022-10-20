import { FormControlLabel as MuiFormControlLabel, Radio as MuiRadio } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { colors } from 'services/colors'
import styled from 'styled-components'

const CheckIcon = styled(FontAwesomeIcon).attrs({ icon: faCircleCheck })`
  // Centering the icon with the label
  margin-top: 2px;
`

const CircleIcon = styled(FontAwesomeIcon).attrs({ icon: faCircle })`
  // Centering the icon with the label
  margin-top: 2px;
  color: ${colors.grey[100]};
`

const FormControlLabel = styled(MuiFormControlLabel)`
  align-items: flex-start;
  margin: unset;

  .MuiFormControlLabel-label {
    font-size: 20px;
    font-weight: 600;
    margin-left: ${({ theme }) => theme.spacing(1.5)}px;

    ${(props) => props.theme.breakpoints.up('xs')} {
      font-size: 18px;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`

const Radio = styled(MuiRadio)`
  padding: 0px;
`

const Radiobox = ({
  className,
  formControlLabelProps,
  label,
  labelPlacement = 'end',
  ...radioboxProps
}) => {
  return (
    <FormControlLabel
      {...formControlLabelProps}
      className={className}
      labelPlacement={labelPlacement}
      control={
        <Radio
          color="primary"
          disableRipple
          checkedIcon={<CheckIcon />}
          icon={<CircleIcon />}
          {...radioboxProps}
        />
      }
      label={label}
    />
  )
}
export default Radiobox
