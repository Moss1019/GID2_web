
export function getLists(token) {
    return [
        {
            name: 'GID',
            milestones: [
                { description: 'make web app', done: false, dateCreated: new Date(), dateModified: null },
                { description: 'make design', done: true, dateCreated: new Date(), dateModified: new Date() }
            ],
            ownerId: 1,
        }
    ];
}

