
// hooks/useLeases.js
export const useLeases = (leaseId) => {
    const [lease, setLease] = useState(null);
  
    useEffect(() => {
      const fetchLease = async () => {
        const leaseDoc = await firestore()
          .collection('leases')
          .doc(leaseId)
          .get();
        setLease(leaseDoc.data());
      };
      fetchLease();
    }, [leaseId]);
  
    const signLease = async (leaseId, signature) => {
      await firestore()
        .collection('leases')
        .doc(leaseId)
        .update({
          signature,
          signedAt: new Date(),
          status: 'signed'
        });
    };
  
    return { lease, signLease };
  };
  
  Version