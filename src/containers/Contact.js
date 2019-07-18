import React from "react";

import styled from "@emotion/styled";

import Email from "../icons/Envelope";
import Twitter from "../icons/Twitter";
import Behance from "../icons/Behance";
import LinkedIn from "../icons/LinkedIn";

import ContactData from "../data/ContactData.json";
import ContactLink from "../components/Contact/ContactLink";

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 40px 16px 160px 16px;
  max-width: 640px;
`;

const TextContainer = styled.div`
  margin: 0 0 48px 0;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Contact = () => {
  return (
    <ContactContainer id={"contact"}>
      <TextContainer>
        <h4>
          Looking for solutions to data, design and development challenges or
          need some advice?
        </h4>
        <h3>Let's keep in touch!</h3>
      </TextContainer>
      <ContactList>
        {ContactData.map(contact => (
          <ContactLink
            type={contact.type}
            label={contact.label}
            link={contact.link}
            // icon={iconSelect(contact.type)}
          />
        ))}
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;
