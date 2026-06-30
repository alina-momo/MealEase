/* ===========================
   LOGIN SYSTEM
=========================== */

function getUsers() {
  return JSON.parse(localStorage.getItem("mealEaseUsers")) || [];
}

function saveUsers(users) {
  localStorage.setItem("mealEaseUsers", JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("mealEaseCurrentUser"));
}

function setCurrentUser(user) {
  localStorage.setItem("mealEaseCurrentUser", JSON.stringify(user));
}

function logout() {
  localStorage.removeItem("mealEaseCurrentUser");
  location.href = "index.html";
}
const LB_IMAGES = {
  bowl: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  lunch: 'https://plus.unsplash.com/premium_photo-1695297516710-854716c51121?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  breakfast: 'https://images.unsplash.com/photo-1734774924912-dcbb467f8599?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  dinner: 'https://images.unsplash.com/photo-1684815495679-f6e6bc0634ec?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  salad: 'https://plus.unsplash.com/premium_photo-1667807515956-fbe501d03e26?q=80&w=794&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  curry: 'https://images.unsplash.com/photo-1624772398066-98584aa2f214?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  snack: 'https://images.unsplash.com/photo-1501432781167-c0ccfd492297?q=80&w=693&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  drink: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=900&q=80',
  ingredients: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80',
  frozen: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?auto=format&fit=crop&w=900&q=80',
  packaging: 'https://images.unsplash.com/photo-1717251752803-34ff258646e0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  office: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80'
};

const products = [
  { id: 'breakfast-classic', name: 'Chicken Roll', category: 'breakfast', type: 'Frozen Snacks', price: 240, image: LB_IMAGES.breakfast, desc: 'Chopped chicken with vegetables wrapped with a whole wheat tortilla covered in crumbs.', tags: ['Healthy', 'Light'] },
  { id: 'breakfast-healthy', name: 'Nuggets', category: 'breakfast', type: 'Frozen Snacks', price: 480, image: LB_IMAGES.salad, desc: 'Chicken and vegetable nuggets with a light coating.', tags: ['Flavorful', 'Family-size'] },
  { id: 'lunch-comfort', name: 'Sausage', category: 'breakfast', type: 'Frozen Snacks', price: 90, image: LB_IMAGES.curry, desc: 'Homemade sausage with a savory flavor.', tags: ['Cheesy', 'Yummy'] },
  { id: 'lunch-office', name: 'Samosa', category: 'breakfast', type: 'Frozen Snacks', price: 240, image: LB_IMAGES.lunch, desc: 'Chicken and vegetable samosa filled with spiced potatoes and peas.', tags: ['Free delivery 5+', 'Best Seller'] },
  { id: 'dinner-family', name: 'French Fries', category: 'breakfast', type: 'Frozen Snacks', price: 80, image: LB_IMAGES.dinner, desc: 'Fresh picked potatoes, lightly seasoned and fried to perfection.', tags: ['For 2 people', 'Warm bag'] },
  { id: 'dinner-light', name: 'Spring Roll', category: 'breakfast', type: 'Frozen Snacks', price: 180, image: LB_IMAGES.bowl, desc: 'Vegetable spring rolls with a light coating.', tags: ['Balanced', 'Healthy'] },
  { id: 'snacks-box', name: 'Firni', category: 'lunch', type: 'Dessert', price: 100, image: LB_IMAGES.snack, desc: 'Perfect sweet treat for any time of the day.', tags: ['Sweet', 'Healthy'] },
  { id: 'fast-food-green', name: 'Pudding', category: 'lunch', type: 'Dessert', price: 30, image: 'https://images.unsplash.com/photo-1637362449062-ae26d7732d0c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Tongue twister dessert that\'s a hit with kids and adults alike.', tags: ['Cheap', 'Popular'] }
];

