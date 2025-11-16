/**
 * plugins/vuetify.ts
 */

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {VMaskInput} from "vuetify/labs/components";

export default createVuetify({
  components: {
    VMaskInput
  },
  theme: {
    defaultTheme: 'light', // Garante que o tema light seja o padrão
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#23bc7d',     // Azul clássico Vuetify (ou #3b82f6 para mais moderno)
          secondary: '#1976D2',   // Cinza escuro (CORRETO — NÃO VERDE)
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#FAFAFA',
          surface: '#FFFFFF',
        }
      },
      dark: {
        dark: true,
        colors: {
          primary: '#23bc7d',     // Azul clássico Vuetify (ou #3b82f6 para mais moderno)
          secondary: '#1976D2',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FB8C00',
          background: '#121212',
          surface: '#1E1E1E',
        }
      }
    }
  },
})
