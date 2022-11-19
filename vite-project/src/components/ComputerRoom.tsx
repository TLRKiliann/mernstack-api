import React from 'react'
import { useLocation } from 'react-router-dom'

const ComputerRoom: React.FC = () => {

	//console.log(`/computerroom/${key}`)
	const { params } = useLocation<{title?: string}>(null)
	console.log("params", params)
	console.log("{params}", {params})

	return(
		<div className="nextcomp--room">
			<h1>Computer Room</h1>
		</div>
	)
}

export default ComputerRoom;