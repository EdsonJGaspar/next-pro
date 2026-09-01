"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "@tanstack/react-form-nextjs";
import { FieldInfo } from "./fiel-info";
import { Button } from "@/components/ui/button";

export default function EstudantePage() {
  const form = useForm({
    defaultValues: {
      firstNmae: "",
      lastName: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value);
      form.reset();
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
        <div>
          <form.Field
            name="firstNmae"
            validators={{
              onChange: ({ value }) =>
                !value.trim()
                  ? "Campo obrigatório"
                  : value.length < 3
                    ? "Primeiro nome deve ter no minimo 3 caracteres"
                    : undefined,
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes("error") && "Erro no Primeiro nome";
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
        </div>
        <div>
          <form.Field
            name="lastName"
            children={(field) => {
              return (
                <div>
                  <Label htmlFor={field.name}>Ultimo Nome</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              );
            }}
          />
        </div>
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <>
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "Enviando..." : "Enviar"}
              </Button>
              <Button
                type="reset"
                onClick={(e) => {
                  e.preventDefault();
                  form.reset();
                }}
              >
                Reset
              </Button>
            </>
          )}
        />
      </form>
    </div>
  );
}
