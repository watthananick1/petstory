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
        https://chat.openai.com/chat/8742fe4a-bb12-4c2f-ad33-99c8190d6955
        const fetchPosts = async () => {
            try {
              const response = await axios.get<PostData[]>(
                'http://10.34.40.58:4000/posts',
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

    return (
        <div className={classNames(styles.root, className)}>
            {posts.map((post) => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
};
