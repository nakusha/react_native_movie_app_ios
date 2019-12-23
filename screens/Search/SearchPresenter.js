import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BG_COLOR, GREY_COLOR, TINT_COLOR } from "../../constants/Colors";
import Layout from "../../constants/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import SectionItem from "../../components/SectionItem";

const Container = styled.View`
    flex:1;
    background-color: ${BG_COLOR};
`;

const InputContainer = styled.View`
    align-items:center;
    margin-vertical:20px;
`;

const Input = styled.TextInput`
    background-color:rgba(255, 255, 255, 1);
    width:${Layout.width / 1.6};
    border-radius:15px;
    padding:5px 10px;
    text-align:center;
`;

const SearchResults = styled.ScrollView`
    margin-top: 10px;
`;

const SearchResultText = styled.TextInput`
    color:${TINT_COLOR};
`;

const SearchPresenter = ({ loading, tvResults, movieResults, searchTerm, handleSearchUpate, onSubmitEditing }) => (
    <Container>
        <InputContainer>
            <Input 
                value={searchTerm} 
                onChangeText={handleSearchUpate}
                returnKeyType="search"
                placeholder="Search Movies & TVs"
                placeholderTextColor={GREY_COLOR}
                onSubmitEditing={onSubmitEditing}
                autoCorrect={false}
            />
        </InputContainer>
        <SearchResults>
            {loading ? <Loader/> : (
                <>
                    {movieResults ? (
                        movieResults.length > 0 ? (
                            <Section title="Movie Results">
                                {movieResults.filter(movie => movie.poster_path !== null)
                                .map(movie => (
                                    <SectionItem
                                        key={movie.id}
                                        id={movie.id}
                                        posterPhoto={movie.poster_path}
                                        title={movie.title}
                                        overview={movie.overview}
                                        voteAvrg={movie.vote_average}
                                    />
                                ))}
                            </Section>
                        ) : <SearchResultText>No Movie Result Named By {searchTerm}</SearchResultText>
                    ): null}
                    {tvResults ? (
                        tvResults.length > 0 ? (
                            <Section title="TV Results">
                                {tvResults.filter(tv => tv.poster_path !== null)
                                .map(tv => (
                                    <SectionItem
                                        key={tv.id}
                                        id={tv.id}
                                        posterPhoto={tv.poster_path}
                                        title={tv.name}
                                        voteAvrg={tv.vote_average}
                                        isMovie={false}
                                    />
                                ))}
                            </Section>
                        ) : <SearchResultText>No TV Show Named By {searchTerm}</SearchResultText>
                    ): null}
                </>
                )
            }
        </SearchResults>
    </Container>
);

SearchPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    tvResults: PropTypes.array,
    movieResults: PropTypes.array, 
    searchTerm: PropTypes.string, 
    handleSearchUpate: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired
}

export default SearchPresenter;

