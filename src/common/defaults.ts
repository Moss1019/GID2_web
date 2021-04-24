import { Item } from "./Item";
import { Milestone } from "./Milestone";

export const emptyItem: Item = {
  itemId: '',
  title: '',
  dateCreated: new Date(),
  isCompleted: false,
  milestones: [],
  userId: ''
}

export const emptyMilestone: Milestone = {
  milestoneId: '',
  description: '',
  dateCreated: new Date(),
  isCompleted: false,
  itemId: ''
}
