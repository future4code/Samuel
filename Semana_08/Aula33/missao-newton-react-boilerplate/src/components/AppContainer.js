import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const BigWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	margin: 20px auto;
`

const StyledPaper = styled(Paper)`
	display: flex;
	justify-content: center;
	align-items: center;
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
					
				</StyledPaper>
			</BigWrapper>
		)
	}
}