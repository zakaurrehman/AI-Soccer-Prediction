import React from 'react'

const Tutrioalc = () => {
  return (
    <div>
  <section className="welcome-banner">
    <div className="container row">
      <div className="col-md-12" style={{textAlign:'center',paddingRight:'400px'}}>
        <div className="welcome-banner-caption">
          <p className="welcome-title-span">AI FOOTBALL PLATFORM</p>
          <p className="welcome-sub-title">How AI PROGNOZA Works?</p>
          {/* <p className="welcome-sub-title"> Works?</p> */}
          <br />
        </div>
      </div>
    </div>
  </section>
  <section className="welcome-steps">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>1</span>
            </div>
            <div className="step-content">
              <h3>Betting Masterclass</h3>
              <p>This platform is designed to be your betting companion, helping you save time and make
                better decisions.
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>2</span>
            </div>
            <div className="step-content">
              <h3>Trust Bankers</h3>
              <p>The matches from "Bet of the Day" are called bankers. These are the most trusted tips.
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>3</span>
            </div>
            <div className="step-content">
              <h3>Trusted Selections</h3>
              <p>Trust is crucial. Always opt for matches with higher trust ratings for better results.
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>4</span>
            </div>
            <div className="step-content">
              <h3>Patience</h3>
              <p>You cannot win every day. Be patient.
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>5</span>
            </div>
            <div className="step-content">
              <h3>Moderation</h3>
              <p>Always place bets with a reasonable number of matches and avoid very high odds.
              </p>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a className="welcome-step-item">
            <div className="step-left">
              <span>6</span>
            </div>
            <div className="step-content">
              <h3>Realism</h3>
              <p>There are no 100% sure matches. Be realistic and moderate.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
    {/* <div className="welcome-item">
      <div className="welcome-content">
        <h3>Tips Dictionary</h3>
        <br />
        <select id="tips-dropdown" onchange="showTipDescription()" style={{textAlign: 'center', width: 'fit-content'}}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value="X">X</option>
          <option value="1X">1X</option>
          <option value="X2">X2</option>
          <option value="GG">GG</option>
          <option value="NG">NG</option>
          <option value="HS">HS</option>
          <option value="AS">AS</option>
          <option value="HS2+">HS2+</option>
          <option value="AS2+">AS2+</option>
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="U1.5">U1.5</option>
          <option value="U2.5">U2.5</option>
          <option value="U3.5">U3.5</option>
          <option value="O1.5">O1.5</option>
          <option value="O2.5">O2.5</option>
          <option value="O3.5">O3.5</option>
        </select>
        <div id="tips-explanation" className="tips-dictionary">
          <p id={1}>The home team will win.</p>
          <p id={2}>The away team will win.</p>
          <p id="X">The match will end with a draw.</p>
          <p id="1X">The match will end with a draw or the home team will win.</p>
          <p id="X2">The match will end with a draw or the away team will win.</p>
          <p id="GG">Both teams to score.</p>
          <p id="NG">At least one team will not score.</p>
          <p id="HS">Home team will score at least one goal.</p>
          <p id="AS">Away team will score at least one goal.</p>
          <p id="HS2+">Home team will score at least two goals.</p>
          <p id="AS2+">Away team will score at least two goals.</p>
          <p id="H1">Home team will win by a margin of at least two goals.</p>
          <p id="H2">Away team will win by a margin of at least two goals.</p>
          <p id="U1.5">Maximum one goal in the match. If the prediction is "U1.5", it means there will be 0 or
            1 goals in the match.</p>
          <p id="U2.5">Maximum two goals in the match. If the prediction is "U2.5", it means there will be 0,
            1, or 2 goals in the match.</p>
          <p id="U3.5">Maximum three goals in the match. If the prediction is "U3.5", it means there will be
            0, 1, 2, or 3 goals in the match.</p>
          <p id="O1.5">At least two goals in the match. If the prediction is "O1.5", it means there will be 2
            or more goals in the match.</p>
          <p id="O2.5">At least three goals in the match. If the prediction is "O2.5", it means there will be
            3 or more goals in the match.</p>
          <p id="O3.5">At least four goals in the match. If the prediction is "O3.5", it means there will be 4
            or more goals in the match.</p>
        </div>
      </div>
    </div> */}
  </section>
</div>

  )
}

export default Tutrioalc