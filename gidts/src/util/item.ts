

export function getItems(): Promise<any> {
  return new Promise((resolve, reject) => resolve([
    {
      title: 'Make web app',
      itemId: 1,
      milestones: [
        {
          milestoneId: 1,
          description: 'description',
          itemId: 1,
          isComplete: false
        },
        {
          milestoneId: 2,
          description: 'description 2',
          itemId: 1,
          isComplete: false
        }
      ]
    },
    {
      title: 'Web games',
      itemId: 2,
      milestones: [],
      isCompleted: false
    }
  ]));
}