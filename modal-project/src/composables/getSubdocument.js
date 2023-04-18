import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSubdocument = (folder, subcollection, idC) => {
  const error = ref(null)
  const documento = ref(null)

  const load = async () => {
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
          .get()
        
        if (subquerySnapshot.exists) {
          const subdoc = subquerySnapshot.data()
          documento.value = {...subdoc, id: subquerySnapshot.id }
          error.value = null
          return
        }
      }

      error.value = `Could not find document with ID '${idC}' in subcollection '${subcollection}'`
    } catch (err) {
      console.log(err.message)
      error.value = 'Could not fetch the document'
    }
  }

  return { error, documento, load }
}

export default getSubdocument