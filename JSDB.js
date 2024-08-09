window.onload = function () {
  const Summer = 20;
  const Animals = 55;
  const Anime = 37;
  const Palastine = 9;
  const Arabic = 21;
  const Art = 26;
  const Cars = 20;
  const Dc = 20;
  const Food = 37;
  const Chess = 30;
  const Football = 41;
  const Gamming = 30;
  const Gym = 32;
  const Jobs = 26;
  const Mafia = 20;
  const Motivation = 23;
  const Movie = 35;
  const Nature = 37;
  const Pixel = 28;
  const Science = 21;
  const Sport = 39;
  const Marvel = 50;
  const Cartoon = 110;

  const Categories = [
    Summer, Pixel, Animals, Anime, Palastine, Arabic, Art, Cars, Dc, Food, Chess, Football,
    Gamming, Gym, Jobs, Mafia, Motivation, Movie, Nature, Science, Sport, Marvel, Cartoon
  ];
  const CategoriesNames = [
    "Summer", "Pixel", "Animals", "Anime", "Palastine", "Arabic", "Art", "Cars", "Dc",
    "Food", "Chess", "Football", "Gamming", "Gym", "Jobs", "Mafia", "Motivation",
    "Movie", "Nature", "Science", "Sport", "Marvel", "Cartoon"
  ];

  function checkImage(url, onSuccess, onError) {
    const img = new Image();
    img.onload = () => onSuccess(url);
    img.onerror = () => {
      console.error("Failed to load image: " + url);
      onError(url);
    };
    img.src = url;
  }

  function checkAllFormats(TryLink, onSuccess) {
    const formats = ['.jpeg'];
    let checkedFormats = 0;

    function handleFormat(url) {
      checkImage(url, (loadedUrl) => {
        onSuccess(loadedUrl);
      }, (failedUrl) => {
        checkedFormats++;
      });
    }

    formats.forEach(format => handleFormat(TryLink + format));
  }

  for (let N = 0; N < Categories.length; N++) {
    for (let i = 1; i <= Categories[N]; i++) {
      const Folder = "Designs";
      const Cate = CategoriesNames[N];

      // Define TryLink with const
      const TryLink = Cate === "Cartoon"
        ? `${Folder}/${Cate}/Cart (${i})`
        : `${Folder}/${Cate}/${i}`;

      console.log(`Trying link: ${TryLink}`); // Debug line to verify link paths

      checkAllFormats(TryLink, (ImgLink) => {
        PrintImages(ImgLink, Cate, i);
      });
    }
  }

  function PrintImages(ImgLink, imgName, ImgCode) {
    const Content = document.getElementById('Content');

    const itemBox = document.createElement('div');
    itemBox.classList.add('ItemBox');
    itemBox.setAttribute('name', imgName);

    const dataArray = [imgName, ImgCode];
    itemBox.setAttribute('data-array', JSON.stringify(dataArray));

    const img = document.createElement('img');
    img.src = 'BlackFav.png';
    img.style.height = '25px';
    img.style.marginLeft = '15px';
    img.style.marginTop = '15px';
    itemBox.appendChild(img);

    const innerDiv = document.createElement('div');
    innerDiv.classList.add('Item');

    const itemImg1 = document.createElement('img');
    itemImg1.src = 'ShirtColours/white.png';
    itemImg1.classList.add('ItemImg');
    innerDiv.appendChild(itemImg1);

    const itemImg2 = document.createElement('img');
    itemImg2.src = ImgLink;
    itemImg2.classList.add('ItemImage');
    innerDiv.appendChild(itemImg2);

    const IMWaterMark = document.createElement('img');
    IMWaterMark.src = "WaterMark.png";
    IMWaterMark.classList.add('ItemImage');
    innerDiv.appendChild(IMWaterMark);

    itemBox.appendChild(innerDiv);
    Content.appendChild(itemBox);

    itemBox.addEventListener('click', function () {
      var BDDiv = document.getElementById("BDDiv");
      var BDT = document.getElementById("BDT");

      // Retrieve the data-array attribute from BDDiv
      var BDdataArrayString = BDDiv.getAttribute('data-array');
      // Parse the JSON string into a JavaScript array
      var BDdataArray = JSON.parse(BDdataArrayString);

      BDDiv.style.display = "flex";
      // Assuming ItemImage and ImgLink are defined elsewhere
      // Set the src attribute of ItemImage
      ItemImage.src = ImgLink;

      // Update the innerHTML of BDT with BCate and BCode
      BDT.innerHTML = imgName + " Model: " + ImgCode;

      // Modify dataArray

      BDdataArray[0] = imgName;
      BDdataArray[1] = ImgCode;
      BDdataArray[2] = 'black';
      BDdataArray[3] = '6y';
      BDdataArray[4] = 'no';
      BDdataArray[5] = 'front';
      BDdataArray[6] = 'BorColour';

      BDdataArrayString = JSON.stringify(BDdataArray);
      BDDiv.setAttribute('data-array', BDdataArrayString);

    })
  }
}
