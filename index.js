const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      //iterate over collection, pass each element into function
      //callback function takes element, index, collection 
      //if object callback arguments will be value, key, collection
      const newCollection = (Array.isArray(collection)) ? collection : Object.values(collection)

      for (let i = 0; i < newCollection.length; i++){
      alert(newCollection[i])}
      
      return collection
    },

    map: function(collection, callback) {
      const newCollection = []
      if (!(Array.isArray(collection))){
        collection = Object.values(collection)}
      for (let i = 0; i < collection.length; i++){
          newCollection.push(callback(collection[i]))
        }
      return newCollection
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
