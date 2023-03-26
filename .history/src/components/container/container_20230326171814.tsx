import styles from './container.module.scss';
import classNames from 'classnames';
import { Cardsfrom '../cards/cards';

export interface ContainerProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-containers-and-templates
 */
export const Container = ({ className }: ContainerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.cardTemp}>
                <Cards />
            </div>
        </div>
    );
};
