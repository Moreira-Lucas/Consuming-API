async function getContent(){
  function show(users){
    let output = '';
    for(let user of users){
      output += `<li>${user.name}</li>`;
    }
    const main = document.querySelector('main');
    main.innerHTML = output;
  }  

  try {
    const response = await fetch('http://localhost:2323/');
    const data = await response.json();
    show(data);

  } catch (error) {
    console.error(error);
  }
}
