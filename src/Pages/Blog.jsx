import React from 'react';
import blog1 from '../assets/img/blog/blog-1.jpg';
import blog2 from '../assets/img/blog/blog-2.jpg';
import blog3 from '../assets/img/blog/blog-3.jpg';
import blog4 from '../assets/img/blog/blog-4.jpg';
import recent1 from '../assets/img/blog/blog-recent-1.jpg';
import recent2 from '../assets/img/blog/blog-recent-2.jpg';
import recent3 from '../assets/img/blog/blog-recent-3.jpg';
import recent4 from '../assets/img/blog/blog-recent-4.jpg';
import Header from '../Components/Header';
import Footerd from '../Components/Dashboard/Footerd';
import '../assets/css/main.css';

const Blog = () => {
    return (
        <div>
            <Header />
            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <section id="blog-posts" className="blog-posts section">
                                <div className="container">
                                    <div className="row gy-4">
                                        {/* Blog Post 1 */}
                                        <div className="col-12">
                                            <article>
                                                <div className="post-img">
                                                    <img src={blog1} alt="" className="img-fluid" />
                                                </div>
                                                <h2 className="title">
                                                    <a href="Blog1">Top 5 Football Players to Watch in 2024</a>
                                                </h2>
                                                <div className="content">
                                                    <p>
                                                        A detailed look at the rising stars and seasoned veterans who are expected to dominate the football scene this year.
                                                    </p>
                                                    <div className="read-more">
                                                        <a href="Blog1">Read More</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Blog Post 2 */}
                                        <div className="col-12">
                                            <article>
                                                <div className="post-img">
                                                    <img src={blog2} alt="" className="img-fluid" />
                                                </div>
                                                <h2 className="title">
                                                    <a href="Blog2">Understanding VAR: How It’s Changing Football</a>
                                                </h2>
                                                <div className="content">
                                                    <p>
                                                        An exploration of the Video Assistant Referee (VAR) system and its impact on the modern game.
                                                    </p>
                                                    <div className="read-more">
                                                        <a href="Blog2">Read More</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Blog Post 3 */}
                                        <div className="col-12">
                                            <article>
                                                <div className="post-img">
                                                    <img src={blog3} alt="" className="img-fluid" />
                                                </div>
                                                <h2 className="title">
                                                    <a href="Blog3">10 Memorable Matches in Football History</a>
                                                </h2>
                                                <div className="content">
                                                    <p>
                                                        Relive the most thrilling and unforgettable moments from football's rich history.
                                                    </p>
                                                    <div className="read-more">
                                                        <a href="Blog3">Read More</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>

                                        {/* Blog Post 4 */}
                                        <div className="col-12">
                                            <article>
                                                <div className="post-img">
                                                    <img src={blog4} alt="" className="img-fluid" />
                                                </div>
                                                <h2 className="title">
                                                    <a href="Blog4">How AI Is Revolutionizing Football Strategy</a>
                                                </h2>
                                                <div className="content">
                                                    <p>
                                                        Discover how artificial intelligence is helping teams analyze data and improve on-field performance.
                                                    </p>
                                                    <div className="read-more">
                                                        <a href="Blog4">Read More</a>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="col-lg-4">
                            <div className="widgets-container">
                                {/* Categories Widget */}
                                <div className="categories-widget widget-item">
                                    <h3 className="widget-title">Categories</h3>
                                    <ul className="mt-3">
                                        <li><a href="Blog1">Player Profiles</a></li>
                                        <li><a href="Blog2">Rules & Regulations</a></li>
                                        <li><a href="Blog3">Match Highlights</a></li>
                                        <li><a href="Blog4">Technology in Football</a></li>
                                        <li><a href="Blog2">League Updates</a></li>
                                    </ul>
                                </div>

                                {/* Recent Posts Widget */}
                                <div className="recent-posts-widget widget-item">
                                    <h3 className="widget-title">Recent Posts</h3>
                                    <div className="post-item">
                                        <img src={recent1} alt="" className="flex-shrink-0" />
                                        <div>
                                            <h4><a href="Blog1">Top 5 Football Players to Watch in 2024</a></h4>
                                            <time dateTime="2024-10-01">Oct 1, 2024</time>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <img src={recent2} alt="" className="flex-shrink-0" />
                                        <div>
                                            <h4><a href="Blog2">Understanding VAR: How It’s Changing Football</a></h4>
                                            <time dateTime="2024-10-15">Oct 15, 2024</time>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <img src={recent3} alt="" className="flex-shrink-0" />
                                        <div>
                                            <h4><a href="Blog3">10 Memorable Matches in Football History</a></h4>
                                            <time dateTime="2024-10-18">Oct 18, 2024</time>
                                        </div>
                                    </div>
                                    <div className="post-item">
                                        <img src={recent4} alt="" className="flex-shrink-0" />
                                        <div>
                                            <h4><a href="Blog4">How AI Is Revolutionizing Football Strategy</a></h4>
                                            <time dateTime="2024-10-20">Oct 20, 2024</time>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags Widget */}
                                <div className="tags-widget widget-item">
                                    <h3 className="widget-title">Tags</h3>
                                    <ul>
                                        <li><a href="#">Football</a></li>
                                        <li><a href="#">AI</a></li>
                                        <li><a href="#">Technology</a></li>
                                        <li><a href="#">Matches</a></li>
                                        <li><a href="#">Players</a></li>
                                        <li><a href="#">Tactics</a></li>
                                        <li><a href="#">League</a></li>
                                        <li><a href="#">Highlights</a></li>
                                        <li><a href="#">Predictions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footerd />
        </div>
    );
};

export default Blog;
