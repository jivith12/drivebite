import React, { useMemo, useState } from "react";

const FOOD_ITEMS = [
  {
    id: 1,
    name: "Double Cheese Burger",
    category: "Burgers",
    price: 249,
    description:
      "Juicy double patty burger with melted cheese, lettuce and special sauce.",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    id: 2,
    name: "Classic Chicken Burger",
    category: "Burgers",
    price: 219,
    description:
      "Crispy chicken fillet with lettuce, tomato and creamy burger sauce.",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 3,
    name: "Spicy Chicken Burger",
    category: "Burgers",
    price: 229,
    description:
      "Crunchy spicy chicken with fresh lettuce and hot chili sauce.",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    id: 4,
    name: "Mexican Veggie Wrap",
    category: "Wraps",
    price: 169,
    description:
      "Grilled vegetables, beans, cheese and spicy Mexican sauce.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 5,
    name: "Chicken Caesar Wrap",
    category: "Wraps",
    price: 189,
    description:
      "Grilled chicken, crunchy lettuce and creamy Caesar dressing.",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 6,
    name: "French Fries",
    category: "Sides",
    price: 99,
    description:
      "Golden crispy fries lightly seasoned with our special seasoning.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 7,
    name: "Loaded Cheese Fries",
    category: "Sides",
    price: 149,
    description:
      "Crispy fries loaded with creamy cheese and delicious toppings.",
    image:
      "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    id: 8,
    name: "Mozzarella Sticks",
    category: "Sides",
    price: 159,
    description:
      "Crispy golden mozzarella sticks served with tomato dip.",
    image:
      "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 9,
    name: "Iced Coffee",
    category: "Drinks",
    price: 119,
    description:
      "Smooth chilled coffee with milk and a touch of sweetness.",
    image:
      "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 10,
    name: "Strawberry Milkshake",
    category: "Drinks",
    price: 149,
    description:
      "Creamy strawberry milkshake topped with whipped cream.",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 11,
    name: "Fresh Lemon Soda",
    category: "Drinks",
    price: 89,
    description:
      "Refreshing sparkling lemon drink with ice and fresh lemon.",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Caramel Sundae",
    category: "Desserts",
    price: 129,
    description:
      "Creamy vanilla ice cream topped with rich caramel sauce.",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 13,
    name: "Chocolate Brownie",
    category: "Desserts",
    price: 139,
    description:
      "Warm chocolate brownie served with creamy chocolate topping.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 14,
    name: "Chicken Popcorn",
    category: "Sides",
    price: 169,
    description:
      "Bite-sized crispy chicken pieces with delicious seasoning.",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 15,
    name: "Crispy Fish Burger",
    category: "Burgers",
    price: 229,
    description:
      "Crispy fish fillet with lettuce, cheese and creamy tartar sauce.",
    image:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 16,
    name: "BBQ Chicken Burger",
    category: "Burgers",
    price: 239,
    description:
      "Grilled chicken burger with smoky BBQ sauce and fresh vegetables.",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 17,
    name: "Peri Peri Fries",
    category: "Sides",
    price: 119,
    description:
      "Crispy fries tossed in spicy peri peri seasoning.",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 18,
    name: "Cold Chocolate Shake",
    category: "Drinks",
    price: 159,
    description:
      "Rich chocolate shake blended with milk and chocolate sauce.",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 19,
    name: "Chocolate Lava Cake",
    category: "Desserts",
    price: 159,
    description:
      "Warm chocolate cake with a rich molten chocolate center.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    popular: true,
  },
  {
    id: 20,
    name: "Classic Veggie Burger",
    category: "Burgers",
    price: 189,
    description:
      "Crispy veggie patty with lettuce, tomato and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=85",
  },
];

const CATEGORIES = [
  "All",
  "Burgers",
  "Wraps",
  "Sides",
  "Drinks",
  "Desserts",
];

const EXTRA_OPTIONS = [
  {
    id: "cheese",
    name: "Extra Cheese",
    price: 30,
  },
  {
    id: "sauce",
    name: "Special Sauce",
    price: 20,
  },
  {
    id: "jalapeno",
    name: "Jalapeños",
    price: 15,
  },
  {
    id: "onion",
    name: "Extra Onion",
    price: 10,
  },
];

