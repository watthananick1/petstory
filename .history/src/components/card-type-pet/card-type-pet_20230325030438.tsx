import styles from './card-type-pet.module.scss';
import classNames from 'classnames';
import * as React from 'react';
import Box from '@mui/material/Box';
https://mui.com/material-ui/react-box/

export interface CardTypePetProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-card-type-pets-and-templates
 */
export const CardTypePet = ({ className }: CardTypePetProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div />
        </div>
    );
};
