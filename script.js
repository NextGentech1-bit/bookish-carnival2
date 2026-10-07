const databaseClothes = Array.from({ length: 359 }, (_, index) => {
  const imageNumber = index + 1;
  const extension = imageNumber === 359 ? "png" : "jpg";

  return {
    id: 100 + imageNumber,
    name: `Clothing Product ${String(imageNumber).padStart(3, "0")}`,
    category: "Clothes",
    price: 45 + (imageNumber % 8) * 10,
    rating: 4.5 + (imageNumber % 5) / 10,
    badge: imageNumber % 3 === 0 ? "New" : "Clothing",
    image: `database/clothes/img${imageNumber}.${extension}`,
    description: "Fashion item selected from the KubeCart clothing collection.",
  };
});

const databaseGadgets = Array.from({ length: 8 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    id: 500 + imageNumber,
    name: `Gadget Product ${String(imageNumber).padStart(3, "0")}`,
    category: "Gadgets",
    price: 85 + (imageNumber % 8) * 15,
    rating: 4.5 + (imageNumber % 5) / 10,
    badge: imageNumber % 2 === 0 ? "New" : "Gadget",
    image: `database/gadgets/img${imageNumber}.jpg`,
    description: "Useful technology selected from the KubeCart gadget collection.",
  };
});

const databaseJewelry = Array.from({ length: 8 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    id: 600 + imageNumber,
    name: `Jewelry Product ${String(imageNumber).padStart(3, "0")}`,
    category: "Jewelry",
    price: 90 + (imageNumber % 8) * 20,
    rating: 4.5 + (imageNumber % 5) / 10,
    badge: imageNumber % 2 === 0 ? "New" : "Jewelry",
    image: `database/jewelries/img${imageNumber}.jpg`,
    description: "Elegant accessory selected from the KubeCart jewelry collection.",
  };
});

const databaseClothingAccessories = Array.from({ length: 17 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    id: 800 + imageNumber,
    name: `Clothing Accesory ${String(imageNumber).padStart(3, "0")}`,
    category: "Clothing Accesories",
    price: 25 + (imageNumber % 8) * 8,
    rating: 4.5 + (imageNumber % 5) / 10,
    badge: imageNumber % 2 === 0 ? "New" : "Accessory",
    image: `database/clothing accesories/img${imageNumber}.jpg`,
    description: "Fashion accessory selected from the KubeCart collection.",
  };
});

const bagAccessory = {
  id: 818,
  name: "Bag",
  category: "Clothing Accesories",
  price: 65,
  rating: 4.8,
  badge: "Featured",
  image: "database/clothing accesories/bag.jpg",
  description: "A practical fashion bag selected from the KubeCart accessories collection.",
};

const databaseShoes = Array.from({ length: 46 }, (_, index) => {
  const imageNumber = index + 1;

  return {
    id: 900 + imageNumber,
    name: `Shoe Product ${String(imageNumber).padStart(3, "0")}`,
    category: "Shoes",
    price: 70 + (imageNumber % 8) * 15,
    rating: 4.5 + (imageNumber % 5) / 10,
    badge: imageNumber % 2 === 0 ? "New" : "Footwear",
    image: `database/shoes/img${imageNumber}.jpg`,
    description: "Footwear selected from the KubeCart shoe collection.",
  };
});

const additionalHotelImages = [
  "edit1.png",
  "edit2.png",
  "edit19.png",
  "edit20.png",
  "edit21.png",
  "edit22.png",
  "edit23.png",
  "edit24.png",
  "edit25.png",
  "edit26.png",
  "edit27.png",
  "edit28.png",
  "edit29.png",
  "amg2.avif",
  "e67b8d1d-dc59-4f5e-b450-c0cdd17e2cc9.png",
  "photo-1556911220-bff31c812dba.avif",
];

const additionalHotelProducts = additionalHotelImages.map((imageName, index) => ({
  id: 700 + index,
  name: `Hotel Dining Product ${String(index + 1).padStart(3, "0")}`,
  category: "Hotel Cutlery & Plates",
  price: 150 + (index % 8) * 15,
  rating: 4.5 + (index % 5) / 10,
  badge: index % 2 === 0 ? "Hotel Pick" : "New",
  image: `database/hotel equipments/${imageName}`,
  description: "Hospitality dining equipment selected from the KubeCart collection.",
}));

