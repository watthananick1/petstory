import styles from './cards.module.scss';
import classNames from 'classnames';
import https://mui.com/material-ui/icons/

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.postBox}>
                <input
                    hidden={false}
                    placeholder="What are you thinking..."
                    className={styles.postText}
                />
                <hr className={styles.postHr} />
            </div>
            <div className={styles.postBoxL}>
                <span className={styles.postIcon}>
                    <a href="/" className={styles.iconPost}>
                        <img
                            src="https://img.icons8.com/material-outlined/24/null/add-image.png"
                            className={styles.imgIcon}
                        />
                    </a>
                    <a href="/" className={styles.iconPost}>
                        <img
                            src="https://img.icons8.com/material-outlined/24/null/video.png"
                            className={styles.imgIcon}
                        />
                    </a>
                </span>
                <div className={styles.postL}>
                    <a href="/">
                        <img
                            src="https://img.icons8.com/small/32/6309de/filled-sent.png"
                            className={styles.sendButton}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};
