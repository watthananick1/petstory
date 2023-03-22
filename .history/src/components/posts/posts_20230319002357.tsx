import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post } from '../post/post';

import { useEffect, useState } from 'react';

export interface PostsProps {
    className?: string;
}
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-postss-and-templates
 */
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
            <Post 
                
            />
        ))}
        </div>
    );
};
