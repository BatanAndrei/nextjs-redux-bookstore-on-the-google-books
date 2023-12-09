import { ReactNode } from "react";

export interface IdataSlider {
    id: number,
    image: string,
}

export type TchildrenProps = {
    children: ReactNode;
}

export type TfetchTicketsError = {  // тип описывает структуру объекта ошибки запроса к серверу
    message: string;
    };

export interface IdataBooks {
    volumeInfo: {
        imageLinks: {
            thumbnail: string,
        },
        authors: string[],
        title: string,
        averageRating: number,
        ratingsCount: number,
        description: string,
    },
    saleInfo: {
        retailPrice: {
            amount: number,
        }
    }
};

export type TbooksInitState = { // типы для обработки запроса статусов к серверу
    dataBooks: {
        items: IdataBooks[],
    }
    error: string | null;
    status: "loading" | "idle";
    paramsFetch: IparamsFetch;
};

export interface IparamsFetch {
    page: number,
    subject: string,
}

export enum listCategories {
    architecture = 'Architecture',
    artFashion = 'Art & Fashion',
    biography = 'Biography',
    business = 'Business',
    braftsHobbies = 'Crafts & Hobbies',
    drama = 'Drama',
    fiction = 'Fiction',
    foodDrink = 'Food & Drink',
    healthWellbeing = 'Health & Wellbeing',
    historyPolitics = 'History & Politics',
    humor = 'Humor',
    poetry = 'Poetry',
    psychology = 'Psychology',
    science = 'Science',
    technology = 'Technology',
    travelMaps = 'Travel & Maps',
}


