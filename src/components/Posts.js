import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Posts = () => {
  const [post, setPost ] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://dummyjson.com/posts');
      const data = await response.json();
      setPost(data.posts);
    };
    getData();
  }, [])
  return (
    <>
    <h1>Posts</h1>
    <div className='posts-body'>
        {
          post.map(item => (
          <Link key={item.id} to={`/post/${item.id}`}>
            <li>{item.title}</li>
            </Link>))
        }
    </div>
    </>
  )
}

export default Posts

// const News = () => {
//     const [news, setNews] = useState([]);
//     useEffect(()=>{
//         fetch('https://dummyjson.com/posts')
//         .then(res => res.json())
//         .then(data => setNews(data.posts))
//     },[])
//   return (
//     <>
//     <h1>News</h1>
//     <div className='news-body'>
//      {
//         news.map(item => (
//         <Link key={item.id} to={`/news/${item.id}`}>
//             <li>{item.title}</li>
//         </Link>))
//      }
//     </div></>)}
// export default News
