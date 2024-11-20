    const params = new URLSearchParams(window.location.search);
    const userId = params.get("id");
    let goBack = document.querySelector(".go-back");

    const cards = JSON.parse(localStorage.getItem("cards"));

    const user = cards.find((u) => u.id === parseInt(userId));

    const infoDiv = document.getElementById("info");
    if (user) {
      infoDiv.innerHTML = `
        <h2>Name: ${user.name}</h2>
        <h3>Username: ${user.username}</h3>
        <p>Email: ${user.email}</p>
        <p>address.street: ${user.address.street}</p>
        <p>address.suite: ${user.address.suite}</p>
        <p>address.city: ${user.address.city}</p>
        <p>address.zipcode: ${user.address.zipcode}</p>
        <p>address.geo.lat: ${user.address.geo.lat}</p>
        <p>address.geo.lng: ${user.address.geo.lng}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <p>company.name: ${user.company.name}</p>
        <p>company.catchPhrase: ${user.company.catchPhrase}</p>
        <p>company.bs: ${user.company.bs}</p>
      `;
    } else {
      infoDiv.innerHTML = `<p>User not found</p>`;
    }

    goBack.addEventListener("click", () => {
      window.location.replace("./index.html");
    });