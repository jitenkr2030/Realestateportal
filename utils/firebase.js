// utils/firebase.js
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const uploadImage = async (uri) => {
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const ref = storage().ref(filename);
  
  await ref.putFile(uri);
  const url = await ref.getDownloadURL();
  
  return url;
};

export const updateMaintenanceStatus = async (requestId, status) => {
  await firestore()
    .collection('maintenanceRequests')
    .doc(requestId)
    .update({ status });
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  cardField: {
    height: 50,
    marginVertical: 16,
  },
  priorityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  priorityButton: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  selectedPriority: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  priorityText: {
    textTransform: 'capitalize',
  },
  imagePreview: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginVertical: 16,
  },
  previewImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  paymentAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentDate: {
    color: Colors.gray,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
});