import React from 'react'
import { useParams } from 'react-router-dom'
import { fetchOnePost } from '../services/posts'

const Post = () => {
  const { id } = useParams()

  const [post, setPost] = React.useState(null)

  async function fetchPost(postId) {
    setPost(await fetchOnePost(postId))
  }

  React.useEffect(() => {
    fetchPost(id)
  }, [id])

  return (
    <div className="container mt-5">
      <h3>Post information</h3>
      {
        post ?
        (
          <ul className="list-group">
            <li className="list-group-item"><strong>post id:</strong> {post.id}</li>
            <li className="list-group-item"><strong>user id:</strong> {post.userId}</li>
            <li className="list-group-item"><strong>title:</strong> {post.title}</li>
            <li className="list-group-item"><strong>content:</strong> {post.body}</li>
          </ul>
        ) :
        'loading'   
      }
    </div>
  )
}

export default Post
