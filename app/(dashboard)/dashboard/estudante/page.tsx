"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form-nextjs";
import { FieldInfo } from "./fiel-info";

export default function EstudantePage() {
  const form = useForm({
    defaultValues: {
      firstNmae: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <div>
      <h1>Cadastro de Estudante</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="max-w-2xl mx-auto"
      >
        <>
          <form.Field
            name="firstNmae"
            validators={{
              onChange: ({ value }) =>
                !value
                  ? "Campo obrigatório"
                  : value.length < 3
                    ? "Primeiro nome deve ter no minimo 3 caracteres"
                    : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return (
                  value.includes("error") &&
                  'Nenhum "error" no campo Primeiro nome'
                );
              },
            }}
            children={(field) => {
              return (
                <div>
                  <Label htmlFor={field.name}>Primeiro Nome</Label>
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  <FieldInfo field={field} />
                </div>
              );
            }}
          />
        </>
      </form>
    </div>
  );
}
