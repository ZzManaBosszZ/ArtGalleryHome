const url = {
    BASE_URL: "https://localhost:7270/api/",

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
        DETAIL: "Offers/detailForUser"
    },

    GALLERY: {
        LIST: "/gallery/get-all",
    },
}; 
export default url;