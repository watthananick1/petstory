import styles from './post.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
IconButton, 
Link, 
Card, 
CardMedia,
CardHeader,
CardContent,
CardActions,
Avatar
} from '@mui/material';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';


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
        image: string;
    };
}



/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className, post }: PostProps) => {
    const [isLiked, setIsLiked] = useState(false);
    
    const handleLikeClick = () => {
        setIsLiked(!isLiked); // toggle state value
      };
    
    
    
    return (
        <div className={classNames(styles.root, className)}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader 
                    
                />
            </Card>
            <div className={styles.icon_menu}>
                <IconButton >
                    <FontAwesomeIcon icon={faEllipsisV} size="sm" />
                </IconButton>
            </div>
            <span className={styles.postTitleBox}>
                <div className={styles.post_Pro_Img}>
                    <img
                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                        className={styles.imgProflie}
                    />
                </div>
                <span className={styles.post_Name}>
                    <div className={styles.post_Pro_name}>{post.firstName} {post.lastName}</div>
                    <span className={styles.postTime}>
                        <div className={styles.post_Num_Time}>8</div>
                        <div>hr.</div>
                    </span>
                </span>
            </span>
            <span className={styles.post_Body}>
                <div className={styles.post_desc}>
                    {post.description}
                </div>
                <span className={styles.post_Tag}>
                    <div className={styles.post_Tag_Item}>#{post.tagpet}</div>
                </span>
            </span>
            <div className={styles.Post_Body_img}>
                <CardMedia
                    component="img"
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    //image="/static/images/cards/paella.jpg"
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
                <IconButton onClick={handleLikeClick} style={{ color: '#6200E8' }}>
                    {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                </IconButton>
                <Link href="#" underline="none" >
                    {'comment'}
                </Link>
            </span>
        </div>
    );
};
