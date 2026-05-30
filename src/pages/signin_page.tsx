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




function SigninPage() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center  p-4">
        <div className="grid h-full grow grid-cols-1 items-center lg:grid-cols-2">
          <div className="px-0 pt-24 md:pb-12 lg:px-2 lg:py-24 justify-center flex">
            <Card className="w-full max-w-sm">
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
                      <Input id="username" type="text" placeholder="john doe" />
                    </Field>
                    <Field>
                      <FieldLabel>Password</FieldLabel>
                      <Input
                        id="password"
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
              <CardFooter>
                <Button className="w-full">Sign In</Button>
              </CardFooter>
            </Card>
          </div>
          <img
            alt="Nature landscape with mountains"
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&w=2000&q=85"
            className="h-full w-full rounded-xl object-cover shadow-2xl"
          />
        </div>
      </div>
    </>
  );
}

export default SigninPage;
