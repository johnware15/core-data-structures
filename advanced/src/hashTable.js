import sha256 from 'sha256'

export default class HashTable {
  constructor (key, value) {
    this.data = {}
    this.length = 0
  }

  put(key, value){
    this.data[sha256(key)] = value
    this.length++
    }

  get(key){
    return this.data[sha256(key)]
  }

  contains(key){
    return this.data[sha256(key)]
  }

  remove(key){
    delete this.data[sha256(key)]
    this.length--
  }

  size(){
    return this.length
  }

  iterate(callback){
    Object.keys(this.data)
      .forEach( key => {
          callback(sha256(key), this.data[key])
  })
}
}
