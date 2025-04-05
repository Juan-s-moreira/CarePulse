"use server"


import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, DATABASE_ID, databases, ENDPOINT, PATIENT_COLLECTION_ID } from "../appwrite.config";
import { parseStringify } from "../utils";
import NewAppointment from "@/app/patients/[userId]/new-appointment/page";

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