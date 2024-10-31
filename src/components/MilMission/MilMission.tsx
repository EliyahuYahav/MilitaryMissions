import React from 'react'
import { Mission } from '../../types/type'

interface MissionProps {
    mission:Mission
    deleteMission: (id: string) => void;
    updateMission: (id: string) => void;
}

const MilMission:React.FC<MissionProps> = ({mission, deleteMission, updateMission}) => {

    const handelProgress = ()=>{
        if (mission.status !== "Completed") {
            return <button onClick={()=> updateMission(mission._id!)} className='progressB'>Progress</button>
        }
    }

  return (
    <div className='MilMission'>
        <div>
            <h2>Name:{mission.name}</h2>
            <h4>Status:{mission.status}</h4>
            <h4>Priority:{mission.priority}</h4>
            <h4>Description:{mission.description}</h4>
        </div>
        <div className='buttons'>
            <button onClick={()=>deleteMission(mission._id!)} className='deleteB'>Delete</button>
            {handelProgress()}
        </div>
    </div>
  )
}

export default MilMission