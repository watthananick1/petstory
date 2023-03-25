import styles from './card-type-pet.module.scss';
import classNames from 'classnames';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


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
                    <Box component="span" 
                    sx={{
                        backgroundImage:
                            'url(https://console.firebase.google.com/u/0/project/pet-story-f51e3/firestore/data/~2FTypePet~2F3LJusUbJzqfBu3Uvr63c)',
                        width: 300,
                        height: 300,
                        backgroundColor: 'primary.dark',
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          opacity: [0.9, 0.8, 0.7],
                        },
                      }}>
                        <Button>Save</Button>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box component="span">
                        <Button>Save</Button>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};
