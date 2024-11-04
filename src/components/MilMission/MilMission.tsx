import React, { useEffect, useState } from 'react'
import { Mission } from '../../types/type'
import './MilMission.css'

interface MissionProps {
    mission:Mission
    deleteMission: (id: string) => void;
    updateMission: (id: string) => void;
}

const MilMission:React.FC<MissionProps> = ({mission, deleteMission, updateMission}) => {
    const [color, setColor] = useState<string>("")

    const handelProgress = ()=>{
        if (mission.status !== "Completed") {
            return <button onClick={()=> updateMission(mission._id!)} className='progressB'>Progress</button>
        }
    }

    const changColor = ()=>{
        if (mission.status === "Pending" ) {
            setColor("#910000")
        }else if(mission.status === "In Progress" ){
            setColor("#BE7D00")
        }else if(mission.status === "Completed" ){
            setColor("#009115")
        }
    }

    useEffect(() => {
        changColor()
    })

  return (
    <div className='MilMission' style={{backgroundColor: color}}>
        <div className='info'>
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