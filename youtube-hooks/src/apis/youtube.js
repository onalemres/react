import axios from "axios";

const KEY = "AIzaSyA2KjU-vcbEyEKg_IWKIMlC4lH74NTZtBQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
