import styles from './sign-up.module.scss';
import classNames from 'classnames';

export interface SignUpProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-sign-ups-and-templates
 */
export const SignUp = ({ className }: SignUpProps) => {
    return <div className={classNames(styles.root, className)}>SignUp</div>;
};
