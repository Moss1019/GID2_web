import axios from 'axios';

const SERVER_END_POINT = 'https://gcptestapp-309608.ew.r.appspot.com';

export function postMilestone(milestone: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones`;
	axios.post(url, milestone)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function deleteMilestone(milestoneId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones/${milestoneId}`;
	axios.delete(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getMilestoneByPk(milestoneId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones/${milestoneId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getAllMilestones(onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones`;
  axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};


export function getOfItem(itemId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones/${itemId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		})
}


export function putMilestone(milestone: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/milestones`;
	return axios.put(url, milestone)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};
