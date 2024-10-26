// components/ChatMessage.js
const ChatMessage = ({ message }) => {
    const { user } = useAuth();
    const isOwnMessage = message.senderId === user.id;
  
    return (
      <View style={[
        styles.messageContainer,
        isOwnMessage ? styles.ownMessage : styles.otherMessage
      ]}>
        <Text style={styles.messageText}>{message.text}</Text>
        <Text style={styles.timestamp}>
          {formatTimestamp(message.timestamp)}
        </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    pdfView: {
      height: 400,
      marginVertical: 16,
    },
    signaturePad: {
      height: 200,
      marginVertical: 16,
    },
    balance: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    messageContainer: {
      padding: 12,
      marginVertical: 4,
      marginHorizontal: 8,
      maxWidth: '80%',
      borderRadius: 16,
    },
    ownMessage: {
      backgroundColor: Colors.primary,
      alignSelf: 'flex-end',
    },
    otherMessage: {
      backgroundColor: Colors.gray,
      alignSelf: 'flex-start',
    },
    messageText: {
      color: 'white',
      fontSize: 16,
    },
    timestamp: {
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: 12,
      marginTop: 4,
    },
  });