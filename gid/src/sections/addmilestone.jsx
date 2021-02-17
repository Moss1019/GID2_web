import { Component } from "react";
import ActionText from "../controls/actiontext";

class AddMilestone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        };
    }

    onChange = (ev) => {
        this.setState({
            description: ev.target.value
        });
    }

    addMilestone = (ev) => {
        ev.preventDefault();
        const newMilestone = {
            description: this.state.description,
            dateCreated: new Date(),
            dateModified: null,
            done: false
        };
        this.props.addMilestone(newMilestone);
        this.setState({
            description: ''
        });
    }

    render() {
        return (
            <section>
                <form onSubmit={this.addMilestone}>
                    <ActionText
                        value={this.state.description}
                        label="description"
                        name="description"
                        onChange={this.onChange}
                    />
                </form>
            </section>
        );
    }
}

export default AddMilestone;
