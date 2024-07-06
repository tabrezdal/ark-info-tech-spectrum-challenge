import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

interface FetchDataResult {
  posts: Post[];
  users: { [key: number]: User };
  totalPosts: number; // New field for total count of posts
  error: string | null;
}

const useFetchData = (): FetchDataResult => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<{ [key: number]: User }>({});
  const [totalPosts, setTotalPosts] = useState<number>(0); // State for total count of posts
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostsAndUsers = async () => {
      try {
        const postResponse = await fetch('https://dummyjson.com/posts');
        const postData = await postResponse.json();
        const fetchedPosts = postData.posts;
        setPosts(fetchedPosts);
        setTotalPosts(fetchedPosts.length); // Update total count of posts

        const userIds = [...new Set(fetchedPosts.map((post) => post.userId))];
        const userPromises = userIds.map((userId) =>
          fetch(`https://dummyjson.com/users/${userId}`)
        );
        const userResponses = await Promise.all(userPromises);

        const usersData: { [key: number]: User } = {};
        for (const userResponse of userResponses) {
          const userData = await userResponse.json();
          usersData[userData.id] = {
            id: userData.id,
            firstName: userData.firstName,
            lastName: userData.lastName,
          };
        }
        setUsers(usersData);
      } catch (error) {
        setError('Error fetching posts or users');
        console.error('Error fetching posts or users:', error);
      }
    };

    fetchPostsAndUsers();
  }, []);

  return { posts, users, totalPosts, error };
};

export default useFetchData;
