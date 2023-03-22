
import styles from './post.module.scss';
import classNames from 'classnames';

export default createBoard({
  name: 'Post',
  Board: ({ post }) => <Post post={post} />
});

export interface PostProps {
  className?: string;
  post: {
    id: string;
    firstName: string;
    lastName: string;
    Comment: object;
    like: any[];
    description: string;
    tagpet: string[];
  };
}

export const Post = ({ className, post }: PostProps) => {
  return (
    <div className={classNames(styles.root, className)}>
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
          <div className={styles.post_Pro_name}>
            {post.firstName} {post.lastName}
          </div>
          <span className={styles.postTime}>
            <div className={styles.post_Num_Time}>8</div>
            <div>hr.</div>
          </span>
        </span>
      </span>
      <span className={styles.post_Body}>
        <div className={styles.post_desc}>{post.description}</div>
        <span className={styles.post_Tag}>
          {post.tagpet.map((tag, index) => (
            <div className={styles.post_Tag_Item} key={index}>
              #{tag}
            </div>
          ))}
        </span>
      </span>
      <div className={styles.Post_Body_img}>
        <img
          src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
          className={styles.post_img}
        />
        <div className={styles.item_status}>
          <span className={styles.post_Body_Status}>
            <div className={styles.num_like}>{post.like.length}</div>
            <div className={styles.num_like}>Like</div>
          </span>
          <span className={styles.post_Body_Status}>
            <div className={styles.num_like}>
              {Object.keys(post.Comment).length}
            </div>
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