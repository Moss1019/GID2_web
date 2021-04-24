import axios from 'axios';

const SERVER_END_POINT = 'https://gcptestapp-309608.ew.r.appspot.com';

export function postUser(user: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/users`;
	axios.post(url, user)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function deleteUser(userId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/users/${userId}`;
	axios.delete(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getUserByPk(userId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/users/${userId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getAllUsers(onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/users`;
  axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getUserByUserName(userName: string, onSuccess: (data: any) => void, onError: (err: any) => any) {
	const url = `${SERVER_END_POINT}/api/users/byUserName/${userName}`;
	return axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};


export function putUser(user: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/users`;
	return axios.put(url, user)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};
