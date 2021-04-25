import { useEffect, useState } from "react";
import { User } from "../common/User";
import UserDisplay from "../containers/userdisplay";
import { getCollaboratorsOfUser } from "../http/collaborator";

export interface CollaboratorListProps {
  userId: string;
}

function CollaboratorList({userId}: CollaboratorListProps) {
  const [collaborators, setCollaborators] = useState<User[]>([]);

  useEffect(() => {
    getCollaboratorsOfUser(userId, (res) => {
      setCollaborators(res);
    }, console.error);
  }, [userId]);

  return (
    <section>
      {collaborators.length === 0 &&
      <span>no collaborators...</span>}

      {collaborators.length > 0 &&
      <UserDisplay
        users={collaborators}
      />}
    </section>
  );
}

export default CollaboratorList;
