import React from 'react'
import { Mission } from '../../types/type'

interface MissionProps {
    mission:Mission
}

const MilMission:React.FC<MissionProps> = ({mission}) => {
  return (
    <div className='MilMission'>
        <h2>Name:{mission.name}</h2>
        <h4>Status:{mission.status}</h4>
        <h4>Priority:{mission.priority}</h4>
        <h4>Description:{mission.description}</h4>
        <button className='deleteB'>Delete</button>
        <button className='progressB'>Progress</button>
    </div>
  )
}

export default MilMission