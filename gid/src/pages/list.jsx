import { Component, Fragment } from "react";
import { UserRoutes } from "../services/routes";
import Footer from "../sections/footer";
import Header from "../sections/header";
import { getLists } from "../services/rest";


class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: getLists(''),
            selectedList: null
        }
    }

    selectList = (list) => {
        this.setState({
            selectedList: list
        })
    }

    buildLists = () => {
        return this.state.lists.map((l, i) => {
            const completed = 100 * l.milestones.filter(m => m.done).length / l.milestones.length;
            return (
                <Fragment key={i}>
                    <div className="row list-item" onClick={() => this.selectList(l)}>
                        <div className="col-6">
                            {l.name}
                        </div>
                        <div className="col-6">
                            completed: {completed}%
                        </div>
                    </div>
                </Fragment>
            );
        });
    }

    selectMileStone = (milestone) => {
        console.log(milestone);
    }

    buildMilestoneList = () => {
        return this.state.selectedList == null ? 
        (
            <Fragment>
                no item selected
            </Fragment>
        ) : 
        this.state.selectedList.milestones.map((m, i) => {
            return (
                <Fragment key={i}>
                    <div className="list-item" onClick={() => this.selectMileStone(m)}>
                        {m.description}
                    </div>
                </Fragment>
            );
        });
    }

    render() {
        return (
            <section>
                <Header 
                    currentRoute={UserRoutes.LIST}
                />

                <div className="container-fluid content">
                    <div>
                        {JSON.stringify(this.state.lists)}
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <section>
                                {this.buildLists()}
                            </section>
                        </div>

                        <div className="col-6">
                            <section>
                                {this.buildMilestoneList()}
                            </section>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </section>
        );
    }
}

export default List;