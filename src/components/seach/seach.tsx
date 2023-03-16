import styles from './seach.module.scss';
import classNames from 'classnames';

export interface SeachProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-seachs-and-templates
 */
export const Seach = ({ className }: SeachProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <input className={styles.input} placeholder="Search..." />
            <button className={styles.button}>Search</button>
        </div>
    );
};
