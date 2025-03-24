import {defineStore} from "pinia";

export const useSidebarStore = defineStore({
	id: "sidebar",
	state:()=> ({
		Sidebar_drawer: true,
		Custom_drawer: false,
		Rail_drawer: true
	}),
	actions: {
		SET_SIDEBAR_DRAWER() {
			this.Sidebar_drawer = !this.Sidebar_drawer;
		},
		SET_CUSTOM_DRAWER() {
			this.Custom_drawer = !this.Custom_drawer;
		},
		SET_RAIL_DRAWER() {
			this.Rail_drawer = !this.Rail_drawer;
		},
	}
})
