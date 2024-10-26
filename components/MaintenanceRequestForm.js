// components/MaintenanceRequestForm.js
const MaintenanceRequestForm = ({ onSubmit, onImagePick, images }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');
  
    const handleSubmit = () => {
      onSubmit({
        title,
        description,
        priority,
        status: 'pending',
        createdAt: new Date(),
      });
      setTitle('');
      setDescription('');
      setPriority('medium');
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Issue Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Describe the issue"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />
        <View style={styles.priorityContainer}>
          {['low', 'medium', 'high'].map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.priorityButton,
                priority === p && styles.selectedPriority,
              ]}
              onPress={() => setPriority(p)}
            >
              <Text style={styles.priorityText}>{p}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button
          title="Add Photos"
          onPress={onImagePick}
          variant="outline"
        />
        {images.length > 0 && (
          <View style={styles.imagePreview}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image.uri }}
                style={styles.previewImage}
              />
            ))}
          </View>
        )}
        <Button
          title="Submit Request"
          onPress={handleSubmit}
          disabled={!title || !description}
        />
      </View>
    );
  };
  