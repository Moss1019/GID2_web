import EditIcon from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core';
import { formatDateSimple } from '../util/dateUtil';
import { Item } from '../common/Item';
import { Milestone } from '../common/Milestone';

export interface ItemDisplayProps {
  items: Item[];
  onItemClick: (item: Item) => void;
  onEdit: (item: Item) => void;
  onDelete: (item: Item) => void;
}

function ItemDisplay({items, onItemClick, onEdit, onDelete}: ItemDisplayProps) {
  const cards = items.map((i: Item) => {
    const hasMilestones = i.milestones.length > 0;
    const completed = i.milestones.filter((m: Milestone) => m.isCompleted);
    const isCompleted = hasMilestones ?
      completed.length === i.milestones.length :
      i.isCompleted;
    const percentage = isCompleted ? 100 :
      hasMilestones ? completed.length / i.milestones.length * 1.0 : 0;
    return (
      <Card key={i.itemId} className="mt-2 mb-2">
        <CardContent>
          <Grid container>
            <Grid item md={4} xs={6} className="pointer" onClick={() => onItemClick(i)}>
              <Typography variant="h5">{i.title}</Typography>
              <Typography variant="h6">{formatDateSimple(i.dateCreated)}</Typography>
            </Grid>

            <Grid item md={4} xs={6} className="pointer" onClick={() => onItemClick(i)}>
              <Typography>{isCompleted ? 'Completed' : 'Not completed'}</Typography>
              {hasMilestones && <Typography>Milestones: {i.milestones.length}</Typography>}
              <Typography>Completed: {[percentage]}%</Typography>
            </Grid>

            <Grid item md={4} xs={12}>
              <div className="flex-right align-center">
                <Button onClick={() => onEdit(i)}>
                  <EditIcon />
                </Button>
              </div>
              <div className="flex-right align-center">
                <Button onClick={() => onDelete(i)}>
                  <DeleteForever />
                </Button>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )}
  );

  return (
    <section>
      {cards}
    </section>
  );
}

export default ItemDisplay;