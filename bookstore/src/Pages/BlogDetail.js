import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchComment } from '../Redux/commentSlice';
import Comment from '../Components/Comment';

export default function BlogDetail() {

    const { slug } = useParams();
    const [blog, setBlog] = useState(null)
    const blogs = useSelector(state => state.blogs.blogs)
    const comments = useSelector(state => state.comments.comments)
    const dispatch = useDispatch()

    useEffect(() => {
        let blog = blogs.find(blog => blog.slug === slug)
        setBlog(blog)
        if (blog) {
            dispatch(fetchComment(blog.blogId))
        }
    }, [slug])

    return (
        <>
            {blog && <div>
                <section className="breadcrumb-section">
                    <h2 className="sr-only">Site Breadcrumb</h2>
                    <div className="container">
                        <div className="breadcrumb-contents">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                    <li className="breadcrumb-item active">Blog Details</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </section>
                <section className="inner-page-sec-padding-bottom">
                    <div className="container">
                        <div className="blog-post post-details mb--50">
                            <div className="blog-image">
                                <img src={"/image/blogs/" + blog.image} alt="" />
                            </div>
                            <div className="blog-content mt--30">
                                <header>
                                    <h3 className="blog-title"> {blog.title}</h3>
                                    <div className="post-meta">
                                        <span className="post-author">
                                            <i className="fas fa-user" />
                                            <span className="text-gray">Posted by : </span>
                                            {blog.authorUserName}
                                        </span>
                                        <span className="post-separator">|</span>
                                        <span className="post-date">
                                            <i className="far fa-calendar-alt" />
                                            <span className="text-gray">On : </span>
                                            {blog.date}
                                        </span>
                                    </div>
                                </header>
                                <article>
                                    <h3 className="d-none sr-only">blob-article</h3>
                                    <p className="p-0">{blog.blogContent}</p>
                                </article>
                                <footer className="blog-meta">
                                    <div> <a href="#">3 comments </a> / TAGS: <a href="#">fashion</a>, <a href="#">t-shirt</a>,
                                        <a href="#">white</a></div>
                                </footer>
                            </div>
                        </div>
                        <div className="share-block mb--50">
                            <h3>Share Now</h3>
                            <div className="social-links  justify-content-center  mt--10">
                                <a href="#" className="single-social social-rounded"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="single-social social-rounded"><i className="fab fa-twitter" /></a>
                                <a href="#" className="single-social social-rounded"><i className="fab fa-pinterest-p" /></a>
                                <a href="#" className="single-social social-rounded"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="single-social social-rounded"><i className="fab fa-linkedin-in" /></a>
                            </div>
                        </div>
                        <div className="comment-block-wrapper mb--50">
                            {comments && <h3>{comments.length} Comments</h3>}
                            {comments && comments.map((comment, index) => {
                                return <Comment key={index} comment={comment}></Comment>
                            })}
                        </div>
                        <div className="replay-form-wrapper">
                            <h3 className="mt-0">LEAVE A REPLY</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form action="" className="blog-form">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="message">Comment</label>
                                            <textarea name="message" id="message" cols={30} rows={10} className="form-control" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" id="name" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="text" id="email" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="website">Website</label>
                                            <input type="text" id="website" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="submit-btn">
                                            <a href="#" className="btn btn-black">Post Comment</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>}

        </>
    )
}
