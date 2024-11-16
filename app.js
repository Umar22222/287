   // Foydalanuvchilar va ularga mos parol va rasmlar
   const users = {
    "umar": {
      password: "2009",
      images: [
        "assets/umar/umar1.jpg",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    "elyor": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "shoxmardon": {
        password: "0",
        images: [
          "assets/shox/shox1.jpg",
          "assets/shox/shox2.jpg",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "asomiddin": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "akmal": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "javlon": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "akbar": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "abdulla": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "beknur": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "nurbek": {
        password: "0",
        images: [
          "assets/nurbek/nurbek1.jpg",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "sunnat": {
        password: "0",
        images: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      "mirsayid": {
        password: "0",
        images: [
          "assets/mirsaid/mirsayid1.jpg",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
// qizlar
"shaxrizoda": {
    password: "1",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "iroda": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "jasmina": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "sarvara": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "oyisha": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "mashxura": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "guloyim": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  "marjona": {
    password: "0",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ]
  },
  };

  // Login funksiyasi
  function handleLogin() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");
    const imageGallery = document.getElementById("image-gallery");

    // Xabar va rasmlar maydonini tozalash
    errorMessage.textContent = "";
    imageGallery.innerHTML = "";

    // Foydalanuvchi va parolni tekshirish
    if (users[username] && users[username].password === password) {
      // Agar ism va parol mos kelsa, rasmlarni ko'rsatish
      users[username].images.forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Image";
        img.onclick = () => openModal(imageUrl);
        imageGallery.appendChild(img);
      });
    } else {
      // Xato xabarini ko'rsatish
      errorMessage.textContent = "Xato! Ism yoki parol noto'g'ri.";
    }
  }

  // Modal oynani ochish
  function openModal(imageUrl) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    modalImage.src = imageUrl;
    modal.style.display = "flex";
  }

  // Modal oynani yopish
  function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
  }