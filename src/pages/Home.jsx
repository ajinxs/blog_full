import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

const posts = [
  {
    id: 1,
    title: "something",
    desc: "another something",
    img: "https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    title: "something",
    desc: "another something",
    img: "https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    title: "something",
    desc: "another something",
    img: "https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    title: "something",
    desc: "another something",
    img: "https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    title: "something",
    desc: "another something",
    img: "https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
]

  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>

            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))} 
      </div>

    </div>
  );
};

export default Home