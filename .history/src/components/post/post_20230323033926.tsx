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
import Grid2 from '@mui/material/Unstable_Grid2';
import { IconButtonProps } from '@mui/material/IconButton';
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
                <.root {
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: center;
  justify-content: space-between;
  position: static;
  margin: 1% 25% 0%;
  align-content: end;
  gap: 1px;
  width: auto;
  border-radius: 15px;
  // padding: 10px;
}
.imgProflie {
  display: block;
  height: 49px;
  border-radius: 60px;
  padding: 0px 0% 0px 0px;
  margin-right: 2%;
  max-width: 59px;
  max-height: 59px;
  width: 49px;
}
.postTitleBox {
  display: flex;
  flex-direction: row;
  margin: 10px 16px 10px 10px;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  width: auto;
  height: 49px;
}
.post_Name {
  display: flex;
  //flex-direction: column;
  justify-content: start;
  justify-items: start;
  align-items: start;
  min-height: auto;
  //min-width: 100px;
}
.MuiCardHeader-root .MuiTypography-root.MuiCardHeader-title {
  text-align: left;
}

.post_Pro_Img {
  padding: 0px 1rem 0px 0px;
}
.post_Pro_name {
  height: auto;
  font-weight: 500;
  font-size: auto;
  width: auto;
  padding: 0px 0px 5px;
  min-width: 100px;
}
.postTime {
  display: flex;
  color: #b3b3b3;
  font-weight: 500;
  font-size: 15px;
  flex-direction: row;
  justify-items: start;
  align-items: center;
  justify-content: start;
}
.post_Num_Time {
  padding: 0px 10px 0px 0px;
}
.post_Body {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-items: start;
  margin-right: 4%;
  margin-left: 2%;
  font-size: 15px;
  padding: 0px;
  margin-bottom: 10px;
}
.post_desc {
  display: flex;
  justify-items: start;
  text-align: start;
  font-size: 15px;
  margin-bottom: 5px;
  margin-top: 5px;
  margin-right: 0%;
  margin-left: 0%;
}
.post_Tag {
  display: flex;
  justify-items: start;
  align-items: start;
  width: 100%;
}
.post_Tag_Item {
  font-size: 15px;
  font-weight: 500;
  color: #6309de;
  padding: 5px;
}
.post_Boby_hr {
  width: 100%;
  margin: 3%;
  padding: 0%;
}
.Post_Body_img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: auto;
}
.post_img {
  max-width: 100%;
  margin: 0px 0px 10px;
}
.post_Action {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  margin-left: 3%;
  margin-bottom: 10px;
}
.post_Action_icon {
  max-width: 39px;
  max-height: 39px;
}
.post_Action_a {
  margin-right: 10px;
  color: #7b809a;
}
.post_Action_div {
}
.post_text_div {
}
.text_comment {
}
.post_icon {
}
.icon_menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: end;
  justify-content: end;
  position: absolute;
  flex-wrap: nowrap;
  width: 48%;
}
.post_Body_Status {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  justify-items: center;
  color: #7b809a;
  padding-left: 0px;
  align-content: start;
  margin: 10px 0px 0px;
  padding-right: 10px;
}
.num_like {
  margin: 0px 0px 0px 5px;
}
.item_status {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: start;
  justify-items: start;
  align-items: start;
  align-content: start;
  min-width: auto;
  font-size: 16px;
}
 
                    //className={classNames(styles.post_Name, className)}
                   avatar={
                    <Avatar aria-label="recipe">
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

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    }
  ];
