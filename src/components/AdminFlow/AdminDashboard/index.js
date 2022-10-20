import { useState } from 'react'
import {
  Box,
  TableCell,
  TableRow,
  FormControl,
  Grid,
  TextField as _TextField,
  Typography,
  MenuItem
} from '@material-ui/core'
import { adminSaleList, industries } from 'services/helpers/constants'
import { faCog, faLink, faWrench } from '@fortawesome/free-solid-svg-icons'
import Checkbox from 'components/Common/CheckBox'
import {
  TableWrapper,
  CircularProgress,
  InputPassword,
  Radiobox,
  Tabs,
  FormError
} from 'components/Common'

export const AdminDashboard = () => {
  const [password, setPassword] = useState('')
  const [userName, setUsername] = useState('')
  const [activeTab, setActiveTab] = useState('0')

  const handleChange = (e, newValue) => {
    setActiveTab(newValue.toString())
    console.log(password)
    console.log(userName)
  }
  return (
    <>
      <TableWrapper>
        {adminSaleList.map(({ name, calories, fat, carbs, protein }) => (
          <TableRow key={name}>
            <TableCell component="th" scope="row">
              {name}
            </TableCell>
            <TableCell align="right">{calories}</TableCell>
            <TableCell align="right">{fat}</TableCell>
            <TableCell align="right">{carbs}</TableCell>
            <TableCell align="right">{protein}</TableCell>
          </TableRow>
        ))}
      </TableWrapper>
      <Box sx={{ mt: 2 }}>
        <Checkbox label="Test" bold />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Checkbox label="Test" bold={false} color="secondary" />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Radiobox label="Radiobox" checked />
      </Box>
      <Box>
        <FormError message={'This is an example form error'} sx={{ mt: 2 }} />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <_TextField
              autoComplete="username"
              fullWidth
              id="Username"
              label="Username"
              onChange={(e) => setUsername(e.target.value.trim())}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4}>
            <_TextField
              fullWidth
              label="Industry"
              name="industry"
              placeholder="Please select your industry"
              required
              select
              variant="outlined">
              {industries.map(({ key, value }) => (
                <MenuItem key={key} value={key}>
                  {value}
                </MenuItem>
              ))}
            </_TextField>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth variant="outlined">
              <InputPassword
                autoComplete="current-password"
                fullWidth
                id="Password"
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <CircularProgress size={30} />
          </Grid>
          <Grid item xs={4}>
            <CircularProgress size={70} color="secondary" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <Tabs onChange={handleChange} value={activeTab}>
              <Tabs.Tab icon={<Tabs.Icon icon={faCog} />} label="Tab 1" value="0" />
              <Tabs.Tab icon={<Tabs.Icon icon={faLink} />} label="Tab 2" value="1" />
              <Tabs.Tab icon={<Tabs.Icon icon={faWrench} />} label="Tab 3" value="2" />
            </Tabs>
            <Tabs.Panel index="0" value={activeTab}>
              <Typography>This is Tab 1</Typography>
            </Tabs.Panel>
            <Tabs.Panel index="1" value={activeTab}>
              <Typography>This is Tab 2</Typography>
            </Tabs.Panel>
            <Tabs.Panel index="2" value={activeTab}>
              <Typography>This is Tab 3</Typography>
            </Tabs.Panel>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}
