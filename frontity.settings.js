const settings = {
  "name": "frontity-react",
  "state": {
    "frontity": {
      "url": "https://reactworpresstest.wordpress.com/",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "AIFC",
              "/"
            ],
            [
              "О НАС",
              "/about-us/"
            ],
            [
              "УСЛУГИ",
              "/category/services/"
            ],
            [
              "БИЗНЕС",
              "/category/business/"
            ],
            [
              "МЕДИА",
              "/category/media/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://reactworpresstest.wordpress.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
