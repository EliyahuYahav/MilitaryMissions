import React, { useEffect, useState } from 'react'
import { Mission } from '../../types/type';
import { DeleteMission, GetMissions, PostMission, UpdateMission } from '../../data';
import FormMissions from '../FormMissions/FormMissions';
import MilMission from '../MilMission/MilMission';

const MilMissionsLIst:React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [error, setError] = useState<string | null>(null);

  const loadMission = async () => {
    try {
      const data = await GetMissions();
      setMissions(data);
    } catch (error) {
      setError("failed to load Mission");
    }
  };

  useEffect(() => {
    loadMission();
  }, []);

  const addMission = async (mission: Mission) => {
    try {
      const data:Mission = await PostMission(mission)
      setMissions((prev) => [...prev, data]);
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  const deleteMission = async (id: string) => {
    try {
      await DeleteMission(id);
      loadMission();
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  const updateMission = async (id: string) => {
    try {
      await UpdateMission(id);
      loadMission();
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  return (
    <div className="MilMissionsLIst">
      <header>
        <h1>Military Operations Dashboard</h1>
        <main className="main">
          <FormMissions addMission={addMission}/>
          <h2>Missions</h2>
          {missions.map((mis)=>{
              return <MilMission mission={mis} key={mis._id!} deleteMission={deleteMission} updateMission={updateMission}/>
          })}
        </main>
      </header>
    </div>
  );
}

export default MilMissionsLIst
