import styles from './post.module.scss';
import classNames from 'classnames';

export interface PostProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className }: PostProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <span className={styles.postTitleBox}>
                <div className={styles.post_Pro_Img}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className={styles.imgProflie}
                    />
                </div>
                <span className={styles.post_Name}>
                    <div className={styles.post_Pro_name}>Olivia Mabel</div>
                    <span className={styles.postTime}>
                        <div className={styles.post_Num_Time}>8</div>
                        <div>hr.</div>
                    </span>
                </span>
            </span>
            <span>
                <span className={styles.post_Body}>
                    <div className={styles.post_desc}>
                        This is a picture of my lovely dog. Watch it grow beautifully.
                    </div>
                    <span className={styles.post_Tag}>
                        <div className={styles.post_Tag_Item}>#hedgehog</div>
                    </span>
                </span>
            </span>
        </div>
    );
};
