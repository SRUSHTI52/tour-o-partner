// import axios from 'axios';
// import {createContext, useState, useEffect} from 'react';

// export const UserContext = createContext({})

// export function UserContextProvider({children}){
//     const [user, setUser] = useState(null);
//     useEffect(() => {
//         if(!user){
//             axios.get('/profile').then(({data}) => {
//                 setUser(data)
//             })
//         }
//     }, [])
//     return(
//         <UserContext.Provider value = {{user, setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for User
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/profile');
  //       setUser(response.data);
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //     }
  //   };

  // fetchUserProfile();
    
  // }, [user]);
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:8000/profile');
      setUser(response.data);
      console.log('User fetched:', response.data); 
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect( () => {
     fetchUserProfile();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser,fetchUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}

