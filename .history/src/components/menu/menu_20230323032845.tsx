import styles from './menu.module.scss';
import classNames from 'classnames';

import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import HomeIcon from '@mui/icons-material/Home';
import { grey } from '@mui/material/colors';

export interface MenuProps {
    className?: string;
}

const data = [{ icon: <HomeIcon />, label: 'Home Page' }];

const sortBy: string[] = ['Popularity', 'Most like', 'Type of pet'];
const Genre: string[] = ['Cat', 'Dog', 'Hamster'];

const FireNav = styled(List)<{ component?: React.ElementType }>({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    const [open, setOpen] = React.useState(true);
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <Box sx={{ display: 'flex' }}>
                    <ThemeProvider
                        theme={createTheme({
                            components: {
                                MuiListItemButton: {
                                    defaultProps: {
                                        disableTouchRipple: true,
                                    },
                                },
                            },
                            palette: {
                                primary: { main: '#6309DE' },
                                background: { paper: '#F5F5F5' },
                                text: {
                                    primary: '#212121',
                                    secondary: grey[500],
                                },
                            },
                        })}
                    >
                        <Paper elevation={0} sx={{ width: '100%' }}>
                            <FireNav component="nav" disablePadding>

                                <Divider />
                                <Box
                                    sx={{
                                        bgcolor: open ? '#E2D7F0' : null,
                                        pb: open ? 2 : 0,
                                    }}
                                >
                                    <ListItemButton
                                        alignItems="flex-start"
                                        onClick={() => setOpen(!open)}
                                        sx={{
                                            px: 3,
                                            pt: 2.5,
                                            pb: open ? 0 : 2.5,
                                            '&:hover, &:focus': {
                                                '& svg': { opacity: open ? 1 : 0 },
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary="Page"
                                            primaryTypographyProps={{
                                                fontSize: 15,
                                                fontWeight: 'medium',
                                                lineHeight: '20px',
                                                mb: '2px',
                                            }}
                                            secondary=""
                                            secondaryTypographyProps={{
                                                noWrap: true,
                                                fontSize: 12,
                                                lineHeight: '16px',
                                                color: open ? 'rgba(0,0,0,0)' : '#E2D7F0',
                                            }}
                                            sx={{ my: 0 }}
                                        />
                                        <KeyboardArrowDown
                                            sx={{
                                                mr: -1,
                                                opacity: 0,
                                                transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                                transition: '0.2s',
                                            }}
                                        />
                                    </ListItemButton>
                                    {open &&
                                        data.map((item) => (
                                            <Link href="#" underline="none">
                                                <ListItemButton
                                                    key={item.label}
                                                    sx={{ py: 0, minHeight: 32, color: '#212121' }}
                                                >
                                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                                        {item.icon}
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={item.label}
                                                        primaryTypographyProps={{
                                                            fontSize: 14,
                                                            fontWeight: 'medium',
                                                        }}
                                                    />
                                                </ListItemButton>
                                            </Link>
                                        ))}
                                </Box>
                            </FireNav>
                        </Paper>
                    </ThemeProvider>
                </Box>
            </div>
        </div>
    );
};
