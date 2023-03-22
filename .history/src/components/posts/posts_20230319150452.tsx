import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post, PostData } from '../post/post';
import { useEffect, useState } from 'react';
import axios from 'axios';

export interface PostsProps {
    className?: string;
}

export const Posts = ({ className }: PostsProps) => {
    const [posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const response = await axios.get<PostData[]>(
                'http://192.168.1.4:4000/posts',
                {
                  withCredentials: true,
                }
              );
              console.log(response.)
              setPosts(response.data);
            } catch (error) {
              if (axios.isAxiosError(error)) {
                console.error('Error fetching posts:', error.message);
              } else {
                console.error('Unknown error:', error);
              }
            }
          };
      
          fetchPosts();
    }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
};
