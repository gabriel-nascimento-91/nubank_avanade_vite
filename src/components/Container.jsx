import styled from "styled-components";

const ContainerFlex = styled.div`
	display: flex;
	fieldset {
        min-height: 40px;
		width: 90%;
		border: none;
	}
    > div:nth-child(2) {
        height: 90vh;
        display: flex;
        justify-content: center;
    }
    form {
        width: 70%;
        display: flex;
        flex-direction: column;
        height: 70vh;
        button {
            width: 80%;
            line-height: 50px;
            border: none;
            border-radius: 25px;
            font-size: 1.2em;
            cursor: pointer;
            margin-top: 2%;
        }   
    }
    
`

function Container(props) {
    return (
        <ContainerFlex>
            {props.children}
        </ContainerFlex>
    )
}

export default Container;
