import styles from './favorit.module.scss';
import classNames from 'classnames';

export interface FavoritProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-favorits-and-templates
 */
export const Favorit = ({ className }: FavoritProps) => {
    return <div className={classNames(styles.root, className)}>P1</div>;
};
