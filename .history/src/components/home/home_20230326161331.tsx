import styles from './home.module.scss';
import classNames from 'classnames';
import { Menu } from '../menu/menu';
import { Container } from '../container/container';
import { Navbar } from './navbar/navbar';
import { Posts } from './posts/posts';
export interface HomeProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-homes-and-templates
 */
export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div />
        </div>
    );
};
