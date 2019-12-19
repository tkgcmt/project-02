let spaceOrder = "";
let blocksOrder1 = "";
let blocksOrder2 = "";
let blocksOrder3 = "";


Sortable.create(spaceList, {
    handle: '.collapsible-menu__label-toggle',
    animation: 150,
    delay: 100,
    delayOnTouchOnly: true,
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
    this.innerHTML = `
      <div class="header">
        <div class="header__title">{{ header }}</div> 
      </div>
      <ion-content class="ion-padding">
        <div class="photo-selection__actions">
          <div class="photo-selection-text">
            Selecionado <div class="selected-photos-counter" id="selectedPhotos">1</div> fotos
          </div>
          <div class="photo-selection-button" onclick="seeGallery()">
            OK
          </div>
        </div>

        <div class="photo-grid">
          <div class="photo-item photo-item--selected" onclick="selectPhoto(this)"><ion-icon class="check-icon" name="checkmark"></ion-icon></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)" ></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
          <div class="photo-item" onclick="selectPhoto(this)"></div>
        </div>  
      </ion-content>`;
  }
});

customElements.define('modal-page2', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="gallery-main-image">
        <div class="photo-display-header">
          <div class="photo-display-header__icons">
            <div class="left-icons">
              <ion-icon class="gallery-icons" name="arrow-back" onclick="dismissModal()"></ion-icon>
              <div class="thrash-icon-container">
              <ion-icon class="gallery-icons" name="trash" onclick="tooltipAction()">
              </ion-icon>
              <div id="tooltip" class="tooltip">
                Tem certeza de que quer apagar essa foto? Essa ação não poderá ser desfeita.

                <div class="tooltip-buttons">
                  <div class="tooltip-blue-button" onclick="tooltipAction()">
                    cancelar
                  </div>
                  <div class="tooltip-red-button" onclick="dismissModal()">
                    apagar
                </div>
                </div>
              </div>
              </div>

            </div>
            <div class="right-icons">
              <ion-icon class="gallery-icons" name="chatbubbles" onclick="showDescription()"></ion-icon>
              <ion-icon class="gallery-icons" name="star" onclick="makeFavorite(this)"></ion-icon>
              <ion-icon class="gallery-icons" name="checkmark" onclick="seeDetails()"></ion-icon>
            </div>
          </div> 
        </div>

        <div class="gallery-footer-container">
          <div id="inputStoreOrientation" class="comment-input">
            <div class="comment-input__text" onclick="showDescription();">
              Digite a orientação para a loja...
            </div>
          </div>

          <div id="commentInput" class="comment-input element-hide">
              <div class="comment-input__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
          </div>

          <div class="photo-display-footer">
          <div id="blockSpace4" class="space">
            <div class="block-container block-gallery-container">
              <div class="block block-gallery photo-item--selected block03" draggable="true" ondragstart="drag(event)"></div>
              <ion-icon class="block-gallery-icon shiny-star" name="star"></ion-icon>
            </div>
            
            <div class="block-container">
              <div class="block-add block-gallery add-item-block" >
                <ion-icon class="icon-add-gallery" name="add"></ion-icon>
                <div class="block-gallery-details-text">    
                  Detalhe
                </div>
              </div>

            </div>

            <div class="block-container">
              <div class="block block-gallery block04" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="block-container">
              <div class="block block-gallery block05" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="block-container">
              <div class="block block-gallery block06" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="block-container">
              <div class="block block-gallery block07" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="block-container">
              <div class="block block-gallery block08" draggable="true" ondragstart="drag(event)"></div>
            </div>
            <div class="block-container">
              <div class="block block-gallery block09" draggable="true" ondragstart="drag(event)"></div>
            </div>         
          </div> 
        </div>
      </div>
    </div>
      `;
  }
});

customElements.define('modal-page3', class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="details-container__header">
        <ion-icon class="gallery-icons" name="arrow-back" onclick="dismissModal()"></ion-icon>
        <div class="details-container__header-title">
          Gerenciar fotos do item 
        </div> 
      </div>
      <ion-content>
        <div class="details-container">
          <div class="details-container__title">
            Foto principal
            <ion-icon class="gallery-icons shiny-star" name="star"></ion-icon>
          </div>
          <div class="details-container__photo">
            <img class="details-container__image" src="./assets/images/png/untitled.png"/>
            <div class="details-container__menu" onclick="showPhotoMenu()"><span class="details-container-menu__icon"></span></div>
          </div>
          <div class="block-description details-container__description">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</div>
          <div class="details-container__details">
            Detalhes
          </div>
          <div class="details-container__blocks">
            <div class="block-container">
              <div class="block-add block-details" draggable="false"><ion-icon class="icon-add" name="add"></ion-icon></div>
                  <div class="block-description">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</div>
                </div>
            <div class="block-container">
              <div class="block block-details block05"></div>
              <div class="block-description">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</div>
              <div class="details-container__menu" onclick="showPhotoMenu()" id="menu05"><span class="details-container-menu__icon"></span></div>
            </div>
            <div class="block-container">
              <div class="block block-details block06"></div>
              <div class="block-description">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure</div>
              <div class="details-container__menu" onclick="showPhotoMenu()" id="menu06"><span class="details-container-menu__icon"></span></div>
            </div>
            <div class="block-container">
              <div class="block block-details block07"></div>
              <div class="block-description">oi oi oi</div>
              <div class="details-container__menu" onclick="showPhotoMenu()" id="menu07"><span class="details-container-menu__icon"></span></div>
            </div>
            <div class="block-container">
              <div class="block block-details block08"></div>
              <div class="block-description">oi oi oi</div>
              <div class="details-container__menu" onclick="showPhotoMenu()" id="menu08"><span class="details-container-menu__icon"></span></div>
            </div>
            <div class="block-container">
              <div class="block block-details block09"></div>
              <div class="block-description">oi oi oi</div>
              <div class="details-container__menu" onclick="showPhotoMenu()" id="menu09"><span class="details-container-menu__icon"></span></div>
            </div>        
          </div>
        </div>
      </ion-content>`;
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