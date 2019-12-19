import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.View`
`;

const BgImage = styled.Image``;

const MovieSlide = ({id, posterPhoto, backgroundPhoto, title ,voteAvrg, overView}) => <Container><BgImage /></Container>;

MovieSlide.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvrg: PropTypes.number.isRequired,
    overView: PropTypes.string.isRequired
}

export default MovieSlide