const catalogProducts = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    category: "Clothes",
    price: 72,
    rating: 4.8,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
    description: "Premium everyday shirt for smart casual comfort.",
  },
  {
    id: 3,
    name: "Urban Runner X",
    category: "Shoes",
    price: 128,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description: "Lightweight sports shoes built for comfort and pace.",
  },
  {
    id: 4,
    name: "Thunder Pro Speaker",
    category: "Gadgets",
    price: 178,
    rating: 4.9,
    badge: "Hot",
    image:
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80",
    description: "Powerful wireless sound with bass and clarity.",
  },
  {
    id: 5,
    name: "Luna Home Lamp",
    category: "Home Equipment",
    price: 84,
    rating: 4.6,
    badge: "Home Pick",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    description: "Modern lighting that transforms your living space.",
  },
  {
    id: 6,
    name: "Premium Dining Set",
    category: "Hotel Cutlery & Plates",
    price: 210,
    rating: 4.8,
    badge: "Luxury",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    description: "Elegant hospitality dining set for premium service.",
  },
  {
    id: 7,
    name: "Silk Evening Dress",
    category: "Clothes",
    price: 140,
    rating: 4.9,
    badge: "Top Rated",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
    description: "Sophisticated evening wear with refined elegance.",
  },
  {
    id: 9,
    name: "Aero Smartwatch",
    category: "Gadgets",
    price: 220,
    rating: 4.8,
    badge: "Deal",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Track fitness, sleep, and notifications in style.",
  },
  {
    id: 10,
    name: "Chef Pro Cutlery Kit",
    category: "Hotel Cutlery & Plates",
    price: 118,
    rating: 4.7,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80",
    description: "Hotel-grade cutlery set built for everyday dining.",
  },
  {
    id: 11,
    name: "Signature Leather Boots",
    category: "Shoes",
    price: 175,
    rating: 4.8,
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80",
    description: "Durable premium boots for work and weekend looks.",
  },
  {
    id: 12,
    name: "Smart Home Cleaner",
    category: "Home Equipment",
    price: 99,
    rating: 4.6,
    badge: "Value",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    description: "Compact home equipment for modern cleaning tasks.",
  },
  {
    id: 15,
    name: "Signature Hotel Bowl",
    category: "Hotel Cutlery & Plates",
    price: 160,
    rating: 4.7,
    badge: "Popular",
    image: "database/hotel equipments/edit3.png",
    description: "Strong and stylish serving bowl for restaurant use.",
  },
  {
    id: 16,
    name: "Elegant Soup Plate",
    category: "Hotel Cutlery & Plates",
    price: 155,
    rating: 4.8,
    badge: "Premium",
    image: "database/hotel equipments/edit4.png",
    description: "Fine soup plate designed for polished hotel dining.",
  },
  {
    id: 17,
    name: "Classic Serving Tray",
    category: "Hotel Cutlery & Plates",
    price: 210,
    rating: 4.9,
    badge: "Top Pick",
    image: "database/hotel equipments/edit5.png",
    description: "Elegant tray for hotel breakfasts and buffet layouts.",
  },
  {
    id: 18,
    name: "Premium Flatware Kit",
    category: "Hotel Cutlery & Plates",
    price: 195,
    rating: 4.8,
    badge: "Featured",
    image: "database/hotel equipments/edit6.png",
    description: "A refined flatware collection for upscale dining rooms.",
  },
  {
    id: 19,
    name: "Deluxe Dinner Plate",
    category: "Hotel Cutlery & Plates",
    price: 175,
    rating: 4.7,
    badge: "Luxury",
    image: "database/hotel equipments/edit7.png",
    description: "Durable dinner plate with a polished hotel finish.",
  },
  {
    id: 20,
    name: "Modern Cutlery Set",
    category: "Hotel Cutlery & Plates",
    price: 168,
    rating: 4.6,
    badge: "New",
    image: "database/hotel equipments/edit8.png",
    description: "Contemporary set for cafes, hotels, and events.",
  },
  {
    id: 21,
    name: "Executive Serving Bowl",
    category: "Hotel Cutlery & Plates",
    price: 220,
    rating: 4.9,
    badge: "Luxury",
    image: "database/hotel equipments/edit9.png",
    description: "Large serving bowl built for executive dining setups.",
  },
  {
    id: 22,
    name: "Traditional Plate Collection",
    category: "Hotel Cutlery & Plates",
    price: 230,
    rating: 4.8,
    badge: "Classic",
    image: "database/hotel equipments/edit10.png",
    description: "A timeless collection for restaurant and hotel service.",
  },
  {
    id: 23,
    name: "Chef Approved Cutlery",
    category: "Hotel Cutlery & Plates",
    price: 205,
    rating: 4.7,
    badge: "Popular",
    image: "database/hotel equipments/edit11.png",
    description: "Professional cutlery that balances durability and style.",
  },
  {
    id: 24,
    name: "Premium Salad Bowl",
    category: "Hotel Cutlery & Plates",
    price: 170,
    rating: 4.7,
    badge: "Fresh",
    image: "database/hotel equipments/edit12.png",
    description: "Wide salad bowl ideal for buffet and hotel presentation.",
  },
  {
    id: 25,
    name: "Silver Gold Dining Set",
    category: "Hotel Cutlery & Plates",
    price: 245,
    rating: 5.0,
    badge: "Luxury",
    image: "database/hotel equipments/edit13.png",
    description: "Luxury dining set for high-end hospitality environments.",
  },
  {
    id: 26,
    name: "Bistro Dessert Plate",
    category: "Hotel Cutlery & Plates",
    price: 150,
    rating: 4.6,
    badge: "Sweet",
    image: "database/hotel equipments/edit14.png",
    description: "Refined dessert plates that elevate presentation.",
  },
  {
    id: 27,
    name: "Refined Serving Set",
    category: "Hotel Cutlery & Plates",
    price: 215,
    rating: 4.8,
    badge: "Elegant",
    image: "database/hotel equipments/edit15.png",
    description: "Specially designed hospitality set for elegant tables.",
  },
  {
    id: 28,
    name: "Vintage Hotel Bowl",
    category: "Hotel Cutlery & Plates",
    price: 180,
    rating: 4.7,
    badge: "Classic",
    image: "database/hotel equipments/edit16.png",
    description: "Vintage-inspired bowl fit for premium service interiors.",
  },
  {
    id: 29,
    name: "Grand Banquet Set",
    category: "Hotel Cutlery & Plates",
    price: 260,
    rating: 5.0,
    badge: "Banquet",
    image: "database/hotel equipments/edit17.png",
    description: "Banquet-ready dining set for weddings and hospitality events.",
  },
  {
    id: 30,
    name: "Elite Hotel Essentials",
    category: "Hotel Cutlery & Plates",
    price: 200,
    rating: 4.9,
    badge: "Elite",
    image: "database/hotel equipments/edit18.png",
    description: "A complete hotel essentials set for stylish service.",
  },
  ...databaseClothes,
  ...databaseGadgets,
  ...databaseJewelry,
  ...databaseClothingAccessories,
  bagAccessory,
  ...databaseShoes,
  ...additionalHotelProducts,
];

