import { useState } from "react";
import "./Cards.css";
import Icon from "../shared/images/Icon/Boxed Icon.png";
import Icon2 from "../shared/images/Icon/Icon2.png";

export function RenderCards({ type, text }) {
  let details = [];
  const [BenefitsCardsText] = useState([
    {
      title: "Secure",
      text: "Verify Your Email Addresses with Confidence, Thanks to Our Secure SAAS Solution",
    },
    {
      title: "Accurate Results",
      text: "Ensure the Success of Your Email Campaigns with Our Exceptionally Accurate Verification Results",
    },
    {
      title: "Fast and reliable",
      text: "Say Goodbye to Slow Email Verification with Our Swift and Trustworthy System with maximum productivity.",
    },
    {
      title: "Free Email Checking",
      text: "Get Accurate Results Without Breaking the Bank with Our Free Single Email Verification Service",
    },
    {
      title: "Secure Payment System",
      text: "Your Financial Information is Safe with Our Secure Payment System for Email Verification",
    },
    {
      title: "Keep No Track of emails",
      text: "Worry Less & ensure Confidentiality About Privacy with Our No-Tracking Email Validation Solution",
    },
  ]);
  const [solutionsCardsText] = useState([
    {
      title: "Accept-All Email Detection",
      text: "We find which addresses are associated with Accept-All servers so you can assess the risk in sending to those addresses.",
    },
    {
      title: "SMTP Provider Information",
      text: "Verify Your Email Addresses with Confidence, Thanks to Our Secure SAAS SolutionA",
    },
    {
      title: "Syntax Validation",
      text: "Ensures the address has all the characteristics of a legitimate email address before you send.",
    },
    {
      title: "Domain Validation",
      text: "Checks that the domain name hosting the email address actually exists and is working properly.",
    },
    {
      title: "Email Quality Score",
      text: "We give every email address on your list a quality score from 0 to 100.",
    },
    {
      title: "Customized Exports",
      text: "Handpick and export only the email addresses you want to send to with ease.",
    },
    {
      title: "Real-Time Results",
      text: "View the results of your email verification as we process the list in real-time.",
    },
    {
      title: "Name & Gender Detection",
      text: "Our system attempts to enrich emails in your list with a first and last name  and the gender of emails in your list.",
    },
    {
      title: "Drag & Drop Interface",
      text: "Easily drag and drop or copy and paste your email list directly from your computer.",
    },
    {
      title: "24/7 Support",
      text: "We're here to help! Our friendly staff is available to answer questions through chat and email.",
    },
  ]);
  if (type == "benefits") {
    details = BenefitsCardsText;
  } else details = solutionsCardsText;

  return (
    <div className="benefits-section reveal">
      <h1 className="benefits-header">{text}</h1>
      <div
        className={
          type == "benefits" ? "benefitcards cards" : "solutioncards cards"
        }
      >
        {details.map((card, i) => (
          <div
            key={i}
            className={
              type == "benefits" ? "benefitcard card" : "solutioncard card"
            }
          >
            {type == "benefits" ? (
              <img src={Icon} alt="Smiley Icon" />
            ) : (
              <div className="tag">
                <p>
                  <img
                    src={Icon2}
                    alt="Smiley Icon"
                    className="solutions-icon"
                  />
                  Features
                </p>
              </div>
            )}
            <h1>{card.title}</h1>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
