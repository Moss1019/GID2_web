import { Component, Fragment } from "react";

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
    }

    render() {
        const l = this.props.listItem;
        const completed = (100 * l.milestones.filter(m => m.done).length / l.milestones.length).toFixed(2);
        return (
            <div className="list-item" onClick={() => this.props.onListSelect(l)}>
                <div className="row">
                    <div className="col-5">
                        {l.name}
                    </div>
                    <div className="col-5">
                        completed: {completed}%
                    </div>
                    <div className="col-2 flex-right">
                        <button className="btn" onClick={() => this.setState({showDetails: !this.state.showDetails})}>
                            {this.state.showDetails && <Fragment>^</Fragment>}
                            {!this.state.showDetails && <Fragment>&amp;</Fragment>}
                        </button>
                    </div>
                </div>
                {this.state.showDetails &&
                    <div className="row">
                        <div className="col-5">
                            Date made
                        </div>
                        <div className="col-7">
                            Date modified
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default ListItem;