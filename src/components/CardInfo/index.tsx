import { useContext } from "react";
import { ContainerCardInfo } from "./styles";
import { UserQueryContext } from "../../context/user-query-context";

export function CardInfo() {
  const { profile, isFounded, hasSearched } = useContext(UserQueryContext);
  const { name, bio, avatar_url, login } = profile;

  if (!hasSearched) return null; 

  console.log(name);

  return (
    <ContainerCardInfo>
      {isFounded ? (
        <div>
          <img src={avatar_url} alt={`Avatar de ${name ? name : login}`} />
          <div>
            <h2>{name ? name : login}</h2>
            <p>{!bio ? "Este usuário não tem uma bio! =(" : bio}</p>
          </div>
        </div>
      ) : (
        <span>
          Nenhum perfil foi encontrado com esse nome de usuário.
          <br />
          Tente novamente.
        </span>
      )}
    </ContainerCardInfo>
  );
}