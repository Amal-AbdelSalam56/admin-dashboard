/* eslint-disable no-unused-vars */
import * as React from 'react';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar';
import { getDesignTokens } from './theme';
import { Outlet } from 'react-router-dom';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentMode")
      ? localStorage.getItem("currentMode") : "light");

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>    {/* اضافة الثيم  */}
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Topbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />

        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />


        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />

           <Outlet/>       {/* لأى حاجة بتتغير حسب الراوت  */}
       
        </Box>
      </Box>
    </ThemeProvider>

  );
}