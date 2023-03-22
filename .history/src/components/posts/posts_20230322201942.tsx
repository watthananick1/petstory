import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post} from '../post/post';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface PostsProps {
    className?: string;
}
export interface PostData {
    id: string;
    firstName: string;
    lastName: string;
    Comment: object;
    like: any[];
    description: string;
    tagpet: string[];
}


export const Posts = ({ className }: PostsProps) => {
    const [posts, setPosts] = useState<PostData[]>([]);
    

    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const response = await axios.get<PostData[]>(
                'http://20.222.70.156:4000/posts',
                {
                  withCredentials: true,
                }
              );
              console.log(response.data);
              setPosts(response.data);
            } catch (error) {
                console.log(error);
              if (axios.isAxiosError(error)) {
                console.error('Error fetching posts:', error.message);
              } else {
                console.error('Unknown error:', error);
              }
            }
          };
      
          fetchPosts();
    }, []);
    
    const handleScroll = async () => {
        const container = containerRef.current;
        if (container && container.scrollTop === 0) { // check if the user has scrolled to the top of the container
            try {
                const response = await axios.get<PostData[]>(
                  'http://20.222.70.156:4000/posts',
                  {
                    withCredentials: true,
                  }
                );
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.log(error);
                if (axios.isAxiosError(error)) {
                    console.error('Error fetching posts:', error.message);
                } else {
                    console.error('Unknown error:', error);
                }
            }
        }
    }

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
};
