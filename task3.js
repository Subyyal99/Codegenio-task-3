var Products = [
  {
    id: 1,
    name: "Redmi Note 9s",
    price: 35000,
    vendor_id: 2,
    category_id: 1,
  },
  {
    id: 2,
    name: "Samsung S9",
    price: 50000,
    vendor_id: 1,
    category_id: 1,
  },
  {
    id: 3,
    name: "Hp Elite",
    price: 80000,
    vendor_id: 2,
    category_id: 3,
  },
  {
    id: 4,
    name: "Headphones",
    price: 3000,
    vendor_id: 3,
    category_id: 2,
  },
];
var Category = [
  {
    id: 1,
    name: "MOBILE",
    status: "active",
  },
  {
    id: 2,
    name: "ACCESSORIES",
    status: "active",
  },
  {
    id: 3,
    name: "LAPTOP",
    status: "active",
  },
  {
    id: 4,
    name: "FURNITURE",
    status: "active",
  },
];
var Vendor = [
  {
    id: 1,
    first_name: "Subyyal",
    last_name: "Siddiqui",
    contact_number: "03001234567",
  },
  {
    id: 2,
    first_name: "Shahid",
    last_name: "Anwar",
    contact_number: "03001234567",
  },
  {
    id: 3,
    first_name: "Abdul",
    last_name: "Hai",
    contact_number: "03001234567",
  },
  {
    id: 4,
    first_name: "Jabir",
    last_name: "Nawaz",
    contact_number: "03001234567",
  },
];

function DisplayProducts(arr) {
  tbody = document.getElementById("product-data");
  var rows = "";

  arr.forEach(function (product, i) {
    rows += `<tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.vendor_id}</td>
            <td>${product.category_id}</td>
            <td><button class="dlt" onclick="DeleteId(${product.id})">X</button></td>
          </tr>`;
  });
  tbody.innerHTML = rows;
}
DisplayProducts(Products);

var refresh = () => {
  DisplayProducts(Products);
};
function showproducts() {
  tbody2 = document.getElementById("category-data");
  tbody3 = document.getElementById("vendor-data");
  var rows2 = "";
  var rows3 = "";
  Category.forEach(function (c, i) {
    rows2 += `<tr>
        <td>${c.id}</td>
        <td>${c.name}</td>
        <td>${c.status}</td>
        <td><button class="view" onclick="GetCategoryProducts(${c.id})"><i class="bi bi-check2"></i>
        </button></td>

      </tr>`;
  });
  tbody2.innerHTML = rows2;
  Vendor.forEach(function (v, i) {
    rows3 += `<tr>
        <td>${v.id}</td>
        <td>${v.first_name}</td>
        <td>${v.last_name}</td>
        <td>${v.contact_number}</td>
      </tr>`;
  });
  tbody3.innerHTML = rows3;
}
showproducts();

var ProductAdd = () => {
  document.getElementById("product-add").style.display = "block";
};

var SaveProduct = () => {
  document.getElementById("product-add").style.display = "none";

  var p_name = document.getElementById("name").value;
  var p_price = document.getElementById("price").value;
  var p_cat = document.getElementById("cat").value;
  var p_vendor = document.getElementById("v_id").value;
  var flag = false;
  p_cat = p_cat.toUpperCase();
  Category.forEach(function (e, i) {
    if (e.name == p_cat) {
      flag = true;
      p_cat = e.id;
    }
  });

  if (flag == true) {
    var obj = {
      id: Math.floor(Math.random() * 100),
      name: p_name,
      price: parseInt(p_price),
      vendor_id: p_vendor,
      category_id: p_cat,
    };
    console.log(obj);
    Products.push(obj);
    alert("Product Added Successfully");
    DisplayProducts(Products);
  } else {
    alert("No matching Category found");
  }
};

var DeleteId = (id) => {
  Products = Products.filter(function (p) {
    return p.id != id;
  });
  DisplayProducts(Products);
};

var DeleteProduct = () => {
  document.getElementById("product-dlt").style.display = "block";
};

var deleteName = () => {
  document.getElementById("product-dlt").style.display = "none";
  var name = document.getElementById("delete_name").value;
  name = name.toUpperCase();
  var flag = false;
  Products.forEach(function (e, i) {
    if (e.name.toUpperCase() == name) {
      flag = true;
    }
  });
  if (flag == true) {
    Products = Products.filter(function (p) {
      return p.name.toUpperCase() != name;
    });
    DisplayProducts(Products);
  } else {
    alert("No matching Product found");
  }
};

var GetCategoryProducts = (id) => {
  var arr = Products.filter(function (p) {
    return p.category_id == id;
  });
  DisplayProducts(arr);
};

var GetVendorProducts = () => {
  document.getElementById("vendor-search").style.display = "block";
};

var searchVendor = () => {
  document.getElementById("vendor-search").style.display = "none";

  var first = document.getElementById("ven-search-first").value;
  var last = document.getElementById("ven-search-last").value;
  var flag = false;
  var first = first.toUpperCase();
  var last = last.toUpperCase();

  Vendor.forEach(function (e, i) {
    if (
      e.first_name.toUpperCase() == first ||
      e.last_name.toUpperCase() == last
    ) {
      flag = true;
      first = e.id;
    }
  });
  if (flag == true) {
    var arr = Products.filter(function (p) {
      return p.vendor_id == first;
    });
    DisplayProducts(arr);
  } else {
    alert("No Vendor found");
  }
};

var SearchProductbyID = () => {
  var id = document.getElementById("pro-search-id").value;
  var arr = Products.filter(function (p) {
    return p.id == id;
  });
  DisplayProducts(arr);
};

var filter = () => {
  var max = document.getElementById("product-filter").value;
  var arr = Products.filter(function (p) {
    console.log(p.price);
    return p.price < max;
  });
  DisplayProducts(arr);
};
