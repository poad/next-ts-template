import React from 'react';
import {
  AppBar, CssBaseline, Divider, Drawer, Hidden, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import {
  useTheme,
} from '@mui/material/styles';

const drawerWidth = 240;

interface LayoutProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container?: Element
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { container } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const drawer = (
    <div>
      <div style={theme.mixins.toolbar} />
      <Divider />
      <List>
        {['Info'].map((text) => (
          <ListItem button key={text} sx={{ color: '#fff', }}>
            <ListItemIcon sx={{ color: '#fff', }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: 'flex', color: '#fff', }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ marginLeft: drawerWidth, [theme.breakpoints.up('sm')]: { width: `calc(100% - ${drawerWidth}px)`, }, }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ marginRight: theme.spacing(2), [theme.breakpoints.up('sm')]: { display: 'none', }, }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap></Typography>
        </Toolbar>
      </AppBar>
      <nav style={{ [theme.breakpoints.up('sm')]: { width: drawerWidth, flexShrink: 0, }, }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              paper: { width: drawerWidth, backgroundColor: theme.palette.primary.main, },
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            sx={{
              paper: { width: drawerWidth, backgroundColor: theme.palette.primary.main, },
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main style={{ flexGrow: 1, }}>
        <div style={theme.mixins.toolbar} />
        {props.children}
      </main>
    </div>
  );
};

export default Layout;