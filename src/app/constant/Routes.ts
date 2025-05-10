import { environment } from "src/environments/environment";
const BASEURL = environment.api;

export const auth = {
  login: BASEURL + 'login',
  register: BASEURL + 'users',
}

export const home = {
  Common_Plants: BASEURL + 'getNumberOfUsers',
  Suggested_Plants: BASEURL + 'getNumberOfUsers'
}

export const explore = {
  Suggested_Plants: BASEURL + 'getNumberOfUsers'
}

export const plants = {
  information: BASEURL + 'getNumberOfUsers'
}

export const poisonous_plants = {
  Suggested_plants: BASEURL + 'getNumberOfUser',
  information: BASEURL + 'getNumberOfUsers'
}

export const animals = {
  Suggested_Animals: BASEURL + 'getNumberOfUsers',
  Animal_Info: BASEURL + 'getNumberOfUsers'
}

export const plant_diseases = {
  Suggested_diseases: BASEURL + 'getNumberOfUsers',
  information: BASEURL + 'getNumberOfUsers'
}

export const account_info = {

}
