

export async function getAllPictures() {
   console.log("i in get All Prictures");
   let response = await fetch('http://localhost:3080/photo/pictures', {
      method: 'GET',
      headers: {
         'Content-Type': 'application/json',
      }
   });
   return response.json();
  
}

