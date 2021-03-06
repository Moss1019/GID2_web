import axios from 'axios';

const SERVER_END_POINT = 'http://localhost:8080';

export function postItem(item: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items`;
	axios.post(url, item)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function deleteItem(itemId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items/${itemId}`;
	axios.delete(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getItemByPk(itemId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items/${itemId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getAllItems(onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items`;
  axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};


export function getItemsOfUser(userId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items/forUser/${userId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		})
}


export function putItem(item: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/items`;
	axios.put(url, item)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};
