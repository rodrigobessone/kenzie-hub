import { z } from "zod";
import { useFormContext } from "react-hook-form";
import { LabelModal } from "../../../../components/homePageComponents/StyledTitle";

const createModalSchema = z.object({
  title: z.string().min(3, "O título deve ter no mínimo 3 caracteres"),
});

const ModalInput = ({ modalType, userTech }) => {
  const { register, formState: { errors } } = useFormContext();
  const schema = modalType === "createModal" ? createModalSchema : null;

  return (
    <>
      <LabelModal>Nome</LabelModal>
      {modalType === "createModal" ? (
        <input
          type="text"
          placeholder={"Digite o nome da tecnologia"}
          name="title"
          {...register("title", {
            required: true,
            validate: (value) => {
              if (schema) {
                try {
                  schema.parse({ title: value });
                  return true;
                } catch (err) {
                  return err.message;
                }
              }
            },
          })}
        />
      ) : (
        <input
          type="text"
          value={userTech.status}
          disabled
        />
      )}
      {errors.title && <p>{errors.title.message}</p>}
    </>
  );
};

export default ModalInput;
