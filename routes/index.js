var express = require('express');
var router = express.Router();

var dat1 = [
  {
      "name":"G_SHOCK",
      "seri":"GAS-100BL-1A",
      "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
      "price":"450.000 VNĐ",
      "oldprice":"500.000 VNĐ",
      "url":"images/shop_product/01.jpg"
  },
  {
    "name":"G_SHOCK",
    "seri":"DW-5600THB-7",
    "des":"Không có mô tả",
    "price":"350.000 VNĐ",
    "oldprice":"400.000 VNĐ",
    "url":"images/shop_product/02.jpg"
  },
  {
      "name":"Orient",
      "seri":"SAB0B007WB Nam",
      "des":"Không có mô tả",
      "price":"4.610.000 VNĐ",
      "oldprice":"4.990.000 VNĐ",
      "url":"images/shop_product/03.jpg"
    },
    {
          "name":"Seiko",
          "seri":"SRPC57K1 Nam",
          "des":"Không có mô tả",
          "price":"4.140.000 VNĐ",
          "oldprice":"7.340.000 VNĐ",
          "url":"images/shop_product/04.jpg"
    },
    {
          "name":"Daniel Wellington",
          "seri":"Bayswater DW00100276",
          "des":"Không có mô tả",
          "price":"4.600.000 VNĐ",
          "oldprice":"4.990.000 VNĐ",
          "url":"images/shop_product/05.jpg"
    },

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{dat1});
});

var dat2 = [
  {
      "name":"G_SHOCK",
      "seri":"GAS-100BL-1A",
      "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
      "price":"450.000 VNĐ",
      "oldprice":"500.000 VNĐ",
      "url":"images/shop_product/01.jpg"
  },
  {
      "name":"G_SHOCK",
      "seri":"DW-5600THB-7",
      "des":"Không có mô tả",
      "price":"350.000 VNĐ",
      "oldprice":"400.000 VNĐ",
      "url":"images/shop_product/02.jpg"
    },
    {
        "name":"Orient",
        "seri":"SAB0B007WB Nam",
        "des":"Không có mô tả",
        "price":"4.610.000 VNĐ",
        "oldprice":"4.990.000 VNĐ",
        "url":"images/shop_product/03.jpg"
      },
      {
            "name":"G_SHOCK",
            "seri":"GAS-100BL-1A",
            "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
            "price":"450.000 VNĐ",
            "oldprice":"500.000 VNĐ",
            "url":"images/shop_product/01.jpg"
        },
        {
          "name":"G_SHOCK",
          "seri":"DW-5600THB-7",
          "des":"Không có mô tả",
          "price":"350.000 VNĐ",
          "oldprice":"400.000 VNĐ",
          "url":"images/shop_product/02.jpg"
        },
        {
            "name":"Orient",
            "seri":"SAB0B007WB Nam",
            "des":"Không có mô tả",
            "price":"4.610.000 VNĐ",
            "oldprice":"4.990.000 VNĐ",
            "url":"images/shop_product/03.jpg"
         },
      {
            "name":"G_SHOCK",
            "seri":"GAS-100BL-1A",
            "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
            "price":"450.000 VNĐ",
            "oldprice":"500.000 VNĐ",
            "url":"images/shop_product/01.jpg"
        },
        {
          "name":"G_SHOCK",
          "seri":"DW-5600THB-7",
          "des":"Không có mô tả",
          "price":"350.000 VNĐ",
          "oldprice":"400.000 VNĐ",
          "url":"images/shop_product/02.jpg"
        },
        {
            "name":"Orient",
            "seri":"SAB0B007WB Nam",
            "des":"Không có mô tả",
            "price":"4.610.000 VNĐ",
            "oldprice":"4.990.000 VNĐ",
            "url":"images/shop_product/03.jpg"
          },
      {
            "name":"G_SHOCK",
            "seri":"GAS-100BL-1A",
            "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
            "price":"450.000 VNĐ",
            "oldprice":"500.000 VNĐ",
            "url":"images/shop_product/01.jpg"
        },
        {
          "name":"G_SHOCK",
          "seri":"DW-5600THB-7",
          "des":"Không có mô tả",
          "price":"350.000 VNĐ",
          "oldprice":"400.000 VNĐ",
          "url":"images/shop_product/02.jpg"
        },
        {
            "name":"Orient",
            "seri":"SAB0B007WB Nam",
            "des":"Không có mô tả",
            "price":"4.610.000 VNĐ",
            "oldprice":"4.990.000 VNĐ",
            "url":"images/shop_product/03.jpg"
          },
      {
            "name":"Orient",
            "seri":"SAB0B007WB Nam",
            "des":"Không có mô tả",
            "price":"4.610.000 VNĐ",
            "oldprice":"4.990.000 VNĐ",
            "url":"images/shop_product/03.jpg"
      },
      {
            "name":"Orient",
            "seri":"SAB0B007WB Nam",
            "des":"Không có mô tả",
            "price":"4.610.000 VNĐ",
            "oldprice":"4.990.000 VNĐ",
            "url":"images/shop_product/03.jpg"
      },
      {
                  "name":"Orient",
                  "seri":"SAB0B007WB Nam",
                  "des":"Không có mô tả",
                  "price":"4.610.000 VNĐ",
                  "oldprice":"4.990.000 VNĐ",
                  "url":"images/shop_product/03.jpg"
                },
            {
                  "name":"G_SHOCK",
                  "seri":"GAS-100BL-1A",
                  "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
                  "price":"450.000 VNĐ",
                  "oldprice":"500.000 VNĐ",
                  "url":"images/shop_product/01.jpg"
              },
              {
                "name":"G_SHOCK",
                "seri":"DW-5600THB-7",
                "des":"Không có mô tả",
                "price":"350.000 VNĐ",
                "oldprice":"400.000 VNĐ",
                "url":"images/shop_product/02.jpg"
              },
              {
                  "name":"Orient",
                  "seri":"SAB0B007WB Nam",
                  "des":"Không có mô tả",
                  "price":"4.610.000 VNĐ",
                  "oldprice":"4.990.000 VNĐ",
                  "url":"images/shop_product/03.jpg"
                },
            {
                  "name":"Orient",
                  "seri":"SAB0B007WB Nam",
                  "des":"Không có mô tả",
                  "price":"4.610.000 VNĐ",
                  "oldprice":"4.990.000 VNĐ",
                  "url":"images/shop_product/03.jpg"
            },
            {
                  "name":"Orient",
                  "seri":"SAB0B007WB Nam",
                  "des":"Không có mô tả",
                  "price":"4.610.000 VNĐ",
                  "oldprice":"4.990.000 VNĐ",
                  "url":"images/shop_product/03.jpg"
            },
]

