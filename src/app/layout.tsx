'use client';

import { JSX, ReactNode, useState } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import {
  AppBar,
  Box,
  CssBaseline,
  IconButton,
  Toolbar,
  ThemeProvider,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { useTheme } from '@mui/material/styles';
import defaultTheme from './styles/theme';
import MenuDrawer from '../features/ui/MenuDrawer/components';
import StyledJsxRegistry from './registry';
import './globals.css';

const drawerWidth = 240;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  function handleDrawerToggle() {
    setOpen(!open);
  }

  const menuItems = [
    {
      text: 'Home',
      icon: <HomeIcon sx={{ color: theme.palette.primary.contrastText }} />,
      link: '/',
    },
    {
      text: 'Info',
      icon: (
        <DashboardIcon sx={{ color: theme.palette.primary.contrastText }} />
      ),
    },
  ];

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <StyledJsxRegistry>
            <ThemeProvider theme={defaultTheme}>
              <Box
                sx={{
                  color: theme.palette.primary.contrastText,
                  display: 'flex',
                  maxHeight: '100vh',
                }}
              >
                <AppBar position="fixed" sx={{ width: '100%' }}>
                  <Toolbar>
                    <IconButton
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap />
                  </Toolbar>
                </AppBar>
                <MenuDrawer
                  width={drawerWidth}
                  items={menuItems}
                  open={open}
                  onClose={handleDrawerToggle}
                />
                <Box sx={{ marginTop: '4rem', height: '100vh' }}>{children}</Box>
              </Box>
              <CssBaseline />
            </ThemeProvider>
          </StyledJsxRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
