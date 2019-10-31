import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const BigWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 600px;
	margin: 20px auto;
`

const StyledPaper = styled(Paper)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const StyledTextField = styled(TextField)`
	width: 95%;
	margin: 10px auto;
`

const Tasks = styled.div`
	width: 95%;
	margin: 10px auto;
`

const RadioButtons = styled.div`
	display: flex;
`

const StyledP = styled.p`
	margin: 0;
	padding: 0;
`

const StyledH1 = styled.h1`
	margin: 0;
`

const ButtonWrapper = styled.div`
	display: flex;
	margin: 15px;
`

const StyledButton = styled(Button)`
	margin: 0 5px;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		return (
			<BigWrapper>
				<StyledPaper>
					<StyledH1>{`Do's & Done's`}</StyledH1>

					<ButtonWrapper>
						<StyledButton variant="outlined" color="primary" size="small">
							<StyledP>Ver todas</StyledP>
						</StyledButton>
						<StyledButton variant="outlined" color="primary" size="small">
							<StyledP>Ver completas</StyledP>
						</StyledButton>
						<StyledButton variant="outlined" color="primary" size="small">
							<StyledP>Ver incompletas</StyledP>
						</StyledButton>
					</ButtonWrapper>

					<StyledTextField
						label="Digite a task"
						variant="outlined"
					/>
					<Tasks>
					</Tasks>

					<ButtonWrapper>
						<StyledButton variant="contained" color="primary">
							<StyledP>Completar todas</StyledP>
							<CheckIcon fontSize="small" />
						</StyledButton>
						<StyledButton variant="contained" color="primary">
							<StyledP>Remover completas</StyledP>
							<DeleteForeverIcon fontSize="small" />
						</StyledButton>
					</ButtonWrapper>
				</StyledPaper>
			</BigWrapper>
		)
	}
}