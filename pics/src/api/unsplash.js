import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID tdAOQ5rnmPMmBjuXr8hjkKTjsRCy139Vkp1l3HEXabY",
  },
});
