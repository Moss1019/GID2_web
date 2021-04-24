import { Fragment, useState } from "react";
import { Milestone } from "../common/Milestone";
import CheckIcon from "@material-ui/icons/Check";
import { Button, Grid, Modal, Paper, TextField, Typography } from "@material-ui/core";

export interface MilestoneEditProp {
  milestone: Milestone;
  isOpen: boolean;
  onSave: (milestone: Milestone) => void;
  onComplete: (milestone: Milestone) => void;
  onClose: (isOpen: boolean) => void;
}

function MilestoneEdit({milestone, isOpen, onSave, onComplete, onClose}: MilestoneEditProp) {
  const [description, setDescription] = useState<string>(milestone.description);
  const [errors, setErrors] = useState<any>({});

  const onSaveClick = () => {
    if(description.length === 0) {
      setErrors({
        ...errors,
        description: 'Please enter a description'
      });
      return;
    }
    const newMilestone = {
      ...milestone,
      description: description
    }
    onSave(newMilestone);
  }

  const onCompleteClick = () => {
    onComplete(milestone);
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
            label="description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
          />
          {errors.description !== undefined &&
          <Fragment>
            <span>{errors.description}</span>
          </Fragment>}

          {milestone.milestoneId !== '' && !milestone.isCompleted &&
          <Fragment>
            <Grid container>
              <Grid item xs={8} className="align-center">
                <Typography>Complete</Typography>
              </Grid>
              <Grid item xs={4}>
                <Button onClick={() => onCompleteClick()}>
                  <CheckIcon />
                </Button>
              </Grid>
            </Grid>
          </Fragment>}
          
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

export default MilestoneEdit;
