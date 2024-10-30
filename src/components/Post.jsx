import React, { useEffect, useState } from 'react'
import { usePostStore } from '../store/post_store'
import { Link } from 'react-router-dom'

function Post() {
    const [posts, setPosts] = useState(null)
    const [show, setShow] = useState(false)

    const{isLoading, error, getAllPosts} = usePostStore()
    console.log("Post In Post Components : ", posts)
    const fetchData = async()=>{
        const data = await getAllPosts()
        setPosts(data)
    }

    useEffect(()=>{
        fetchData()

    }, [])

    const handleShowPost = ()=>{
        setShow(!show)
        
    }

  return (
    <div className='grid grid-cols-3 gap-6  px-6 py-6'>

    {
        show && posts && posts.map(post=>(<div className='bg-white h-32 rounded-md '>
            <h1 className='text-2xl text-lime-500  underline '>{post.title.substring(1, 20)}</h1>
            <p>{post.body}</p>
        </div>))
        
    }
    <button className='px-4 py-2 bg-blue-500 rounded-sm' onClick={handleShowPost}>Show All Post</button>
    <Link to={'/create-post'}>Create Post</Link>


    

      
    </div>
  )
}

export default Post
