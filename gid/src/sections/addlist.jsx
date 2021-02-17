import { Component, Fragment } from "react";
import ActionText from "../controls/actiontext";


class AddList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            milestones: props.milestones || []
        }
    }

    onChange = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        });
    }

    buildMilestoneRows = () => {
        return this.state.milestones.map((m, i) => {
            return (
                <tr key={i}>
                    <td>{m.description}</td>
                </tr>
            );
        })
    }

    addMilestone = () => {
        const milestones = [...this.state.milestones];
        milestones.push({
            description: this.state.description,
            done: false, 
            dateCreated: new Date(), 
            dateModified: null
        });
        this.setState({
            description: '',
            milestones: milestones
        });
    }

    addListItem = () => {
        const newListItem = {
            name: this.state.name,
            milestones: this.state.milestones,
            ownerId: 1, // TODO: get owner id from store
            dateCreated: new Date(),
            dateModified: null 
        };
        this.setState({
            name: '',
            description: '',
            milestones: []
        });
        this.props.onAddListItem(newListItem);
    }

    render () {
        return (
            <section>
                <ActionText 
                    label="list title"
                    name="name"
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <div>
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Milestone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Fragment>
                                {this.buildMilestoneRows()}
                            </Fragment>
                        </tbody>
                    </table>
                </div>
                <form onSubmit={(ev) => { ev.preventDefault(); this.addMilestone(); }}>
                    <div className="row">
                        <div className="col-8">
                            <input name="description" value={this.state.description} onChange={this.onChange} />
                        </div>
                        <div className="col-4">
                            <button className="btn">
                                add
                            </button>
                        </div>
                    </div>
                </form>
                <div className="flex-right">
                    <button className="btn" onClick={() => this.addListItem()}>
                        create
                    </button>
                </div>
            </section>
        );
    }
}

export default AddList;
