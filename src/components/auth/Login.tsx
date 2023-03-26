import React from "react";
import { useForm, zodResolver } from "@mantine/form";
import {
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginFields = z.infer<typeof schema>;

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

    validate: zodResolver(schema),
  });

  return (
    <Stack m="md" w="50%">
      <Title order={1}>Welcome,</Title>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
