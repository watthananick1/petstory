import { useEffect, useState } from 'react';
https://chat.openai.com/chat/8742fe4a-bb12-4c2f-ad33-99c8190d6955// assuming you have already set up your firebase config

export interface PostData {
  id: string;
  firstName: string;
  lastName: string;
  comments: CommentData[];
  likes: string[];
  description: string;
  tagpet: string[];
}

export interface CommentData {
  id: string;
  text: string;
}

export const useRealtimePosts = (): [PostData[], boolean] => {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const postsRef = database.ref('posts');
    postsRef.on('value', (snapshot) => {
      const postsData: { [key: string]: PostData } = snapshot.val() || {};
      const newPosts = Object.keys(postsData).map((key) => ({
        id: key,
        ...postsData[key],
      }));
      setPosts(newPosts);
      setIsLoading(false);
    });

    return () => {
      postsRef.off();
    };
  }, []);

  return [posts, isLoading];
};
