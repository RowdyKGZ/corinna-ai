import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  UserRegistrationProps,
  UserRegistrationSchema,
} from "@/schemas/auth.schema";

export const useSignUpForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState();
  const { signUp, isLoaded, setActive } = useSignUp();
  const router = useRouter();
  const methods = useForm<UserRegistrationProps>({
    resolver: zodResolver(UserRegistrationSchema),
  });
};