function getCart() {
  const savedCart = localStorage.getItem("kubeCartItems");
  return savedCart ? JSON.parse(savedCart) : [];
}

function saveCart(cart) {
  localStorage.setItem("kubeCartItems", JSON.stringify(cart));
}

function updateCartCount() {
  const cartCount = document.querySelector(".cart-count");
  if (!cartCount) return;

  const cart = getCart();
  cartCount.textContent = String(cart.length);
}

function setupAddToCart() {
  const addToCartButtons = document.querySelectorAll(".product-row button, .catalog-card button");
  const cartCount = document.querySelector(".cart-count");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".product-card");
      const productName = card?.querySelector("h3")?.textContent || "Product";
      const productPrice = Number(card?.querySelector("strong")?.textContent?.replace(/[^0-9.]/g, "") || 0);
      const productImage = card?.querySelector("img")?.getAttribute("src") || "";

      const cart = getCart();
      cart.push({
        name: productName,
        price: productPrice,
        image: productImage,
      });
      saveCart(cart);
      updateCartCount();

      const originalText = button.textContent;
      button.textContent = "Added";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 900);
    });
  });

  updateCartCount();
}

function renderCatalog(filter = "all") {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const visibleProducts =
    filter === "all"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === filter);

  if (!visibleProducts.length) {
    grid.innerHTML =
      '<p class="empty-state">No beauty products or cosmetics have been added yet.</p>';
    return;
  }

  grid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card catalog-card">
          <div class="badge">${product.badge}</div>
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>⭐ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-row">
              <strong>₦${product.price}</strong>
              <button>Add to cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  setupAddToCart();
}

function renderLatestCatalog() {
  const grid = document.getElementById("latest-grid");
  if (!grid) return;

  const latestProducts = catalogProducts.filter((product) => product.badge === "New");

  grid.innerHTML = latestProducts
    .map(
      (product) => `
        <article class="product-card catalog-card">
          <div class="badge">${product.badge}</div>
          <img src="${product.image}" alt="${product.name}" />
          <div class="product-body">
            <div class="product-meta">
              <span>${product.category}</span>
              <span>⭐ ${product.rating}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-row">
              <strong>₦${product.price}</strong>
              <button>Add to cart</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  setupAddToCart();
}

function renderCheckoutPage() {
  const cartItemsRoot = document.getElementById("cart-items");
  if (!cartItemsRoot) return;

  const cart = getCart();

  if (!cart.length) {
    cartItemsRoot.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
    document.getElementById("subtotal").textContent = "₦0.00";
    document.getElementById("total").textContent = "₦0.00";
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price || 0), 0);

  cartItemsRoot.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-item-info">
            <strong>${item.name}</strong>
            <span>Item</span>
          </div>
          <strong>₦${Number(item.price).toFixed(2)}</strong>
        </div>
      `
    )
    .join("");

  document.getElementById("subtotal").textContent = `₦${subtotal.toFixed(2)}`;
  document.getElementById("total").textContent = `₦${subtotal.toFixed(2)}`;
}

