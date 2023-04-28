import {
  
  Card,
  Spacer,
  Button,
  text,
  Input,
  Row,
  Checkbox,
  Container,
} from "@nextui-org/react";
import Link from "next/link";
import { useFormik } from "formik";
import { useSession, signIn, signOut } from "next-auth/react";
import login__validate from "@/lib/validate";
import { useRouter } from "next/router";

import React from "react";

function logincss() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: login__validate,
    onSubmit,
  });

  //console.log(formik.errors);
  async function onSubmit(values) {
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: "/landing",
    });

    if (status.ok) router.push(status.url);
  }

  return (
    
      <div>
        <Container
          display="flex"
          alignItems="center"
          justify="center"
          css={{ minHeight: "100vh" }}
        >
          <Card css={{ mw: "420px", p: "20px" }} variant="bordered">
            <form onSubmit={formik.handleSubmit}>
              <text
                size={24}
                weight="bold"
                css={{
                  as: "center",
                  mb: "20px",
                }}
              >
                Login
              </text>
              <Input
                text="Email"
                clearable
                underlined
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                {...formik.getFieldProps("email")}
              />
              <Spacer y={1} />
              <Input
                clearable
                underlined
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                css={{ mb: "6px" }}
                {...formik.getFieldProps("password")}
              />
              <Row justify="space-between">
                <text size={14}>Forgot password?</text>
              </Row>
              <Spacer y={1} />
              <Button type="submit">Sign in</Button>
            </form>
          </Card>
        </Container>
      </div>
    
  );
}

export default logincss;
