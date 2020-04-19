import React from 'react'

import styles from "@emotion/styled";
import { styled } from "@material-ui/styles";
import ContainerUI from "@material-ui/core/Container";
import { Button } from "@material-ui/core";

const Container = styles.div`
    width: 100%;
    padding: 90px 0 120px 0;
    background-color: #f5f5f5;
`;

const Title = styles.h2`

`;

const MyContainerUI = styled(ContainerUI)({
    maxWidth: '480px',
    textAlign: 'center'
});

const MyButton = styled(Button)({
    marginTop: '48px'
});

const Blog = () => {
    return (
        <Container>
            <MyContainerUI>
                <Title>Blog</Title>
                <p>Inside look at my projects, thought processes, sketches, dummy projects and just out of this world ideas.</p>
                <MyButton variant="outlined" color="primary" disabled>Soon!</MyButton>
            </MyContainerUI>
        </Container>
    )
}

export default Blog
