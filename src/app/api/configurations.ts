
import axios from 'axios'

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
})

// Interceptador de erro (opcional, mas útil)
api.interceptors.response.use(
	(response) => response,
	(error) => {
		const message = error.response?.data?.error || error.message || 'Erro na requisição'
		console.error('[API Error]', error.response?.status, message)
		return Promise.reject(new Error(message))
	}
)

export default api
