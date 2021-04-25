import { Button, TextField } from "@material-ui/core";
import { useState } from "react";

function LinkCollabKey() {
  const [code, setCode] = useState<string>('');
  
  const linkCollaborator = () => {

  }

  return (
    <section>
      <div>
        <TextField
          label="code"
          value={code}
          onChange={(ev) => setCode(ev.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => linkCollaborator()}>
          link
        </Button>
      </div>
    </section>
  );
}

export default LinkCollabKey;

