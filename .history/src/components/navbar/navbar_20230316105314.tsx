import styles from './navbar.module.scss';
import classNames from 'classnames';

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
            <span >
                <span>text</span>
                Text
                <nav>
                    <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                    <a href="/about">About</a> | <a href="/contact">Contact Us</a>
                </nav>
            </span>
        </div>
    );
};
