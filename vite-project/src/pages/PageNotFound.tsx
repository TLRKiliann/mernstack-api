import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound: React.FC = () => {
	return(
		<div style={{marginTop: '120px', color: 'white'}}>
			<h1>Error page not found !</h1>
			<Link to="/" >Redirect to home page.</Link>
		</div>
	)
}

export default PageNotFound