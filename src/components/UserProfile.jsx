import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext.jsx';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import '../UserProfile.css'; // Create a corresponding CSS file for styling

const UserProfile = () => {
    const { user, setUser ,fetchUserProfile} = useContext(UserContext);

  if (!user) {
    return <div>Loading...</div>; // Handle loading state
  }

  const removeFromWishlist = async (destinationName) => {
    try {
      const response = await axios.delete('http://localhost:8000/delete', {
        data: { userId: user._id, destinationName }
      });
      await fetchUserProfile();
      setUser(response.data);
      toast.success('item removed');
      console.log('Destination removed from wishlist:', response.data);
    } catch (error) {
      toast.error('item not removed')
      console.error('Error removing destination from wishlist:', error);
    }
  };

  return (
    <div className="user-profile">
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Wishlist</h2>
      {user.wishlist && user.wishlist.length > 0 ? (
        <ul>
          {user.wishlist.map((item, index) => (
            <li key={index}>{item}
            <button className='del' onClick={() => removeFromWishlist(item)}>X</button></li>
          ))}
        </ul>
      ) : (
        <p>Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default UserProfile;
