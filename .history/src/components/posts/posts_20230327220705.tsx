import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post } from '../post/post';
import { useEffect, useState, useRef } from 'react';
import Cards from '../cards/cards';
import axios from 'axios';

export interface PostData {
    id: string;
    firstName: string;
    lastName: string;
    description: string;
    img: string[];
    tagpet: string[];
    like: string[];
    comment: Record<string, never>;
    date: {
      _seconds: number;
      _nanoseconds: number;
    };
}

export interface PostsProps {
  className?: string;
}


export const Posts = ({ className }: PostsProps) => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialScrollTop = useRef<number | null>(null);

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

  const handleRefresh = async () => {
    if (!containerRef.current) {
      return;
    }

    const scrollTop = containerRef.current.scrollTop;
    if (initialScrollTop.current !== null && scrollTop < initialScrollTop.current) {
      setRefreshing(true);
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
      setRefreshing(false);
    }

    initialScrollTop.current = scrollTop;
  };

  return (
    <div
      className={classNames(styles.root, className)}
      ref={containerRef}
      onScroll={handleRefresh}
      onTouchStart={handleRefresh}
    >
      < Cards />
      {refreshing && <div>Refreshing...</div>}
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}

    </div>
  );
};
