import { colors } from '../colors'

export const drawerWidth = 280

export const menuList = [
  {
    name: 'Admin',
    roleId: 0,
    route: [
      {
        label: 'Admin Dasboard',
        path: '/dashboard'
      },
      {
        label: 'Reports',
        isDropDown: true,
        subMenu: [
          {
            title: 'Report List',
            to: '/reports'
          }
        ]
      }
    ],
    colorPaletteConfig: {
      primary: colors['off-black'].base,
      secondary: colors['off-pink'].base,
      backgroundColor: colors['off-white'].base,
      iconColor: colors['cerulean-blue'].light,
      supportingTextColor: colors['cerulean-blue'].base,
      textColor: colors['cerulean-blue'].dark,
      buttonPrimaryBackgroundColor: colors['cerulean-blue'].light,
      buttonPrimaryTextColor: colors['cerulean-blue'].base,
      buttonSecondaryBorderColor: colors['cerulean-blue'].dark,
      buttonSecondaryTextColor: colors['cerulean-blue'].base
    }
  },
  {
    name: 'Customer',
    roleId: 1,
    route: [
      {
        label: 'Customer DashBoard',
        path: '/dashboard'
      },
      {
        label: 'Sales',
        isDropDown: true,
        subMenu: [
          {
            title: 'Sales List',
            to: '/list'
          },
          {
            title: 'Invoices',
            to: '/invoices'
          }
        ]
      }
    ],
    colorPaletteConfig: {
      primary: colors['cerulean-blue'].base,
      secondary: colors['cerulean-blue'].light,
      backgroundColor: colors['cerulean-blue'].dark,
      iconColor: colors['cerulean-blue'].light,
      supportingTextColor: colors['cerulean-blue'].base,
      textColor: colors['cerulean-blue'].dark,
      buttonPrimaryBackgroundColor: colors['cerulean-blue'].light,
      buttonPrimaryTextColor: colors['cerulean-blue'].base,
      buttonSecondaryBorderColor: colors['cerulean-blue'].dark,
      buttonSecondaryTextColor: colors['cerulean-blue'].base
    }
  },
  {
    name: 'Supplier',
    roleId: 2,
    route: [
      {
        label: 'Supplier DashBoard',
        path: '/dashboard'
      },
      {
        label: 'Holds',
        isDropDown: true,
        subMenu: [
          {
            title: 'Hold List',
            to: '/holds'
          }
        ]
      }
    ],
    colorPaletteConfig: {
      primary: colors['crayola-blue'].base,
      secondary: colors['crayola-blue'].base,
      backgroundColor: colors['cerulean-blue'].base,
      iconColor: colors['crayola-blue'].base,
      supportingTextColor: colors['cerulean-blue'].base,
      textColor: colors['cerulean-blue'].base,
      buttonPrimaryBackgroundColor: colors['crayola-blue'].base,
      buttonPrimaryTextColor: colors['cerulean-blue'].base,
      buttonSecondaryBorderColor: colors['cerulean-blue'].base,
      buttonSecondaryTextColor: colors['crayola-blue'].base
    }
  },
  {
    name: 'Employee',
    roleId: 4,
    route: [
      {
        label: 'Employee DashBoard',
        path: '/dashboard'
      },
      {
        label: 'Reports',
        isDropDown: true,
        subMenu: [
          {
            title: 'reports',
            to: '/reports'
          }
        ]
      }
    ],
    colorPaletteConfig: {
      primary: colors['crayola-blue'].base,
      secondary: colors['crayola-blue'].base,
      backgroundColor: colors['cerulean-blue'].base,
      iconColor: colors['crayola-blue'].base,
      supportingTextColor: colors['cerulean-blue'].base,
      textColor: colors['cerulean-blue'].base,
      buttonPrimaryBackgroundColor: colors['crayola-blue'].base,
      buttonPrimaryTextColor: colors['cerulean-blue'].base,
      buttonSecondaryBorderColor: colors['cerulean-blue'].base,
      buttonSecondaryTextColor: colors['crayola-blue'].base
    }
  }
]

export const loginButtonList = [
  { key: 0, name: 'Login as admin', route: '/admin/login' },
  { key: 1, name: 'Login as Customer', route: '/customer/login' },
  { key: 2, name: 'Login as Supplier', route: '/supplier/login' }
]

export const headerDetails = [
  { name: 'Frozen yoghurt', align: 'left' },
  { name: 'Ice cream sandwich' },
  { name: 'Eclair' },
  { name: 'Cupcake' },
  { name: 'Gingerbread' }
]

export const adminSaleList = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 3.9 }
]

export const industries = [
  { key: 'Frozen', value: 'Acquirer' },
  { key: 'Cupcake', value: 'Automotive' }
]
