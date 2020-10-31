import React from "react";

import ContainerUI from "@material-ui/core/Container";
import styled from "@emotion/styled";

import Email from "../icons/Envelope";
import Twitter from "../icons/Twitter";
import Behance from "../icons/Behance";
import LinkedIn from "../icons/LinkedIn";

import ContactData from "../data/ContactData.json";
import ContactLink from "../components/Contact/ContactLink";
import ContactForm from "../components/Contact/ContactForm";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 90px 0px;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

const Column = styled.div`
  flex: 1 1 360px;
  margin: 0 0 48px 0;
  max-width: 480px;
  padding-right: 60px;
`;

const TextContainer = styled.div``;

const ContactList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 48px;
`;

const Title = styled.h2`
  flex: 1 1 100%;
  margin-top: 0;
`;

const Contact = () => {
  return (
    <ContainerUI maxWidth="lg">
      <Container id={"contact"}>
        <Title>Get In Touch!</Title>
        <Column>
          <TextContainer>
            {/* <h4>
              Looking for solutions to data, design and development challenges or
              maybe needing some advice?
            </h4> */}
            <p>
              Any projects you have in mind or any questions you want answered?
              Feel free to send or leave me a message and I’ll get in touch as
              soon as possible. :-)
            </p>
          </TextContainer>
          <ContactList>
            {ContactData.map((contact) => (
              <ContactLink
                type={contact.type}
                label={contact.label}
                link={contact.link}
                // icon={iconSelect(contact.type)}
              />
            ))}
          </ContactList>
        </Column>
        <Column>
          <ContactForm />
        </Column>
      </Container>
    </ContainerUI>
  );
};

export default Contact;
