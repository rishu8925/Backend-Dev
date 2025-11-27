// Select DOM elements
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

let currentEditingItem = null; // Track item being edited

// ------------------------------
// Add New Product
// ------------------------------
addBtn.addEventListener("click", () => {
  const productName = productInput.value.trim();

  if (productName === "") return;

  addProductItem(productName);
  productInput.value = "";
});

// Function to append item to <ul>
function addProductItem(name) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span class="product-name">${name}</span>
    <div>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    </div>
  `;

  productList.appendChild(li);
}

// ---------------------------------------
// Event Delegation for Edit / Delete
// ---------------------------------------
productList.addEventListener("click", (e) => {
  const target = e.target;

  // DELETE
  if (target.classList.contains("deleteBtn")) {
    target.closest("li").remove();
  }

  // EDIT
  if (target.classList.contains("editBtn")) {
    enterEditMode(target.closest("li"));
  }
});

// ---------------------------------------
// Enter Edit Mode
// ---------------------------------------
function enterEditMode(li) {
  if (currentEditingItem) {
    saveEdit(currentEditingItem);
  }

  const nameSpan = li.querySelector(".product-name");
  const currentText = nameSpan.textContent;

  // Replace span with input
  nameSpan.outerHTML = `<input class="edit-input" type="text" value="${currentText}">`;

  currentEditingItem = li;
}

// ---------------------------------------
// Save Edit (auto-save and button-save)
// ---------------------------------------
function saveEdit(li) {
  const input = li.querySelector(".edit-input");
  if (!input) return;

  const newValue = input.value.trim() || "Unnamed Product";

  input.outerHTML = `<span class="product-name">${newValue}</span>`;
  currentEditingItem = null;
}

// ---------------------------------------
// Auto-save when clicking outside
// ---------------------------------------
document.addEventListener("click", (e) => {
  if (currentEditingItem && !currentEditingItem.contains(e.target)) {
    saveEdit(currentEditingItem);
  }
});
