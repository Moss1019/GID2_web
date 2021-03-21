import React, { useState, Fragment, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ItemDisplay from '../containers/itemdisplay';
import MilestoneDisplay from '../containers/milestonedisplay';
import { getItems } from '../util/item';
import ItemEdit from '../containers/itemedit';
import Confirmation from '../containers/confirmation';

function ListsBody() {
  const [items, setItems] = useState<any[]>([]);

  const [currentItem, setCurrentItem] = useState<any | undefined>(undefined);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    getItems().then(data => {
      setItems(data);
    });
  }, []);

  const onEditClick = (item: any) => {
    setCurrentItem(item);
    setIsEditing(true);
  }

  const onDeleteClick = (item: any) => {
    setIsDeleting(true);
  }

  return (
    <section className="app-body container-fluid">
      <Grid container>
        <Grid item xs={6} className="prd-2">
          <Typography className="justify-center">List items</Typography>
          <ItemDisplay
            items={items}
            onItemClick={setCurrentItem}
            onEditClick={onEditClick}
            onDeleteClick={onDeleteClick}
          />
        </Grid>

        <Grid item xs={6} className="pld-2">
          {currentItem !== undefined &&
          <Fragment>
            <Typography className="justify-center">Milestones for {currentItem.title}</Typography>
            <MilestoneDisplay
              milestones={currentItem.milestones}
              onMilestoneClick={(m) => console.log(m)}
            />
          </Fragment>}

          {currentItem === undefined &&
          <Typography className="justify-center">
            No item selected
          </Typography>}
        </Grid>
      </Grid>
      <ItemEdit
        item={currentItem}
        isOpen={isEditing}
        onCloseClick={() => setIsEditing(false)}
      />
      <Confirmation
        isOpen={isDeleting}
        onCloseClick={() => setIsDeleting(false)}
      />
    </section>
  );
}

export default ListsBody;
