import React from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../services/posts'

const Posts = () => {

  const [posts, setPosts] = React.useState([])

  async function fetchAll() {  
    setPosts(await fetchPosts())
  }

  React.useEffect(() => {
    fetchAll()
  }, [])


  return (
    <div className="container mt-5">
      <h3>Posts</h3>
      <p> This is a protected route so you can only access here if you are logged in and google returns the ok</p>
      <div className="list-group">
        {
          posts.length ?
          posts.map((post) => (
            
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              className="list-group-item list-group-item-action"
            >
                {post.title}
            </Link>
          )):
          ''
        }
      </div>
    </div>
  )
}

export default Posts
