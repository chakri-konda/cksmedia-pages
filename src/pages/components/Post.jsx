import "./Post.css";

const Post = (props) => {
  const posts = props.posts;
  return (
    <div className="wrapper">
      {posts.map((post) => (
        <div className="blog-preview" key={post.post_id}>
          <div className="head">
            <div className="username" href="#" title="username">{post.username}</div>
            <div className="title" title="title">{post.title}</div>
          </div>
          <p title="content">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
