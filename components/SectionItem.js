import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { TINT_COLOR } from "../constants/Colors";

const Container = styled.View`
    align-items:center;
    margin-right:20px;
`;

const Title = styled.Text`
    color:${TINT_COLOR};
    font-size:12px;
    margin-vertical:5px
`;

const SectionItem = ({id, posterPhoto, title, voteAvrg}) => (
    <Container>
        <MoviePoster path={posterPhoto}/>
        <Title>{title.length > 14 ? `${title.substring(0, 11)}...` : title}</Title>
        <MovieRating votes={voteAvrg}/>
    </Container>
);

SectionItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvrg: PropTypes.number.isRequired
}

export default SectionItem;