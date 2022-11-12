import { Drawer, Box, Typography, List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UseUiStore } from '../../hooks';

const menuItems:string[] = ['Inbox','Starred','Send email','Drafts'];

export const Sidebar = () => {

    const { isOpen, startOpenSideBar } = UseUiStore();

    const onCloseSidebar = () => {
        startOpenSideBar(false)
    }

  return (
    <Drawer
        anchor='left'
        open={ isOpen }
        onClose={onCloseSidebar}
    >
        <Box sx={{width: 250}}>

            <Box sx={{padding: '5px 10px'}}>
                <Typography variant='h4'>Menu</Typography>
            </Box>

            <List>
                {
                    menuItems.map((text,index) => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxOutlinedIcon/> : <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItemButton>
                    ) )
                }
            </List>

            <Divider/>

        </Box>

    </Drawer>
  )
}
