// hooks/useChat.js
import { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

export const useChat = (conversationId) => {
  const [messages, setMessages] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('messages')
      .where('conversationId', '==', conversationId)
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        const newMessages = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(newMessages);
      });

    return () => unsubscribe();
  }, [conversationId]);

  const sendMessage = async (messageData) => {
    await firestore().collection('messages').add({
      ...messageData,
      senderId: user.id,
    });
  };

  return { messages, sendMessage };
};