import { Card, Typography, CardContent, Grid, Button } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { OndemandVideoTwoTone } from '@material-ui/icons';
import { Milestone } from '../common/Milestone';
import { formatDateSimple } from '../util/dateUtil';

export interface MilestoneDisplayProps {
  milestones: Milestone[];
  onMilestoneClick: (milestone: Milestone) => void;
  onDelete: (milestone: Milestone) => void;
  onEdit: (milestone: Milestone) => void;
}

function MilestoneDisplay({milestones, onMilestoneClick, onEdit, onDelete}: MilestoneDisplayProps) {
  const cards = milestones.map((m: Milestone) => 
  <Card key={m.milestoneId} className="mt-2 mb-2">
    <CardContent>
      <Grid container>
        <Grid item md={4} xs={6} className="pointer" onClick={() => onMilestoneClick(m)}>
          <Typography variant="h5">{m.description}</Typography>
          <Typography variant="h6">{formatDateSimple(m.dateCreated)}</Typography>
        </Grid>

        <Grid item md={4} xs={6} className="pointer" onClick={() => onMilestoneClick(m)}>
          <Typography>{m.isCompleted ? 'Completed' : 'Not completed'}</Typography>
        </Grid>

        <Grid item md={4} xs={12}>
          <div className="flex-right align-center">
            <Button onClick={() => onEdit(m)}>
              <EditIcon />
            </Button>
          </div>
          <div className="flex-right align-center">
            <Button onClick={() => onDelete(m)}>
              <DeleteForever />
            </Button>
          </div>
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