function formatPrice(price) {
  return `₹${price}`;
}

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [cart, setCart] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [page, setPage] = useState("home");

  const [selectedFood, setSelectedFood] = useState(null);

  const [customSize, setCustomSize] = useState("Regular");

  const [selectedExtras, setSelectedExtras] = useState([]);

  const [customQuantity, setCustomQuantity] = useState(1);

  const [orderComplete, setOrderComplete] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    carNumber: "",
    pickupTime: "As soon as possible",
  });

  const filteredFood = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return FOOD_ITEMS.filter((food) => {
      const matchesCategory =
        category === "All" ||
        food.category === category;

      const matchesSearch =
        searchText === "" ||
        food.name.toLowerCase().includes(searchText) ||
        food.description.toLowerCase().includes(searchText) ||
        food.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const pickupFee = cart.length > 0 ? 10 : 0;

  const total = subtotal + pickupFee;

  function scrollToMenu() {
    document
      .getElementById("menu")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }

  function addToCart(food, quantity = 1, extras = [], size = "Regular") {
    const extrasPrice = extras.reduce(
      (sum, extraId) => {
        const extra = EXTRA_OPTIONS.find(
          (item) => item.id === extraId
        );

        return sum + (extra?.price || 0);
      },
      0
    );

    const sizePrice =
      size === "Large"
        ? 40
        : size === "Medium"
        ? 20
        : 0;

    const finalPrice =
      food.price + extrasPrice + sizePrice;

    const cartId = `${food.id}-${size}-${extras
      .sort()
      .join("-")}`;

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.cartId === cartId
      );

      if (existing) {
        return currentCart.map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          cartId,
          id: food.id,
          name: food.name,
          category: food.category,
          image: food.image,
          price: finalPrice,
          basePrice: food.price,
          quantity,
          size,
          extras,
        },
      ];
    });

    setSelectedFood(null);
    setCustomQuantity(1);
    setSelectedExtras([]);
    setCustomSize("Regular");
  }

  function addSimpleFood(food) {
    addToCart(food, 1, [], "Regular");
  }

  function increaseQuantity(cartId) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(cartId) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(cartId) {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.cartId !== cartId
      )
    );
  }

  function toggleExtra(extraId) {
    setSelectedExtras((current) =>
      current.includes(extraId)
        ? current.filter((id) => id !== extraId)
        : [...current, extraId]
    );
  }

  function getCustomizationPrice() {
    if (!selectedFood) return 0;

    const extrasPrice = selectedExtras.reduce(
      (sum, extraId) => {
        const extra = EXTRA_OPTIONS.find(
          (item) => item.id === extraId
        );

        return sum + (extra?.price || 0);
      },
      0
    );

    const sizePrice =
      customSize === "Large"
        ? 40
        : customSize === "Medium"
        ? 20
        : 0;

    return (
      selectedFood.price +
      extrasPrice +
      sizePrice
    );
  }

  function openCustomization(food) {
    setSelectedFood(food);
    setCustomSize("Regular");
    setSelectedExtras([]);
    setCustomQuantity(1);
  }

  function openCart() {
    setPage("cart");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function continueShopping() {
    setPage("home");

    setTimeout(() => {
      document
        .getElementById("menu")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  }

  function goCheckout() {
    if (cart.length === 0) return;

    setPage("checkout");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function placeOrder(event) {
    event.preventDefault();

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.carNumber.trim()
    ) {
      alert(
        "Please enter your name, phone number and car number."
      );

      return;
    }

    setOrderComplete(true);

    setPage("success");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function resetOrder() {
    setCart([]);

    setOrderComplete(false);

    setCustomer({
      name: "",
      phone: "",
      carNumber: "",
      pickupTime: "As soon as possible",
    });

    setPage("home");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openCart={openCart}
        setPage={setPage}
      />

      {page === "home" && (
        <>
          <Hero
            scrollToMenu={scrollToMenu}
          />

          <Menu
            filteredFood={filteredFood}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
            cartCount={cartCount}
            addSimpleFood={addSimpleFood}
            openCustomization={
              openCustomization
            }
          />
        </>
      )}

      {page === "cart" && (
        <CartPage
          cart={cart}
          subtotal={subtotal}
          pickupFee={pickupFee}
          total={total}
          increaseQuantity={
            increaseQuantity
          }
          decreaseQuantity={
            decreaseQuantity
          }
          removeFromCart={removeFromCart}
          continueShopping={
            continueShopping
          }
          goCheckout={goCheckout}
        />
      )}

      {page === "checkout" && (
        <CheckoutPage
          cart={cart}
          subtotal={subtotal}
          pickupFee={pickupFee}
          total={total}
          customer={customer}
          setCustomer={setCustomer}
          goBack={() => setPage("cart")}
          placeOrder={placeOrder}
        />
      )}

      {page === "success" && (
        <SuccessPage
          customer={customer}
          total={total}
          resetOrder={resetOrder}
        />
      )}

      {cartCount > 0 &&
        page === "home" && (
          <button
            className="floating-cart"
            onClick={openCart}
          >
            🛒 View Cart
            <span>{cartCount}</span>
          </button>
        )}

      {selectedFood && (
        <CustomizationModal
          food={selectedFood}
          size={customSize}
          setSize={setCustomSize}
          extras={selectedExtras}
          toggleExtra={toggleExtra}
          quantity={customQuantity}
          setQuantity={setCustomQuantity}
          price={getCustomizationPrice()}
          close={() =>
            setSelectedFood(null)
          }
          add={() =>
            addToCart(
              selectedFood,
              customQuantity,
              selectedExtras,
              customSize
            )
          }
        />
      )}

      <Footer />
    </div>
  );
}

/* =====================================================
   HEADER
===================================================== */

function Header({
  search,
  setSearch,
  cartCount,
  darkMode,
  setDarkMode,
  openCart,
}) {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-box">Q</div>

        <div>
          <strong>QuickBite</strong>

          <small>DRIVE THROUGH</small>
        </div>
      </div>

      <div className="header-right">
        <div className="search">
          <span className="search-icon">
            🔎
          </span>

          <input
            type="text"
            value={search}
            placeholder="Search burgers, wraps, drinks..."
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          {search && (
            <button
              className="search-clear"
              onClick={() => setSearch("")}
            >
              ×
            </button>
          )}
        </div>

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode((value) => !value)
          }
          title="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="header-cart"
          onClick={openCart}
        >
          🛒 Cart

          {cartCount > 0 && (
            <b>{cartCount}</b>
          )}
        </button>
      </div>
    </header>
  );
}

/* =====================================================
   HERO
===================================================== */

function Hero({ scrollToMenu }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="eyebrow">
          FAST • FRESH • EASY
        </div>

        <h1>
          Good food,
          <br />
          <span>zero waiting.</span>
        </h1>

        <p>
          Order ahead, customize your meal
          and pick it up quickly without
          leaving your car.
        </p>

        <button
          className="primary-btn"
          onClick={scrollToMenu}
        >
          Order Now →
        </button>

        <div className="hero-features">
          <span>⚡ Fast pickup</span>
          <span>🥗 Fresh ingredients</span>
          <span>🚗 Drive-through ready</span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=90"
          alt="Delicious burger"
        />

        <div className="popular-card">
          <span style={{ fontSize: "26px" }}>
            🔥
          </span>

          <div>
            <strong>Popular Choice</strong>

            <span>Double Cheese Burger</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   MENU
===================================================== */

function Menu({
  filteredFood,
  category,
  setCategory,
  search,
  setSearch,
  cartCount,
  addSimpleFood,
  openCustomization,
}) {
  return (
    <section
      className="menu-section"
      id="menu"
    >
      <div className="section-header">
        <div>
          <div className="eyebrow">
            OUR MENU
          </div>

          <h2>What are you craving?</h2>
        </div>

        <span className="cart-count-text">
          {cartCount}{" "}
          {cartCount === 1
            ? "item"
            : "items"}{" "}
          in cart
        </span>
      </div>

      <div className="categories">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            className={`category ${
              category === item
                ? "active"
                : ""
            }`}
            onClick={() =>
              setCategory(item)
            }
          >
            {item}
          </button>
        ))}
      </div>

      {filteredFood.length > 0 ? (
        <div className="food-grid">
          {filteredFood.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              addSimpleFood={
                addSimpleFood
              }
              openCustomization={
                openCustomization
              }
            />
          ))}
        </div>
      ) : (
        <div className="no-food">
          <div>🍔</div>

          <h3>No food found</h3>

          <p>
            Try another search or category.
          </p>

          <button
            className="primary-btn"
            onClick={() => {
              setSearch("");
              setCategory("All");
            }}
          >
            Show All Food
          </button>
        </div>
      )}
    </section>
  );
}

