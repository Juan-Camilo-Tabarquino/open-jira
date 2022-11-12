import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UseUiStore } from '../../hooks';

export const Navbar = () => {

  const { startOpenSideBar } = UseUiStore();

  const OpenSidebar = () => {
    startOpenSideBar(true);
  }

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={OpenSidebar}
            >
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>

    </AppBar>
  )
}
