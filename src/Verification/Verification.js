import "./Verification.css";

export function Verification() {
  return (
    <div className="verification-section">
      <div className="veri-container">
        <div className="left-container">
          <h2 className="verification-header">Single Email Verification</h2>
          <div className="group1">
            <p>Write an email for Verification</p>
            <div className="searcharea">
              <input type="text" placeolder="john@doe.com" />
              <button type="submit">Test My Email</button>
            </div>
          </div>
          <div className="verification-radio-buttons">
            <input
              type="radio"
              id="requesting-host"
              name="fav_language"
              value="HTML"
            />
            <label htmlFor="requesting-host">Requesting Host</label>
            <br />
            <input
              type="radio"
              id="Mx-Record"
              name="fav_language"
              value="HTML"
            />
            <label htmlFor="requesting-host">Extracting MX Record</label>
            <br />
            <input
              type="radio"
              id="requesting-host"
              name="fav_language"
              value="HTML"
            />
            <label htmlFor="Mx-Record">Validating Email</label>
            <br />
            <input
              type="radio"
              id="requesting-host"
              name="fav_language"
              value="HTML"
            />
            <label htmlFor="requesting-host">Calculating Score</label>
            <br />
          </div>
        </div>
        <div className="right-container">
          <h3 className="header">Results</h3>
          <div className="right-inner">
            <div className="inner-container">
              <div className="result-labels">
                <p>Stauts</p>
                <p>Name</p>
                <p>Gender</p>
                <p>Domian</p>
                <p>SMTP</p>
                <p>MX Record</p>
                <p>Reason</p>
              </div>
              <div className="result-labels2">
                <p>Deliverable</p>
                <p>Usama</p>
                <p>Male</p>
                <p>Gmail.com</p>
                <p>Google</p>
                <p>gmail-smtp-in.l</p>
                <p>Accepted</p>
              </div>
            </div>
            <div className="score">
              <h4>Score</h4>
              <div className="loader"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
