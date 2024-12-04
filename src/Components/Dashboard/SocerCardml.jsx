import React from 'react'
import '../../assets/public/css/app.min.css'; // Ensure this path matches your project structure
import '../../assets/public/css/custom.css'; // Ensure this path matches your project structure


const SocerCardml = () => {
  return (
    <div>

<section className="nt-score-card nt-bank-count" style={{  backgroundColor:'#2C3442' }}>
        {/* Score Card */}
        <div className="container">
          <div className="row no-gutter">
            {/* Score Card Item - Bankers */}
            <div className="col-4">
             
                <div className="card-body" style={{backgroundColor:'#242A37'}}>
                  <p
                    data-toggle="tooltip"
                    data-html="true"
                    title="<div class='nt-tag-tooltips'>The total number of <h2>bankers matches</h2></div>"
                    className="card-title"
                    style={{ textAlign:'center', color:'white'}}
                  >
                    Predicted
                  </p>
                  <div className="score-circle"><span id="predicted_count">99</span></div>
               
              </div>
            </div> {/* /Score Card Item */}

            {/* Score Card Item - Upcoming */}
            <div className="col-4">
             
              <div className="card-body" style={{backgroundColor:'#242A37'}}>
                  <p
                    data-toggle="tooltip"
                    data-html="true"
                    title="<div class='nt-tag-tooltips'>The total number of <h4>upcoming matches</h4></div>"
                    className="card-title"
                    style={{ textAlign:'center', color:'white'}}
                  >
                    Upcoming
                  </p>
                  <div className="score-circle"><span id="notstarted_count">43</span></div>
               
              </div>
            </div> {/* /Score Card Item */}

            {/* Score Card Item - Success Rate */}
            <div className="col-4">
              
              <div className="card-body" style={{backgroundColor:'#242A37'}}>
                  <p
                    data-toggle="tooltip"
                    data-html="true"
                    title="<div class='nt-tag-tooltips'>The current <h3>success rate</h3> for Bet of the Day</div>"
                    className="card-title"
                    style={{ textAlign:'center', color:'white'}}
                  >
                    Won Match
                  </p>
                  <div className="score-circle"><span id="success_rate">34</span></div>
                
              </div>
            </div> {/* /Score Card Item */}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SocerCardml