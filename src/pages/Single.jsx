import React from 'react'
import Edit from '../components/images/edit.png'
import Delete from '../components/images/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/4793154/pexels-photo-4793154.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 1 day ago</p>
          </div>
          <div className="edit">
            <Link to={'/write?edit=1'}>
              <img src={Edit} alt="" />
            </Link>

            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Something here</h1>
        <p>Something more here</p>
      </div>

      <div className="menu">m</div>
    </div>
  )
}

export default Single