let spaceOrder = "";
let blocksOrder1 = "";
let blocksOrder2 = "";
let blocksOrder3 = "";

const modal1Remove = document.getElementById('modal1');
const modal2Remove = document.getElementById('modal2');
const modal3Remove = document.getElementById('modal3');
const modal1 = modal1Remove.innerHTML;
const modal2 = modal2Remove.innerHTML;
const modal3 = modal3Remove.innerHTML;
window.onload = () => {
  modal1Remove.remove();
  modal2Remove.remove();
  modal3Remove.remove();
}

Sortable.create(spaceList, {
    handle: '.collapsible-menu__label-toggle',
    animation: 150,
    delay: 100,
    delayOnTouchOnly: true,
    ghostClass: 'ghost-line-horizontal',
    store: {
      /**
       * Get the order of elements. Called once during initialization.
       * @param   {Sortable}  sortable
       * @returns {Array}
       */
      get: function (sortable) {
        var order = localStorage.getItem(sortable.options.group.name);
        spaceOrder = order ? order.split('|') : [];
        return order ? order.split('|') : [];
      },
  
      /**
       * Save the order of elements. Called onEnd (when the item is dropped).
       * @param {Sortable}  sortable
       */
      set: function (sortable) {
        var order = sortable.toArray();
        localStorage.setItem(sortable.options.group.name, order.join('|'));
      }
    }
});
  
Sortable.create(blockSpace1, {
  handle: '.block-container',
  animation: 150,
  delay: 100,
  delayOnTouchOnly: true,
  ghostClass: 'ghost-line-vertical',
  store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
      var order = localStorage.getItem(sortable.options.group.name);
      blocksOrder1 = order ? order.split('|') : [];
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
    }
  }
});

Sortable.create(blockSpace2, {
  handle: '.block-container',
  animation: 150,
  delay: 100,
  delayOnTouchOnly: true,
  ghostClass: 'ghost-line-vertical',
  store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
      var order = localStorage.getItem(sortable.options.group.name);
      blocksOrder2 = order ? order.split('|') : [];
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
    }
  }
});

Sortable.create(blockSpace3, {
  handle: '.block-container',
  animation: 150,
  delay: 100,
  delayOnTouchOnly: true,
  ghostClass: 'ghost-line-vertical',
  store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
      var order = localStorage.getItem(sortable.options.group.name);
      blocksOrder3 = order ? order.split('|') : [];
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			var order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
    }
  }
});


customElements.define('modal-page', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = modal1;
  }
});

customElements.define('modal-page2', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = modal2;
  }
});

customElements.define('modal-page3', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = modal3;
  }
});

function selectPhoto(elem) {
  if (elem.classList.contains('photo-item--selected')) {
    elem.classList.remove('photo-item--selected');
    elem.innerHTML = "";
    let photoCounter = document.getElementById('selectedPhotos').innerHTML;
    photoCounter--;
    document.getElementById('selectedPhotos').innerHTML = photoCounter;
    return;
  }
  elem.classList.add('photo-item--selected');
  elem.innerHTML = `<ion-icon class="check-icon" name="checkmark"></ion-icon>`;
  let photoCounter = document.getElementById('selectedPhotos').innerHTML;
  photoCounter++;
  document.getElementById('selectedPhotos').innerHTML = photoCounter;
}

function addPhoto() {
  // create the modal with the `modal-page` component
  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page';

  // present the modal
  document.body.appendChild(modalElement);
  return modalElement.present();
}

async function dismissModal() {
  
  const modal = document.querySelector('ion-modal');
  await modal.dismiss({
    'dismissed': true
  });
}

function seeGallery() {

  dismissModal();

  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page2';
  document.body.appendChild(modalElement);
  
  return modalElement.present();
}

function makeFavorite(elem) {
  if (elem.classList.contains('shiny-star')) {
    elem.classList.remove('shiny-star');
  return;
  }
  
  elem.classList.add('shiny-star');
}

function seeDetails() {

  dismissModal();

  const modalElement = document.createElement('ion-modal');
  modalElement.component = 'modal-page3';
  document.body.appendChild(modalElement);
  
  return modalElement.present();
}

function createSpace() {
  let defaultSpace = document.getElementById('defaultSpace');
  let defaultButton = document.getElementById('defaultButton');
  let createCategory = document.getElementById('createCategory');
  let createCategoryButton = document.getElementById('createCategoryButton');
  let spacesContent = document.getElementById('spacesContent');

  defaultSpace.classList.add('element-hide');
  defaultButton.classList.add('element-hide');
  spacesContent.classList.add('element-hide');

  createCategory.classList.remove('element-hide');
  createCategoryButton.classList.remove('element-hide');
}

function createSpaceButton() {
  let defaultSpace = document.getElementById('defaultSpace');
  let defaultButton = document.getElementById('defaultButton');
  let createCategory = document.getElementById('createCategory');
  let createCategoryButton = document.getElementById('createCategoryButton');
  let spacesContent = document.getElementById('spacesContent');

  defaultSpace.classList.remove('element-hide');
  defaultButton.classList.remove('element-hide');
  spacesContent.classList.remove('element-hide');

  createCategory.classList.add('element-hide');
  createCategoryButton.classList.add('element-hide');
}

function isNewCategory() {
  let selCategory = document.getElementsByName("spacesCategory")[0];
  console.log(selCategory.options[selCategory.selectedIndex]);
  if (selCategory.options[selCategory.selectedIndex].value == "create") {
    document.getElementById("newCategoryName").classList.remove("element-hide");
    document.getElementById("newCategoryName_title").classList.remove("element-hide");
  }
  else {
      document.getElementById("newCategoryName").classList.add("element-hide");
      document.getElementById("newCategoryName_title").classList.add("element-hide");
  }
}

function showDescription() {
  let commentInput = document.getElementById('commentInput');
  let inputStoreOrientation = document.getElementById('inputStoreOrientation');

  if (commentInput.classList.contains('element-hide')) {
    commentInput.classList.remove('element-hide');
    inputStoreOrientation.classList.add('element-hide');
    return;
  }
  commentInput.classList.add('element-hide');
}

function tooltipAction() {
  let tooltip = document.getElementById('tooltip');

  if (tooltip.classList.contains('show-tooltip')) {
    tooltip.classList.remove('show-tooltip');
    return;
  }
  tooltip.classList.add('show-tooltip');
}

function showPhotoMenu() {
  window.alert("show menu options: Comentar, Apagar, etc.");
}

function publishManual() {
  window.open("manualPublished.html", "_self");
}


// Get the modal
var modal = document.getElementById("confirmPublishModal");

// Get the button that opens the modal
var btnBlue = document.getElementById("defaultButton");

// Get the <span> element that closes the modal
var btnRed = document.getElementById("modal_cancel");

// When the user clicks on the button, open the modal
btnBlue.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
btnRed.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}