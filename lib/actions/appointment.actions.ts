"use server"


import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";


export const createAppointment = async (appointment: CreateAppointmentParams) => {
    try {
        const NewAppointment = await databases.createDocument(
                DATABASE_ID!,
                APPOINTMENT_COLLECTION_ID!,
                ID.unique(),
                appointment
              
            )
    
            return parseStringify(NewAppointment)
        } catch (error) {
            console.log(error);
        }
      
}

export const getAppointment = async (appointmentId: sttring) => {
    try {
        const appointment = await databases.getDocument(
            DATABASE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            appointmentId,
        )

        return parseStringify(appointment)
    } catch (error) {
        console.log(error);
        
    }
}