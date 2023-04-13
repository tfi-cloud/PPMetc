import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const useDocument = (folder,collection, id) => {

  let error = ref(null)
  let isPending = ref(false)
  let myCollection = projectFirestore.collection(folder)

  const AddSubColByID = async (doc) => {
    isPending.value = true
    error.value = null

    try {

    // create the reference
    const docRef = myCollection.doc(id)

    // add the document
    await docRef.collection(collection).add(doc)
    isPending.value = false
    }
    catch(err) {
      console.log(err.message)
      isPending.value = false
      error.value = 'could not update the document'
    }
  }
  return { error, isPending, AddSubColByID }
}
export default useDocument