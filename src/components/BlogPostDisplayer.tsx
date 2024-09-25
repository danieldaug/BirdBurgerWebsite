// BlogPostDisplayer.tsx

import React from 'react';
import './BlogPostDisplayer.css';

interface BlogPost {
  imageUrl: string;
  title: string;
  description: string;
  view: string;
}

interface BlogPostDisplayerProps {
  posts: BlogPost[];
}

const BlogPostDisplayer: React.FC<BlogPostDisplayerProps> = ({ posts }) => {
  return (
    <div className="blog-post-container">
      {posts.map((post, index) => (
        <div
          key={index}
          className={`blog-post ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
        >
          <div className="blog-post-image">
            <img src={post.imageUrl} alt={post.title} />
          </div>
          <div className="blog-post-content">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostDisplayer;
