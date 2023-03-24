import styles from './login.module.scss';
import classNames from 'classnames';
import Grid from '@mui/material/Grid'; // Grid version 1

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
                {/* <Grid container spacing={0}>
                    {' '}
                </Grid> */}
                <h1>Heading 1</h1>
            </div>
        </div>
        con
    );
};
