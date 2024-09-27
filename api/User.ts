import { IUserPayload } from "@/interfaces/User";
import axios from "axios";

export const getUserData = async (): Promise<IUserPayload> => {
    try {
        const result = await axios.get<IUserPayload>(`${process.env.NEXT_PUBLIC_RANDOM_USER_API_URL}/api`);
        return result.data;
    } catch {
        throw new Error('Error fetching data');
    }
};
