import React from 'react';

// Import images (Update paths based on your project structure)
import blog1Img from '../assets/img/blog/blog-1.jpg';
import blogRecent1Img from '../assets/img/blog/blog-recent-1.jpg';
import blogRecent2Img from '../assets/img/blog/blog-recent-2.jpg';
import blogRecent3Img from '../assets/img/blog/blog-recent-3.jpg';
import blogRecent4Img from '../assets/img/blog/blog-recent-4.jpg';
import Header from '../Components/Header';
import Footerd from '../Components/Dashboard/Footerd';

const Blog1 = () => {
  return (
    <div>
        <Header/>
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container">
                <article className="article">
                  <div className="post-img">
                    <img src={blog1Img} alt="" className="img-fluid" />
                  </div>

                  <h2 className="title">Top 5 Football Players to Watch in 2024</h2>

                  <div className="meta-top"></div> {/* End meta top */}

                  <div className="content">
                    <ul>
                      <li><strong>Introduction</strong>:
                        <ul>
                          <li>As the 2024 football season kicks off, the world of football is brimming with anticipation. Here are five players who are expected to dominate the pitch this year.</li>
                          <li>From established legends to rising stars, these athletes are redefining the game with their skills, strategies, and performances.</li>
                        </ul>
                      </li>
                      <li><strong>1. Erling Haaland</strong>:
                        <ul>
                          <li>The Norwegian goal machine continues to break records with his clinical finishing and physical prowess.</li>
                          <li>Key strengths: Pace, strength, and an uncanny ability to score from almost anywhere.</li>
                        </ul>
                      </li>
                      <li><strong>2. Kylian Mbappé</strong>:
                        <ul>
                          <li>The French superstar remains one of the most electrifying players, combining blistering speed with sharp technical skills.</li>
                          <li>Look out for his leadership as he chases Champions League glory.</li>
                        </ul>
                      </li>
                      <li><strong>3. Jude Bellingham</strong>:
                        <ul>
                          <li>The young English midfielder is making waves with his commanding presence and maturity beyond his years.</li>
                          <li>Already a key player for Real Madrid, his creativity and work rate are unmatched.</li>
                        </ul>
                      </li>
                      <li><strong>4. Lionel Messi</strong>:
                        <ul>
                          <li>Even in the twilight of his career, Messi continues to mesmerize fans with his magic, proving age is just a number.</li>
                          <li>Watch for his playmaking brilliance and match-winning free kicks.</li>
                        </ul>
                      </li>
                      <li><strong>5. Jamal Musiala</strong>:
                        <ul>
                          <li>The German wunderkind is lighting up the Bundesliga with his dribbling and playmaking skills.</li>
                          <li>A rising star, Musiala is expected to become a pivotal player for both Bayern Munich and Germany.</li>
                        </ul>
                      </li>
                      <li><strong>Conclusion</strong>:
                        <ul>
                          <li>These five players are set to leave an indelible mark on the 2024 football season. Follow their journeys as they inspire fans and rewrite the game’s history.</li>
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
                      <li><a href="#">Players</a></li>
                      <li><a href="#">2024</a></li>
                      <li><a href="#">Stats</a></li>
                    </ul>
                  </div> {/* End meta bottom */}
                </article>
              </div>
            </section> {/* /Blog Details Section */}
          </div>

          <div className="col-lg-4 ">
            <div className="widgets-container">
              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li><a href="Blog4">Match Reviews</a></li>
                  <li><a href="Blog3">Player Profiles</a></li>
                  <li><a href="Blog2">Team Tactics</a></li>
                  <li><a href="Blog1">Stats and Analysis</a></li>
                  <li><a href="Blog2">Transfers</a></li>
                  <li><a href="Blog2">Injury Updates</a></li>
                </ul>
              </div> {/* /Categories Widget */}

              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>

                <div className="post-item">
                  <img src={blogRecent1Img} alt="" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog1">Top 5 Football Players to Watch in 2024</a></h4>
                    <time datetime="2020-01-01">Oct 1, 2024</time>
                  </div>
                </div> {/* End recent post item */}

                <div className="post-item">
                  <img src={blogRecent2Img} alt="" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog2">Top Tactics Used by Winning Teams</a></h4>
                    <time datetime="2020-01-01">Oct 15, 2024</time>
                  </div>
                </div> {/* End recent post item */}

                <div className="post-item">
                  <img src={blogRecent3Img} alt="" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog3">Rising Stars: Young Talent to Watch</a></h4>
                    <time datetime="2020-01-01">Oct 18, 2024</time>
                  </div>
                </div> {/* End recent post item */}

                <div className="post-item">
                  <img src={blogRecent4Img} alt="" className="flex-shrink-0" />
                  <div>
                    <h4><a href="Blog4">Transfer Season Highlights</a></h4>
                    <time datetime="2020-01-01">Oct 20, 2024</time>
                  </div>
                </div> {/* End recent post item */}
              </div> {/* /Recent Posts Widget */}

              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li><a href="#">Players</a></li>
                  <li><a href="#">Teams</a></li>
                  <li><a href="#">2024</a></li>
                  <li><a href="#">Tactics</a></li>
                  <li><a href="#">Analysis</a></li>
                  <li><a href="#">Predictions</a></li>
                  <li><a href="#">Stats</a></li>
                  <li><a href="#">Updates</a></li>
                </ul>
              </div> {/* /Tags Widget */}
            </div>
          </div> {/* End Sidebar */}
        </div>
      </div>
    </main>
    <Footerd/>
    </div>
  );
};

export default Blog1;
