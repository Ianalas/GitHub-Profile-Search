import { useContext } from "react";
import { CardInfo } from "../CardInfo";
import { Search } from "../Search";
import { MainContainer } from "./styles";
import { Icon } from '@iconify-icon/react';
import { UserQueryContext } from "../../context/user-query-context";

export function Container (){


  return(
    <MainContainer>
      <div>
        <Icon icon="bytesize:github" height={58} width={58}/>
        <h1><i>Perfil</i>Github</h1>
      </div>
      <Search />
      <CardInfo />

    </MainContainer>
  )
}


