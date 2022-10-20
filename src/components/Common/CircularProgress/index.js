import { CircularProgress as _CircularProgress } from '@material-ui/core'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CircularProgress = ({ size, color = 'primary' }) => {
  return (
    <Wrapper>
      <_CircularProgress size={size} color={color} />
    </Wrapper>
  )
}

export default CircularProgress