const packs = [
  { id: 'rtc-veg-basic', name: 'Washed & Chopped Vegetable Pack', category: 'ready-to-cook', type: 'Ready-to-Cook', price: 120, image: LB_IMAGES.ingredients, desc: 'Cleaned, washed, and chopped vegetables. Ingredient cost + service charge.', tags: ['Saves time', '50–120 BDT service'] },
  { id: 'rtc-fish-prep', name: 'Cleaned Fish Prep Pack', category: 'ready-to-cook', type: 'Ready-to-Cook', price: 180, image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=80', desc: 'Fish cleaned, portioned, packed, and ready for your home cooking.', tags: ['Family help', 'Fresh prep'] },
  { id: 'rtc-meat-marinade', name: 'Marinated Meat Starter Kit', category: 'ready-to-cook', type: 'Ready-to-Cook', price: 260, image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=900&q=80', desc: 'Cut meat with basic marinade and cooking notes for faster dinner prep.', tags: ['Ready to cook', 'Dinner saver'] },
  { id: 'frozen-singara', name: 'Frozen Snack Party Pack', category: 'frozen', type: 'Frozen Food', price: 280, image: LB_IMAGES.frozen, desc: 'Frozen snacks for home storage, quick frying, and family tea time.', tags: ['Freezer safe', 'Party pack'] },
  { id: 'frozen-meal', name: 'Frozen Curry Base Pack', category: 'frozen', type: 'Frozen Food', price: 320, image: LB_IMAGES.packaging, desc: 'Prepared frozen curry base to reduce cooking time on busy nights.', tags: ['Convenient', 'Longer storage'] },
  { id: 'combo-home', name: 'Busy Family Prep Combo', category: 'combo', type: 'Combo Pack', price: 500, image: 'https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=80', desc: 'Vegetables, protein prep, and frozen add-ons in one convenience bundle.', tags: ['Best value', 'Family'] }
];

function getCartKey() {

  const user = getCurrentUser();

  if (user) {
    return "mealEaseCart_" + user.email;
  }

  return "mealEaseGuestCart";

}

function getCart() {

  return JSON.parse(
    localStorage.getItem(getCartKey())
  ) || [];

}

function setCart(cart) {

  localStorage.setItem(
    getCartKey(),
    JSON.stringify(cart)
  );

}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}
function updateCartCount() {
  document.querySelectorAll('[data-cart-count]').forEach(el => { el.textContent = cartCount(); });
}
function formatBDT(value) { return `৳${Number(value).toLocaleString('en-BD')}`; }
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2400);
}
function addToCart(item) {
  const cart = getCart();
  const existing = cart.find(cartItem => cartItem.id === item.id);
  if (existing) existing.qty += 1;
  else cart.push({ ...item, qty: 1 });
  setCart(cart);
  showToast(`${item.name} added to your package summary.`);
}
function changeQty(id, delta) {
  const cart = getCart().map(item => item.id === id ? { ...item, qty: item.qty + delta } : item).filter(item => item.qty > 0);
  setCart(cart);
  renderCart();
}
function removeItem(id) {
  setCart(getCart().filter(item => item.id !== id));
  renderCart();
}
function clearCart() {
  setCart([]);
  renderCart();
}

