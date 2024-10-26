// features/PaymentPortal.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaymentForm, PaymentHistory } from '../components';
import { usePayments } from '../hooks';
import { Stripe } from '@stripe/stripe-react-native';

const PaymentPortal = () => {
  const { 
    processPayment, 
    paymentHistory,
    currentBalance 
  } = usePayments();

  const handlePayment = async (paymentDetails) => {
    try {
      const result = await processPayment(paymentDetails);
      if (result.success) {
        Alert.alert('Success', 'Payment processed successfully');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.balance}>
          Current Balance: ${currentBalance}
        </Text>
        <PaymentForm onSubmit={handlePayment} />
      </Card>
      <PaymentHistory payments={paymentHistory} />
    </View>
  );
};