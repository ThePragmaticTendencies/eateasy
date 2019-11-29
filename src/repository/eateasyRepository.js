import RepositoryBase from '@/repository/repositoryBase.js'


export class IngredientRepository extends RepositoryBase {
  constructor(dbRef, userId) {
    super(dbRef)
    this.userID = userId
    this.spendingsChildName = `${userId}_spendings`
    this.spendingStatisticsChildName = `${userId}_spending_statistics`
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
