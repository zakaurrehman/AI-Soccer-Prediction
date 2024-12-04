import React from 'react';

// Import images
import blogImg from '../assets/img/blog/blog-2.jpg';
import blogRecent1Img from '../assets/img/blog/blog-recent-1.jpg';
import blogRecent2Img from '../assets/img/blog/blog-recent-2.jpg';
import blogRecent3Img from '../assets/img/blog/blog-recent-3.jpg';
import blogRecent4Img from '../assets/img/blog/blog-recent-4.jpg';
import Footerd from '../Components/Dashboard/Footerd';
import Header from '../Components/Header';

const Blog2 = () => {
  return (
    <div>
        <Header/>
    <main className="main">
      {/* Blog Details Section */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img src={blogImg} alt="Blog post image" className="img-fluid" />
                  </div>

                  <h2 className="title">
                    Understanding VAR: How It’s Changing Football
                  </h2>

                  <div className="meta-top"></div> {/* Empty meta-top */}

                  <div className="content">
                    <ul>
                      <li><strong>Introduction</strong>
                        <ul>
                          <li>Define Video Assistant Referee (VAR) as a technology-driven system aimed at assisting referees in making accurate decisions during football matches.</li>
                          <li>Explain how VAR has sparked both praise and criticism, fundamentally altering the dynamics of the game.</li>
                        </ul>
                      </li>

                      <li><strong>Purpose of VAR</strong>
                        <ul>
                          <li>Describe how VAR is used to review key incidents, including goals, penalties, red cards, and cases of mistaken identity.</li>
                          <li>Highlight its goal of minimizing human error and ensuring fair play.</li>
                        </ul>
                      </li>

                      <li><strong>How VAR Works</strong>
                        <ul>
                          <li><strong>Step 1: Incident Review</strong>: Referees consult the VAR team when a contentious decision arises on the field.</li>
                          <li><strong>Step 2: Communication</strong>: The VAR team reviews video footage and communicates their findings to the on-field referee.</li>
                          <li><strong>Step 3: Final Decision</strong>: The on-field referee makes the final decision, often after reviewing the footage themselves on a pitch-side monitor.</li>
                        </ul>
                      </li>

                      <li><strong>Impact on the Game</strong>
                        <ul>
                          <li>Discuss how VAR has improved decision-making accuracy but has also introduced delays that can disrupt the flow of the game.</li>
                          <li>Mention the emotional highs and lows it creates for players, managers, and fans.</li>
                        </ul>
                      </li>

                      <li><strong>Criticisms and Controversies</strong>
                        <ul>
                          <li>Outline concerns about inconsistencies in its application and the subjective nature of some decisions.</li>
                          <li>Highlight debates around whether VAR undermines the authority of on-field referees.</li>
                        </ul>
                      </li>

                      <li><strong>Future of VAR</strong>
                        <ul>
                          <li>Explore how continuous technological advancements could streamline VAR processes and address its current challenges.</li>
                        </ul>
                      </li>

                      <li><strong>Conclusion</strong>
                        <ul>
                          <li>Encourage fans and players to embrace VAR as a tool that, despite its imperfections, is striving to enhance fairness in football.</li>
                        </ul>
                      </li>
                    </ul>
                  </div> {/* End post content */}

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Football</a></li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Technology</a></li>
                      <li><a href="#">VAR</a></li>
                      <li><a href="#">Football</a></li>
                    </ul>
                  </div> {/* End meta bottom */}
                </article>
              </div>
            </section> {/* /Blog Details Section */}
          </div>

          {/* Sidebar Section */}
          <div className="col-lg-4 ">
            <div className="widgets-container">
              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li><a href="Blog4">General </a></li>
                  <li><a href="Blog3">Lifestyle </a></li>
                  <li><a href="Blog2">Travel </a></li>
                  <li><a href="Blog1">Design </a></li>
                  <li><a href="Blog2">Creative </a></li>
                  <li><a href="Blog2">Education </a></li>
                </ul>
              </div> {/* /Categories Widget */}

              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>

                <div className="post-item">
                  <img src={blogRecent1Img} alt="Recent Post 1" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog1">Why Every Website Needs a Privacy Policy</a></h4>
                    <time datetime="2020-01-01">Oct 1, 2024</time>
                  </div>
                </div> {/* End post-item */}

                <div className="post-item">
                  <img src={blogRecent2Img} alt="Recent Post 2" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog2">Understanding VAR: How It’s Changing Football</a></h4>
                    <time datetime="2020-01-01">Oct 15, 2024</time>
                  </div>
                </div> {/* End post-item */}

                <div className="post-item">
                  <img src={blogRecent3Img} alt="Recent Post 3" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog3">How to Write an Effective Refund and Return Policy</a></h4>
                    <time datetime="2020-01-01">Oct 18, 2024</time>
                  </div>
                </div> {/* End post-item */}

                <div className="post-item">
                  <img src={blogRecent4Img} alt="Recent Post 4" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog4">Essential Legal Documents Every Online Business Needs</a></h4>
                    <time datetime="2020-01-01">Oct 20, 2024</time>
                  </div>
                </div> {/* End post-item */}
              </div> {/* /Recent Posts Widget */}

              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li><a href="#">App</a></li>
                  <li><a href="#">IT</a></li>
                  <li><a href="#">Football</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">VAR</a></li>
                  <li><a href="#">Sport</a></li>
                  <li><a href="#">Trends</a></li>
                  <li><a href="#">Innovation</a></li>
                </ul>
              </div> {/* /Tags Widget */}
            </div> {/* /widgets-container */}
          </div> {/* End Sidebar */}
        </div>
      </div>
    </main>
    <Footerd/>
    </div>
  );
};

export default Blog2;
