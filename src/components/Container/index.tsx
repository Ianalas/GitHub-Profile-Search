import { Search } from "../Search"
import { MainContainer } from "./styles"

export function Container (){
  return(
    <MainContainer>
      <div>
        <h1>Github<i>Profile</i></h1>
      </div>
      <Search />
    </MainContainer>
  )
}