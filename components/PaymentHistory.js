// components/PaymentHistory.js
const PaymentHistory = ({ payments }) => {
    const renderPayment = ({ item }) => (
      <View style={styles.paymentItem}>
        <View>
          <Text style={styles.paymentAmount}>
            ${item.amount.toFixed(2)}
          </Text>
          <Text style={styles.paymentDate}>
            {format(new Date(item.date), 'PPP')}
          </Text>
        </View>
        <Badge
          status={item.status}
          label={item.status.toUpperCase()}
        />
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Payment History</Text>
        <FlatList
          data={payments}
          renderItem={renderPayment}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  };