function productCard(item) {
  const tags = item.tags.map(tag => `<span class="badge">${tag}</span>`).join('');
  return `
    <article class="product-card" data-category="${item.category}">
      <div class="card-img"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div class="card-body">
        <span class="badge orange">${item.type}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="product-meta">${tags}</div>
        <div class="price-row product-actions">
          <span class="price">${formatBDT(item.price)}</span>
          <button class="btn btn-primary" data-add='${JSON.stringify(item).replace(/'/g, '&apos;')}'>Add</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const menuGrid = document.querySelector('[data-menu-grid]');
  if (menuGrid) menuGrid.innerHTML = products.map(productCard).join('');
  const packGrid = document.querySelector('[data-pack-grid]');
  if (packGrid) packGrid.innerHTML = packs.map(productCard).join('');
}

function setupFilters() {
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      const value = btn.dataset.filter;
      const group = btn.closest('[data-filter-group]');
      group.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const gridSelector = group.dataset.target;
      document.querySelectorAll(`${gridSelector} .product-card`).forEach(card => {
        card.classList.toggle('hidden', value !== 'all' && card.dataset.category !== value);
      });
    });
  });
}

function setupAddButtons() {
  document.body.addEventListener('click', event => {
    const btn = event.target.closest('[data-add]');
    if (!btn) return;
    const item = JSON.parse(btn.dataset.add.replace(/&apos;/g, "'"));
    addToCart(item);
  });
}

function setupMobileNav() {
  const toggle = document.querySelector('[data-mobile-toggle]');
  const links = document.querySelector('[data-nav-links]');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => links.classList.toggle('show'));
}

function setupSubscriptionBuilder() {
  const form = document.querySelector('[data-subscription-form]');
  if (!form) return;

  const duration = form.querySelector('[name="duration"]');
  const mealType = form.querySelector('[name="mealType"]');
  const deliveryTime = form.querySelector('[name="deliveryTime"]');
  const discountInput = form.querySelector('[name="discountCode"]');
  const totalEl = document.querySelector('[data-sub-total]');

  const summaryEls = {
    deal: document.querySelector('[data-sub-deal]'),
    meal: document.querySelector('[data-sub-meal]'),
    category: document.querySelector('[data-sub-category]'),
    duration: document.querySelector('[data-sub-duration]'),
    time: document.querySelector('[data-sub-time]'),
    base: document.querySelector('[data-sub-base]'),
    deliveryFee: document.querySelector('[data-sub-delivery-fee]'),
    discount: document.querySelector('[data-sub-discount]'),
    addons: document.querySelector('[data-sub-addons]'),
    addonTotal: document.querySelector('[data-sub-addon-total]')
  };

  const durationConfig = {
    week: { label: '1 Week', deliveries: 5, weekMultiplier: 1 },
    'two-weeks': { label: '2 Weeks', deliveries: 10, weekMultiplier: 2 },
    month: { label: '1 Month', deliveries: 20, weekMultiplier: 4 },
    'two-months': { label: '2 Months', deliveries: 40, weekMultiplier: 8 }
  };

  function activeMeal() {
    return form.querySelector('[name="meal"]:checked');
  }

  function selectedAddons() {
    return Array.from(form.querySelectorAll('[name="addon"]:checked')).map(input => ({
      name: input.dataset.addonName,
      price: Number(input.dataset.addonPrice || 0)
    }));
  }

  function setSelectedMealStyle() {
    form.querySelectorAll('.meal-choice-card').forEach(card => {
      const input = card.querySelector('[name="meal"]');
      card.classList.toggle('selected', input && input.checked);
    });
  }

  function calcBaseTotal(meal, config) {
    const dayPrice = Number(meal.dataset.dayPrice || 0);
    const weekPrice = Number(meal.dataset.weekPrice || 0);
    if (weekPrice > 0) return weekPrice * config.weekMultiplier;
    return dayPrice * config.deliveries;
  }

  function calc() {
    const meal = activeMeal();
    const config = durationConfig[duration.value];
    const DELIVERY_FEE = 50 * config.deliveries;
    const addons = selectedAddons();
    const baseTotal = calcBaseTotal(meal, config);
    const addonPerDay = addons.reduce((sum, addon) => sum + addon.price, 0);
    const addonTotal = addonPerDay * config.deliveries;
    let discount = 0;

    const code = discountInput.value.trim().toUpperCase();

    switch (code) {

      case "TEAM5":
        // Free delivery
        discount = DELIVERY_FEE;
        break;

      case "FIRST7":
        // 15% off base meal
        if (config.deliveries === 5) {
          discount = baseTotal * 0.15;
        }
        break;

      case "HOMEHELP":
        // 10% off add-ons
        discount = addonTotal * 0.10;
        break;

    }
    const total = baseTotal + addonTotal + DELIVERY_FEE - discount;

    setSelectedMealStyle();
    summaryEls.deal.textContent = meal.dataset.deal;
    summaryEls.meal.textContent = meal.dataset.mealName;
    summaryEls.category.textContent = mealType.value;
    summaryEls.duration.textContent = `${config.label} — ${config.deliveries} deliveries`;
    summaryEls.time.textContent = deliveryTime.value;
    summaryEls.base.textContent = formatBDT(baseTotal);
    summaryEls.deliveryFee.textContent = formatBDT(DELIVERY_FEE);
    summaryEls.discount.textContent = discount > 0 ? "-" + formatBDT(discount) : "৳0";
    summaryEls.addons.textContent = addons.length ? addons.map(addon => `${addon.name} (${formatBDT(addon.price)}/day)`).join(', ') : 'None';
    summaryEls.addonTotal.textContent = formatBDT(addonTotal);
    totalEl.textContent = formatBDT(total);

    return { meal, config, addons, baseTotal, addonTotal, total };
  }

  document.querySelectorAll('[data-package-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.packageTab;
      document.querySelectorAll('[data-package-tab]').forEach(btn => btn.classList.toggle('active', btn === tab));
      document.querySelectorAll('[data-package-panel]').forEach(panel => panel.classList.toggle('active', panel.dataset.packagePanel === target));

      const firstMeal = document.querySelector(`[data-package-panel="${target}"] [name="meal"]`);
      if (firstMeal) firstMeal.checked = true;
      calc();
    });
  });

  form.querySelectorAll(
    'select, [name="meal"], [name="addon"], [name="discountCode"]'
  ).forEach(el => el.addEventListener('input', calc));
  calc();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const result = calc();
    const meal = result.meal;
    const addonNames = result.addons.length ? result.addons.map(addon => addon.name).join(', ') : 'No add-ons';
    const itemId = `subscription-${meal.value}-${duration.value}-${addonNames}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    addToCart({
      id: itemId,
      name: `${meal.dataset.deal}: ${meal.dataset.mealName}`,
      category: 'subscription',
      type: `${durationConfig[duration.value].label} ${mealType.value} Plan`,
      price: result.total,
      image: meal.dataset.image || LB_IMAGES.office,
      desc: `${result.config.deliveries} scheduled deliveries at ${deliveryTime.value}. Add-ons: ${addonNames}. Base ${formatBDT(result.baseTotal)} + add-ons ${formatBDT(result.addonTotal)}.`,
      tags: ['Subscription', 'Scheduled delivery', meal.dataset.deal]
    });
  });
}

