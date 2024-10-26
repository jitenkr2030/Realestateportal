// features/LeaseManagement.js
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Card } from '../components';
import { PDFView } from 'react-native-pdf';
import SignaturePad from 'react-native-signature-pad';
import { useLeases } from '../hooks';

const LeaseManagement = ({ route, navigation }) => {
  const { leaseId } = route.params;
  const { lease, signLease, downloadLease } = useLeases(leaseId);
  const [signature, setSignature] = useState(null);

  const handleSign = async () => {
    if (signature) {
      await signLease(leaseId, signature);
      navigation.goBack();
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Text style={styles.title}>Lease Agreement</Text>
        <PDFView
          source={{ uri: lease.documentUrl }}
          style={styles.pdfView}
        />
        <SignaturePad
          onSignature={setSignature}
          style={styles.signaturePad}
        />
        <Button 
          title="Sign Lease" 
          onPress={handleSign}
          disabled={!signature}
        />
        <Button 
          title="Download PDF" 
          onPress={() => downloadLease(leaseId)}
          variant="outline"
        />
      </Card>
    </ScrollView>
  );
};
