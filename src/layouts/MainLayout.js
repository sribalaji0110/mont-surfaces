import SideBar from 'components/Common/SideBar'
import styled from 'styled-components'

const WrapperContainer = styled.div`
  padding: 78px 20px 0px 295px;
`

const MainLayout = ({ children }) => {
  return (
    <>
      <SideBar />
      <WrapperContainer>{children}</WrapperContainer>
    </>
  )
}

export default MainLayout
