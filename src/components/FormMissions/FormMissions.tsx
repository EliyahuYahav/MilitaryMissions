import React, { useState } from 'react'

interface TodoFormProps {
  addMission: (title: string) => Promise<void>;
}

const FormMissions:React.FC<TodoFormProps> = ({addMission}) => {

  const [newMission, setNewMission] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!newMission.trim()) {
      return;
    }
    addMission(newMission);
    setNewMission("");
  };

  return (
      <form className='FormMissions' onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMission}
        onChange={(e) => setNewMission(e.target.value)}
        placeholder="Add new Todo"
      />
      <button type="submit">Add</button>
      </form>
  )
}

export default FormMissions