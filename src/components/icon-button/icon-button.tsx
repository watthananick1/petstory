import styles from './icon-button.module.scss';
import classNames from 'classnames';

export interface IconButtonProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-icon-buttons-and-templates
 */
export const IconButton = ({ className }: IconButtonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img className={styles.iconImg} src ="https://img.icons8.com/ios/50/null/user--v3.png" />
        </div>
    );
};
