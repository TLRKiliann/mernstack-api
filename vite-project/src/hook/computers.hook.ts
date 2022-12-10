import React, { useState, useEffect } from 'react'
import { db_computers } from '../models/db_computers'
import { computerType } from '../models/computerType'


const useComputerHook = () => {

	const [computers, setComputers] = useState<Array<computerType>>([])

	useEffect(() => {
		setComputers(db_computers)
	}, [])

	return computers
}

export default useComputerHook