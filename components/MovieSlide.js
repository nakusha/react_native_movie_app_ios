import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import makePhotoUrl from "../Utils/makePhotoUrl";
import Layout from "../constants/Layout";
import MoviePoster from "./MoviePoster";
import { TINT_COLOR } from "../constants/Colors";
import MovieRating from "./MovieRating";
import ShowDetailBtn from "./ShowDetailButton";

const Container = styled.View`
    flex: 1;
    position: relative;
`;

const BgImage = styled.Image`
    width:${Layout.width};
    height:${Layout.height / 3.5};
    opacity: 0.5;
    position: absolute;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding-horizontal: 30px;
    justify-content: space-between;
`;

const Column = styled.View`
    width: 60%;
    align-items: flex-start;
`;

const Title = styled.Text`
    color: ${TINT_COLOR};
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const Overview = styled.Text`
    color: ${TINT_COLOR};
    font-size: 12px;
    margin-bottom: 10px;
`;

const VoteContainer = styled.View`
    margin: 10px 0px;
`;

const MovieSlide = ({id, posterPhoto, backgroundPhoto, title ,voteAvrg, overView}) => (
    <Container>
        <BgImage source={{uri: makePhotoUrl(backgroundPhoto)}}/>
        <Content>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title>{title}</Title>
                {voteAvrg ? (
                    <VoteContainer>
                        <MovieRating votes={voteAvrg} inSlider={true}/>
                    </VoteContainer>)
                 : null }
                {overView ? (
                    <Overview>
                        {overView.length > 117 
                            ? `${overView.substring(0, 120)}...` 
                            : overView }
                    </Overview>)
                     : null}
                <ShowDetailBtn text={"More Detail"}/>
            </Column>
        </Content>
    </Container>
);

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvrg: PropTypes.number.isRequired,
    overView: PropTypes.string.isRequired
}

export default MovieSlide