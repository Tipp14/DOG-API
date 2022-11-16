import axios from "axios";
async function fetchDoggie(){
  const doggieData = await axios.get("https://dog.ceo/api/breeds/image/random")
}
async function fetchDoggie() {
  try {
    const doggieData = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    )
    //log out the data returned by the axios call
    console.log(doggieData);
  } catch(error){
    console.log("Uh oh theres an error", error)
  }
}
