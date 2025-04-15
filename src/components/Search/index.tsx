import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import { ContainerSearch } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { UserQueryContext } from "../../context/user-query-context";

const searchFormSchema = z.object({
  query: z.string().trim().min(1, "Digite algo válido para fazer a busca."),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function Search (){
  const {fetchProfile} = useContext(UserQueryContext)

  const {handleSubmit, register, reset, formState: {errors}} = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearchUser({query}: SearchFormInputs) {
    await fetchProfile(query); // Garante que não passe `undefined`
    reset();
  }

  useEffect(() => {
    if (errors.query) {
      alert(errors.query.message);
    }
  }, [errors.query]);

  return(
    <ContainerSearch>
      <form onSubmit={handleSubmit(handleSearchUser)}>
        <input type="text" placeholder="Digite um usuário do Github" {...register("query")} min={1} />
        <button type="submit"><Icon icon="mage:search" height={25} width={25} /></button>
      </form>
    </ContainerSearch>
  )
} 