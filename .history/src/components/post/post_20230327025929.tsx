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
Avatar,
styled,
Collapse,
Typography,
ImageList,
ImageListItem
} from '@mui/material';
import { IconButtonProps } from '@mui/material/IconButton';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useState } from 'react';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


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
        img: string[];
    };
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  



/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className, post }: PostProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    
    const handleLikeClick = () => {
        setIsLiked(!isLiked); // toggle state value
      };
      
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const name = post.firstName+" "+post.lastName;
    
    return (
        <div className={classNames(styles.root, className)}>
            <Card sx={{minWidth: "100%"}}>
                <CardHeader 
                    //className={classNames(styles.post_Name, className)}
                   avatar={
                    <Avatar aria-label="recipe" sx={{ width: 48, height: 48 }}>
                      <img 
                        src={"https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"} 
                        loading="lazy"
                        />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <FontAwesomeIcon icon={faEllipsisV} size="sm" />
                    </IconButton>
                  }
                  title= {name}
                  subheader="September 14, 2016" 
                />
                <CardContent>
                    <div className={styles.post_desc}>
                        {post.description}
                    </div>
                    <span className={styles.post_Tag}>
                        <div className={styles.post_Tag_Item}>#{post.tagpet}</div>
                    </span>
                </CardContent>
                {post.img && Array.isArray(post.img) && (
                      <ImageList variant="masonry" cols={3} gap={2}>
                        {post.img.map((item) => (
                          <ImageListItem key={item}>
                            <img
                              src={`${item}?w=161&fit=crop&auto=format`}
                              srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                              loading="lazy"
                            />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    )}
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
                <CardActions disableSpacing>
                    <IconButton onClick={handleLikeClick} style={{ color: '#6200E8' }}>
                        {isLiked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                    </IconButton>
                    <Link onClick={handleExpandClick} underline="none" >
                        {'comment'}
                    </Link>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Comment</Typography>
                            <Typography paragraph>
                                
                            </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            
        </div>
    );
};
