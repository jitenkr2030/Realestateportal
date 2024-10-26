// components/PropertyCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { formatCurrency } from '../utils';

const PropertyCard = ({ property, onPress }) => {
  const { title, price, location, images, type, amenities } = property;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: images[0] }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{formatCurrency(price)}/month</Text>
        <Text style={styles.location}>{location}</Text>
        <View style={styles.amenitiesContainer}>
          {amenities.slice(0, 3).map((amenity, index) => (
            <Text key={index} style={styles.amenity}>
              {amenity}
            </Text>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: Colors.primary,
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: 8,
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenity: {
    fontSize: 12,
    color: Colors.gray,
    backgroundColor: Colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});