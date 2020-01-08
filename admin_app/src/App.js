// in src/App.js
import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList} from "./users";
import { PostList, PostEdit, PostCreate} from "./posts";
import authProvider from './authProvider';

// import firebase from 'firebase' 

// import { RestProvider, AuthProvider, base64Uploader } from "ra-data-firestore-client";

// import {
//   FirebaseAuthProvider,
//   FirebaseDataProvider,
//   FirebaseRealTimeSaga
// } from 'react-admin-firebase';

// import { FirebaseDataProvider } from 'ra-data-firebase'

// import { FirebaseDataProvider } from 'ra-data-firebase'

// import { RestClient } from 'aor-firebase-client';

import { RestClient } from 'aor-firestore-client';

const firebaseConfig = {
  apiKey: "AIzaSyBWL1yinxdXsISTy5thRgiGu-gjJUgREFI",
  authDomain: "your-piece-of-ground-test.firebaseapp.com",
  databaseURL: "https://your-piece-of-ground-test.firebaseio.com",
  projectId: "your-piece-of-ground-test",
  storageBucket: "your-piece-of-ground-test.appspot.com",
  messagingSenderId: "489124311670",
  appId: "1:489124311670:web:509fb9ade7b56632a52557"
};

// const providerConfig = {
//   admin: {
//     path: 'users', // path in db to store user information (default 'users')
//     config: firebaseConfig,
//     // validate: (data) => data.isEmployee // Function to validate that a user should be created in firebase (default () => true)
//   },
//   // metaFieldNames: {
//   //   createdAt: 'createdAt',
//   //   updatedAt: 'updatedAt',
//   //   createdBy: 'createdBy'
//   // },
//   trackedResources: [
//     {
//       name: 'posts',
//       path: `posts`,
//       // isPublic: true,
//     },
//     // {
//     //   name: 'users',
//     //   // path: `users`,
//     //   isPublic: false,
//     //   // uploadFields: ['pictures', 'files']
//     // },
//     // {
//     //   name: 'parts',
//     //   path: 'parts',
//     //   isPublic: false,
//     //   uploadFields: ['pictures', 'files']
//     // },
//     // {
//     //   name: 'maintenance',
//     //   path: `maintenance`,
//     //   isPublic: false,
//     //   uploadFields: ['pictures', 'files']
//     // }
//   ]
// }

// // // Firebase must be initialized first
// firebase.initializeApp(firebaseConfig)

// const trackedResources = [{ name: 'posts' }, { name: 'users' }];

// const clientOptions = {
//   timestampFieldNames: {
//     createdAt: 'createdAt',
//     updatedAt: 'updatedAt'
//   },
//   trackedResources: [{
//     name: 'posts', // The name reference to be used in all other places in AOR
//     path: 'blog', // The path in the database. If missing will use the name
//     public: true,
//     uploadFields: [] // The string name of the field
//   }, 'contacts'] // A single string assumes path and name as equal, non private and without upload fields
// }

const clientOptions = {
  timestampFieldNames: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  },
  trackedResources: [{
    name: 'posts', // The name reference to be used in all other places in AOR
    path: 'posts', // The path in the database. If missing will use the name
    public: true,
    uploadFields: [] // The string name of the field
  }, 'posts'] // A single string assumes path and name as equal, non private and without upload fields
}

const dataProvider = FirebaseDataProvider(firebaseConfig, {});
// const dataProvider = FirebaseDataProvider(providerConfig);
// const dataProvider = base64Uploader(RestProvider(firebaseConfig, { trackedResources }));

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dataProvider={dataProvider}>
  {/* <Admin dataProvider={dataProvider} authProvider={authProvider}> */}
  {/* <Admin restClient={RestClient(trackedResources, clientOptions)} > */}
    {/* <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/> */}
    <Resource name="posts" list={ListGuesser}/>
    {/* <Resource name="users" list={ListGuesser} /> */}
  </Admin>
);

export default App;