/* =====================================================
   FOOD CARD
===================================================== */

function FoodCard({
  food,
  addSimpleFood,
  openCustomization,
}) {
  return (
    <article className="food-card">
      <div className="food-image-container">
        <img
          src={food.image}
          alt={food.name}
        />

        {food.popular && (
          <span className="popular-tag">
            🔥 Popular
          </span>
        )}
      </div>

      <div className="food-content">
        <div className="food-title">
          <div>
            <small>{food.category}</small>

            <h3>{food.name}</h3>
          </div>

          <strong>
            {formatPrice(food.price)}
          </strong>
        </div>

        <p>{food.description}</p>

        <div className="food-buttons">
          <button
            className="customize-btn"
            onClick={() =>
              openCustomization(food)
            }
          >
            Customize
          </button>

          <button
            className="add-btn"
            onClick={() =>
              addSimpleFood(food)
            }
          >
            + Add
          </button>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   CUSTOMIZATION MODAL
===================================================== */

function CustomizationModal({
  food,
  size,
  setSize,
  extras,
  toggleExtra,
  quantity,
  setQuantity,
  price,
  close,
  add,
}) {
  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          close();
        }
      }}
    >
      <div className="modal">
        <button
          className="close-modal"
          onClick={close}
        >
          ×
        </button>

        <img
          src={food.image}
          alt={food.name}
        />

        <div className="modal-content">
          <h2>{food.name}</h2>

          <p>{food.description}</p>

          <h4>Choose Size</h4>

          <div className="size-options">
            {[
              {
                name: "Regular",
                extra: 0,
              },
              {
                name: "Medium",
                extra: 20,
              },
              {
                name: "Large",
                extra: 40,
              },
            ].map((item) => (
              <button
                key={item.name}
                className={`size-option ${
                  size === item.name
                    ? "selected"
                    : ""
                }`}
                onClick={() =>
                  setSize(item.name)
                }
              >
                {item.name}

                <small>
                  {item.extra === 0
                    ? "Included"
                    : `+₹${item.extra}`}
                </small>
              </button>
            ))}
          </div>

          <h4>Extra Toppings</h4>

          <div className="extras">
            {EXTRA_OPTIONS.map(
              (extra) => (
                <label
                  className="extra"
                  key={extra.id}
                >
                  <input
                    type="checkbox"
                    checked={extras.includes(
                      extra.id
                    )}
                    onChange={() =>
                      toggleExtra(
                        extra.id
                      )
                    }
                  />

                  <span>{extra.name}</span>

                  <b>
                    +₹{extra.price}
                  </b>
                </label>
              )
            )}
          </div>

          <div className="modal-quantity">
            <strong>Quantity</strong>

            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity(
                    Math.max(
                      1,
                      quantity - 1
                    )
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(
                    quantity + 1
                  )
                }
              >
                +
              </button>
            </div>
          </div>

          <button
            className="primary-btn full"
            onClick={add}
          >
            Add to Cart •{" "}
            {formatPrice(
              price * quantity
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   CART PAGE
===================================================== */

function CartPage({
  cart,
  subtotal,
  pickupFee,
  total,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  continueShopping,
  goCheckout,
}) {
  return (
    <main className="page-container">
      <button
        className="back-btn"
        onClick={continueShopping}
      >
        ← Continue Shopping
      </button>

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            🛒
          </div>

          <h2>Your cart is empty</h2>

          <p>
            Add something delicious to
            get started.
          </p>

          <button
            className="primary-btn"
            onClick={continueShopping}
          >
            Browse Menu
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <div
                className="cart-item"
                key={item.cartId}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>
                    Size: {item.size}
                  </p>

                  {item.extras.length >
                    0 && (
                    <p>
                      Extras:{" "}
                      {item.extras
                        .map(
                          (extraId) =>
                            EXTRA_OPTIONS.find(
                              (extra) =>
                                extra.id ===
                                extraId
                            )?.name
                        )
                        .join(", ")}
                    </p>
                  )}

                  <strong>
                    {formatPrice(
                      item.price *
                        item.quantity
                    )}
                  </strong>
                </div>

                <div className="quantity">
                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.cartId
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.cartId
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() =>
                    removeFromCart(
                      item.cartId
                    )
                  }
                  title="Remove"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <OrderSummary
            subtotal={subtotal}
            pickupFee={pickupFee}
            total={total}
            goCheckout={goCheckout}
            buttonText="Proceed to Checkout"
          />
        </div>
      )}
    </main>
  );
}

