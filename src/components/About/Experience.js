import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
    // flex: 1 1 360px;
    // max-width: 480px;
    // // padding-right: 60px;
`;

const Experience = () => {
    return (
        <Container>
            <h2>Who I worked with</h2>
            <p>
                <strong>
                    <a href="https://interactivethings.com">
                    Data Visualization Designer (Present)
                    </a>
                </strong>
                <br />
                <italic>The Straits Times, Singapore</italic>
            </p>
            <p>
                <strong>
                    <a href="https://interactivethings.com">
                    Interaction Design Intern
                    </a>
                </strong>
                <br />
                <italic>Interactive Things, Zürich, Switzerland</italic>
            </p>
            <p>
                <strong>
                    Test Development Engineer
                </strong>
                <br />
                <italic>Analog Devices, General Trias, Cavite, Philippines</italic>
            </p>
        </Container>
    )
}

export default Experience;