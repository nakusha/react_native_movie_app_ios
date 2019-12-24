import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import MovieRating from "./MovieRating";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";
import { TouchableWithoutFeedback } from "react-native";
import { withNavigation } from "react-navigation"

const Container = styled.View`
    align-items:center;
    margin-right:20px;
`;

const Title = styled.Text`
    color:${TINT_COLOR};
    font-size: ${props => !props.big ? "12px" : "14px" };
    margin-vertical:5px
`;

const HContainer = styled.View`
    margin-bottom: 20px;
    flex-direction: row;
`;

const Column = styled.View`
    margin-left:20px;
    width:60%;
`;

const Overview = styled.Text`
    color:${GREY_COLOR};
    font-size:12px;
    margin-vertical:10px;
`;

const SectionItem = ({
    id, 
    posterPhoto,
    title, 
    voteAvrg, 
    horizontal = false, 
    overview, 
    isMovie = true, 
    navigation
}) => (
    <TouchableWithoutFeedback onPress={() => navigation.navigate({ 
        routeName: "Detail", 
        params:{ 
            isMovie, 
            id,
            backgroundPhoto:null,
            posterPhoto,
            title,
            voteAvrg,
            overview
        }
    })}>{
        horizontal ? (
        <HContainer>
            <MoviePoster path={posterPhoto}/>
            <Column>
                <Title big={true}>{title}</Title>
                <MovieRating votes={voteAvrg}/>
                {overview ? (
                    <Overview>
                        {overview.length > 170 
                            ? `${overview.substring(0, 167)}...` 
                            : overview }
                    </Overview>)
                : null}
            </Column>
        </HContainer>
        ) : (
        <Container>
            <MoviePoster path={posterPhoto}/>
            <Title>{title.length > 14 ? `${title.substring(0, 11)}...` : title}</Title>
            <MovieRating votes={voteAvrg}/>
        </Container>
        )
    }</TouchableWithoutFeedback>
);

SectionItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    voteAvrg: PropTypes.number.isRequired,
    overview: PropTypes.string,
    isMovie: PropTypes.bool
}

export default withNavigation(SectionItem);