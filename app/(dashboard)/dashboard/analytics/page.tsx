"use client";
import { useForm } from "@tanstack/react-form-nextjs";
import { FieldInfo } from "./fild-info";
import { FormularioCustomer } from "@/components/web/form";
import { FormCount } from "@/components/web/form/form-zod";

export default function AnaliticsPage() {
  return (
    <main>
      <FormularioCustomer />
      <FormCount />
    </main>
  );
}
