import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`

`;

const Recognitions = () => {
    return(
        <Container>
            <h3>Recognitions</h3>
            <p>
                <a href="https://www.datavisualizationsociety.com/annual-survey-challenge/2019/10/22/challenge-title-3a8ry">
                <strong>
                    Data Visualization Society: Annual Survey Challenge - 3rd Place,
                    Exploratory <br />
                    How Represented Are You In The Dataviz Community
                </strong>
                </a>
                <br />
                Is you background well represented in the data visualization community?
            </p>
            <p>
                <a href="https://www.informationisbeautifulawards.com/showcase/3987-10-years-of-exclusive-economic-growth">
                <strong>
                    10 Years of "Exclusive" Economic Growth - Longlisted, Kantar
                    Information is Beautiful Awards
                </strong>
                </a>
                <br />
                Did the rural provinces experienced the same economic growth as the
                urban capital of Metro Manila within the past 10 years?
            </p>
            <p>
                <a href="http://hdr.undp.org/en/content/2019-human-development-data-visualization-challenge-winner-gender-inequality-visual-story">
                <strong>
                    Out of Reach - 2nd place, 2019 Human Development Data Visualization
                    Challenge
                </strong>
                </a>
                <br />
                Visualizing income inequality within and between countries
            </p>
        </Container>
    )
}

export default Recognitions;