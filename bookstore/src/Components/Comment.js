import React from 'react'

export default function Comment({ comment }) {
    return (
        <div className="single-comment">
            <div className="comment-avatar">
                <img src="/./image/icon/author-logo.png" alt="" />
            </div>
            <div className="comment-text">
                <h5 className="author"> <a href="#">{comment.authorName}</a></h5>
                <span className="time">{comment.date}</span>
                <p>{comment.blogComment}</p>
            </div>
        </div>
    )
}
