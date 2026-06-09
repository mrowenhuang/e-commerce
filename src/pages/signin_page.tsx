import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "../components/ui/field";
import { Input } from "../components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import model4 from "@/assets/model4.jpg";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

type loginFormData = z.infer<typeof loginSchema>;

function SigninPage() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: loginFormData) => {
    try {
      const response = await login(data.username, data.password);

      console.log(response);

      localStorage.setItem("acc", data.username);

      navigate("/home");
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        setApiError(error.response?.data?.message ?? "Terjadi kesalahan");
      } else {
        setApiError("Terjadi kesalahan");
      }
    }
  };

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center  p-4">
        <div className="grid h-full grow grid-cols-1 items-center lg:grid-cols-2">
          <div className="px-0 pt-24 md:pb-12 lg:px-2 lg:py-24 justify-center flex">
            <Card className="w-full max-w-sm">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Login to your account</CardTitle>
                  <CardDescription>
                    Enter your username and and password to login
                  </CardDescription>
                  <CardAction>
                    <Button variant={"link"}>Sign Up</Button>
                  </CardAction>
                </CardHeader>
                <CardContent>
                  <FieldSet>
                    <FieldGroup>
                      <Field>
                        <FieldLabel>Username</FieldLabel>
                        <Input
                          // id="username"
                          type="text"
                          placeholder="john doe"
                          {...register("username")}
                        />
                      </Field>
                      <Field>
                        <FieldLabel>Password</FieldLabel>
                        <Input
                          {...register("password")}
                          type="password"
                          placeholder="---------"
                        />
                        <div className=" justify-end flex">
                          <Button variant={"link"}>Forget Password</Button>
                        </div>
                      </Field>
                    </FieldGroup>
                  </FieldSet>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  {apiError && <p className="text-red-500">{apiError}</p>}
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Loading..." : "Sign In"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
          <img
            alt="model4"
            src={model4}
            className="h-full w-full rounded-xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default SigninPage;
