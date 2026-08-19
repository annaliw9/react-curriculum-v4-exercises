import { useState } from 'react';
import './Lesson07Styles.css';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    try {
      const data = await getSinglePost(1);
      console.log(data);
      setPost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleSubmit}>
        Get post
      </button>
      <div className="content">
        {isLoading && <p>Loading data...</p>}
        {error ? (
          <p>{error}</p>
        ) : post ? (
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
