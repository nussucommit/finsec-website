import React from "react";
import { useForm } from "@mantine/form";
import {
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";

export type LoginFields = {
  email: string;
  password: string;
};

type Props = {
  onSubmit: (f: LoginFields) => void;
};

const Login = (props: Props) => {
  const { onSubmit } = props;

  const form = useForm<LoginFields>({
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Stack m="md" w="50%">
      <Title order={1}>Welcome,</Title>
      <form onSubmit={() => onSubmit(form.values)}>
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Password"
          mt="md"
          {...form.getInputProps("password")}
        />

        <Group mt="lg" position="right">
          <Button type="submit">Login</Button>
        </Group>
      </form>
    </Stack>
  );
};

export default Login;