/* =====================================================
   ORDER SUMMARY
===================================================== */

function OrderSummary({
  subtotal,
  pickupFee,
  total,
  goCheckout,
  buttonText,
}) {
  return (
    <div className="summary">
      <h2>Order Summary</h2>

      <div className="summary-row">
        <span>Food</span>

        <strong>
          {formatPrice(subtotal)}
        </strong>
      </div>

      <div className="summary-row">
        <span>Pickup fee</span>

        <strong>
          {formatPrice(pickupFee)}
        </strong>
      </div>

      <hr />

      <div className="summary-total">
        <span>Total</span>

        <strong>
          {formatPrice(total)}
        </strong>
      </div>

      <button
        className="primary-btn full"
        onClick={goCheckout}
      >
        {buttonText}
      </button>

      <small className="summary-note">
        🚗 Ready for drive-through pickup
      </small>
    </div>
  );
}

/* =====================================================
   CHECKOUT
===================================================== */

function CheckoutPage({
  cart,
  subtotal,
  pickupFee,
  total,
  customer,
  setCustomer,
  goBack,
  placeOrder,
}) {
  return (
    <main className="page-container">
      <button
        className="back-btn"
        onClick={goBack}
      >
        ← Back to Cart
      </button>

      <h1>Checkout</h1>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >
          <h2>Pickup Details</h2>

          <div className="pickup-info">
            <span>🚗</span>

            <div>
              <strong>
                Drive-through pickup
              </strong>

              <p>
                We'll have your order
                ready when you arrive.
              </p>
            </div>
          </div>

          <label>
            Your Name

            <input
              type="text"
              placeholder="Enter your name"
              value={customer.name}
              onChange={(event) =>
                setCustomer({
                  ...customer,
                  name: event.target.value,
                })
              }
            />
          </label>

          <label>
            Phone Number

            <input
              type="tel"
              placeholder="Enter phone number"
              value={customer.phone}
              onChange={(event) =>
                setCustomer({
                  ...customer,
                  phone:
                    event.target.value,
                })
              }
            />
          </label>

          <label>
            Car Number

            <input
              type="text"
              placeholder="e.g. KA 01 AB 1234"
              value={
                customer.carNumber
              }
              onChange={(event) =>
                setCustomer({
                  ...customer,
                  carNumber:
                    event.target.value,
                })
              }
            />
          </label>

          <label>
            Pickup Time

            <select
              value={
                customer.pickupTime
              }
              onChange={(event) =>
                setCustomer({
                  ...customer,
                  pickupTime:
                    event.target.value,
                })
              }
            >
              <option>
                As soon as possible
              </option>

              <option>
                In 15 minutes
              </option>

              <option>
                In 30 minutes
              </option>

              <option>
                In 45 minutes
              </option>

              <option>
                In 1 hour
              </option>
            </select>
          </label>

          <button
            type="submit"
            className="primary-btn"
          >
            Place Order •{" "}
            {formatPrice(total)}
          </button>
        </form>

        <div>
          <div className="summary">
            <h2>Your Order</h2>

            {cart.map((item) => (
              <div
                className="summary-item"
                key={item.cartId}
              >
                <span>
                  {item.name} ×{" "}
                  {item.quantity}
                </span>

                <strong>
                  {formatPrice(
                    item.price *
                      item.quantity
                  )}
                </strong>
              </div>
            ))}

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>

              <strong>
                {formatPrice(subtotal)}
              </strong>
            </div>

            <div className="summary-row">
              <span>Pickup fee</span>

              <strong>
                {formatPrice(pickupFee)}
              </strong>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>

              <strong>
                {formatPrice(total)}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

/* =====================================================
   SUCCESS PAGE
===================================================== */

function SuccessPage({
  customer,
  total,
  resetOrder,
}) {
  return (
    <main className="success-page">
      <div className="success-circle">
        ✓
      </div>

      <h1>Order Confirmed!</h1>

      <p>
        Thanks, {customer.name}. Your
        delicious order is being prepared.
      </p>

      <div className="order-progress">
        <div className="progress-item active">
          <div>✓</div>

          <span>Order placed</span>
        </div>

        <div className="progress-line"></div>

        <div className="progress-item active">
          <div>🍳</div>

          <span>Preparing</span>
        </div>

        <div className="progress-line"></div>

        <div className="progress-item">
          <div>🚗</div>

          <span>Pickup</span>
        </div>
      </div>

      <div className="success-box">
        <div>
          <span>Customer</span>

          <strong>
            {customer.name}
          </strong>
        </div>

        <div>
          <span>Phone</span>

          <strong>
            {customer.phone}
          </strong>
        </div>

        <div>
          <span>Car Number</span>

          <strong>
            {customer.carNumber}
          </strong>
        </div>

        <div>
          <span>Pickup</span>

          <strong>
            {customer.pickupTime}
          </strong>
        </div>

        <div>
          <span>Total Paid</span>

          <strong>
            {formatPrice(total)}
          </strong>
        </div>

        <div>
          <span>Order Type</span>

          <strong>
            🚗 Drive-through
          </strong>
        </div>
      </div>

      <button
        className="primary-btn"
        onClick={resetOrder}
      >
        Order More Food
      </button>
    </main>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function Footer() {
  return (
    <footer>
      <div>
        <strong>QuickBite</strong>

        <span>
          Fast food. Zero waiting.
        </span>
      </div>

      <span>
        © 2026 QuickBite • Drive-through
        ordering
      </span>
    </footer>
  );
}

export default App;