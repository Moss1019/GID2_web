import axios from 'axios';

const SERVER_END_POINT = 'http://localhost:8080';

export function postCollaborator(collaborator: any, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/collaborators`;
	axios.post(url, collaborator)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function deleteCollaborator(collaboratorId: string, userId: string, onSuccess: (data: any) => void, onError: (err: any) => void){
	const url = `${SERVER_END_POINT}/api/collaborators/${collaboratorId}/${userId}`;
 	axios.delete(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

export function getCollaboratorsOfUser(userId: string, onSuccess: (data: any) => void, onError: (err: any) => void) {
	const url = `${SERVER_END_POINT}/api/collaborators/forUser/${userId}`;
	axios.get(url)
		.then(result => {
			onSuccess(result.data);
		})
		.catch(err => {
			onError(err);
		});
};

