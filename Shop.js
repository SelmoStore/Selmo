


document.addEventListener('DOMContentLoaded', function () {
  // Retrieve DOM elements
  const elements = {
    SearchBtn: document.getElementById("SearchBtn"),
    ShirtCato: document.getElementById("ShirtCato"),
    SCClose: document.getElementById("SCClose"),
    MMenu: document.getElementById("MMenu"),
    MenuIcon: document.getElementById("MenuIcon"),
    MClose: document.getElementById("MMClose"),
    DisplayedShirt: document.getElementById("DisplayedShirt"),
    ItemImage: document.getElementById("ItemImage"),
    BDDOVBG: document.getElementById("BDDOVBG"),
    BDDiv: document.getElementById("BDDiv"),
    SDDClose: document.getElementById("SDDClose"),
    SizesBtn: document.getElementById("SizesBtn"),
    SOVBG: document.getElementById("SOVBG")
  };

  // Check if elements exist
  for (const [key, element] of Object.entries(elements)) {
    if (!element) {
      console.error(`Element with ID "${key}" is missing.`);
    }
  }

  // Event listeners for Search button and close button
  elements.SearchBtn?.addEventListener('click', function () {
    console.log("Search button clicked");
    console.log(elements.ShirtCato);
    elements.ShirtCato.style.display = "flex";
  });

  elements.SCClose?.addEventListener('click', function () {
    elements.ShirtCato.style.display = "none";
  });

  // Event listeners for Menu Icon and close button
  elements.MenuIcon?.addEventListener('click', function () {
    elements.MMenu.style.display = "block";
  });

  elements.MClose?.addEventListener('click', function () {
    elements.MMenu.style.display = "none";
  });

  // Handle clicks on shirt category headers
  document.querySelectorAll('#ShirtCato h4').forEach(function (header) {
    header.addEventListener('click', function (event) {
      elements.ShirtCato.style.display = "none";
      const RawNameValue = event.target.textContent.trim();
      const NameValue = RawNameValue.toLowerCase();
      const Models = document.querySelectorAll('.Content [name]');

      Models.forEach(function (TheModel) {
        if (NameValue === "all" || TheModel.getAttribute('name').toLowerCase() === NameValue) {
          TheModel.style.display = "block";
        } else {
          TheModel.style.display = "none";
        }
      });
    });
  });

  // Handle shirt color button clicks
  document.querySelectorAll('#ShirtColours .BDColourBtn').forEach(function (button) {
    button.addEventListener('click', function (event) {
      const ShirtColour = event.target.style.backgroundColor;
      const BDdataArrayString = elements.BDDiv.getAttribute('data-array');
      const BDdataArray = JSON.parse(BDdataArrayString);
      BDdataArray[2] = ShirtColour;
      elements.BDDiv.setAttribute('data-array', JSON.stringify(BDdataArray));
      elements.DisplayedShirt.src = `ShirtColours/${ShirtColour}.png`;
    });
  });

  // Function to update border width and color
  function updateBorderWidth() {
    const borderWidth = document.getElementById('BWS')?.value;
    const borderColour = document.getElementById('BCS')?.value;

    if (elements.ItemImage) {
      elements.ItemImage.style.borderWidth = borderWidth;
      elements.ItemImage.style.borderStyle = 'solid';
      elements.ItemImage.style.borderColor = borderColour;
    }
  }

  // Update border width and color periodically
  setInterval(updateBorderWidth, 500);

  // Close BDDiv
  elements.BDDOVBG?.addEventListener('click', function () {
    elements.BDDiv.style.display = "none";
  });

  elements.SDDClose?.addEventListener('click', function () {
    elements.BDDiv.style.display = "none";
  });

  // Show and hide SOVBG
  elements.SizesBtn?.addEventListener('click', function () {
    elements.SOVBG.style.display = "block";
  });

  elements.SOVBG?.addEventListener('click', function () {
    elements.SOVBG.style.display = "none";
  });
});

var CodeDisplayerCopyBtn = document.getElementById("CodeDisplayerCopyBtn");
document.getElementById('CodeDisplayerCopyBtn').addEventListener('click', () => {
  const contentIS = document.getElementById('ShirtBarCodeDisplayer');
  const content = document.getElementById('ShirtBarCodeDisplayer').innerHTML;
  const textarea = document.createElement('textarea');

  CodeDisplayerCopyBtn.style.backgroundColor = "black";
  CodeDisplayerCopyBtn.style.color = "white";
  CodeDisplayerCopyBtn.innerHTML = "Copied!";

  setTimeout(() => {
    CodeDisplayerCopyBtn.style.backgroundColor = "white";
    CodeDisplayerCopyBtn.style.color = "black";
    CodeDisplayerCopyBtn.innerHTML = "Copy";
  }, 1000);

  textarea.value = content;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
})

const BWS = document.getElementById("BWS");
const BCS = document.getElementById("BCS");
const BTS = document.getElementById("BTS");
const BLS = document.getElementById("BLS");
const SHC = document.getElementById("ShirtColours");

// Retrieve and parse the data-array attribute
function getDataArray() {
  const div = document.getElementById('BDDiv');
  return JSON.parse(div.getAttribute('data-array'));
}

// Set the data-array attribute to a new array
function setDataArray(newArray) {
  const div = document.getElementById('BDDiv');
  div.setAttribute('data-array', JSON.stringify(newArray));
}

// Get a value from a specific index
function getValue(index) {
  const dataArray = getDataArray();
  return dataArray[index];
}

// Set a value at a specific index
function setValue(index, newValue) {
  const dataArray = getDataArray();
  if (index >= 0 && index < dataArray.length) {
    dataArray[index] = newValue;
    setDataArray(dataArray);
    updateShirtCode(); // Update the display after changing the value
  } else {
    console.error('Index out of bounds');
  }
}

// Get the selected value of a dropdown element by its ID
function getDropdownValue(id) {
  const dropdown = document.getElementById(id);
  return dropdown ? dropdown.value : '';
}

// Update the displayed text based on the current data-array values and dropdown selections
function updateShirtCode() {
  const [season, model, color, size, borderThickness, borderColor, imageLocation] = getDataArray();

  // Get the values from the dropdown elements
  const borderThicknessDropdownValue = getDropdownValue('BWS');
  const borderColorDropdownValue = getDropdownValue('BCS');
  const sizeDropdownValue = getDropdownValue('BTS');
  const imageLocationDropdownValue = getDropdownValue('BLS');

  // Construct the updated code string in uppercase
  const updatedCode = `${season} ${model}-${color}-${sizeDropdownValue}-B: ${borderThicknessDropdownValue} ${borderColorDropdownValue} - ${imageLocationDropdownValue}`.toUpperCase();

  // Update the displayed text
  document.getElementById('ShirtBarCodeDisplayer').textContent = updatedCode;
}

// Initialize the display
updateShirtCode();

// Update display every second
setInterval(updateShirtCode, 1000);



const LOADING = document.getElementById("LOADING");
setTimeout(() => {
  LOADING.style.display = "none";
}, 60000);
