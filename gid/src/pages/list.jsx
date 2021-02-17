import { Component } from "react";
import { getLists } from "../services/rest";
import { UserRoutes } from "../services/routes";
import Footer from "../sections/footer";
import Header from "../sections/header";
import Lists from "../sections/lists";
import Milestones from "../sections/milestones";
import ModalContainer from "../controls/modalcontainer";
import AddList from "../sections/addlist";
import AddMilestone from "../sections/addmilestone";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: getLists(''),
            selectedList: null,
            isAddingMilestone: false,
            isAddingList: false,
            newList: '',
            newMilestone: ''
        }
    }

    selectList = (list) => {
        this.setState({
            selectedList: list
        })
    }

    selectMilestone = (milestone) => {
        console.log(milestone);
    }

    addList = () => {
        this.setState({
            isAddingList: true,
            newList: ''
        })
    }

    addMilestone = () => {
        if(this.state.selectedList == null) {
            return;
        }
        this.setState({
            isAddingMilestone: true,
            newMilestone: ''
        });
    }

    createMilestone = (newMilestone) => {
        var lists = this.state.lists.filter(l => l.name != this.state.selectedList.name);
        var milestones = [...this.state.selectedList.milestones].concat(newMilestone);
        var newSelectedList = {...this.state.selectedList, milestones};
        lists.push(newSelectedList);
        console.log('NEW MILESTEON');
        console.log(newMilestone);
        this.setState({
            lists,
            selectedList: newSelectedList
        });
    }

    render() {
        return (
            <section>
                <Header 
                    currentRoute={UserRoutes.LIST}
                />

                <div className="container-fluid content">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <div className="col-8">
                                    lists
                                </div>
                                <div className="flex-right col-4">
                                    <button className="btn" onClick={(ev) => this.addList()}>+</button>
                                </div>
                            </div>

                            <Lists
                                lists={this.state.lists}
                                onListSelect={this.selectList}
                            />
                        </div>

                        <div className="col-6">
                            <div className="row">
                                <div className="col-8">
                                    milestones
                                </div>
                                <div className="col-4 flex-right">
                                    <button className="btn" onClick={(ev) => this.addMilestone()}>+</button>
                                </div>
                            </div>

                            <Milestones
                                selectedList={this.state.selectedList}
                                onMilestoneSelect={this.selectMilestone}
                            />
                        </div>

                        {this.state.isAddingMilestone &&
                            <ModalContainer onClose={() => this.setState({isAddingMilestone: false})}>
                                <AddMilestone 

                                    addMilestone={this.createMilestone}
                                />
                            </ModalContainer>
                        }

                        {this.state.isAddingList &&
                            <ModalContainer onClose={() => this.setState({isAddingList: false})}>
                                <AddList
                                    
                                    onAddListItem={(list) => this.setState({lists: this.state.lists.concat(list)})}
                                />
                            </ModalContainer>
                        }
                    </div>
                </div>
                
                <Footer />
            </section>
        );
    }
}

export default List;