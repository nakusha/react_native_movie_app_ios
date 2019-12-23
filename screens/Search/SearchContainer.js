import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies,tv } from "../../api";

export default class extends React.Component{
    state = {
        loading: false,
        tvResults: null,
        movieResults : null,
        searchTerm: "",
        error: null
    };

    handleSearchUpdate = (text) => {
        this.setState({
            searchTerm:text
        });
    };

    onSubmitEditing = async() => {
        const {searchTerm} = this.state;
        if (searchTerm !== "") {
            let loading, tvResults, movieResults, error;
            this.setState({
                loading:true
            });

            try{
                ({
                    data: { results: movieResults }
                } = await movies.searchMovies(searchTerm));
                ({
                    data: { results: tvResults }
                } = await tv.searchTV(searchTerm));
            }catch (error){
                console.log(error)
                error = "Can't Fint Movie & TV";
            }finally{
                this.setState({
                    loading:false,
                    movieResults,
                    tvResults,
                    error
                })
            }
            return;
        }
    }

    render () {
        const { loading, tvResults, movieResults, searchTerm, onSubmitEditing } = this.state
        return <SearchPresenter 
            loading={loading}
            tvResults={tvResults}
            movieResults={movieResults}
            searchTerm={searchTerm}
            handleSearchUpate={this.handleSearchUpdate}
            onSubmitEditing={this.onSubmitEditing}
        />
    };
}
