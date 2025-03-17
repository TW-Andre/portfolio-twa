import {defineStore} from "pinia";
import LocalStorage from "@/app/localStorage";
import router from "@/router";

const userLocalStorage = new LocalStorage('authUser');

export const userStore = defineStore('auth',{
  state: () => ({
    user: userLocalStorage.getItems().user
  }),
    actions: {
      async login(userName: string) {
        try{

          this.user = userName;

          userLocalStorage.setItems({ user: userName});

          await router.push('/');

        } catch (error) {
          console.log(error);
        }
      },
      async logout() {
        try{

          userLocalStorage.removeItem();

        } catch (error) {
            console.log(error);
        } finally {
            this.user = null;
            userLocalStorage.removeItem();
            localStorage.clear();
            await router.push('/login');
        }
      },
      // AGORA PRECISA CRIAR O LOGOUT

      setUser: ()=> {

      },
      getUser: function () {
        return this.user;
      },
  },

})
