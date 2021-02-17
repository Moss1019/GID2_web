
// import Axios from './http';
import { List } from '../common/liststypes';

export function getLists(): List[] { //: Promise<List[]> {
    const lists: List[] = [
        {
            title: 'GID',
            milestones: [
                {
                    description: 'make web app'
                },
                {
                    description: 'make backend'
                }
            ]
        },
        {
            title: 'asteriods',
            milestones: [
                {
                    description: 'learn web gl'
                },
                {
                    description: 'make game engine'
                }
            ]
        }
    ];
    
    return lists;
}

