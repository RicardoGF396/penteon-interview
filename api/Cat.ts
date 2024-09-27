import axios from "axios";
import { IFunFactPayload } from '@/interfaces/Cat';

export const getFunFactsData = async (page: number): Promise<IFunFactPayload> => {
    try {
        const result = await axios.get<IFunFactPayload>(`${process.env.NEXT_PUBLIC_CAT_FACTS_API_URL}/facts?page=${page}`);
        return result.data;
    } catch {
        throw new Error('Error fetching cat data');
    }
};
