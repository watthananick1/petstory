import styles from './card-type-pet.module.scss';
import classNames from 'classnames';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

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
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={6}>
                <Item>1</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>2</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>3</Item>
              </Grid>
              <Grid item xs={6}>
                <Item>4</Item>
              </Grid>
            </Grid>
            <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
              <Button>Save</Button>
            </Box>
        </div>
    );
};
