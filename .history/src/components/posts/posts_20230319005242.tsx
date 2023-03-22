import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post} from '../post/post';
import { useEffect, useState } from 'react';

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
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch('http://localhost:4000/posts');
          const data = await response.json();
          setPosts(data);
        };
    
        fetchPosts();
      }, []);

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map(post => (
                <Post post={post} />
            ))}
        </div>
    );
};

