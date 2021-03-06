import axios from 'axios';

export type DataCarTOType = {
  priceTo: string
  textTo: string
  titleTo: string
  id?: number
}


export const listAPI = {

  getlistTO (src_list: string) {
    return axios.get<Object>(src_list)
  },
  setListMadeTO (dataCarTO: DataCarTOType) {
    dataCarTO.id = Date.now()
    return axios.put<Object>(`https://made-car-to.firebaseio.com/${dataCarTO.id}.json`, dataCarTO)
  },
  updateListMadeTO (dataCarTO: DataCarTOType) {
    return axios.put<Object>(`https://made-car-to.firebaseio.com/${dataCarTO.id}.json`, dataCarTO)
  }
}

export const authAPI = {
  login (email: string, password: string) {
    const key = 'AIzaSyBA4J3rUo_F2m2MLz4NzGRUIBg-oTtOT_c' // API-key!!!
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  },
  register (email: string, password: string) {
    const key = 'AIzaSyBA4J3rUo_F2m2MLz4NzGRUIBg-oTtOT_c' // API-key!!!
    return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`, {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}