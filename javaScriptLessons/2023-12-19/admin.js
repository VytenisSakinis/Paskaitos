 //CRUD:
      //Create - Sukurti įrašą
      //Read - Peržiūrėti įrašą
      //UPDATE - Atnaujinti įrašą
      //DELETE - Ištrinti įrašą

      localStorage.getItem("products")
      if (!localStorage.getItem('products')) localStorage.setItem('products', JSON.stringify([]))

      const getLastProductId = () => {
        if (products.length === 0) {
          return 0;
        }
        return products[products.length - 1].id;
      };
      
      const products = JSON.parse(localStorage.getItem("products"));
      let currentId = getLastProductId() + 1;
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
        describtionElement = document.getElementById('describtion'),
        modalBackground = document.querySelector("#modalBackground"),
        filterInput = document.querySelector("#search"),
        categoryFilter = document.querySelector("#categoryFilter"),
        brandFilter = document.querySelector("#brandFilter"),
        priceMin = document.querySelector("#priceMin"),
        priceMax = document.querySelector("#priceMax"),
        describtionFilter = document.querySelector("#describtionFilter");

      //Arrow function doesnt work when it's above the function, while function .. () does
      // Automatinis funkcijos iskvietimas apskliaudus funkcija ir uz jos padejus skliaustelius
      const generateTableContents = (productsArray) => {
        let dynamicHTML = ``;
        for (const product of productsArray) {
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

      generateTableContents(products);

      const showModal = (id) => {
        let elementIndex = products.findIndex((value) => value.id === id);
        const product = products[elementIndex]
        let dynamicHTML = ``
        dynamicHTML = `
        <div id="modalBackground" style="width: 100%; height: 100%;">
        <div style="max-width: 70%; margin: 0 auto;">
      <img
        src="${product.thumbnail}"
        alt="${product.thumbnail}"
      />
      <div class="row d-flex justify-content-between">
        <span class="col-6 fw-bold">Nuolaida:</span>
        <span class="col-6">${product.discountPercentage}</span>
      </div>
      <div class="row d-flex justify-content-between">
        <span class="col-6 fw-bold">Įvertinimas:</span>
        <span class="col-6">${product.rating}</span>
      </div>
      <div class="row d-flex justify-content-between">
        <span class="col-6 fw-bold">Aprašymas:</span>
        <span class="col-6"
          >${product.describtion}</span>
          <button onclick="closeModal()" class="closingButton btn btn-primary">Close</button>
      </div>
      </div>`
      modalElement.innerHTML = dynamicHTML
      modalElement.showModal();
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
        console.log(newProduct.discountPercentage)
        currentId++
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        generateTableContents(products);
      };

      submitButtonElement.onclick = createNewRecord;

      const deleteProduct = (id) => {
        let elementIndex = products.findIndex((value) => value.id === id);
        products.splice(elementIndex, 1);
        generateTableContents(products);
        localStorage.setItem('products', JSON.stringify(products));
      };

      const updateProduct = (event) => {
        event.preventDefault();
        products[currentProduct].title = titleInputElement.value;
        products[currentProduct].price = +priceInputElement.value;
        products[currentProduct].stock = +stockInputElement.value;
        products[currentProduct].brand = brandInputElement.value;
        products[currentProduct].category = categoryInputElement.value;
        products[currentProduct].thumbnail = photoElement.value;
        products[currentProduct].discountPercentage = +discountElement.value;
        products[currentProduct].rating = +ratingElement.value;
        products[currentProduct].describtion = describtionElement.value;

        generateTableContents(products);
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
        describtionElement.value = "";
        discountElement.value = "";
        ratingElement.value = "";
        describtionElement.value = "";
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
        photoElement.value = product.thumbnail;
        discountElement.value = product.discountPercentage;
        ratingElement.value = product.rating;
        describtionElement.value = product.describtion;

        submitButtonElement.innerText = "Update";
        submitButtonElement.classList.add("btn-success");
        submitButtonElement.classList.remove("btn-primary");
        submitButtonElement.onclick = updateProduct;

        currentProduct = elementIndex;
        editMode = true;
      };
      
      filterInput.onkeyup = filter;
      priceMin.onkeyup = filter;
      priceMax.onkeyup = filter;
      brandFilter.onkeyup = filter;

      function filter(){
        let productName = filterInput.value.toLowerCase()
        let minPrice = +priceMin.value;
        let maxPrice = +priceMax.value;
        let filterBrand = brandFilter.value.toLowerCase() 

        let filteredArray = products.filter((product)=> 
          product.title.toLowerCase().includes(productName)
        )
        filteredArray = filteredArray.filter((product) => product.price >= minPrice)
        if(maxPrice!==0)
          filteredArray = filteredArray.filter((product) => product.price <= maxPrice)

          filteredArray = filteredArray.filter((product) => product.brand.toLowerCase().includes(filterBrand))
        generateTableContents(filteredArray)
      }