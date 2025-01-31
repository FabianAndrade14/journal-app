import { Box } from "@mui/material"
import { NavBar, SideBar } from "../components";



const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* Navbar drawerWidth*/}
        <NavBar></NavBar>

        {/* Sidebar drawerWidth*/}
        <SideBar></SideBar>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}
        >
            {/* Toolbar */}
            {children}

        </Box>
    </Box>
  )
}
