import styled from "styled-components";

const ContainerFlex = styled.div`
	display: flex;
	fieldset {
		width: 60%;
		border: none;
	};
`

function Container(props) {
    return (
        <ContainerFlex>
            {props.children}
        </ContainerFlex>
    )
}

export default Container;
