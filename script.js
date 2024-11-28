const searchGithub = async () => {
  //html dosyasında verdiğim fonk. kullanıcı verilerini alıp işler.
  const username = document.getElementById("searchInput").value;
  //html deki search input id sine sahip input elemanlarından girilen değeri almak için kullanılır.
  const response = await fetch(`https://api.github.com/users/${username}`);
  //kullanıcı adı girilen kullanıcının verilerini alır.
  const detailsContainer = document.querySelector(".details");
  const data = await response.json();
  if (response.ok) {
    detailsContainer.style.display = "flex";
    //içeriği dinamik bir şekilde güncelemek için aşağıdaki yapıyı kullanırım.
    document.getElementById("result").innerHTML = ` 
        <div class="profile">
         <div class="profile-image">
         <img src="${data.avatar_url}"/>
         </div>
         <div class="profile-details">
         
         <h2 class="name">${data.name || data.login}</h2>
         <p class="username">@${data.login}</p>
         
         <div class="stats">
         <div>
         <div class="stats-name">Public Repo Sayısı</div>
         <div class="stats-value">${data.public_repos}</div>
         </div>
         <div>
         <div class="stats-name">Takipçi Sayısı</div>
         <div class="stats-value">${data.followers}</div>
         </div>
         <div>
         <div class="stats-name">Takip Edilen Sayısı</div>
         <div class="stats-value">${data.following}</div>
         </div>
         </div>
         <div class="media">
         <p>
         
         </p>
         </div>
         </div>
         `;
  } else {
    alert(data.message); //yukarıdaki if koşulu sağlanmazsa kullanıcı bulunamadı demektir ve budurumda alert oluşturur.
  }
};
