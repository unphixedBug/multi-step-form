import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, type FormData } from "../lib/schemas";

export const useFormStep = () => {
  const getDefaultValues = () => {
    const saved = localStorage.getItem("formData");
    const defaultValues = {
      plan: "arcade",
      isYearlyPlanSelected: false,
      addons: {
        onlineService: false,
        largerStorage: false,
        customizableProfile: false,
      },
    };

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultValues;
      }
    }
    return defaultValues;
  };
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: getDefaultValues(),
  });

  const watchedValues = form.watch();

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(watchedValues));
  }, [watchedValues]);

  return form;
};
