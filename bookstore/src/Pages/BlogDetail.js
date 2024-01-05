import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

export default function BlogDetail() {

    const { slug } = useParams();
    const [blog, setBlog] = useState(null)
    const blogs = useSelector(state => state.blogs.blogs)

    useEffect(() => {
        let blog = blogs.find(blog => blog.slug === slug)
        setBlog(blog)
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
                                <img src={"/" + blog.image} alt="" />
                            </div>
                            <div className="blog-content mt--30">
                                <header>
                                    <h3 className="blog-title"> {blog.title}</h3>
                                    <div className="post-meta">
                                        <span className="post-author">
                                            <i className="fas fa-user" />
                                            <span className="text-gray">Posted by : </span>
                                            {blog.author}
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
                                    <p className="p-0">Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium arcu ex.
                                        Aenean posuere
                                        libero eu augue condimentum
                                        rhoncus. Praesent ornare tortor ac ante egestas hendrerit. Aliquam et metus pharetra,
                                        bibendum massa
                                        nec, fermentum
                                        odio. Nunc id leo ultrices, mollis ligula in, finibus tortor. Mauris eu dui ut lectus
                                        fermentum
                                        eleifend. Pellentesque
                                        faucibus sem ante, non malesuada odio varius nec. Suspendisse potenti.</p>
                                    <blockquote>
                                        <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur. In
                                            venenatis elit ac
                                            ultrices convallis.
                                            Duis est nisi, tincidunt ac urna sed, cursus blandit lectus. In ullamcorper sit amet
                                            ligula ut
                                            eleifend. Proin dictum
                                            tempor ligula, ac feugiat metus. Sed finibus tortor eu scelerisque scelerisque.</p>
                                    </blockquote>
                                    <p>Aenean et tempor eros, vitae sollicitudin velit. Etiam varius enim nec quam tempor, sed
                                        efficitur ex
                                        ultrices.
                                        Phasellus pretium est vel dui vestibulum condimentum. Aenean nec suscipit nibh.
                                        Phasellus nec lacus id
                                        arcu facilisis
                                        elementum. Curabitur lobortis, elit ut elementum congue, erat ex bibendum odio, nec
                                        iaculis lacus sem
                                        non lorem. Duis
                                        suscipit metus ante, sed convallis quam posuere quis. Ut tincidunt eleifend odio, ac
                                        fringilla mi
                                        vehicula nec. Nunc
                                        vitae lacus eget lectus imperdiet tempus sed in dui. Nam molestie magna at risus
                                        consectetur, placerat
                                        suscipit justo
                                        dignissim. Sed vitae fringilla enim, nec ullamcorper arcu.</p>
                                    <p>Suspendisse turpis ipsum, tempus in nulla eu, posuere pharetra nibh. In dignissim vitae
                                        lorem non
                                        mollis. Praesent
                                        pretium tellus in tortor viverra condimentum. Nullam dignissim facilisis nisl, accumsan
                                        placerat justo
                                        ultricies vel.
                                        Vivamus finibus mi a neque pretium, ut convallis dui lacinia. Morbi a rutrum velit.
                                        Curabitur sagittis
                                        quam quis
                                        consectetur mattis. Aenean sit amet quam vel turpis interdum sagittis et eget neque.
                                        Nunc ante quam,
                                        luctus et neque a,
                                        interdum iaculis metus. Aliquam vel ante mattis, placerat orci id, vehicula quam.
                                        Suspendisse quis eros
                                        cursus, viverra
                                        urna sed, commodo mauris. Cras diam arcu, fringilla a sem condimentum, viverra facilisis
                                        nunc.
                                        Curabitur vitae orci id
                                        nulla maximus maximus. Nunc pulvinar sollicitudin molestie.</p>
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
                            <h3>3 Comments</h3>
                            <div className="single-comment">
                                <div className="comment-avatar">
                                    <img src="/./image/icon/author-logo.png" alt="" />
                                </div>
                                <div className="comment-text">
                                    <h5 className="author"> <a href="#"> Author</a></h5>
                                    <span className="time">October 8, 2014 at 12:38 pm</span>
                                    <p>Ame No Parade</p>
                                </div>
                                <a href="#" className="btn btn-outlined--primary btn-rounded reply-btn">Reply</a>
                            </div>
                            <div className="single-comment">
                                <div className="comment-avatar">
                                    <img src="/./image/icon/author-logo.png" alt="" />
                                </div>
                                <div className="comment-text">
                                    <h5 className="author"> <a href="#">Jack</a></h5>
                                    <span className="time">January 19, 2018 at 3:00 am</span>
                                    <p>just a nice post</p>
                                </div>
                                <a href="#" className="btn btn-outlined--primary btn-rounded reply-btn">Reply</a>
                            </div>
                            <div className="single-comment">
                                <div className="comment-avatar">
                                    <img src="/./image/icon/author-logo.png" alt="" />
                                </div>
                                <div className="comment-text">
                                    <h5 className="author"> <a href="#">Dexter</a></h5>
                                    <span className="time">august 31, 2021 at 3:30 am</span>
                                    <p>Awesome Post </p>
                                </div>
                                <a href="#" className="btn btn-outlined--primary btn-rounded reply-btn">Reply</a>
                            </div>
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
