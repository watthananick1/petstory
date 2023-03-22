import styles from './post.module.scss';
import classNames from 'classnames';
import { postTp } from '../../../.history/src/components/posts/posts_20230319002758';


export interface PostProps {
    className?: string;
}

interface postTp {
    id: string;
    firstName: string;
    lastName: string;
    Comment: object;
    like: any[];
    description: string;
    tagpet: string[];
  }

export const Post = ({ postTp  }: PostProps) => {
    return (
        <div className={classNames(styles.root,)}>
            <div className={styles.icon_menu}>
                <img
                    src="https://img.icons8.com/external-regular-kawalan-studio/24/null/external-kebab-menu-user-interface-regular-kawalan-studio.png"
                    className={styles.post_icon}
                />
            </div>
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
            <span className={styles.post_Body}>
                <div className={styles.post_desc}>
                    This is a picture of my lovely dog. Watch it grow beautifully.
                </div>
                <span className={styles.post_Tag}>
                    <div className={styles.post_Tag_Item}>#hedgehog</div>
                </span>
            </span>
            <div className={styles.Post_Body_img}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles.post_img}
                />
                <div className={styles.item_status}>
                    <span className={styles.post_Body_Status}>
                        <div className={styles.num_like}>100</div>
                        <div className={styles.num_like}>Like</div>
                    </span>
                    <span className={styles.post_Body_Status}>
                        <div className={styles.num_like}>2</div>
                        <div className={styles.num_like}>Comment</div>
                    </span>
                </div>
                <hr className={styles.post_Boby_hr} />
            </div>
            <span className={styles.post_Action}>
                <a href="/" className={styles.post_Action_a}>
                    <img
                        src="https://img.icons8.com/ios-glyphs/30/6309de/hearts.png"
                        className={styles.post_Action_icon}
                    />
                </a>
                <a href="/" className={styles.post_Action_a}>
                    comment...
                </a>
            </span>
        </div>
    );
};
