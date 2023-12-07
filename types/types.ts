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
      },
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

