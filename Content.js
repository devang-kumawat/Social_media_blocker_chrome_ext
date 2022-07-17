const generateSTYLES = () => {
    return `<style>body {
      background-color: rgb(249, 249, 44);
    }
    .center {
      display: block;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }
    .image {
      padding-top: 50px;
      display: block;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }
    .error {
      text-align: center;
    }
    ._404 {
      font-size: 30px;
      font-family: fantasy;
      color: red;
    }
    ._1,
    ._2 {
      color: brown;
      font-size: 25px;
      font-weight: bold;
    }
     </style>`;
  };
  
  const generateHTML = (pageName) => {
    return `
    <div class="center">
    <img src="https://indianmemetemplates.com/wp-content/uploads/Bhai-kya-kar-raha-hai-tu-1024x711.jpg" alt="" class="image" />
    <div class="error">
      <div class="_404">ERROR-404!! You are distracted..</div>
      <hr />
      <div class="_1">GET BACK TO WORK</div>
      <div class="_2">STUDYING > ${pageName}</div>
    </div>
  </div>;
     `;
  };
  
  switch (window.location.hostname) {
    case "www.youtube.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("YOUTUBE");
      break;
    case "www.facebook.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("FACEBOOK");
      break;
    case "www.netflix.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("NETFLIX");
      break;
    case "web.whatsapp.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("WHATSAPP");
      break;
    case "discord.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("DISCORD");
      break;
    case "www.spotify.com":
      document.head.innerHTML = generateSTYLES();
      document.body.innerHTML = generateHTML("SPOTIFY");
      break;
  }