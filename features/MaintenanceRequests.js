// features/MaintenanceRequests.js
import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { MaintenanceRequestForm, RequestCard } from '../components';
import { useMaintenanceRequests } from '../hooks';
import * as ImagePicker from 'expo-image-picker';

const MaintenanceRequests = () => {
  const { 
    requests, 
    submitRequest,
    updateRequestStatus 
  } = useMaintenanceRequests();
  const [images, setImages] = useState([]);

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

  const handleSubmit = async (formData) => {
    await submitRequest({
      ...formData,
      images,
    });
    setImages([]);
  };

  return (
    <View style={styles.container}>
      <MaintenanceRequestForm
        onSubmit={handleSubmit}
        onImagePick={handleImagePick}
        images={images}
      />
      <FlatList
        data={requests}
        renderItem={({ item }) => (
          <RequestCard
            request={item}
            onStatusUpdate={updateRequestStatus}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};