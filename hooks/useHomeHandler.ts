import { useInfiniteQuery } from 'react-query';
import { getFunFactsData, getUserData } from '@/api';
import { IFunFactCard, IFunFactPayload, IUserPayload } from '@/interfaces';


const fetchPageData = async ({ pageParam = 1 }) => {
    const funFacts: IFunFactPayload  = await getFunFactsData(pageParam);
    const users: IUserPayload[] = await Promise.all(funFacts.data.map(() => getUserData()));

    const combinedData: IFunFactCard[] = funFacts.data.map((funFact, index) => ({
        id: users[index].results[0].login.uuid,
        image: users[index].results[0].picture.thumbnail,
        fullname: `${users[index].results[0].name.first} ${users[index].results[0].name.last}`,
        funFactDescription: funFact.fact,
    }));

    return {
        data: combinedData,
        nextPage: funFacts.current_page < funFacts.last_page ? pageParam + 1 : undefined,
    };
};

export const useInfiniteScrollCardsData = () => {
    /* Allows to manage faster the infinite scroll */
    return useInfiniteQuery(['infiniteData'], fetchPageData, {
        getNextPageParam: (lastPage) => lastPage.nextPage,
    });
};
