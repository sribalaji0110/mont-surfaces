import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Box, Tabs as _Tabs, Tab as _Tab } from '@material-ui/core/'
import { colors } from 'services/colors'
import styled from 'styled-components'

const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...props}>
      {value === index && <Box sx={{ mt: 4 }}>{children}</Box>}
    </div>
  )
}

const StyledTabPanel = styled(TabPanel)`
  background-color: ${({ $backgroundColor }) => $backgroundColor || 'unset'};
  margin-left: -24px;
  margin-right: -24px;
  padding: 24px;
  min-height: 100%;

  .MuiBox-root {
    margin-top: unset;
  }
`

const StyledTabIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
`

const StyledTab = styled(_Tab)`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  border: 1px solid ${colors.grey[500]};
  border-bottom: none;
  border-radius: 12px 12px 0 0;
  padding: 8px 12px;
  margin-right: 12px;
  min-width: auto;
  min-height: auto;
  height: auto;
  text-transform: none;

  .MuiTab-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
  }

  .MuiTouchRipple-root {
    // Extend ripple effect to match the thickness of the Tab borders
    left: -1px;
    right: -1px;
    top: -1px;
  }

  &.Mui-selected {
    background-color: ${colors['cerulean-blue'].base};
    border-color: transparent;
    color: ${colors['off-white'].base};
  }

  &:last-of-type {
    margin-right: 0px;
  }
`

const StyledTabs = styled(_Tabs)`
  border-bottom: 1px solid ${colors.grey[100]};
  min-height: auto;

  button {
    ${(props) => props.theme.breakpoints.only('xs')} {
      flex: 1;
      font-size: 12px;
      max-width: 150px;
    }
  }

  .MuiTabs-indicator {
    display: none;
  }

  .MuiTab-labelIcon .MuiTab-wrapper > *:first-child {
    margin: 0 12px 0 0;
  }
`

const Tabs = (props) => <StyledTabs {...props} />
Tabs.Tab = StyledTab
Tabs.Panel = StyledTabPanel
Tabs.Icon = StyledTabIcon

export default Tabs
