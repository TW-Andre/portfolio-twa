const users = {
	management: {
		index: '/api.php?action=users',
		save: '/api.php?action=create_user',
		update: '/api.php?action=update_user&id=',
		delete: '/api.php?action=delete_user&id='
	}
}

export const apiRoutes = {
	users: users
};
