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
        <h3>
          Do you have wonderful ideas in mind? Let's talk about how we can make
          them happen.
        </h3>
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
      {/* <ContactList>
        <ContactLink>
          <Icon>
            <Email />
          </Icon>
          <strong>
            <a href="mailto: josephricafortjr@gmail.com">
              josephricafortjr@gmail.com
            </a>
          </strong>
        </ContactLink>
        <ContactLink>
          <Icon>
            <Twitter />
          </Icon>
          <strong>
            <a
              href="https://twitter.com/josephricafort"
              target="_blank"
              rel="noopener noreferrer"
            >
              @josephricafort
            </a>
          </strong>
        </ContactLink>
        <ContactLink>
          <Icon>
            <Behance />
          </Icon>
          <strong>
            <a
              href="https://www.behance.net/josephricafort"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joseph Ricafort
            </a>
          </strong>
        </ContactLink>
        <ContactLink>
          <Icon>
            <LinkedIn />
          </Icon>
          <strong>
            <a
              href="https://www.linkedin.com/in/joseph-ricafort-83b42b28/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Joseph Ricafort
            </a>
          </strong>
        </ContactLink>
      </ContactList> */}
    </ContactContainer>
  );
};

export default Contact;
