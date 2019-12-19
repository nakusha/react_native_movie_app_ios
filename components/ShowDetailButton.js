import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { TINT_COLOR } from "../constants/Colors";

const BtnContainer = styled.TouchableOpacity`
    background-color: #e74c3c;
    padding: 5px 10px;
    border-radius: 2.5px;
`;

const BtnText = styled.Text`
    color: ${props => props.textColor ? textColor : TINT_COLOR};
`;

const ShowDetailBtn = ({ text}) => (
    <BtnContainer>
        <BtnText>{text}</BtnText>
    </BtnContainer>
);

ShowDetailBtn.propTypes = {
    text:PropTypes.string.isRequired
}

export default ShowDetailBtn;