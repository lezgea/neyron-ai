'use client';
import React from 'react';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

// import PlusIcon from '../../../public/plusIcon.svg';

interface Props {
  summary: string;
  details: string;
}

const AccordionComponent = ({ summary, details }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={''} aria-controls="panel1bh-content" id="panel1bh-header">
        {summary}
      </AccordionSummary>
      <AccordionDetails>{details}</AccordionDetails>
    </Accordion>
  );
};

export default AccordionComponent;
