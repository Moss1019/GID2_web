import { Card, CardContent, CardHeader } from "@material-ui/core";
import { User } from "../common/User";

export interface UserDisplayProps {
  users: User[];
}

function UserDisplay({users}: UserDisplayProps) {
  const userCards = users.map((u: User, i: number) => {

    return (
      <Card key={i} className="m-3">
        <CardContent>
          {u.userName} 
        </CardContent>
      </Card>
    );
  })

  return (
    <section className="pr-2 pl-2">
      {userCards}
    </section>
  );
}

export default UserDisplay;
