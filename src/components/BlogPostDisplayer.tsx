// BlogPostDisplayer.tsx

import React from 'react';
import './BlogPostDisplayer.css';

interface BlogPost {
  imageUrl: string;
  title: string;
  description: string;
  view: string;
  data?: string;
}

interface BlogPostDisplayerProps {
  posts: BlogPost[];
}

const BlogPostDisplayer: React.FC<BlogPostDisplayerProps> = ({ posts }) => {
  
  const handleClick = (link: string, post: BlogPost) => {
    if (post.data){
      localStorage.setItem('userData', JSON.stringify(post.data));
    }
    window.location.href = link;
  };

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
            <button key={index} className="blog-view" onClick={() => handleClick('/blog', post)}>
            {post.view}
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostDisplayer;
