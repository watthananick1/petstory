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
              const response = await axios.get('http://localhost:3000/:4000/posts', {
                withCredentials: true,
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              console.log(response.data);
              setPosts(response.data);
            } catch (error) {
              console.error('Error fetching posts:', error);
            }
            console.log('1');
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
