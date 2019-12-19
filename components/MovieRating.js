import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Vote = styled.Text`
    color: ${props => props.inSlider ? TINT_COLOR : GREY_COLOR};
    font-size: ${props => props.inSlider ? '10px' : '8px'};
    font-weight: 600;
`;

const MovieRating = ({ votes, inSlider = false }) => <Vote>평점 : {`${votes} / 10`}</Vote>

MovieRating.propTypes = {
    votes: PropTypes.number.isRequired,
    inSlider: PropTypes.bool
}

export default MovieRating;