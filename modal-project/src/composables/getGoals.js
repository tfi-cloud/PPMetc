import { watchEffect, ref } from 'vue'
import { projectFirestore } from '../firebase/config'
//i also request for the id of one specific document
const getGoals = (collection, id) => {

  const goals = ref(null)
  const error = ref(null)

  // register the firestore document by id reference
  const folderRef = projectFirestore.collection('portfolios').doc(id)

  // register the firestore collection
  const collectionRef = folderRef.collection(collection)

  collectionRef.onSnapshot( snap => {
    let results = []
    snap.docs.forEach( doc => {
      // must wait for the server to create the timestamp & send it back
      // we don't want to edit data until it has done this
      results.push({ ...doc.data(), id: doc.id })
    });
    
    // update values
    goals.value = results
    error.value = null
  }, err => {
    console.log(err.message)
    goals.value = null
    error.value = 'could not fetch the data'
  })

  return { error, goals }
}

export default getGoals