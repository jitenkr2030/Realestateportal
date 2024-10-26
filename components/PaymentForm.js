/ components/PaymentForm.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { Button } from './Button';

const PaymentForm = ({ onSubmit }) => {
  const { confirmPayment } = useStripe();
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const { paymentIntent, error } = await confirmPayment({
        amount: parseFloat(amount) * 100,
        currency: 'usd',
      });

      if (error) {
        throw new Error(error.message);
      }

      if (paymentIntent) {
        onSubmit({
          amount: parseFloat(amount),
          paymentIntentId: paymentIntent.id,
          status: paymentIntent.status,
        });
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="decimal-pad"
        value={amount}
        onChangeText={setAmount}
      />
      <CardField
        style={styles.cardField}
        postalCodeEnabled={true}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
      />
      <Button
        title="Pay Now"
        onPress={handlePayment}
        loading={loading}
      />
    </View>
  );
};
