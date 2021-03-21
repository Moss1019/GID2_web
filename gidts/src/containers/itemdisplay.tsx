import React from 'react';
import { Card, CardContent, Grid, Button, Typography } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';

export interface ItemDisplayProps {
  items: any[],
  onItemClick: (item: any) => void
  onEditClick: (item: any) => void
  onDeleteClick: (item: any) => void
}

function ItemDisplay({items, onItemClick, onEditClick, onDeleteClick}: ItemDisplayProps) {
  const cards = items.map((i: any) => {
    const completed = i.milestones.filter((m: any) => !m.isCompleted);
    const numCompleted = completed.length;
    const isCompleted = i.milestones.length === 0 ? i.isCompleted : numCompleted === i.milestones.length;
    const percentage = isCompleted ? 100 : numCompleted / i.milestones.length * 100;
    return (
      <Card key={i.itemId} className="mt-2 mb-2">
        <CardContent>
          <Grid container>
            <Grid item md={4} xs={6} className="pointer" onClick={() => onItemClick(i)}>
              <Typography variant="h5">{i.title}</Typography>
              <Typography variant="h6">2020-01-01</Typography>
            </Grid>

            <Grid item md={4} xs={6} className="pointer" onClick={() => onItemClick(i)}>
              <Typography>{isCompleted ? 'Completed' : 'Not completed'}</Typography>
              <Typography>Milestones: {i.milestones.length}</Typography>
              <Typography>Completed: {[percentage]}%</Typography>
            </Grid>

            <Grid item md={4} xs={12}>
              <div className="flex-right align-center">
                <Button onClick={() => onEditClick(i)}>
                  <Edit />
                </Button>
              </div>
              <div className="flex-right align-center">
                <Button onClick={() => onDeleteClick(i)}>
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