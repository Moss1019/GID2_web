import { Item } from '../common/Item';
import AddIcon from '@material-ui/icons/Add';
import ItemEdit from '../containers/itemedit';
import { Milestone } from '../common/Milestone';
import ItemDisplay from '../containers/itemdisplay';
import Confirmation from '../containers/confirmation';
import MilestoneEdit from '../containers/milestoneedit';
import { Button, Grid, Typography } from '@material-ui/core';
import MilestoneDisplay from '../containers/milestonedisplay';
import { useState, useEffect, Fragment, useMemo } from 'react';
import { emptyItem, emptyMilestone } from '../common/defaults';
import { deleteMilestone, postMilestone, putMilestone } from '../http/milestone';
import { deleteItem, getAllItems, postItem, putItem } from '../http/item';

function ListsBody() {
  const [items, setItems] = useState<Item[]>([]);

  const [currentItem, setCurrentItem] = useState<Item>(emptyItem);
  const [isAddingItem, setIsAddingItem] = useState<boolean>(false);
  const [isEditingItem, setIsEditingItem] = useState<boolean>(false);
  const [isDeletingItem, setIsDeletingItem] = useState<boolean>(false);

  const [currentMilestone, setCurrentMilestone] = useState<Milestone>(emptyMilestone);
  const [isAddingMilestone, setIsAddingMilestone] = useState<boolean>(false);
  const [isEditingMilestone, setIsEditingMilestone] = useState<boolean>(false);
  const [isDeletingMilestone, setIsDeletingMilestone] = useState<boolean>(false);

  const sortedItems = useMemo(() => {
    return items.sort((i1: Item, i2: Item) => i1.itemId > i2.itemId ? 1 : -1);
  }, [items, currentItem]);

  const sortedMilestones = useMemo(() => {
    if(currentItem.itemId === '') {
      return [];
    }
    return currentItem.milestones.sort((m1: Milestone, m2: Milestone) => m1.milestoneId > m2.milestoneId ? 1 : -1);
  }, [currentItem]);

  useEffect(() => {
    getAllItems((data) => setItems(data), console.error);
  }, []);

  const onItemAddClick = () => {
    setCurrentItem(emptyItem);
    setIsAddingItem(true);
  }

  const onItemEditClick = (item: any) => {
    setCurrentItem(item);
    setIsEditingItem(true);
  }

  const onItemDeleteClick = (item: any) => {
    setCurrentItem(item);
    setIsDeletingItem(true);
  }

  const saveItem = (item: Item) => {
    if(isAddingItem) {
      postItem(item, (res) => setItems([...items, res]), console.error);
    } else if (isEditingItem) {
      putItem(item, () => setItems([...items.filter(i => i.itemId !== item.itemId), item]), console.error)
    }
    setCurrentItem(emptyItem);
    closeDialogs();
  }

  const removeItem = () => {
    deleteItem(currentItem.itemId, (res) => {
      if(res) {
        setItems(items.filter(i => i.itemId !== currentItem.itemId));
      }
    }, console.error);
    closeDialogs();
  }

  const onMilestoneEditClick = (milestone: any) => {
    setCurrentMilestone(milestone);
    setIsEditingMilestone(true);
  }

  const onMilestoneDeleteClick = (milestone: any) => {
    setCurrentMilestone(milestone);
    setIsDeletingMilestone(true);
  }

  const onMilestoneAddClick = () => {
    setCurrentMilestone({
      ...emptyMilestone,
      itemId: currentItem.itemId
    });
    setIsAddingMilestone(true);
  }

  const saveMilestone = (milestone: Milestone) => {
    if(isAddingMilestone) {
      postMilestone(milestone, (res) => {
        const newCurrentItem = {
          ...currentItem,
          milestones: [...currentItem.milestones, res]
        }
        setCurrentItem(newCurrentItem);
        setItems([
          ...items.filter(i => i.itemId !== currentItem.itemId),
          newCurrentItem
        ]);
      }, console.error);
    } else if (isEditingMilestone) {
      putMilestone(milestone, () => {
        const newCurrentItem = {
          ...currentItem,
          milestones: [...currentItem.milestones.filter(m => m.milestoneId !== currentMilestone.milestoneId), milestone]
        }
        setCurrentItem(newCurrentItem);
        setItems([
          ...items.filter(i => i.itemId !== currentItem.itemId),
          newCurrentItem
        ]);
      }, console.error);
    }
    closeDialogs();
  }

  const removeMilestone = () => {
    deleteMilestone(currentMilestone.milestoneId, (res) => {
      if(res) {
        const newCurrentItem = {
          ...currentItem,
          milestones: [...currentItem.milestones.filter(m => m.milestoneId !== currentMilestone.milestoneId)]
        }
        setCurrentItem(newCurrentItem);
        setItems([
          ...items.filter(i => i.itemId !== currentItem.itemId),
          newCurrentItem
        ]);
      }
    }, console.error);
    closeDialogs();
  }

  const closeDialogs = () => {
    setIsAddingItem(false);
    setIsEditingItem(false);
    setIsDeletingItem(false);
    setIsAddingMilestone(false);
    setIsEditingMilestone(false);
    setIsDeletingMilestone(false);
  }

  return (
    <section className="app-body container-fluid">
      <Grid container>
        <Grid item xs={6} className="prd-2">
          <Typography className="justify-center align-center">List items</Typography>
          <Button onClick={onItemAddClick}>
            <AddIcon />
          </Button>
          <ItemDisplay
            items={sortedItems}
            onItemClick={setCurrentItem}
            onEdit={onItemEditClick}
            onDelete={onItemDeleteClick}
          />
        </Grid>

        <Grid item xs={6} className="pld-2">
          {currentItem.itemId !== '' &&
          <Fragment>
            <Typography className="justify-center">Milestones for {currentItem.title}</Typography>
            <Button onClick={onMilestoneAddClick}>
              <AddIcon />
            </Button>
            <MilestoneDisplay
              milestones={sortedMilestones}
              onMilestoneClick={setCurrentMilestone}
              onEdit={onMilestoneEditClick}
              onDelete={onMilestoneDeleteClick}
            />
          </Fragment>}

          {currentItem.itemId === '' &&
          <Typography className="justify-center">
            No item selected
          </Typography>}
        </Grid>
      </Grid>

      <ItemEdit
        item={currentItem}
        isOpen={isEditingItem || isAddingItem}
        onComplete={console.log}
        onSave={saveItem}
        onClose={closeDialogs}
      />
      <Confirmation
        message="Are you sure?"
        isOpen={isDeletingItem}
        onAccept={() => removeItem()}
        onClose={closeDialogs}
      />

      <MilestoneEdit
        milestone={currentMilestone}
        isOpen={isEditingMilestone || isAddingMilestone}
        onComplete={console.log}
        onSave={saveMilestone}
        onClose={closeDialogs}
      />
      <Confirmation
        message="Are you sure?"
        isOpen={isDeletingMilestone}
        onAccept={() => removeMilestone()}
        onClose={closeDialogs}
      />
    </section>
  );
}

export default ListsBody;
