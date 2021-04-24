import { Item } from './Item';

export interface User {
	userId: string;
	userName: string;
	items: Item[];
}
