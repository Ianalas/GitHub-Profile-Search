import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ContainerSearch } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserQueryContext } from "../../context/user-query-context";

const searchFormSchema = z.object({
  query: z.string(), 
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Search (){
  const {fetchProfile} = useContext(UserQueryContext)

  const {handleSubmit, register, reset} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchUser({query}: SearchFormInputs) {
    await fetchProfile(query); // Garante que não passe `undefined`
    reset();
  }

  return(
    <ContainerSearch>
      <form onSubmit={handleSubmit(handleSearchUser)}>
        <input type="text" placeholder="Digite um usuário do Github" {...register("query")} />
        <button type="submit"><Icon icon="mage:search" height={25} width={25} /></button>
      </form>
    </ContainerSearch>
  )
}