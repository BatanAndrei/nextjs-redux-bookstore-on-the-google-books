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
