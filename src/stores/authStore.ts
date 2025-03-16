import {defineStore} from "pinia";
/*import LocalStorage from "@/app/localStorage";*/

export const userStore = defineStore('auth',{
  state: () => ({
    user: ''
  }),
    actions: {
      async login(userName: string) {
        try{

          this.user = userName;

          /*LocalStorage.setItems({
            user: userName
          });*/

        } catch (error) {
          console.log(error.data);
        }
      },
      setUser: ()=> {

      },
      getUser: function () {
        return this.user;
      },
  },

})

/*
    user: LocalStorage.getItems().user,
    logo_url: LocalStorage.getItems().logo_url,
    token: LocalStorage.getItems().token,
    permissions: LocalStorage.getItems().permissions,
    returnUrl: null
 */
