import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Moment from 'react-moment'
import { deleteComment } from '../../actions/post'

const CommentItem = (props) => {
    const dispatch = useDispatch()

    const { loading, user: { _id: userId } } = useSelector(state => state.auth)
    
    const { _id, text, name, avatar, user, date } = props.comment
    
  const { postId } = props
  // console.log(postId)

  return (
    <div className='post bg-white p-1 my-1'>
      <div>
        <Link to={`/profile/${user}`}>
          <img className='round-img' src={avatar} alt='' />
          <h4>{name}</h4>
        </Link>
      </div>
      <div>
        <p className='my-1'>{text}</p>
        <p className='post-date'>
          Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!loading && user === userId && (
          <button onClick={() => dispatch(deleteComment(postId, _id))} type='button' className='btn btn-danger'>
            <i className='fas fa-times' />
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentItem
