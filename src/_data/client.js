module.exports = {
    name: "Road Tech Paving LLC",
    email: "roadtechpavingny@gmail.com",
    phoneForTel: "518-955-1400",
    phoneFormatted: "(518) 955-1400",
    address: {
        lineOne: "139 Ruhle Rd. N.",
        lineTwo: "",
        city: "Ballston Spa",
        state: "NY",
        zip: "12020",
        country: "US",
        mapLink: "https://maps.app.goo.gl/TEdS5KoLC9ZcULuQ6",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