function renderCart() {
  const wrapper = document.querySelector('[data-cart-items]');
  const totalEl = document.querySelector('[data-cart-total]');
  const subtotalEl = document.querySelector('[data-cart-subtotal]');
  const deliveryEl = document.querySelector('[data-cart-delivery]');
  if (!wrapper) return;
  const cart = getCart();
  if (!cart.length) {
    wrapper.innerHTML = `
      <div class="empty-cart">
        <h3>Your package summary is empty</h3>
        <p>Select a normal meal, subscription plan, frozen food, or ready-to-cook pack first.</p>
        <a href="menu.html" class="btn btn-primary">Explore Menu</a>
      </div>`;
  } else {
    wrapper.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-thumb"><img src="${item.image}" alt="${item.name}"></div>
        <div>
          <h4>${item.name}</h4>
          <p>${item.type} • ${item.desc}</p>
          <div class="qty-box">
            <button type="button" onclick="changeQty('${item.id}', -1)">−</button>
            <strong>${item.qty}</strong>
            <button type="button" onclick="changeQty('${item.id}', 1)">+</button>
            <button class="icon-btn remove-btn" type="button" onclick="removeItem('${item.id}')">×</button>
          </div>
        </div>
        <strong class="cart-price">${formatBDT(item.price * item.qty)}</strong>
      </div>
    `).join('');
  }
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = subtotal > 0 ? 70 : 0;
  const total = subtotal + delivery;
  if (subtotalEl) subtotalEl.textContent = formatBDT(subtotal);
  if (deliveryEl) deliveryEl.textContent = formatBDT(delivery);
  if (totalEl) totalEl.textContent = formatBDT(total);
}

function setupCheckout() {
  const form = document.querySelector('[data-checkout-form]');
  const modal = document.querySelector('[data-order-modal]');
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!getCart().length) {
      showToast('Please select at least one package before placing your order.');
      return;
    }
    modal?.classList.add('show');
    clearCart();
    form.reset();
  });
  document.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', () => modal?.classList.remove('show')));
}

function activateCurrentLink() {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
  renderProducts();
  setupAddButtons();
  setupFilters();
  setupMobileNav();
  setupSubscriptionBuilder();
  renderCart();
  setupCheckout();
  activateCurrentLink();
});


const signupForm = document.getElementById("signupForm");

if (signupForm) {

  signupForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const first = document.getElementById("firstName").value.trim();
    const last = document.getElementById("lastName").value.trim();
    const email = document.getElementById("signupEmail").value.trim().toLowerCase();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    const message = document.getElementById("signupMessage");

    message.innerHTML = "";

    if (password.length < 6) {

      message.innerHTML = "Password must be at least 6 characters.";

      return;

    }

    if (password !== confirm) {

      message.innerHTML = "Passwords do not match.";

      return;

    }

    const users = getUsers();

    const exists = users.find(user => user.email === email);

    if (exists) {

      message.innerHTML = "Email already exists.";

      return;

    }

    const user = {

      first,

      last,

      email,

      phone,

      password

    };

    users.push(user);

    saveUsers(users);

    setCurrentUser(user);

    showToast("Account created!");

    location.href = "index.html";

  });

}

const loginForm = document.getElementById("loginForm");

if (loginForm) {

  loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();

    const user = users.find(u => u.email === email && u.password === password);

    const message = document.getElementById("loginMessage");

    if (!user) {

      message.innerHTML = "Incorrect email or password.";

      return;

    }

    setCurrentUser(user);

    showToast("Welcome back!");

    const returnPage = sessionStorage.getItem("returnPage");

    if (returnPage) {

      sessionStorage.removeItem("returnPage");

      location.href = returnPage;

    }
    else {

      location.href = "index.html";

    }

  });

}
const userContainer = document.getElementById("userMenuContainer");

if(userContainer){

    const user = getCurrentUser();

    if(user){

        userContainer.innerHTML=`

        <div class="user-menu">

            <button class="user-button" id="userButton">

              <span class="user-icon">👤</span>
                <span class="user-name">${user.first}</span>
                <span class="user-arrow">▼</span>

            </button>

            <div class="user-dropdown" id="userDropdown">

                <button id="logoutBtn">

                    Logout

                </button>

            </div>

        </div>

        `;

        document
        .getElementById("userButton")
        .addEventListener("click",()=>{

            document
            .getElementById("userDropdown")
            .classList.toggle("show");

        });

        document
        .getElementById("logoutBtn")
        .addEventListener("click",()=>{

            logout();

        });

        document.addEventListener("click",(e)=>{

            if(!e.target.closest(".user-menu")){

                document
                .getElementById("userDropdown")
                ?.classList.remove("show");

            }

        });

    }

}

function logout(){

    localStorage.removeItem("mealEaseCurrentUser");

    showToast("Logged out successfully.");

    setTimeout(()=>{

        location.href="index.html";

    },800);

}

