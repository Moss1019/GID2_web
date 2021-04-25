import { Button, TextField } from "@material-ui/core";
import { useState } from "react";


function GenerateCollabKey() {
  const [code, setCode] = useState<string>('');

  const generateCode = () => {
    setCode(`${Math.random()}`);
  }

  return (
    <section>
      <div>
        <TextField
          label="code"
          value={code}
          disabled={true}
        />
      </div>
      <div>
        <Button onClick={() => generateCode()}>
          generate
        </Button>
      </div>
    </section>
  );
}

export default GenerateCollabKey;
