import React, { Fragment, useState, useEffect } from 'react';
import { Modal, Paper, TextField, Typography, Button, Grid } from '@material-ui/core';
import Check from '@material-ui/icons/Check';

export interface ItemEditProps {
  item: any,
  isOpen: boolean;
  onCloseClick: (isOpen: boolean) => void,
}

function ItemEdit({item, isOpen, onCloseClick}: ItemEditProps) {
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    setTitle(item?.title);
  }, [item]);

  const onCompleteClick = () => {
    
  };

  const onSaveClick = () => {
    onCloseClick(false);
  }

  return (
    <Modal
      open={isOpen}
      onClose={onCloseClick}
      className="flex-midpoint"
    >
      <Paper>
        <div className="m-4">
          <TextField
            label="title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />

          {item !== undefined && item.milestones.length === 0 && !item.isCompleted &&
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
          </Fragment>}
          
          <div className="flex-right">
            <Button onClick={() => onSaveClick()}>
              save
            </Button>

            <Button onClick={() => onCloseClick(false)}>
              close
            </Button>
          </div>
          
        </div>
      </Paper>
    </Modal>
  );
}

export default ItemEdit;
