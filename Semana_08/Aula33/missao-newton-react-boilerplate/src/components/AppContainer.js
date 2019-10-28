import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';




const BigWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
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

const StyledP = styled.p`
	margin: 0;
	padding: 0;
`

const StyledRadioGroup = styled.div`
	display: flex;
	justify-content: space-between;
`

export class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<BigWrapper>
				<StyledPaper>
					<h1>{`Do's & Done's`}</h1>
					<StyledTextField
						label="Digite a task"
						variant="outlined"
					/>
					<Tasks>
					</Tasks>

					<StyledRadioGroup>
						<Radio
							value="a"
							aria-label="A"
						/>
						<Radio
							value="b"
							aria-label="B"
						/>
						<Radio
							value="c"
							aria-label="C"
						/>
					</StyledRadioGroup>
					

					<Button variant="contained" color="primary" size="small">
						<StyledP>Marcar todas como completas</StyledP>
						<CheckIcon/>
					</Button>
				</StyledPaper>
			</BigWrapper>
		)
	}
}