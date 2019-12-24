import React from "react";
import DetailPresenter from "./DetailPresenter";
import { tv, movies } from "../../api";

export default class extends React.Component{
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("title")
        };
    };

    constructor(props){
        super(props);
        const { 
            navigation: { 
                state: { 
                    params : {
                        isMovie,
                        id, 
                        posterPhoto, 
                        backgroundPhoto, 
                        title,
                        voteAvrg, 
                        overview
                    }
                }
            }
        } = props;
        this.state = {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvrg,
            overview,
            isMovie,
            loading: true
        };
    }

    async componentDidMount(){
        const {isMovie, id} = this.state;
        let error, genres, overview, status, date, backgroundPhoto;
        try{
            if (isMovie){
                ({
                    data:{
                        genres, 
                        overview, 
                        release_date: date,
                        status,
                        backdrop_path: backgroundPhoto
                    }
                } = await movies.getMovie(id));
            }else{
                ({
                    data: {
                        genres,
                        overview,
                        status,
                        first_air_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await tv.getShow(id));
            }
        }catch(error){
            error = "";
        }finally{
            this.setState({
                loading:false,
                genres,
                overview,
                status,
                date,
                error
            });
        }
    }
    render () { 
        const {
            isMovie,
            id, 
            posterPhoto, 
            backgroundPhoto, 
            title,
            voteAvrg, 
            overview,
            loading,
            date,
            status,
            genres
        } = this.state;
        
        return <DetailPresenter 
            id={id} 
            posterPhoto={posterPhoto} 
            backgroundPhoto={backgroundPhoto} 
            isMovie={isMovie} 
            title={title} 
            voteAvrg={voteAvrg} 
            overview={overview}
            loading={loading}
            date={date}
            status={status}
            genres={genres}
        />;
    };
}