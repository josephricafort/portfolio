import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
    flex: 1 1 360px;
    max-width: 480px;
    padding-right: 60px;
`;

const Story = () => {
    return (
        <Container>
            <h2>About Me</h2>
            <p>
                I analyze, design, develop and present complex information in the most
                beautiful, meaningful and simplest way possible.
            </p>
            <p>
                I have worked with large datasets as a test development engineer in the
                Philippines which helped me realize my love-hate relationship with data.
                I also used to do creative work as a hobby, playing around with
                presentations and infographics. I got fascinated with the idea of
                combining data, design and code together which led me into this field.
            </p>
        </Container>
    )
}

export default Story;