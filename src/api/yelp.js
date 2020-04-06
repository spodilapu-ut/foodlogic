import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer YTmw8QsUPLaTPt1FS88P9QuwnGYyxtFqa2k_bJoyRvil9zZ9RginYJuLYffoon5qkxqKtllUoG4goY_ecc3nTyG6HPccUxVlB-so15nnz_E4Wwx2LFtJ9M6bdw-JXnYx",
  },
});
