import { Box, Typography as _Typography } from '@material-ui/core'
import { colors } from 'services/colors'
import styled from 'styled-components'

const FormError = ({ message, ...boxProps }) => {
  if (!message) {
    return null
  }

  const Typography = styled(_Typography)`
    color: ${colors['off-red'].base};
    position: absolute;
  `

  return (
    <Box {...boxProps}>
      <Typography variant="caption">{message}</Typography>
    </Box>
  )
}
export default FormError
