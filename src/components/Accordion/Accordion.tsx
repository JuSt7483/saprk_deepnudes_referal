'use client';

import React, { useState } from 'react'
import SingleQuestion from './Question'
import { AbstractIntlMessages, useMessages, useTranslations } from 'next-intl';
import "./Accordion.scss"

interface AccordionProps {
  intlName: string;
  variant?: "instruction" | "faq" | "welcome"
}

export const Accordion = ({ intlName, variant = "faq" }: AccordionProps): JSX.Element => {
  const [expanded, setExpanded] = useState<string>()

  const t = useTranslations(`FAQ.${intlName}`);
  const messages = useMessages();
  const faqMessages = (messages.FAQ as AbstractIntlMessages)?.[intlName];
  const keys = Object.keys(faqMessages)

  if (!faqMessages || typeof faqMessages !== 'object') {
    return <section className='accordion'>No FAQ data available</section>;
  }

  return (
    <section className='accordion'>
      {keys.map((key) => (
        <SingleQuestion variant={variant} key={key} id={key} title={t.rich(`${key}.title`)} info={t.rich(`${key}.info`)} is_expanded={expanded == key} customClickEvent={() => { expanded === key ? setExpanded("") : setExpanded(key) }} />
      ))}
    </section>
  )
}