export const utils = {
  vueToObj: (obj) => {
    return obj ? JSON.parse(JSON.stringify(obj)) : {}
  }
}
