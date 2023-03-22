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
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import { grey } from '@mui/material/colors';

export interface MenuProps {
    className?: string;
}

const data = [
    { icon: <HomeIcon />, label: 'Home Page' }
  ];

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
                
                <span className={styles.title}>Sort By</span>
                <hr className={styles.hr} />
                <ul className={styles.list}>
                    {sortBy.map((item) => (
                        <li className={styles.listItem} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
                <span className={styles.title}>Genre</span>
                <hr className={styles.hr} />
                <ul className={styles.list}>
                    {Genre.map((item) => (
                        <li className={styles.listItem} key={item}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
