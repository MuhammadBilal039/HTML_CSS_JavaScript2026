const camraFeed = document.getElementById("camraFeed");
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    camraFeed.srcObject = stream;
  })
  .catch((error) => {
    console.log(error);
  });
