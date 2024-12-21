import {JSXElementConstructor, ReactElement, ReactNode} from "react";

export default interface QuestionProps {
    id: string;
    title: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNode;
    info: string | ReactElement<any, string | JSXElementConstructor<any>> | ReactNode;
}