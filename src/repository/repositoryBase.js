import { utils } from '@/js/utils'

export class RepositoryBase {
  constructor(dbRef) {
    this._listeners = []
    this._dbRef = dbRef
  }

  disconnect(){
    this._listeners.forEach((listener) => {
      this.removeListener(listener)
    })

    this._listeners = []
  }

  removeListener(listener) {
    this._dbRef.off(listener.type, listener.callback)
  }

  _registerListener(callback, type) {
    this._listeners.push({callback: callback, type: type})
  }

  _getDbRefFor(childName) {
    return this._dbRef.child(childName)
  }

  _attachActionToChildDb(childName, type, action) {
    let callback = this._dbRef.child(childName)
    .orderByKey()
    .on(type, (snap) => {
      action(snap)
    })
  }

  _getOnce(childName) {
    return this._dbRef.child(childName)
    .once('value')
  }
}
