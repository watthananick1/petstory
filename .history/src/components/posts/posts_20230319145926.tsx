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
                const response = await fetch('http://192.168.1.4:4000/posts', {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  credentials: 'include'
                });
                const data = await response.json();
                console.log(data);
                setPosts(data);
              } catch (error) {
                console.error('Error fetching posts:', error);
              }
            console.log("1")
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
