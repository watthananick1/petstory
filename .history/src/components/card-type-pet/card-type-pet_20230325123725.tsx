import styles from './card-type-pet.module.scss';
import classNames from 'classnames';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { CardActions, CardHeader, Grid } from '@mui/material';
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
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  src='https://firebasestorage.googleapis.com/v0/b/pet-story-f51e3.appspot.com/o/mainData%2FimgTypePet%2Fcat.jpg?alt=media&token=758765ef-8887-4d21-88d9-0f803717e977'
                  alt="green iguana"
            />
            <CardContent>

                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={'outlined'}
                  >
                    {"Cat"}
                  </Button>
                </CardActions>
              </CardActionArea>
              </Card>
        </div>
    );
};
