import "./Hero.css";

export function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1>
          Validated emails, a golden rule,
          <br />
          Limited time deals, don't miss
          <br />
          your cue
        </h1>
        <p className="hero-paragraph">
          Unleashing the Power of Email Verification: A Scalable and
          Cost-Effective Solution
          <br />
          for Authenticating User Emails
        </p>
        <div className="hero-btns">
          <button className="hero-btn1">Get FREE 500 Credits</button>
          <button className="hero-btn2">Try NOW</button>
        </div>
      </div>
    </div>
  );
}
