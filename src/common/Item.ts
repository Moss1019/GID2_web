import { Milestone } from './Milestone';

export interface Item {
	itemId: string;
	title: string;
	dateCreated: Date;
	isCompleted: boolean;
	userId: string;
	milestones: Milestone[];
}
