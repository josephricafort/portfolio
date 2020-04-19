import React from 'react'

import styles from "@emotion/styled";
import { styled } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const Container = styles.div`

`;

const MyButton = styled(Button)({

});


const MyTextField = styled(TextField)({
    marginBottom: '10px',
    width: '100%'
});
  
const ContactForm = () => {
    return (
        <Container>
            <form action="https://getform.io/f/e1dc7bfe-bb57-45a0-8cda-9dd1c382dc9f" method="POST">
                <div>
                <MyTextField id="outlined-basic" label="First name" variant="outlined" type="text" name="name"/>
                <br />
                <MyTextField id="outlined-basic" label="Email" variant="outlined" type="email" name="email"/>
                <br />
                <MyTextField id="outlined-basic" label="What do you want to say?" variant="outlined" type="textarea" multiline rowsMax={4} rows={4} name="message"/>
                <br />
                <MyButton variant="outlined" color="primary" type="submit">Send</MyButton>
                </div>
            </form>
        </Container>
    )
}

export default ContactForm
