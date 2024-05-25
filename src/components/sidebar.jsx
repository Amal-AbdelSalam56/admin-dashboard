/* eslint-disable react/prop-types */
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { BarChartOutlined,
   CalendarTodayOutlined,
    ContactsOutlined,
     HelpOutlineOutlined, 
  MapOutlined, 
  PeopleAltOutlined,
   Person2Outlined, 
   PieChartOutlineOutlined,
   ReceiptLongOutlined,
    TimelineOutlined, } from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
// import {personimg} from '../assets/images/img,jpg'
import { useLocation, useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';





const drawerWidth = 240;


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  // @ts-ignore
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Sidebar = ({ open, handleDrawerClose }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const theme = useTheme();
  const array1 = [
    {
      "text": "Dashboard",
      "icon": <HomeOutlinedIcon />,
      "path": "/"
    },
    {
      "text": "Manage Team",
      "icon": <PeopleAltOutlined />,
      "path": "/team"
    },
    {
      "text": "Contacts Information",
      "icon": <ContactsOutlined />,
      "path": "/contacts"
    },
    {
      "text": "Invoices",
      "icon": <ReceiptLongOutlined />,
      "path": "/invoices"
    },
  ]
  const array2 = [
    {
      "text": "Profile Form",
      "icon": <Person2Outlined />,
      "path": "/Profile"
    },
    {
      "text": "Calender",
      "icon": <CalendarTodayOutlined />,
      "path": "/Calender"
    },
    {
      "text": "FAQ Page",
      "icon": <HelpOutlineOutlined />,
      "path": "/faq"
    },

  ]
  const array3 = [
    {
      "text": "Bar Chart",
      "icon": <BarChartOutlined />,
      "path": "/Bar"
    },
    {
      "text": "Pie Chart",
      "icon": <PieChartOutlineOutlined />,
      "path": "/Pie"
    },
    {
      "text": "Line Chart",
      "icon": <TimelineOutlined />,
      "path": "/Line"
    },
    {
      "text": "Geography Chart",
      "icon": <MapOutlined />,
      "path": "/Geography"
    },
  ]


  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Avatar sx={{ margin: "auto", width: open ? 99 : 44, height: open ? 99 : 44, border: "2px solid grey", marginTop: "5px", marginBottom: "5px", transition: "0.25s" }} alt="Travis Howard" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKrPmozlHgTInIMapo2LuX2mStfQRYKa3ECHDSd0wIZw&s' />

      <Typography align='center' variant='h5' sx={{ fontSize: open ? 20 : 0, transition: "0.25s" }}>Amal Ibrahim</Typography>
      <Typography align='center' variant='h6' sx={{ fontSize: open ? 17 : 0, transition: "0.25s", color: theme.palette.info.main }}>Admin</Typography>




      <Divider />


      <List>
        {array1.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[700] : grey[300] : null
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />   {/*خط خفيف */}

      <List>
        {array2.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[700] : grey[300] : null

              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array3.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: location.pathname === item.path ? theme.palette.mode === "dark" ? grey[700] : grey[300] : null

              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Drawer>
  )
}

export default Sidebar;