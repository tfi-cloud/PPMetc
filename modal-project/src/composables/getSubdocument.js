import { watchEffect, ref } from 'vue'
import { projectFirestore } from '../firebase/config'
//i also request for the id of one specific document
const getSubdocument = (collection, idC) => {

  const document = ref(null)
  const error = ref(null)

  // register the firestore document by id reference
  const folderRef = projectFirestore.collection('portfolios').doc('V76Jvl08S2LsxZ30hxhc')

  // register the firestore document by id reference
  const documentRef = folderRef.collection(collection).doc(idC)

  const unsub = documentRef.onSnapshot( doc => {
    if(doc.data()){
        document.value = {...doc.data(), id: doc.id}
        error.value = null
    }else{
        error.value = 'that document does not exist'
    }
  }, err => {
    console.log(err.message)
    error.value = 'could not fetch the document'
  })
  
  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, document }
}

export default getSubdocument