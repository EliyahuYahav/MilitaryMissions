import React, { useState } from 'react'
import { Mission } from '../../types/type';

interface TodoFormProps {
  addMission: (mission: Mission) => void;
}

const FormMissions:React.FC<TodoFormProps> = ({addMission}) => {

  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newMission: Mission = {
      name,
      status,
      priority,
      description
    }
    if (newMission) {
      addMission(newMission);
      setName("");
      setStatus("");
      setPriority("");
      setDescription("");
    }
  };

  return (
      <form className='FormMissions' onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
      <select onChange={(e) => setStatus(e.target.value)} name="status" className='selectStatus'>
        <option value="Pending"></option>
        <option value="In Progress"></option>
        <option value="Completed"></option>
      </select>
      <select onChange={(e) => setPriority(e.target.value)} name="priority" className='selectPriority'>
        <option value="High"></option>
        <option value="Normal"></option>
        <option value="Low"></option>
      </select>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="description"/>
      <button type="submit">Add</button>
      </form>
  )
}

export default FormMissions