router.get('/search', function(req, res, next) {
  res.render('search',{dat1,dat2});
});

var dat3 = [
  {
      "name":"G_SHOCK",
      "seri":"GAS-100BL-1A",
      "des":"Sắc đen cơ bản của mẫu này được cập nhật thêm các điểm nhấn màu tím như ánh sáng đèn neon trên gờ và mặt đồng hồ để tạo vẻ ngoài ít sành công nghệ",
      "price":"450.000 VNĐ",
      "oldprice":"500.000 VNĐ",
      "url":"images/shop_product/01.jpg"
  },
  {
      "name":"G_SHOCK",
      "seri":"DW-5600THB-7",
      "des":"Không có mô tả",
      "price":"350.000 VNĐ",
      "oldprice":"400.000 VNĐ",
      "url":"images/shop_product/02.jpg"
    },
    {
        "name":"Orient",
        "seri":"SAB0B007WB Nam",
        "des":"Không có mô tả",
        "price":"4.610.000 VNĐ",
        "oldprice":"4.990.000 VNĐ",
        "url":"images/shop_product/03.jpg"
      },
]
router.get('/productdetail', function(req, res, next) {
  res.render('productdetail',{dat1,dat3});
});
var datCart = [
    {
        "name":"G_SHOCK",
        "seri":"GAS-100BL-1A",
        "price":"450.000 VNĐ",
        "number":"2",
        "total":"900.000 VNĐ",
        "url":"images/shop_product/01.jpg",
        "size":"Large",
        "color":"#252525",
    },
    {
        "name":"G_SHOCK",
        "seri":"DW-5600THB-7",
        "price":"350.000 VNĐ",
        "number":"1",
        "total":"350.000 VNĐ",
        "url":"images/shop_product/02.jpg",
        "size":"XL",
        "color":"blue",
    },
    {
        "name":"Orient",
        "seri":"SAB0B007WB Nam",
        "price":"4.610.000 VNĐ",
        "number":"1",
        "total":"4.990.000 VNĐ",
        "url":"images/shop_product/03.jpg",
        "size":"M",
        "color":"red",
    },
];

router.get('/cart', function(req, res, next) {
  res.render('cart',{datCart});
});

var datCheck = [
    {
        "name":"G_SHOCK",
        "fullname":"G_SHOCK GAS-100BL-1A",
        "seri":"GAS-100BL-1A",
        "price":"450.000 VNĐ",
        "number":"2",
        "total":"900.000 VNĐ",
        "url":"images/shop_product/01.jpg",
        "size":"Large",
        "color":"#252525",
    },
    {
        "name":"G_SHOCK",
        "fullname":"G_SHOCK DW-5600THB-7",
        "seri":"DW-5600THB-7",
        "price":"350.000 VNĐ",
        "number":"1",
        "total":"350.000 VNĐ",
        "url":"images/shop_product/02.jpg",
        "size":"XL",
        "color":"blue",
    },
    {
        "name":"Orient",
        "fullname":"Orient SAB0B007WB",
        "seri":"SAB0B007WB Nam",
        "price":"4.610.000 VNĐ",
        "number":"1",
        "total":"4.990.000 VNĐ",
        "url":"images/shop_product/03.jpg",
        "size":"M",
        "color":"red",
    },
];

router.get('/checkout', function(req, res, next) {
  res.render('checkout',{datCheck});
});

router.get('/compare', function(req, res, next) {
    res.render('compare');
});

module.exports = router;
