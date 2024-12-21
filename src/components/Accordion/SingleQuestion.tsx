"use client";

import React, {ReactNode, useState} from 'react';
import Question from "@/components/Accordion/Question";

interface SingleQuestionProps {
    title: string;
    children: ReactNode;
}

const SingleQuestion = ({ title, children }: SingleQuestionProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    return (
        <Question is_expanded={isExpanded} variant={"faq"} customClickEvent={() => setIsExpanded((prev) => !prev)} id={"single"} title={title} info={children} />
    );
};

export default SingleQuestion;