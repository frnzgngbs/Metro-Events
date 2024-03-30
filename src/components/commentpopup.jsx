import React from 'react';
import Paper from '@mui/material/Paper';
import CommentCard from './cards/commentpopupcard';

const CommentPopup = () => {
 // Sample comments data
 const comments = [
    { id: 1, avatarSrc: '/avatar1.jpg', name: 'John Doe', comment: 'Great post!' },
    { id: 2, avatarSrc: '/avatar2.jpg', name: 'Jane Smith', comment: 'Nice article!' },
    { id: 1, avatarSrc: '/avatar1.jpg', name: 'John Doe', comment: 'Great post!' },
    { id: 2, avatarSrc: '/avatar2.jpg', name: 'Jane Smith', comment: 'Nice article!' },
    // Add more comments as needed
 ];

 return (
    <>

  
        
      <Paper
        sx={{
          borderRadius: '16px',
          padding: '20px',
          maxHeight: '500px',
          elevation: 'none',
          boxShadow: 'none',
          overflow: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Webkit browsers
          },
          '&::-ms-scrollbar': {
            display: 'none', // Hide scrollbar for IE and Edge
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent', // Make scrollbar thumb transparent
          },
        }}
      >
        <h3> Comments</h3>
        <Paper sx={{
          borderRadius: '16px',
          padding: '20px',
          minHeight: '300px',
          maxHeight: '400px',
          elevation: 'none',
          boxShadow: 'none',
          overflow: 'auto', // Enable scrolling
          '&::-webkit-scrollbar': {
            display: 'none', // Hide scrollbar for Webkit browsers
          },
          '&::-ms-scrollbar': {
            display: 'none', // Hide scrollbar for IE and Edge
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent', // Make scrollbar thumb transparent
          },
        }}>
          {comments.map(comment => (
            <CommentCard
              key={comment.id}
              avatarSrc={comment.avatarSrc}
              name={comment.name}
              comment={comment.comment}
            />
          ))}
        </Paper>
      </Paper>
    </>
 );
};

export default CommentPopup;
