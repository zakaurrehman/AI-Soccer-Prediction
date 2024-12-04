import React from 'react';

// Import images
import blogImg from '../assets/img/blog/blog-3.jpg';
import blogInsidePostImg from '../assets/img/blog/blog-inside-post.jpg';
import blogRecent1Img from '../assets/img/blog/blog-recent-1.jpg';
import blogRecent2Img from '../assets/img/blog/blog-recent-2.jpg';
import blogRecent3Img from '../assets/img/blog/blog-recent-3.jpg';
import blogRecent4Img from '../assets/img/blog/blog-recent-4.jpg';
import Header from '../Components/Header';
import Footerd from '../Components/Dashboard/Footerd';

const Blog3 = () => {
  return (
    <div>
        <Header/>
    <main className="main">
      <div className="container">
        <div className="row">

          {/* Blog Details Section */}
          <div className="col-lg-8">
            <section id="blog-details" className="blog-details section">
              <div className="container">

                <article className="article">
                  <div className="post-img">
                    <img src={blogImg} alt="Blog Post" className="img-fluid" />
                  </div>

                  <h2 className="title">10 Memorable Matches in Football History</h2>

                  <div className="meta-top"></div>

                  <div className="content">
                    <ul>
                      <li>
                        <ul>
                          <li><strong>Introduction</strong>:
                            <ul>
                              <li>Football has given us countless unforgettable moments. From underdog victories to dramatic finishes, here are 10 matches that remain etched in history.</li>
                            </ul>
                          </li>
                          <li><strong>1. 1953: The Match of the Century</strong>:
                            <ul>
                              <li>Hungary’s stunning 6-3 victory over England at Wembley revolutionized football tactics and shocked the world.</li>
                            </ul>
                          </li>
                          <li><strong>2. 1960: Real Madrid vs. Eintracht Frankfurt</strong>:
                            <ul>
                              <li>A 7-3 win for Real Madrid in the European Cup Final, featuring an iconic display by Alfredo Di Stéfano and Ferenc Puskás.</li>
                            </ul>
                          </li>
                          <li><strong>3. 1986: Argentina vs. England</strong>:
                            <ul>
                              <li>Diego Maradona’s "Hand of God" and his mesmerizing solo goal in the World Cup quarter-final remain legendary moments.</li>
                            </ul>
                          </li>
                          <li><strong>4. 1999: Manchester United vs. Bayern Munich</strong>:
                            <ul>
                              <li>The dramatic UEFA Champions League final, with two stoppage-time goals by United to secure a historic treble.</li>
                            </ul>
                          </li>
                          <li><strong>5. 2005: Liverpool vs. AC Milan</strong>:
                            <ul>
                              <li>The "Miracle of Istanbul," where Liverpool overturned a 3-0 deficit to win the Champions League final on penalties.</li>
                            </ul>
                          </li>

                          <li><img src={blogInsidePostImg} alt="Blog Post Inside" className="img-fluid" /></li>

                          <li><strong>6. 2010: Spain vs. Netherlands</strong>:
                            <ul>
                              <li>Andrés Iniesta’s extra-time goal crowned Spain as World Cup champions, solidifying their era of dominance.</li>
                            </ul>
                          </li>
                          <li><strong>7. 2012: Chelsea vs. Bayern Munich</strong>:
                            <ul>
                              <li>Chelsea’s underdog triumph in the Champions League final, with Didier Drogba’s heroic performance and penalty heroics.</li>
                            </ul>
                          </li>
                          <li><strong>8. 2014: Germany vs. Brazil</strong>:
                            <ul>
                              <li>The shocking 7-1 semi-final victory by Germany over hosts Brazil in the World Cup remains one of football's most unexpected results.</li>
                            </ul>
                          </li>
                          <li><strong>9. 2019: Liverpool vs. Barcelona</strong>:
                            <ul>
                              <li>Liverpool’s incredible 4-0 comeback at Anfield to overturn a 3-0 deficit and reach the Champions League final.</li>
                            </ul>
                          </li>
                          <li><strong>10. 2022: Argentina vs. France</strong>:
                            <ul>
                              <li>A thrilling World Cup final decided on penalties, with Lionel Messi leading Argentina to glory in one of the greatest matches ever played.</li>
                            </ul>
                          </li>
                          <li><strong>Conclusion</strong>:
                            <ul>
                              <li>These matches are more than games; they’re moments of triumph, heartbreak, and history that have shaped the beautiful game.</li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div> {/* End content */}

                  <div className="meta-bottom">
                    <i className="bi bi-folder"></i>
                    <ul className="cats">
                      <li><a href="#">Football</a></li>
                    </ul>

                    <i className="bi bi-tags"></i>
                    <ul className="tags">
                      <li><a href="#">Memorable</a></li>
                      <li><a href="#">History</a></li>
                      <li><a href="#">Matches</a></li>
                    </ul>
                  </div> {/* End meta bottom */}

                </article>

              </div>
            </section> {/* End Blog Details Section */}
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
                    <h4><a href="Blog2">Understanding Terms and Conditions: Protecting Your Business and Your Users</a></h4>
                    <time datetime="2020-01-01">Oct 15, 2024</time>
                  </div>
                </div> {/* End post-item */}

                <div className="post-item">
                  <img src={blogRecent3Img} alt="Recent Post 3" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog3">10 Memorable Matches in Football History</a></h4>
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
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Mac</a></li>
                  <li><a href="#">Design</a></li>
                  <li><a href="#">Office</a></li>
                  <li><a href="#">Creative</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">Smart</a></li>
                  <li><a href="#">Tips</a></li>
                  <li><a href="#">Marketing</a></li>
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

export default Blog3;
