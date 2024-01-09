'use client';
import React from 'react';
import Image from 'next/image';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

import MinusIcon from 'src/assets/images/minusIcon.svg';
import PlusIcon from 'src/assets/images/plusIcon.svg';

interface Props {
  summary: string;
  details: string;
  key: number;
}

const AccordionComponent = ({ summary, details, key }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} key={key}>
      <AccordionSummary
        aria-controls="panel1bh-content"
        id="panel1bh-header"
        expandIcon={
          <div className="expand-image">
            <Image src={expanded ? MinusIcon : PlusIcon} alt="plusIcon" />
          </div>
        }
      >
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
