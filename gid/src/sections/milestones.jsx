import { Fragment } from "react";


function Milestones(props) {
    const milestones = props.selectedList == null ? 
    (
        <Fragment>
            no item selected
        </Fragment>
    ) : 
    props.selectedList.milestones.map((m, i) => {
        return (
            <Fragment key={i}>
                <div className="list-item" onClick={() => props.onMilestoneSelect(m)}>
                    {m.description}
                </div>
            </Fragment>
        );
    });
    return (
        <section>
            {milestones}
        </section>
    );
}

export default Milestones;
