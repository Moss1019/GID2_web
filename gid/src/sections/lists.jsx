import { Fragment } from "react";
import ListItem from "./listitem";

function Lists(props) {
    const listItems = props.lists.map((l, i) => {
        return (
            <Fragment key={i}>
                <ListItem
                    listItem={l}
                    onListSelect={props.onListSelect}
                />
            </Fragment>
        );
    });
    return (
        <section>
            {listItems}
        </section>
    );
} 

export default Lists;