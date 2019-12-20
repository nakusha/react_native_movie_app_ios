import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import Section from "../../components/Section";
import SectionItem from "../../components/SectionItem";

const Container = styled.ScrollView`
    background-Color: black;
`;

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) => 
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {nowPlaying ? <MovieSlider movies={nowPlaying}/> : null}
            {upcoming ? (
                <Section title="Upcoming Moviews">
                {upcoming
                .filter(movie => movie.poster_path !== null)
                .map(movie => <SectionItem id={movie.id}
                    posterPhoto={movie.poster_path}
                    title={movie.title}
                    voteAvrg={movie.vote_average}/>)}
                </Section>
            ) : null}
        </Container>
    );

MoviesPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    upcoming: PropTypes.array,
    popular: PropTypes.array,
    nowPlaying: PropTypes.array
};

export default MoviesPresenter;