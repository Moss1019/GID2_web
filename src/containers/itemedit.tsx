import { Item } from '../common/Item';
import Check from '@material-ui/icons/Check';
import { Fragment, useState, useEffect } from 'react';
import { Modal, Paper, TextField, Typography, Button, Grid } from '@material-ui/core';

export interface ItemEditProps {
  item: Item;
  isOpen: boolean;
  onSave: (item: Item) => void;
  onClose: (isOpen: boolean) => void;
}

function ItemEdit({item, isOpen, onSave, onClose}: ItemEditProps) {
  const [title, setTitle] = useState<string>('');

  const [errors, setErrors] = useState<any>({}); 

  useEffect(() => {
    setTitle(item?.title || '');
  }, [item]);

  const onCompleteClick = () => {
    
  };

  const onSaveClick = () => {
    let hasError = false;
    const e: any = {};
    if(title.length === 0) {
      e.title = 'please enter a title';
      hasError = true;
    }
    if(hasError) {
      setErrors(e);
      return;
    }
    const item: Item = {
      itemId: '',
      title: title,
    };
    onSave(item);
    onClose(false);
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex-midpoint"
    >
      <Paper>
        <div className="m-4">
          <TextField
            label="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
          {errors.title !== undefined &&
          <Fragment>
            <span>{errors.title}</span>
          </Fragment>}

          {/* {item !== undefined && item.milestones.length === 0 && !item.isCompleted &&
          <Fragment>
            <Grid container>
              <Grid item xs={8} className="align-center">
                <Typography>Complete</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={() => onCompleteClick()}>
                  <Check />
                </Button>
              </Grid>
            </Grid>
          </Fragment>} */}
          
          <div className="flex-right">
            <Button onClick={() => onSaveClick()}>
              save
            </Button>

            <Button onClick={() => onClose(false)}>
              close
            </Button>
          </div>
          
        </div>
      </Paper>
    </Modal>
  );
}

export default ItemEdit;
