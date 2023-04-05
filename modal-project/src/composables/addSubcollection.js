import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'


const useDocument = (folder,collection, nameField) => {

  let error = ref(null)
  let isPending = ref(false)
  let myCollection = projectFirestore.collection(folder)
  const query = myCollection.where('namePortfolio', '==', nameField);


  const AddSubCol = async (doc) => {
    isPending.value = true
    error.value = null

    try {

    // get the document id
    const querySnapshot = await query.get()

    // gets the first document from the querySnapshot
    const idCollection = querySnapshot.docs[0].id 

    // create the reference
    const docRef = myCollection.doc(idCollection)

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


  return { error, isPending, AddSubCol }

}

export default useDocument