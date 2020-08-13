const defaultState = {
    "orderId": "order1",
    "buyerName": "max",
    "buyerEmail": "5512221596",
    "orderAmount": 50.00,
    "orderStatus": 0,
    "payStatus": 0,
    "createTime": 1594382950,
    "updateTime": 1594382950,
    "orderDetailList": [
        {
            "detailId": "detail1",
            "orderId": "order1",
            "productId": "1",
            "productName": "product1",
            "productPrice": 10.00,
            "productQuantity": 1,
            "productIcon": "http://detail1.com"
        },
        {
            "detailId": "detail2",
            "orderId": "order1",
            "productId": "2",
            "productName": "product2",
            "productPrice": 20.00,
            "productQuantity": 2,
            "productIcon": "http://detail2.com"
        }
    ]
}

export default (state = defaultState, action) => {
    return state;
}