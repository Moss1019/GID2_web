import { Button, Modal, Paper } from '@material-ui/core';

export interface ConfirmationProps {
  message: string;
  isOpen: boolean;
  onAccept: () => void;
  onClose: (isOpen: boolean) => void
}

function Confirmation({message, isOpen, onAccept, onClose}: ConfirmationProps) {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex-midpoint"
    >
      <Paper>
        <div className="m-4">
          {message}
          <Button onClick={() => onAccept()}>
            yes
          </Button>
          <Button onClick={() => onClose(false)}>
            no
          </Button>
        </div>
      </Paper>
    </Modal>
  );
}

export default Confirmation;
