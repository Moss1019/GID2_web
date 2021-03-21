import React from 'react';
import { Card, Typography, CardContent, Grid } from '@material-ui/core';

export interface MilestoneDisplayProps {
  milestones: any[],
  onMilestoneClick: (milestone: any) => void
}

function MilestoneDisplay({milestones, onMilestoneClick}: MilestoneDisplayProps) {
  const cards = milestones.map((m: any) => 
    <Card key={m.milestoneId} className="pointer mt-2 mb-2">
      <CardContent>
        <Grid container>
          <Grid item xs={6}  onClick={() => onMilestoneClick(m)}>
            {m.description}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  const content = cards.length > 0 ? 
    cards : 
    <Typography className="justify-center">No milestones...</Typography>
  
  return (
    <section>
      {content}
    </section>
  );
}

export default MilestoneDisplay;
