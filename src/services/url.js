const url = {
    BASE_URL: "https://localhost:7220/api/",

    CONTACT: {
        CREATE: "feedback/create",
    },

    ARTIST: {
        LIST: "shop/get-all",
        DETAIL: "shop/detail/{}",
        RELATEDS: "shop/relateds/{}",
        GETBYFLOOR: "shop/get-all-by-floor/{}",
        GETBYCATEGORY: "shop/get-all-by-category/{}",
    },

    ARTWORK: {
        LIST: "floor/get-all",
    },

    PAYPAL: {
        PAYMENT: "v1/Payments/PayPal",
    },

    GALLERY: {
        LIST: "/gallery/get-all",
    },
};