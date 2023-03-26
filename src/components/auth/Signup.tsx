import React from "react";
import {
  Button,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z
  .object({
    name: z.string().nonempty({ message: "Required" }),
    subcomms: z.string().nonempty({ message: "Required" }),
    email: z.string().email().nonempty({ message: "Required" }),
    contactNum: z.string().regex(new RegExp(/^\d+$/), "Invalid phone number"),
    password: z.string().min(6),
    confirmPassword: z.string().nonempty({ message: "Required" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Password did not match",
        path: ["confirmPassword"],
      });
    }
  });

export type SignupFields = z.infer<typeof schema>;

type Props = {
  onSubmit: (f: SignupFields) => void;
  isLoading: boolean;
};

const Signup = (props: Props) => {
  const { onSubmit, isLoading } = props;

  const form = useForm<SignupFields>({
    initialValues: {
      name: "",
      subcomms: "",
      contactNum: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validate: zodResolver(schema),
  });

  return (
    <Stack m="md" w="50%">
      <Title order={1}>Welcome,</Title>
      <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
        <TextInput
          withAsterisk
          label="Name"
          placeholder="John Doe"
          mt="md"
          {...form.getInputProps("name")}
        />
        <TextInput
          withAsterisk
          label="Cell/Committee/Project"
          placeholder="Committee Name"
          mt="md"
          {...form.getInputProps("committee")}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          mt="md"
          {...form.getInputProps("email")}
        />
        <TextInput
          withAsterisk
          label="Contact Number"
          placeholder="12341234"
          mt="md"
          {...form.getInputProps("contactNum")}
        />
        <PasswordInput
          withAsterisk
          label="Password"
          placeholder="Password"
          mt="md"
          {...form.getInputProps("password")}
        />
        <PasswordInput
          withAsterisk
          label="Confirm Password"
          placeholder="Confirm Password"
          mt="md"
          {...form.getInputProps("confirmPassword")}
        />

        <Group mt="lg" position="right">
          <Button type="submit" loading={isLoading}>
            Sign Up
          </Button>
        </Group>
      </form>
    </Stack>
  );
};

export default Signup;
