import { IconButton, InputAdornment, TextField as _TextField } from '@material-ui/core'
import { useCallback, useMemo } from 'react'
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from 'services/colors'
import styled from 'styled-components'

const EndAdornment = styled(InputAdornment).attrs({ position: 'end' })`
  padding-right: 2px;
`
const EyeOpenIcon = styled(FontAwesomeIcon).attrs({
  fixedWidth: true,
  icon: faEye
})`
  font-size: 15px;
  color: ${colors['off-black'].light}; ;
`
const FaUserIcon = styled(FontAwesomeIcon).attrs({
  fixedWidth: true,
  icon: faUser
})`
  font-size: 14px;
  color: ${colors['off-black'].light}; ;
`

const EyeClosedIcon = styled(FontAwesomeIcon).attrs({
  fixedWidth: true,
  icon: faEyeSlash
})`
  font-size: 15px;
  color: ${colors['off-black'].light}; ;
`
const TextField = styled(_TextField)`
  .MuiFilledInput-underline {
    &::after,
    &::before {
      display: none;
    }
  }
  .MuiFilledInput-root {
    background-color: white;
    border: 1px solid ${colors.grey[400]};
    .MuiFilledInput-input {
      padding: 18px 12px 10px;
    }
  }
  .MuiFilledInput-underline.Mui-error {
    border: 1px solid ${colors['off-red'].base};
  }
  .MuiInputLabel-filled {
    transform: translate(12px, 18px) scale(1);
    color: ${colors.grey[200]};
    &.MuiInputLabel-shrink {
      color: ${colors.grey[300]};
      transform: translate(12px, 8px) scale(0.6);
    }
  }
`

const RevealTextField = ({
  revealed,
  onToggle,
  InputProps,
  showToggle,
  textProp = false,
  ...textFieldProps
}) => {
  const handleToggle = useCallback(() => {
    if (onToggle) {
      onToggle(revealed)
    }
  }, [onToggle, revealed])

  const toggle = useMemo(() => {
    return showToggle === undefined ? true : showToggle
  }, [showToggle])

  return (
    <TextField
      autoFocus={false}
      {...textFieldProps}
      type={revealed ? 'text' : 'password'}
      InputProps={{
        ...InputProps,
        endAdornment:
          toggle && !textProp ? (
            <EndAdornment>
              <IconButton
                aria-label="toggle client secret visibility"
                onClick={handleToggle}
                edge="end">
                {revealed ? <EyeOpenIcon /> : <EyeClosedIcon />}
              </IconButton>
            </EndAdornment>
          ) : (
            <IconButton edge="end">
              <FaUserIcon />
            </IconButton>
          )
      }}
    />
  )
}
export default RevealTextField
