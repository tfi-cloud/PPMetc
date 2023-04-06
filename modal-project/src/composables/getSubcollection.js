import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getSubcollection = (folder, subcollection) => {
  const error = ref(null)
  const documentos = ref(null)

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
          .get()

        const subdocs = subquerySnapshot.docs.map(subdoc => {
          const subdata = subdoc.data()
          return {
            ...subdata,
            id: subdoc.id
          }
        })

        doc[subcollection] = subdocs
      }

      documentos.value = docs
      error.value = null
    } catch (err) {
      console.log(err.message)
      error.value = 'could not fetch the documents'
    }
  }

  return { error, documentos, load }
}

export default getSubcollection

