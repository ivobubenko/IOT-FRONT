export async function getUserData(email) {
  let userData;
  try {
    const response = await fetch(`http://localhost:8080/getUser/${email}`);
    //console.log(await response.json());
    userData = await response.json();
  } catch (e) {
    throw new Error();
  }
  return userData;
}
