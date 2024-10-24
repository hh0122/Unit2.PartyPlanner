// grab the button
const button = document.querySelector(`button`);
button.addEventListener(`click`, async (event) =>{ //add button event
  event.preventDefault(); //prevent the website from refreshing
  // fetch url
  const response = await fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2409-ftb-et-web-ft/events`);
  const partyData = await response.json();
  // console.log(partyData.data);
  
  // console.log(partyData)
  
  const dataDetail = partyData.data;
  // console.log(toan)
  
  //go through party array
    for ( let i = 0; i<dataDetail.length; i++){
      // console.log(dataDetail[i])
      const partyLI = document.createElement(`li`);
      partyLI.innerHTML= `
      <h3>ID: ${dataDetail[i].id}  </h3>
      <h3>Name: ${dataDetail[i].name}  </h3>
      <h3>Description:  </h3> <p> ${dataDetail[i].description} </p>
      <h3>Date: ${dataDetail[i].date}  </h3>
      <h3>Location: ${dataDetail[i].location}  </h3>
      
      `
      //grab ol
      const ol = document.querySelector(`ol`);
      //make li appear in ol
      ol.append(partyLI);

    }
  });