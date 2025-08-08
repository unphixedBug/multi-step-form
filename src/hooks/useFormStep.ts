import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "../lib/schemas";

export const useFormStep = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      plan: "arcade",
      isYearlyPlanSelected: false,
      addons: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
    },
  });

  return form;
};
