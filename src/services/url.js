const url = {
    BASE_URL: "http://localhost:5293/api/",

    AUTH: {
        REGISTER: "AUTH/register",
        LOGIN: "AUTH/login",
        FORGOT_PASSWORD: "AUTH/forgot-password",
        PROFILE: "AUTH/profile",
        UPDATE_PROFILE: "AUTH/update-profile",
        CHANGE_PASSWORD: "AUTH/change-password",
        RESET_PASSWORD: "AUTH/reset-password",
    },

    ARTIST: {
        LIST:"Artists",
        DETAIL: "Artists/{}",
    },

    ARTWORK: {
        LIST:"ArtWorks",
        DETAIL: "ArtWorks/{}",
    },

    OFFER: {
        CREATE: "Offers/CreateOfferUser",
        MY_OFFER: "Offers/get-by-user",
        DETAIL: "Offers/detailForUser"
    },

    FAVORITE: {
        BY_USER: "Favorites/get-by-user",
        ADD: "Favorites/addtofavorite",
        REMOVE: "Favorites/removefavorite",
    },

    PAYPAL: {
        DETAIL: "Offers/detailForUser"
    },

}; 
export default url;