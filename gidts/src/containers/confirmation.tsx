import React from 'react';
import { Modal, Paper } from '@material-ui/core';

export interface ConfirmationProps {
  isOpen: boolean;
  onCloseClick: (isOpen: boolean) => void
}

function Confirmation({isOpen, onCloseClick}: ConfirmationProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onCloseClick}
      className="flex-midpoint"
    >
      <Paper>
        <div className="m-4">
          HELLO
        </div>
      </Paper>
    </Modal>
  );
}

export default Confirmation;
