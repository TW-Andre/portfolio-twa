import {defineStore} from "pinia";

export const useSidebarStore = defineStore({
	id: "sidebar",
	state:()=> ({
		Sidebar_drawer: true,
		Rail_drawer: true,
		Custom_drawer: false,
		Custom_rail: false
	}),
	actions: {
		SET_SIDEBAR_DRAWER() {
			this.Sidebar_drawer = !this.Sidebar_drawer;
		},
		SET_RAIL_DRAWER() {
			this.Rail_drawer = !this.Rail_drawer;
		},
		SET_CUSTOM_DRAWER() {
			this.Custom_drawer = !this.Custom_drawer;
		},
		SET_CUSTOM_RAIL() {
			this.Custom_rail = !this.Custom_rail;
		},
	}
})
