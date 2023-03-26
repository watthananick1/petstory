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
ImageListItem,
alpha
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
      Comment: Record<string, never>;
      like: string[];
      description: string;
      tagpet: string[];
      firstName: string;
      lastName: string;
      img: string[];
      date: {
        _seconds: number;
        _nanoseconds: number;
      };
    };
}

interface PetPost {
  id: string;
  Comment: Record<string, never>;
  like: string[];
  description: string;
  tagpet: string[];
  firstName: string;
  lastName: string;
  img: string[];
  date: {
    _seconds: number;
    _nanoseconds: number;
  };
}


interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
 
  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));


/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-posts-and-templates
 */
export const Post = ({ className, post }: PostProps) => {
    const [isLiked, setIsLiked] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleLikeClick = () => {
        setIsLiked(!isLiked); // toggle state value
      };
      
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };
    const name = post.firstName+" "+post.lastName;
    const date = (post.date ? new Date(post.date._seconds * 1000) : null;

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
                    <div>
                      <IconButton aria-label="settings" onClick={handleClick}>
                        <FontAwesomeIcon icon={faEllipsisV} size="sm" />
                      </IconButton>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          'aria-labelledby': 'demo-customized-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem onClick={handleClose} disableRipple>
                          <EditIcon />
                          Edit
                        </MenuItem>
                        <MenuItem onClick={handleClose} disableRipple>
                          <FileCopyIcon />
                          Duplicate
                        </MenuItem>
                        {/* <Divider sx={{ my: 0.5 }} /> */}
                        
                      </StyledMenu>
                    </div>
                  }
                  
                  title= {name}
                  subheader= {date} 
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
