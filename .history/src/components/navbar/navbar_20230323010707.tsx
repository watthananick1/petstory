import styles from './navbar.module.scss';
import classNames from 'classnames';
import { Seach } from '../seach/seach';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

export interface NavbarProps {
    className?: string;
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navbars-and-templates
 */
export const Navbar = ({ className }: NavbarProps) => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
    
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
      };
    
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
      };
      
      https://mui.com/material-ui/react-app-bar/
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navberTop}>
                <span className={styles.logo}>Pet Story</span>
                <Seach />
                <nav className={styles.navberCon}>
                    <a href="/home">
                        <img
                            src="https://img.icons8.com/fluency-systems-regular/48/null/appointment-reminders--v1.png"
                            className={styles.iconImg}
                        />
                    </a>
                    <div className={styles.nav_img_Profile}>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            className={styles.imgProfile}
                        />
                    </div>
                    <a href="/about">
                        <img
                            src="https://img.icons8.com/metro/26/null/menu.png"
                            className={styles.iconImg}
                        />
                    </a>
                </nav>
            </div>
        </div>
    );
};
