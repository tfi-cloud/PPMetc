import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const updateSubdocument = (folder, subcollection, idC) => {
  const error = ref(null)

  const upload = async (updates) => {
    try {
      const querySnapshot = await projectFirestore.collection(folder).get()
      const docs = querySnapshot.docs.map(doc => {
        const data = doc.data()
        return {
          ...data,
          id: doc.id
        }
      })
      for (const doc of docs) {
        const subquerySnapshot = await projectFirestore
          .collection(folder)
          .doc(doc.id)
          .collection(subcollection)
          .doc(idC)
          .update(updates)
        return subquerySnapshot
      }
      error.value = `Could not find document with ID '${idC}' in subcollection '${subcollection}'`
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not fetch the document'
    }
  }
  return { error, upload }
}
export default updateSubdocument