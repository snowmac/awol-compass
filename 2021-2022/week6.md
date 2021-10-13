Week 6, we went over week 5, solved all the issues and implemented pagination. 

Solved here: 
https://codepen.io/adambourg/pen/oNwmQqV


Code: 

JS: 
    $(function () {
        var pageSize = 5; 


    function htmlProductTemplate({
        title,
        price,
        description,
        category,
        image,
        id
    }) {
        return `
                <tr id="product-${id}">
                    <td>${title}</td>
                    <td>${price}</td>
                    <td>${description}</td>
                    <td>${category}</td>
                    <td><img src="${image}" width="100px" /></td>
                    <td><button id="${id}" class="delete">Delete Item</button></td>
                </tr>
            `;
    }

    function loadProducts() {
        // TO DO

        // call the url https://fakestoreapi.com/products?limit=10 with the method: "get", supply a success function and take the response data and apply the htmlProductTemplate to the results to get the html format we need.

        $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        success: function (response) {
            // limit it to 5 items; 
            var pageCount = response.length / pageSize; 
            var list = {}; 

            // CREATING THE LIST OF ITEMS IN EACH PAGE
            // {4: [], 3: [], 2: [], 1: []}
            for(var i = pageCount; i > 0; i--){
                list[i] = []; 
            }

            var listIndex = 1; 
            
            for(var i = 0; i < response.length; i++) {
                var item = htmlProductTemplate(response[i]); 

                // 1, 2, 3, 4, slot if the count of items in the list is < 5; keep pushing, otherwise increment list index counter
                if(list[listIndex].length < pageSize) {
                    list[listIndex].push(item); 
                } else {
                    listIndex++; 
                }
            }

            // storing this in the global scope for later 
            window.product_list = list; 

            $('#itemList table tbody').html(window.product_list['1']); 

            var paginationButtons = ''; 

            // list of buttons 1,2,3,4 
            for(var x = 1; x <= pageCount; x++ ) {
                // string literal template

                if(x===1) {
                    paginationButtons += `<li id="${x}" class="active"> ${x} </li>`;
                } else {
                    paginationButtons += `<li id="${x}"> ${x} </li>`;
                }
                
                // string interpolation
                // paginationButtons += '<li id="' + x + '">' + x + "</li>"
            }

            $('#pagination').html(paginationButtons);
        }
        });
    }

    // to implement save call
    $("#save").on("click", function (event) {
        // prevent form submit; don't worry about this.
        event.preventDefault();

        $.ajax({
            url: 'https://fakestoreapi.com/products',
            method: "post", 
            body: {
                title: $('input[name=title]').val(), 
                price: $('input[name=price]').val(), 
                description: $('input[name=description]').val(), 
                image: $('input[name=image]').val(), 
                category: $('input[name=category]').val()
            },
            success: function(response) {
                var id = response.id; 

                var htmlTableRow = htmlProductTemplate({
                    
                }); 

                window.product_list[0].push({
                    title: $('input[name=title]').val(), 
                    price: $('input[name=price]').val(), 
                    description: $('input[name=description]').val(), 
                    image: $('input[name=image]').val(), 
                    category: $('input[name=category]').val(),
                    id
                })

                $('#itemList table tbody').prepend(htmlTableRow); 
            }
        })

        // TO DO

        // using $.ajax call the fake api service to save the product
        // then manually add the new object to the list
        // api docs says  If you send an object like the code above, it will return you an object with a new id. remember that nothing in real will insert into the database. so if you want to access the new id you will get a 404 error.

        // ajax takes a body property of which you'll pass key values such as title to get the html value use $("input[name=title]").val() change the part following name= to whatever field you're trying to get the value of $("input[name=title]").val() for title, or $("input[name=description]").val() for description etc...

        // implement an success: function as apart of the ajax call to dynamically add the product to the list
    });

    // event delegation issue with dynamic events, can't use just .on('click')
    $(document.body).on("click", ".delete", function (event) {
        $.ajax({
            url: 'https://fakestoreapi.com/products/' + event.target.id, 
            method: 'delete', 
            success: function() {
                var idSelector = '#product-' + event.target.id; 
                // this removes it from the screen w/o a refresh
                $(idSelector).remove(); 
            }
        })
    });

    $(document.body).on("click", "#pagination", function (event) {
        $('#itemList table tbody').html(window.product_list[event.target.id]);

        $('li').removeClass('active')

        $(`#${event.target.id}`).addClass('active'); 
    });

    // reload products from the api;
    $("#reload").on("click", function () {
        loadProducts();
    });

    // on page load, get the products
    loadProducts();
    });

CSS:
fieldset {
  width: 30%;
}

fieldset legend {
  color: white;
  background: #399edb;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px 50px;
}

table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}

th,
td {
  padding: 12px 15px;
}

tbody tr {
  border-bottom: 1px solid #dddddd;
}

tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}

#pagination {
  list-style:none;
  margin-left:auto; 
  margin-right:auto; 
  width:200px;
}

#pagination li {
  display: inline;
  width: 20px;
  height: 20px; 
  border: 1px solid black; 
  padding: 10px; 
  margin: 5px; 
  background: #acd7f2;
}

#pagination li:hover {
  background: #399edb; 
  cursor: grab;
}

.active {
    background: #0F9D58 !important; 
    color: white; 
  border: none;
 }

HTML: 
<h1> Product List </h1>

<form>
  <fieldset>
    <legend>Add Product</legend>
    <label for="title">
      Title
    </label>
    <input name="title" type="text" />

    <br />

    <label for="price">
      Price
    </label>
    <input name="price" type="text" />

    <br />

    <label for="description">
      Description
    </label>
    <input name="description" type="text" />

    <br />

    <label for="image">
      Image
    </label>
    <input name="image" type="text" />
    <br />

    <label for="category">
      Category
    </label>
    <input name="category" type="text" />
    <br />

    <button id="save"> Save </button>

  </fieldset>
</form>

<div id="itemList">
  <h1>Items ready</h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Price</th>
        <th>Description</th>
        <th>Category</th>
        <th>Image</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </table>

  <ul id="pagination">
    <li> 1 </li>
    <li> 2 </li>
    <li> 3 </li>
  </ul>

</div>



<button id="reload"> Refresh the product list! </button>