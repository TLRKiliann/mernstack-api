import React from 'react'
import { useParams } from 'react-router-dom'
import './styleComponents/ComputerRoom.scss'

interface ComputerRoomProps {
  link: string
}

const ComputerRoom: React.FC = ({props}: ComputerRoomProps) => {

  const params = useParams<{ link?: object }>()
  console.log("{params}", typeof params)

  return(
    <div className="nextcomp--room">
      <h1>Room {Object.values(params)}</h1>
      <p>{props}</p>
    </div>
  )
}

export default ComputerRoom;