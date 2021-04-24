import { Item } from '../common/Item';
import { getAllItems, postItem } from '../http/item';
import AddIcon from '@material-ui/icons/Add';
import ItemEdit from '../containers/itemedit';
// import { Milestone } from '../common/Milestone';
import ItemDisplay from '../containers/itemdisplay';
import Confirmation from '../containers/confirmation';
import { useState, Fragment, useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import MilestoneDisplay from '../containers/milestonedisplay';
import { emptyItem } from '../common/defaults';

function ListsBody() {
  const [items, setItems] = useState<Item[]>([]);

  const [currentItem, setCurrentItem] = useState<Item>(emptyItem);
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
  const [isEditingItem, setIsEditingItem] = useState<boolean>(false);
  const [isDeletingItem, setIsDeletingItem] = useState<boolean>(false);

  // const [currentMilestone, setCurrentMilestone] = useState<Milestone>(emptyMilestone);
  const [isAddingMilestone, setIsAddingMilestone] = useState<boolean>(false);
  const [isEditingMilestone, setIsEditingMilestone] = useState<boolean>(false);
  const [isDeletingMilestone, setIsDeletingMilestone] = useState<boolean>(false);

  useEffect(() => {
    getAllItems((data) => setItems(data), console.log);
  }, []);

  const onItemAddClick = () => {
    setCurrentItem(emptyItem);
    setIsAddingItem(true);
  }

  const onItemEditClick = (item: any) => {
    // setCurrentItem(item);
    setIsEditingItem(true);
  }

  const onItemDeleteClick = (item: any) => {
    setIsDeletingItem(true);
  }

  const closeDialogs = () => {
    setIsAddingItem(false);
    setIsEditingItem(false);
    setIsDeletingItem(false);
    setIsAddingMilestone(false);
    setIsEditingMilestone(false);
    setIsDeletingMilestone(false);
  }

  const saveItem = (item: Item) => {
    postItem(item, console.log, console.error);
  }

  const onMilestoneEditClick = (milestone: any) => {
    // setCurrentMilestone(milestone);
    setIsEditingMilestone(true);
  }

  const onMilestoneDeleteClick = (milestone: any) => {
    setIsDeletingMilestone(true);
  }

  const onMilestoneAddClick = () => {
    // setCurrentMilestone(emptyMilestone);
    setIsAddingMilestone(true);
  }

  return (
    <section className="app-body container-fluid">
      <Grid container>
        <Grid item xs={6} className="prd-2">
          <Typography className="justify-center align-center">List items </Typography>
          <Button onClick={onItemAddClick}>
            <AddIcon />
          </Button>
          <ItemDisplay
            items={items}
            // onItemClick={setCurrentItem}
            onItemClick={console.log}
            onEditClick={onItemEditClick}
            onDeleteClick={onItemDeleteClick}
          />
        </Grid>

        <Grid item xs={6} className="pld-2">
          {/* {currentItem !== undefined &&
          <Fragment>
            <Typography className="justify-center">Milestones for {currentItem.title}</Typography>
            <Button onClick={onMilestoneAddClick}></Button>
            <MilestoneDisplay
              milestones={currentItem.milestones}
              onMilestoneClick={setCurrentMilestone}
            />
          </Fragment>} */}

          {currentItem === undefined &&
          <Typography className="justify-center">
            No item selected
          </Typography>}
        </Grid>
      </Grid>

      <ItemEdit
        item={currentItem}
        isOpen={isEditingItem || isAddingItem}
        onSave={saveItem}
        onClose={closeDialogs}
      />
      <Confirmation
        isOpen={isDeletingItem}
        onCloseClick={closeDialogs}
      />

      {/* <MilestoneEdit
        milestone={currentMilestone}
        isOpen={isEditingMilestone || isAddingMilestone}
        onSave={saveMilestone}
        onClose={closeDialogs}
      />
      <Confirmation
        isOpen={isDeletingMilestone}
      /> */}
    </section>
  );
}

export default ListsBody;
