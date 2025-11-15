// src/api/services/userService.ts

import { apiRoutes } from '@/app/api/apiRoutes.ts'
import api from "@/app/api/configurations.ts";

export const UserService = {
	async getAll() {
		const response = await api.get('/api.php?action=users')
		return response.data
	},

	async getById(id: string) {
		const url = buildUrl(apiRoutes.users.management.update, { id })
		const response = await api.get(url)
		return response.data
	},

	async create(data: any) {
		const response = await api.post(apiRoutes.users.management.save, data)
		return response.data
	},

	async update(id: string, data: any) {
		const url = buildUrl(apiRoutes.users.management.update, { id })
		const response = await api.put(url, data)
		return response.data
	},

	async remove(id: string) {
		const url = buildUrl(apiRoutes.users.management.delete, { id })
		await api.delete(url)
	}
}
