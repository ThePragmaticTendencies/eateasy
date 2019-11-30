export default class RepositoryBase {
  constructor(dbRef) {
    this._listeners = []
    this._dbRef = dbRef
  }

  add(address, object) {
  return this._getDbRefFor(address)
    .set(object)
  }

  update(address, object) {
  return this._getDbRefFor(address)
    .update(object)
  }

  delete(address) {
  return this._getDbRefFor(address)
    .set(null)
  }

  disconnect() {
    this._listeners.forEach((listener) => {
      this._removeListener(listener)
    })

    this._listeners = []
  }

  subscribeDbEvent(childName, type, action) {
    let callback = this._getDbRefFor(childName)
    .orderByKey()
    .on(type, (snap) => {
      action(snap)
    })

    this._registerListener(callback, type)
  }

  getOnce(childName) {
    return this._getDbRefFor(childName)
    .once('value')
  }

  _getDbRefFor(childName) {
    return this._dbRef.child(childName)
  }

  _registerListener(callback, type) {
    this._listeners.push({callback: callback, type: type})
  }

  _removeListener(listener) {
    this._dbRef.off(listener.type, listener.callback)
  }
}
