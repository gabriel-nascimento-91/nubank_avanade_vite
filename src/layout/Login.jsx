import { Backdrop, CircularProgress } from '@mui/material';
import { useReducer, useState } from 'react';
import Banner from '../components/Banner';
import Container from '../components/Container';

const formReducer = (state, action) => {
	return {
		...state,
		[action.name]: action.value,
	}
}

function Login() {

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
				<h1>Faça seu Login</h1>
			</Banner>
			<Banner>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<label>
							CPF
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
							Senha
							<input
								type="password"
								name="senha"
								id="senha"
								required
								onChange={handleChange}
							/>
						</label>
					</fieldset>
					<button type='submit'>Entrar</button>
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

export default Login;
