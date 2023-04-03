import { watchEffect, ref } from 'vue'
import { projectFirestore } from '../firebase/config'
//i also request for the id of one specific document


const getDocument = (folder,collection, id) => {

  const documentos = ref(null)
  const error = ref(null)

  
  // Definir la referencia de la colección principal
  const mainCollectionRef = projectFirestore .collection(folder)

  // Definir la referencia de la subcolección
  const subCollectionRef = mainCollectionRef.doc('V76Jvl08S2LsxZ30hxhc').collection(collection)
  

  // Obtener los documentos de la subcolección
  subCollectionRef.get().then((querySnapshot) => {

  let results = []

  querySnapshot.forEach((doc) => {
    results.push({ ...doc.data(), id: doc.id })
  });

  // update values
  documentos.value = results
  error.value = null
})

  return { error, documentos }
}

export default getDocument