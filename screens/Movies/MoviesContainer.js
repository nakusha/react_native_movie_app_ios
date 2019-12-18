import React from "react";
import MoviesPresenter from "./MoviesPresenter";
import { movies } from "../../api";

export default class extends React.Component {
    state = {
        loading: true,
        upcoming: null,
        popular: null,
        nowPlaying: null,
        error: null
    };

    async componentDidMount() {
        try {
            const {
                data: { results: upcoming }
            } = await movies.getUpcoming();
            const {
                data: { results: popular}
             } = await movies.getPopular();
            const {
                data: { results: nowPlaying }
            } = await movies.getNowPlaying();
            
            this.setState({
                upcoming,
                popular,
                nowPlaying
            });
        }catch(error) {
            this.setState({error:"Can't get Movies"});
        }finally{
            this.setState({loading:false});
        }
    };

    render() {
        const { loading } = this.state;
        return <MoviesPresenter loading={loading}/>;
    };
}