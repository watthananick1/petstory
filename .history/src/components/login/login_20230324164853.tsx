import styles from './login.module.scss';
import classNames from 'classnames';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-logins-and-templates
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <Grid container spacing={0}>

            </div>
        </div>
    );
};
