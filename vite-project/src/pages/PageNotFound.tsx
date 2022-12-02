import React from 'react'
import { Link } from 'react-router-dom'
import '../stylePages/PageNotFound.scss'

const PageNotFound: React.FC = () => {

	const colorErrorNotFound = {
		marginTop: '25%',
		textAlign: 'center',
		fontSize: '2rem',
		fontFamily: 'Junction, sans-serif',
		backgroundColor: '#242424',
		color: 'white'
	};

	return(
		<div style={colorErrorNotFound}>
			<h1>Error page not found !</h1>
			<Link to="/" >Redirect to home page.</Link>
		</div>
	)
}

export default PageNotFound