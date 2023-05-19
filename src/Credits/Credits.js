import "./Credits.css";
import icon from "../shared/images/Icon/Icon.png";

export function Credits() {
  return (
    <div className="credits-section">
      <h2>
        <img src={icon} className="credits-img" />
        500 Free Credits
      </h2>

      <h1>Try it today, no credit card required!</h1>
      <p>
        Totally free for first 500 Emails. Just sign up and start Verifying
        Email
      </p>
      <p class="credits-text">Get started for free </p>
    </div>
  );
}
