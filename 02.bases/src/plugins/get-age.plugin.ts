
// getUUID is a function that returns a UUID
////const getUUID = () => {return uuidv4();}

export const getAge = (birthdate:string) => {

  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}