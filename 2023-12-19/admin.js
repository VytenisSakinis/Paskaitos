 //CRUD:
      //Create - Sukurti įrašą
      //Read - Peržiūrėti įrašą
      //UPDATE - Atnaujinti įrašą
      //DELETE - Ištrinti įrašą

      localStorage.getItem("products")
      if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify([]))
      
      const products = JSON.parse(localStorage.getItem("products"));
      let currentId = 1;
      let currentProduct = undefined;
      let editMode = false;
      const dynamicDataElement = document.getElementById("dynamicData"),
        titleInputElement = document.getElementById("title"),
        priceInputElement = document.getElementById("price"),
        stockInputElement = document.getElementById("stock"),
        brandInputElement = document.getElementById("brand"),
        categoryInputElement = document.getElementById("category"),
        submitButtonElement = document.getElementById("submit"),
        modalElement = document.querySelector("#productInfo"),
        photoElement = document.getElementById('imageUrl'),
        discountElement = document.getElementById('discount'),
        ratingElement = document.getElementById('rating'),
        describtionElement = document.getElementById('describtion');
        closingButton = document.querySelector(".closingButton")

      //Arrow function doesnt work when it's above the function, while function .. () does
      // Automatinis funkcijos iskvietimas apskliaudus funkcija ir uz jos padejus skliaustelius
      const generateTableContents = () => {
        let dynamicHTML = ``;
        for (const product of products) {
          dynamicHTML += `<tr>
                <td onclick="showModal(${product.id})">${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.brand}</td>
                <td>${product.category}</td>
                <td><button class="btn btn-danger" onclick="deleteProduct(${product.id})">Remove</button></td>
                <td><button class="btn btn-success" onclick="setEdit(${product.id})">Update</button></td>
                </tr>`;
        }
        dynamicDataElement.innerHTML = dynamicHTML;
      };

      generateTableContents();

      const showModal = (id) => {
        let elementIndex = products.findIndex((value) => value.id === id);
        const product = products[elementIndex]
        modalElement.showModal();
        modalElement.innerHTML = `
        <div style="max-width: 70%; margin: 0 auto;">
      <img
        src="${product.thumbnail}"
        alt="${product.thumbnail}"
      />
      <div class="row gap-3">
        <span class="col-2 fw-bold">Nuolaida:</span>
        <span class="col-1">${product.discount}</span>
      </div>
      <div class="row gap-3">
        <span class="col-2 fw-bold">Įvertinimas:</span>
        <span class="col-1">${product.rating}</span>
      </div>
      <div class="row gap-3">
        <span class="col-2 fw-bold">Aprašymas:</span>
        <span class="col-6"
          >${product.describtion}</span>
          <button onclick="closeModal()" class="closingButton btn btn-primary">Close</button>
      </div>`
      }

      const closeModal = () => {
        modalElement.close()
      }

      const createNewRecord = (event) => {
        event.preventDefault();
        const newProduct = {
          id: currentId,
          title: titleInputElement.value,
          describtion: describtionElement.value,
          price: +priceInputElement.value,
          discountPercentage: +discountElement.value,
          rating: +ratingElement.value,
          stock: +stockInputElement.value,
          brand: brandInputElement.value,
          category: categoryInputElement.value,
          thumbnail: photoElement.value,
        };
        currentId++
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        generateTableContents();
      };

      submitButtonElement.onclick = createNewRecord;

      const deleteProduct = (id) => {
        let elementIndex = products.findIndex((value) => value.id === id);
        products.splice(elementIndex, 1);
        generateTableContents();
        localStorage.setItem('products', JSON.stringify(products));
      };

      const updateProduct = (event) => {
        event.preventDefault();
        products[currentProduct].title = titleInputElement.value;
        products[currentProduct].price = priceInputElement.value;
        products[currentProduct].stock = stockInputElement.value;
        products[currentProduct].brand = brandInputElement.value;
        products[currentProduct].category = categoryInputElement.value;

        generateTableContents();
        currentProduct = undefined;
        editMode = false;
        submitButtonElement.onclick = createNewRecord;
        submitButtonElement.innerText = "Submit";
        submitButtonElement.classList.add("btn-primary");
        submitButtonElement.classList.remove("btn-success");
        titleInputElement.value = "";
        priceInputElement.value = "";
        stockInputElement.value = "";
        brandInputElement.value = "";
        categoryInputElement.value = "";
        localStorage.setItem('products', JSON.stringify(products));
      };

      const setEdit = (id) => {
        let elementIndex = products.findIndex((value) => value.id === id);
        const product = products[elementIndex];
        titleInputElement.value = product.title;
        priceInputElement.value = product.price;
        stockInputElement.value = product.stock;
        brandInputElement.value = product.brand;
        categoryInputElement.value = product.category;

        submitButtonElement.innerText = "Update";
        submitButtonElement.classList.add("btn-success");
        submitButtonElement.classList.remove("btn-primary");
        submitButtonElement.onclick = updateProduct;

        currentProduct = elementIndex;
        editMode = true;
      };

      const filter = document.querySelector(".filter-btn");
      const filterInput = document.querySelector("#search");
      const filteredTable = document.querySelector("#filtered");
      const categoryFilter = document.querySelector("#categoryFilter");
      const brandFilter = document.querySelector("#brandFilter");
      const priceMin = document.querySelector("#priceMin");
      const priceMax = document.querySelector("#priceMax");

      const generateFilteredTableContents = (value) => {
        let dynamicHTML = ``;
        for (const product of value) {
          dynamicHTML += `<tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>${product.brand}</td>
                <td>${product.category}</td>
                </tr>`;
        }
        filteredTable.innerHTML = dynamicHTML;
      };

      const setFilter = (event) => {
        event.preventDefault();
        const filterValue = filterInput.value.toLowerCase();
        const filterCategory = categoryFilter.value.toLowerCase();
        const filterBrand = brandFilter.value.toLowerCase();
        const filterPriceMin = parseFloat(priceMin.value);
        const filterPriceMax = parseFloat(priceMax.value);

        const filteredProducts = products.filter(
          (product) =>
            product.title.toLowerCase().includes(filterValue) &&
            product.brand.toLowerCase().includes(filterBrand) &&
            product.category.toLowerCase().includes(filterCategory) &&
            product.price >= filterPriceMin &&
            product.price <= filterPriceMax
        );
        generateFilteredTableContents(filteredProducts);
      };

      filter.onclick = setFilter;