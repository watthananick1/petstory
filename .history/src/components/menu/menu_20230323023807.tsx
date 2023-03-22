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
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';

export interface MenuProps {
    className?: string;
}


const sortBy: string[] = ['Popularity', 'Most like', 'Type of pet'];
const Genre: string[] = ['Cat', 'Dog', 'Hamster'];
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
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
