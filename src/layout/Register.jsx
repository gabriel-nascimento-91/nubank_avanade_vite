import { Backdrop, CircularProgress } from '@mui/material';
import { useReducer, useState } from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';

// Reducer - Redutor, filtro. (State,Event,Context)
// State - Informação armazenada
// Event - Quem dispara o reducer
// Context - Área de atuação
// Reducer isola o estado de um componente
// Criar um reducer para armazenar todos os campos do formulário dinamicamente

const formReducer = (state, action) => {
	return {
		...state,
		[action.name]: action.value,
	}
}

function Register() {

	const [formData, setFormData] = useReducer(formReducer, {});

	const [submitting, setSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({
			name: e.target.name,
			value: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
		}, 2000);
	}

	return (
		<Container>
			<Banner background>
				<h1>Complete os campos ao lado para pedir sua Conta e Cartão de crédito</h1>
			</Banner>
			<Banner>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<label>
							<p>CPF</p>
							<input
								type="text"
								name="cpf"
								id="cpf"
								required
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<label>
							<p>Nome Completo</p>
							<input
								type="text"
								name="nome"
								id="nome"
								required
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<label>
							<p>Celular</p>
							<input
								type="tel"
								name="celular"
								id="celular"
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<label>
							<p>E-mail</p>
							<input
								type="email"
								name="email"
								id="email"
								required
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<label>
							<p>Confirmação de e-mail</p>
							<input
								type="email"
								name="cemail"
								id="cemail"
								required
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<fieldset>
						<label>
							<input
								type="checkbox"
								name="aceito_comunicacao"
								id="aceito_comunicacao"
								required
								onChange={handleChange}
							/>
							Aceito receber comunicações do Nubank pelo WhatsApp
						</label>
					</fieldset>
					<fieldset>
						<label>
							<input
								type="checkbox"
								name="aceito_politica"
								id="aceito_politica"
								required
								onChange={handleChange}
							/>
							Eu li, estou ciente das condições de tratamento dos meus dados
							pessoais e dou meu consentimento, quando aplicável, conforme
							descrito nesta Política de Privacidade.
						</label>
					</fieldset>
					<button type='submit'>Enviar</button>
				</form>
				{submitting &&
					<div>
						<Backdrop
							sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
							open={submitting}
						>
							<CircularProgress color="inherit" />
						</Backdrop>
					</div>
				}
			</Banner>
		</Container>
	);
}

export default Register;
