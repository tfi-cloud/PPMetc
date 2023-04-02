import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const useDocument = (folder,collection, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let docRef = projectFirestore.collection(folder).doc(id)


  const AddSubCol = async (doc) => {
    isPending.value = true
    error.value = null

    try {
      await docRef.collection(collection).add(doc)
      isPending.value = false
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }


  return { error, isPending, AddSubCol }

}

export default useDocument