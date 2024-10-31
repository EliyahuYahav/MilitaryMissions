import React, { useEffect, useState } from 'react'
import { Mission } from '../../types/type';
import { DeleteMission, GetMissions, PostMission, UpdateMission } from '../../data';
import FormMissions from '../FormMissions/FormMissions';
import MilMission from '../MilMission/MilMission';

const MilMissionsLIst:React.FC = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [newMission, setnewMission] = useState<Mission | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await GetMissions();
        setMissions(data);
      } catch (error) {
        setError("failed to load Mission");
      }
    };
    loadImages();
  }, []);

  const handleAddMission = async (mission: Mission) => {
    try {
      await PostMission(mission)
      setMissions((prev) => [...prev, mission]);
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  const deleteMission = async (id: string) => {
    try {
      await DeleteMission(id);
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  const updateMission = async (id: string) => {
    try {
      await UpdateMission(id);
    } catch (error) {
      setError("Mission nos found! ");
    }
  };

  return (
    <div className="MilMissionsLIst">
      <header>
        <h1>Military Operations Dashboard</h1>
        <main className="main">
          <FormMissions addMission={handleAddMission}/>
          {missions.map((mis)=>{
              return <MilMission mission={mis} key={mis.id!} deleteMission={deleteMission} updateMission={updateMission}/>
          })}
        </main>
      </header>
    </div>
  );
}

export default MilMissionsLIst


// return(
//   <div className="GalleryApp">
//     <header>
//       <h1>My Gallery App</h1>
//     </header>
//     <main className="main">
//       {!error && <GalleryGrid images = {images} handleLike={handleLike} handleImageClick={handleImageClick}/>}
//       {newImage && <ImageDetails image={newImage} onClose={()=>setnewImage(null)} handleLike={handleLike}/>}
//       <AddNewImage handleAddImage={handleAddImage}/>
//     </main>
// </div>
// );

