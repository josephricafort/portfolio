import React from 'react';

import styledEmo from "@emotion/styled";
import { styled } from "@material-ui/core/styles";
import ContainerUI from "@material-ui/core/Container";

import dataIcon from "../images/expertise-icons/data_blue.png";
import storiesIcon from "../images/expertise-icons/stories_blue.png";
import designIcon from "../images/expertise-icons/design_blue.png";

const MyContainerUI = styled(ContainerUI)({
    margin: '180px auto',
});

const Container = styledEmo.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 400px){
        flex-direction: column;
    }
`;

const ExpertiseCard = styledEmo.div`
    flex: 1 1 240px;
    background-color: white;
    border: 1px solid #CCCCCC;
    border-radius: 3px;
    padding: 48px 24px 36px 24px;
    margin: 12px;
    -moz-box-shadow:    1px 1px 1px 1px #cccccc45;
    -webkit-box-shadow: 1px 1px 1px 1px #cccccc45;
    box-shadow:         1px 1px 1px 1px #cccccc45;
`;

const Icon = styledEmo.div`
    background-color: grey;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 40px;
    height: 80px;
    width: 80px;
    margin: auto;
`;

const Title = styledEmo.h2`
    text-align: center;
`;

const H4 = styledEmo.h4`
    max-width: 360px;
    margin: 24px auto;
    text-align: center;
`;

const Li = styledEmo.li`
    list-style-type: none;
    position: relative;

    &::before {
        content: '■';
        position: absolute;
        left: -1.1em;          /* Adjust this value so that it appears where you want. */
        top: .2em;
        font-size: 0.8em;      /* Adjust this value so that it appears what size you want. */
    }
`;

const Expertise = () => {
    return <MyContainerUI maxWidth="lg">
        <Title>What I Always Strive For</Title>
        <Container>
            <ExpertiseCard>
                <Icon image={dataIcon}></Icon>
                <H4>Data and Intuition</H4>
                <ul>
                    <Li><strong>Structure</strong> - sourcing, shaping and crunching data</Li>
                    <Li><strong>Analysis</strong> - data not merely as numbers but also as representations</Li>
                    <Li><strong>Perspective</strong> - looking for patterns at different angles</Li>
                </ul>
            </ExpertiseCard>
            <ExpertiseCard>
                <Icon image={storiesIcon}></Icon>
                <H4>Stories and Exploratories</H4>
                <ul>
                    <Li><strong>Narrative</strong> - flowing narrative with simplicity and clarity</Li>
                    <Li><strong>Exploration</strong> - allow users to get lost and discover</Li>
                    <Li><strong>Empathy</strong> - telling from the human side of things</Li>
                </ul>
            </ExpertiseCard>
            <ExpertiseCard>
                <Icon image={designIcon}></Icon>
                <H4>Design and Development</H4>
                <ul>
                    <Li><strong>Engagement</strong> - making things beautiful</Li>
                    <Li><strong>Function</strong> - everything is not about fanciness, but also usefulness</Li>
                    <Li><strong>Approach</strong> - user centered design approach</Li>
                </ul>
            </ExpertiseCard>
        </Container>
    </MyContainerUI>
  };
  
  export default Expertise;


