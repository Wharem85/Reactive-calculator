import React from 'react';
import '../Assets/styles/Header.css';
import logo from "../Assets/img/logo4.png";
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';

const Header = () => {
	const StyledMenu = withStyles({
	paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const preventDefault = (event) => event.preventDefault();

	return (
	<header className="header">
		<img className="header_img" src={logo} alt="logo_de_la_pagina" />
    <p className="titulo">Atomo</p>
		<div className="menuProblemas">
			<Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link href="#conversion-longitud"><ListItemText primary="Converciones de longitud" /></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="#conversion-tiempo"><ListItemText primary="Conversiones de tiempo" /></Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link href="#conversion-peso"><ListItemText primary="Conversiones de peso" /></Link>
        </StyledMenuItem>
				<StyledMenuItem>
          <Link href="#segunda-newton"><ListItemText primary="Segunda ley de newton"/></Link>
        </StyledMenuItem>
				<StyledMenuItem>
          <Link href="#suma-vectores"><ListItemText primary="Suma de vectores" /></Link>
        </StyledMenuItem>
      </StyledMenu>
		</div>
	</header>
	);
};


export default Header;
