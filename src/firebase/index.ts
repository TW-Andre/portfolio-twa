
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDIvsR_36BZBClWw3vMHXc5Z3nixlqffbk',
	authDomain: 'project-s-menu.firebaseapp.com',
	projectId: 'project-s-menu',
	storageBucket: 'project-s-menu.firebasestorage.app',
	messagingSenderId: '972497273497',
	appId: '1:972497273497:web:66b052a1ae10095623ae08'
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
	db
}
