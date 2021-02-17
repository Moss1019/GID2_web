import React, { useState, useEffect } from 'react';
import Header from '../sections/header';
import Footer from '../sections/footer';
import { List, Milestone } from '../common/liststypes';
import { getLists } from '../util/gets';
import ListSection from '../sections/listsection';
import MilestoneSection from '../sections/milestonesection';
import ActionEditText from '../controls/actionedittext';

function ListsPage() {
    const [lists, setLists] = useState<List[]>([]);
    const [selectedList, setSelectedList] = useState<List | null>(null);
    const [listTitle, setListTitle] = useState<string>('');
    const [milestoneDescription, setMilestoneDescription] = useState<string>('');

    const onAddListClick = () => {
        if(listTitle.length === 0) {
            return;
        }
        setLists(lists.concat({title: listTitle, milestones: []}));
        setListTitle('');
    }

    const onAddMilestoneClick = () => {
        if(milestoneDescription.length === 0) {
            return;
        }
        setLists(
            lists.map((l: List) => {
                return l.title === selectedList?.title ? 
                    {...l, milestones: l.milestones.concat({description: milestoneDescription})} :
                    {...l};
            })
        )
        setMilestoneDescription('');
    }

    useEffect(() => {
        setSelectedList(lists.find((l: List) => l.title == selectedList?.title) || lists[0]);
    }, [lists])

    useEffect(() => {
        setLists(getLists());
    }, []);

    return (
        
        <section>
            <Header
                currentPage="lists"
            />
            
            <section className="container content">
                <div className="row">
                    <div className="col-6">
                        <ActionEditText
                            value={listTitle}
                            actionText="add"
                            onAction={onAddListClick}
                            onChange={setListTitle}
                        />

                        <ListSection
                            lists={lists}
                            onItemClick={setSelectedList}
                        />
                    </div>
                    
                    <div className="col-6">
                        <ActionEditText
                            value={milestoneDescription}
                            actionText="add"
                            onAction={onAddMilestoneClick}
                            onChange={setMilestoneDescription}
                        />

                        {!selectedList ? 
                        <div>no list selected</div> :
                        <MilestoneSection
                            milestones={selectedList.milestones}
                        />}
                    </div>
                </div>
            </section>

            <Footer />
        </section>
    );
}

export default ListsPage;
