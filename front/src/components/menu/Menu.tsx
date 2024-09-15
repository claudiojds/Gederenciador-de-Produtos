import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CategoryIcon from '@mui/icons-material/Category';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ListAltIcon from '@mui/icons-material/ListAlt';


import { useState } from "react";
import {Container} from "@mui/material"
import ProducRegister from "../products/ProductResgister";
import ProductList from "../products/ProductList";
import CategoryResgister from "../category/CategoryRegister";
import CategoryList from "../category/CategoryList";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));


export default function Menu() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = useState(1)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const selectConponent = () =>{
    if(visible === 1){
      return <ProducRegister texto={"Cadastro de produtos"}/>
    } else if (visible === 2) {
      return < ProductList texto={"Lista de produtos"}/>
    } else if (visible === 3) {
      return <CategoryResgister texto={"Cadastro de categorias"}/>
    } else {
      return <CategoryList texto={"Lista de categorias"}/>
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Gerenciador de Produtos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem onClick={() => {setVisible(1)}} key={1} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <InsertDriveFileIcon/>
              </ListItemIcon>
              <ListItemText primary={"Cadastro de produtos"} />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => {setVisible(2)}} key={2} disablePadding >
            <ListItemButton>
              <ListItemIcon>
              <Inventory2Icon />
              </ListItemIcon>
              <ListItemText primary={"Lista de produtos"} />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => {setVisible(3)}} key={3} disablePadding >
            <ListItemButton>
              <ListItemIcon>
              <CategoryIcon />
              </ListItemIcon>
              <ListItemText primary={"Cadastro de categorias"} />
            </ListItemButton>
          </ListItem>
          <ListItem onClick={() => {setVisible(4)}} key={4} disablePadding >
            <ListItemButton>
              <ListItemIcon>
              <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary={"Lista de categorias"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Container maxWidth="sm">
          {
            selectConponent()
          }
      </Container>
      </Main>
    </Box>
  );
}
