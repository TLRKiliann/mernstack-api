import React, { useState, useEffect } from 'react'
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'


const useComputerHook: React.FC = () => {

	const [computers, setComputers] = useState<Array<computerType>>([])

	useEffect(() => {
		setComputers(db_computers)
		return () => console.log("clean-up useEffect 2")
	}, [])

	return computers
}

export default useComputerHook