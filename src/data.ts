import axios, { AxiosResponse } from "axios";
import { Mission } from "./types/type";

const API_KEY = "9002179";


export const GetMissions = async (): Promise<Mission[]> => {
    try {
        const response:AxiosResponse = await axios.get(`https://reactexambackend.onrender.com/missions/${API_KEY}`);
        return response.data;
    } catch (error) {
        throw new Error("Get failed")
    }
}

export const PostMission = async (Mission:Mission): Promise<Mission> =>{
    try {
        const response:AxiosResponse = await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}`, Mission)
        return response.data;
    } catch (error) {
        throw new Error("Post failed")
    }
}

export const DeleteMission = async (id:string): Promise<void> =>{
    try {
        await axios.delete(`https://reactexambackend.onrender.com/missions/${API_KEY}/${id}`)
    } catch (error) {
        throw new Error("Delete failed")
    }
}

export const UpdateMission = async (id:string): Promise<void> =>{
    try {
        await axios.post(`https://reactexambackend.onrender.com/missions/${API_KEY}/progress/${id}`)
    } catch (error) {
        throw new Error("Post failed")
    }
}