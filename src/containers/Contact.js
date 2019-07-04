import React from "react";

import styled from "@emotion/styled";

const ContactContainer = styled.div`
  margin: 0 auto;
  padding: 40px 0 160px 0;
  max-width: 640px;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ContactLink = styled.div`
  // width: 308px;
  flex-basis: 50%;
  // margin: 0 12px 0 0;
  background-color: magenta;
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <div>
        <p>
          Do you have wonderful ideas in mind? Let's talk about how we can make
          them happen.
        </p>
      </div>
      <ContactList>
        <ContactLink>
          <p>josephricafortjr@gmail.com</p>
        </ContactLink>
        <ContactLink>
          <p>@josephricafort</p>
        </ContactLink>
      </ContactList>
    </ContactContainer>
  );
};

export default Contact;
