// features/PropertyList.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { PropertyCard } from '../components';
import { useProperties } from '../hooks';

const PropertyList = ({ navigation }) => {
  const { properties, loading, error } = useProperties();

  const renderProperty = ({ item }) => (
    <PropertyCard
      property={item}
      onPress={() => navigation.navigate('PropertyDetail', { propertyId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={properties}
        renderItem={renderProperty}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    padding: 16,
  },
});