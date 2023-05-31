import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchPost } from "./redux/actions/post.actions"
import './App.css'

const App = () => {
  let loading = useSelector(state => state.post.loading)
  let data = useSelector(state => state.post.data)
  let error = useSelector(state => state.post.error)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPost())
  }, []
  )
  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="container">
      <h1 className="heading">Post List</h1>
      {
        data.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App


