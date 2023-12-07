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

  export interface IlistBooks {
    id: string,
  };

  export type TbooksInitState = { // типы для обработки запроса статусов к серверу
    dataBooks: {
        items: IlistBooks[],
    }
    error: string | null;
    status: "loading" | "idle";
    paramsFetch: IparamsFetch;
  };

  export interface IparamsFetch {
    page: number,
    subject: string,
  }

