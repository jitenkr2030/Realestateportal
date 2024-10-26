// features/Chat.js
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ChatMessage, ChatInput } from '../components';
import { useChat } from '../hooks';
import firestore from '@react-native-firebase/firestore';

const Chat = ({ route }) => {
  const { conversationId } = route.params;
  const { messages, sendMessage } = useChat(conversationId);
  const [inputText, setInputText] = useState('');

  const handleSend = async () => {
    if (inputText.trim()) {
      await sendMessage({
        text: inputText,
        timestamp: new Date(),
        conversationId,
      });
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        keyExtractor={(item) => item.id}
        inverted
      />
      <ChatInput
        value={inputText}
        onChangeText={setInputText}
        onSend={handleSend}
      />
    </View>
  );
};