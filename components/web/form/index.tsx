import { FieldInfo } from "@/app/(dashboard)/dashboard/analytics/fild-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formOptions, useForm } from "@tanstack/react-form-nextjs";

interface User {
  firstName: string;
  lastName: string;
  hobbies: Array<string>;
}

const defaulUser: User = { firstName: "", lastName: "", hobbies: [] };

const formOpts = formOptions({
  defaultValues: defaulUser,
});

export function FormularioCustomer() {
  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });
  return (
    <div>
      <h1>Cadastrar Cliente</h1>
      <main className="w-xl mx-auto">
        <form.Field
          name="firstName"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Primeiro nome e obrigatorio"
                : value.length < 3
                  ? "Primeiro nome deve ter pelo menos 3 caracteres"
                  : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && "Erro no primeiro nome";
            },
          }}
          children={(field) => (
            <div>
              <Label htmlFor={field.name}>Primeiro Nome</Label>
              <Input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          )}
        />
        <form.Field
          name="hobbies"
          mode="array"
          children={(hobbiesField) => (
            <div>
              <h1>Tempo de lazer</h1>
              <div>
                {!hobbiesField.state.value.length
                  ? "tempos de lazer nao encontrado"
                  : hobbiesField.state.value.map((_, i) => (
                      <div key={i}>
                        <form.Field
                          name={`hobbies[${i}]`}
                          children={(field) => {
                            return (
                              <div>
                                <Label htmlFor={field.name}>Hobbies</Label>
                                <Input
                                  id={field.name}
                                  name={field.state.value}
                                  onBlur={field.handleBlur}
                                  onChange={(e) =>
                                    field.handleChange(e.target.value)
                                  }
                                />
                                <Button
                                  type="button"
                                  onClick={() => hobbiesField.removeValue(i)}
                                >
                                  X
                                </Button>
                                <Button
                                  type="button"
                                  onClick={() =>
                                    hobbiesField.pushValue("Cozinhar")
                                  }
                                >
                                  {" "}
                                  Adicionar Hobbie{" "}
                                </Button>
                              </div>
                            );
                          }}
                        />
                      </div>
                    ))}
              </div>
            </div>
          )}
        />
      </main>
    </div>
  );
}
