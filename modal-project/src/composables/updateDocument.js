import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const updateDocument = (collection, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let docRef = projectFirestore.collection(collection).doc(id)

  const updateDoc = async (updates) => {
    isPending.value = true
    error.value = null

    try {
      const res = await docRef.update(updates)
      isPending.value = false
      return res
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }
  return { error, isPending, updateDoc }
}

export default updateDocument