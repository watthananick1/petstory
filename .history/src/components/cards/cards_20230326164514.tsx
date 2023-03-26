import styles from './cards.module.scss';
import classNames from 'classnames';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
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
            <Card sx={{ maxWidth: 345 }}>
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
            </Card>
        </div>
    );
};
