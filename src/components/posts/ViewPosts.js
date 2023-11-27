import { useParams } from "react-router-dom"


function ViewPosts({ userData }) {
    const { id } = useParams();
    const postId = parseInt(id, 10);
    const post = userData?.[postId];
  
    return (
      <>
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <p>No data available or invalid post ID.</p>
        )}
      </>
    );
  }

export default ViewPosts