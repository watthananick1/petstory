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
ImageList
} from '@mui/material';
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
        image: string;
    };
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));


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
    
    
    return (
        <div className={classNames(styles.root, className)}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader 
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
                  title="Shrimp and Chorizo Paella"
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
                <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
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
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
    },
  ];
