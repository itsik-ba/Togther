
import { useEffect } from 'react';
import { io } from 'socket.io-client';

const CreateProject = () => {
  useEffect(() => {
    const socket = io('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Connected to server with id:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    // Clean up the connection when the component is unmounted
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <div>
      <h1>Mission Creating...</h1>
      </div>
      <div>
        <input type="text" placeholder='create mission' />
      </div>
    
    </div>
  );
}

export default CreateProject;
