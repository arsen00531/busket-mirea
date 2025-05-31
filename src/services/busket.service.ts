import axios from "axios"

class BusketService {
  private baseURL = "https://fortniteapi.io/v2/shop?lang=en"
  private API_KEY = import.meta.env.VITE_API_KEY

  async getGoods() {
    const response = await axios.get(this.baseURL, {
      headers: {
        Authorization: this.API_KEY
      }
    })

    return response.data.shop
  }
}

const busketService = new BusketService()

export default busketService