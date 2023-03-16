import styles from './navbar.module.scss';
import classNames from 'classnames';
import { Seach } from '../seach/seach';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-navbars-and-templates
 */
export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.navberTop}>
                <span className={styles.logo}>Pet Story</span>
                <Seach />
                <nav className={styles.navberCon}>
                    <a href="/home">
                        <img
                            src="https://img.icons8.com/fluency-systems-regular/48/null/appointment-reminders--v1.png"
                            className={styles.iconImg}
                        />
                    </a>
                    <a href="/projects">
                        <img
                            src="https://img.icons8.com/office/16/null/user.png"
                            className={styles.imgProfile}
                        />
                    </a>
                    <a href="/about">
                        <img
                            src="https://img.icons8.com/metro/26/null/menu.png"
                            className={styles.iconImg}
                        />
                    </a>
                </nav>
            </div>
        </div>
    );
};
