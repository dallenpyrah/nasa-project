import { AppState } from '../AppState'
import { imagesApi, nasaApi } from './AxiosService'

class PicturesService {
  async getPicture() {
    try {
      const res = await nasaApi.get('/planetary/apod?api_key=dPrRgWn21Nw0960OluVhnz96x3hhjq5s1jxLISIf')
      console.log(res)
      AppState.pictureOfDay = res.data
    } catch (error) {
      console.error(error)
    }
  }

  async searchPictures(query) {
    try {
      const res = await imagesApi.get('/search?q=' + query)
      console.log(res.data.collection)
      AppState.searchPicture = res.data.collection.items[0].data[0]
    } catch (error) {

    }
  }
}

export const picturesService = new PicturesService()
