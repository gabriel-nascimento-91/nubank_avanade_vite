import styled from "styled-components";
import bannerBG from '../assets/images/bannerBG.png';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 50%;
	height: 100vh;
	background: ${props => props.background ? 'url(' + props.background + ') #e5e5e5' : ''} 10% 90% no-repeat;
	@media (max-width: 1280px) {
		background-size: 60%;
	}
	> h1 {
		font-size: 2em;
		margin: 20% 5%;
	}
`

function Banner(props) {
    return (
        <Container background={props.background ? bannerBG : ""}>
            {props.children}
        </Container>
    )
}

export default Banner;