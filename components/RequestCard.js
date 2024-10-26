// components/RequestCard.js
const RequestCard = ({ request, onStatusUpdate }) => {
    const statusColors = {
      pending: Colors.warning,
      inProgress: Colors.info,
      completed: Colors.success,
      cancelled: Colors.error,
    };
  
    return (
      <Card style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{request.title}</Text>
          <Badge
            color={statusColors[request.status]}
            label={request.status}
          />
        </View>
        <Text style={styles.description}>
          {request.description}
        </Text>
        <Text style={styles.date}>
          {format(new Date(request.createdAt), 'PPP')}
        </Text>
        {request.images?.length > 0 && (
          <ScrollView horizontal style={styles.imageScroll}>
            {request.images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.uri }}
                style={styles.image}
              />
            ))}
          </ScrollView>
        )}
        <View style={styles.actions}>
          <Button
            title="Update Status"
            onPress={() => onStatusUpdate(request.id)}
            variant="outline"
          />
          <Button
            title="Contact Tenant"
            onPress={() => navigation.navigate('Chat', {
              conversationId: request.id,
            })}
          />
        </View>
      </Card>
    );
  };
  