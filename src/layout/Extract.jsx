import Banner from '../components/Banner';
import Container from '../components/Container';
import boleto from '../assets/images/boleto.svg'
import ted from '../assets/images/ted.svg'
import pix from '../assets/images/pix.svg'
import styled from 'styled-components';
import ExtractData from '../components/ExtractData';

const Ul = styled.ul`
	width: 100%;
	margin: 0;
	padding: 0;
	overflow-y: auto;
	height: 100vh;
`
const Li = styled.li`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	> div > * {
		max-height: 25px;
	}
	> div:nth-child(2) {
		display: flex;
		flex-direction: column;
		strong {
			font-size: 1.5em;
			margin-bottom: 5%;
		}
		span {
			text-align: center;
		}
	}
	> div:last-child {
		font-size: 0.9em;
		font-weight: bold;
		color: #aaa
	}
	&:nth-child(odd) {
		background-color: #eee;
	}
`

const imagem = (icone) => {
	let retorno;
	switch (icone) {
		case "boleto":
			retorno = boleto
			break;
		case "pix":
			retorno = pix
			break;
		case "ted":
			retorno = ted
			break;
		default:
			retorno = pix
			break;
	}
	return retorno;
}

const formatCurrency = (value) => {
	return Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(value);
}

const formatDate = (dateInput) => {
	const date = new Date(dateInput);
	const day = date.getDate();
	const month = date.toLocaleDateString("pt-BR", {month: 'short'});
	return `${day+1} ${month.toUpperCase()}`;
}

function Extract() {

	return (
		<Container>
			<Banner background>
				<h1>Confira seu extrato</h1>
			</Banner>
			<Banner>
				<Ul>
					{ExtractData.map((item, index) => {
						return (
							<Li key={index}>
								<div><img src={imagem(item.icone)} alt="Operação" /></div>
								<div>
									<strong>{item.operacao}</strong>
									{item.destinatario && <span>{item.destinatario}</span>}
									<span>{formatCurrency(item.valor)}</span>
								</div>
								<div>{formatDate(item.dataOperacao)}</div>
							</Li>
						)
					})}
				</Ul>
			</Banner>
		</Container>
	);
}

export default Extract;
