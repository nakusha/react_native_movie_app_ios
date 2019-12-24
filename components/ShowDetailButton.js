import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TINT_COLOR } from "../constants/Colors";
import { withNavigation } from "react-navigation";

const BtnContainer = styled.TouchableOpacity`
    background-color: #e74c3c;
    padding: 5px 10px;
    border-radius: 2.5px;
`;

const BtnText = styled.Text`
    color: ${props => props.textColor ? textColor : TINT_COLOR};
`;

const ShowDetailBtn = ({ 
    id, 
    text, 
    navigation, 
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvrg,
    overview,
}) => (
    <BtnContainer onPress={() => navigation.navigate({
        routeName:"Detail", 
        params: {
            isMovie:true, 
            id, 
            posterPhoto, 
            backgroundPhoto, 
            title, 
            voteAvrg, 
            overview
        }
    })}>
        <BtnText>{text}</BtnText>
    </BtnContainer>
);

ShowDetailBtn.propTypes = {
    text:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired
}

export default withNavigation(ShowDetailBtn);