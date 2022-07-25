import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { schema } from "./schema";
import { UpdateConfigsProps } from "./typings";
import { useToast, useUser } from "@/contexts";

function Profile() {
  const { updateUser } = useUser();
  const { addToast } = useToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UpdateConfigsProps>({ resolver: yupResolver(schema) });

  async function onSubmit(data: UpdateConfigsProps) {
    try {
      await updateUser(data);
      addToast({ type: "success", msg: "Perfil atualizado com sucesso" });
    } catch (err) {
      addToast({
        type: "error",
        msg: "Erro ao atualizar perfil, tente novamente mais tarde",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("name")} />
      <p>{errors.name?.message}</p>

      <input type="phone" {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input type="number" {...register("cpf")} />
      <p>{errors.cpf?.message}</p>

      <input type="text" {...register("formation")} />
      <p>{errors.formation?.message}</p>

      <input type="text" {...register("course")} />
      <p>{errors.course?.message}</p>

      <input type="text" {...register("college")} />
      <p>{errors.college?.message}</p>

      <input type="text" {...register("password")} />
      <p>{errors.password?.message}</p>

      <input type="text" {...register("passwordConfirmation")} />
      <p>{errors.passwordConfirmation?.message}</p>
    </form>
  );
}

export default Profile;
