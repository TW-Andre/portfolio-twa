
import { apiRoutes } from '@/app/api/apiRoutes.ts'
import api from "@/app/api/configurations.ts";

export const UserService = {
	async getAll() {
		return await api.get(apiRoutes.users.management.index);
	},

	async createUser(user: { name: string; role: string; age: number }) {
		return await api.post(apiRoutes.users.management.save, user);
	},

	/*async getById(id: number) {
		const response = await api.get()
		return response.data[0]
	},*/

	async update(id: number, user: { name: string; role: string; age: number }) {
		return await api.post(`${apiRoutes.users.management.update}${id}`, user);
	},

	async remove(id: number) {
		return api.delete(`${apiRoutes.users.management.delete}${id}`);
	}
}