function protectDisplayedImages() {
  document.querySelectorAll("img").forEach((image) => {
    image.setAttribute("draggable", "false");
    image.addEventListener("contextmenu", (event) => event.preventDefault());
    image.addEventListener("dragstart", (event) => event.preventDefault());
  });

  document.addEventListener("contextmenu", (event) => {
    if (event.target.closest("img")) {
      event.preventDefault();
    }
  });

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if ((event.ctrlKey || event.metaKey) && (key === "s" || key === "u")) {
      event.preventDefault();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const navigationEntry = performance.getEntriesByType("navigation")[0];
  const isPageRefresh = navigationEntry?.type === "reload" || performance.navigation?.type === 1;

  if (document.body.classList.contains("checkout-page") && isPageRefresh) {
    localStorage.removeItem("kubeCartItems");
  }

  const addToCartButtons = document.querySelectorAll(".product-row button");
  const cartCount = document.querySelector(".cart-count");

  let count = Number(cartCount?.textContent || "0");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      count += 1;
      if (cartCount) {
        cartCount.textContent = count;
      }

      const originalText = button.textContent;
      button.textContent = "Added";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 900);
    });
  });

  const newsletterForm = document.querySelector(".newsletter");
  newsletterForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = newsletterForm.querySelector("input");
    const button = newsletterForm.querySelector("button");

    if (input && input.value.trim()) {
      button.textContent = "Thanks!";
      button.disabled = true;
      input.value = "";
    }
  });

  const filterButtons = document.querySelectorAll(".pill");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((pill) => pill.classList.remove("active"));
      button.classList.add("active");
      renderCatalog(button.dataset.filter || "all");
    });
  });

  const cartButton = document.querySelector(".cart-pill");
  cartButton?.addEventListener("click", () => {
    window.location.href = "checkout.html";
  });

  const checkoutButton = document.querySelector(".checkout-btn");
  checkoutButton?.addEventListener("click", () => {
    window.location.href = "account-details.html";
  });

  const confirmPaymentButton = document.getElementById("confirm-payment");
  confirmPaymentButton?.addEventListener("click", () => {
    window.open(
      "https://wa.me/2348167263662?text=Hello%20KubeCart%2C%20I%20have%20completed%20the%20bank%20transfer%20for%20my%20order.%20Please%20confirm%20receipt.",
      "_blank",
      "noopener,noreferrer"
    );

    confirmPaymentButton.textContent = "WhatsApp opened";
    confirmPaymentButton.disabled = true;
    document.getElementById("shipping-next")?.removeAttribute("hidden");
  });

  const shippingForm = document.getElementById("shipping-form");
  shippingForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const confirmation = document.getElementById("shipping-confirmation");
    if (confirmation) {
      confirmation.hidden = false;
      shippingForm.reset();
    }
    document.getElementById("order-confirmation-link")?.removeAttribute("hidden");
  });

  const searchButton = document.getElementById("search-button");
  const searchInput = document.getElementById("product-search");

  function runProductSearch() {
    const queryInput = document.getElementById("product-search");
    const resultsBox = document.getElementById("search-results");

    if (!queryInput || !resultsBox) return;

    const query = queryInput.value.trim().toLowerCase();
    const results = catalogProducts.filter((product) => {
      const searchText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
      return searchText.includes(query);
    });

    if (!query) {
      resultsBox.innerHTML = '<p class="empty-state">Type a product name or category to find available items.</p>';
      return;
    }

    if (results.length === 0) {
      resultsBox.innerHTML = '<p class="empty-state">No matching products found. Try clothes, jewelry, shoes, gadgets, or home equipment.</p>';
      return;
    }

    resultsBox.innerHTML = results
      .map(
        (product) => `
          <article class="search-item">
            <img src="${product.image}" alt="${product.name}" />
            <div class="search-copy">
              <h3>${product.name}</h3>
              <p>${product.category}</p>
              <div class="meta">
                <span>⭐ ${product.rating}</span>
                <strong>₦${product.price}</strong>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  searchButton?.addEventListener("click", runProductSearch);
  searchInput?.addEventListener("input", runProductSearch);
  searchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runProductSearch();
    }
  });

  if (document.body.classList.contains("checkout-page")) {
    renderCheckoutPage();
    updateCartCount();
  }

  renderCatalog();
  renderLatestCatalog();
  updateCartCount();
  if (searchInput) {
    runProductSearch();
  }

  protectDisplayedImages();
});
