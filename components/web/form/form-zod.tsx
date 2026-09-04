"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, useSelector } from "@tanstack/react-form-nextjs";
import z from "zod/v4";

const userSchema = z.object({
  age: z.number().gte(13, "O usuario deve ter no mnimo 13 anos"),
});
export function FormCount() {
  const form = useForm({
    defaultValues: {
      age: 0,
    },
    validators: {
      onChange: userSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const age = useSelector(form.store, (state) => state.values.age);
  const erros = useSelector(form.store, (state) => state.errorMap);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="age"
          children={(field) => {
            return (
              <div>
                <Label htmlFor={field.name}>Idade</Label>
                <Input
                  onBlur={field.handleBlur}
                  name={field.name}
                  value={field.state.value}
                  onChange={(e) => field.handleChange(Number(e.target.value))}
                />
              </div>
            );
          }}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <div>
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? "..." : "Submit"}
              </Button>
              <Button
                variant={"secondary"}
                type="reset"
                onClick={(e) => {
                  e.preventDefault();
                  form.reset();
                }}
              >
                Limpar
              </Button>
            </div>
          )}
        />
        <p>Idade {age}</p>
      </form>
    </div>
  );
}
