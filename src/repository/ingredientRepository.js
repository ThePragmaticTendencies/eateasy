import RepositoryBase from '@/repository/repositoryBase.js'

export default class IngredientRepository extends RepositoryBase {
  constructor(dbRef, userId) {
    super(dbRef)
    this.userID = userId
    this.dbName = 'ingredient'
    this.dbAddres = `${this.userID}_${this.dbName}`
  }

  subscribeForIngredients(action) {
    this.subscribeDbEvent(this.dbAddres, 'child_added', action)
  }

  addIngredient(ingredient) {
    this.add(`${this.dbAddres}/${ingredient.id}`, ingredient)
  }
}
