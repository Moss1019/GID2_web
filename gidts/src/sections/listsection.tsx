import React, { Fragment } from 'react';
import { List } from '../common/liststypes';

export interface ListSectionProps {
    lists: List[],
    onItemClick: (l: List) => void
};

function ListSection({
    lists,
    onItemClick
}: ListSectionProps) {
    const listCards = lists.map((l: List, i: number) => {
        return (
            <div key={i}  onClick={() => onItemClick(l)}>
                {l.title} milestones: {l.milestones.length}
            </div>
        );
    });
    return (
        <Fragment>
            {listCards}
        </Fragment>
    );
}

export default ListSection;
