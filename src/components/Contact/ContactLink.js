import React from "react";

import styled from "@emotion/styled";

import Email from "../../icons/Envelope";
import Twitter from "../../icons/Twitter";
import Behance from "../../icons/Behance";
import LinkedIn from "../../icons/LinkedIn";

const ContactLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 50%;
  align-content: center;
  margin-bottom: 12px;
  // padding-right: 12px;
`;

const Icon = styled.div`
  margin-right: 12px;
  opacity: 0.5;
`;

const iconSelect = type => {
  switch (type) {
    case "Email":
      return <Email />;
    case "Twitter":
      return <Twitter />;
    case "Behance":
      return <Behance />;
    case "LinkedIn":
      return <LinkedIn />;
    default:
      return null;
  }
};

const ContactLink = ({ type, label, link, icon }) => {
  return (
    <ContactLinkContainer>
      <Icon>{iconSelect(type)}</Icon>
      <strong>
        <a href={link}>{label}</a>
      </strong>
    </ContactLinkContainer>
  );
};

export default ContactLink;
