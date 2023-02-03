import Canvas from "./Canvas"
import Carousel from "./Carousel"
import Newsletter from "./Newsletter"
import Posters from "./Posters"
import Subscribe from "./Subscribe"
import UserSelection from "./UserSelection"

const HomeComponents = () => {
  return (
    <div>
      <Carousel/>
      <UserSelection/>
      <Posters/>
      <Canvas/>
      <Subscribe/>
      <Newsletter/>
    </div>
  )
}

export default HomeComponents