import { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Alert,
  Box,
  Button,
  Card,
  Center,
  Divider,
  FocusTrap,
  Group,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';

interface SignUpPageProps {}

export const SignUpPage = (props: SignUpPageProps) => {
  const navigate = useNavigate();
  // Checks if there’s a from value stored in the location’s state
  // If from is not available (perhaps if they navigated directly to /sign-in), it defaults to /tasks
  const to =
    'http://localhost:63339/realms/quarkus/protocol/openid-connect/auth?client_id=backend-service&redirect_uri=http://localhost:8080/q/dev-ui/io.quarkus.quarkus-oidc/keycloak-provider&scope=openid&response_type=code&response_mode=query&prompt=login&nonce=8Og9zY1&state=PQp1mrm_quarkus_backend-service';
  const [success, setSuccess] = useState(true);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/\S+@\S+\.\S+/.test(value) ? null : 'Please enter a valid email address!'),
      password: (value) =>
        value.length > 6 ? null : 'The password must be at least 6 characters long!',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    navigate(to, { replace: true });
  };

  return (
    <Center h="100vh">
      <Card shadow="sm" padding="lg" radius="md" withBorder w={500} maw={800}>
        <Box maw={800} mx="auto" w={800}>
          <Group>
            <Text>Sign Up</Text>
          </Group>
          <Divider my="md" color="gray" />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <FocusTrap active>
              <div>
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  key={form.key('email')}
                  {...form.getInputProps('email')}
                  maw={400}
                />
                {}
                <PasswordInput
                  mt="sm"
                  label="Password"
                  placeholder="*******"
                  key={form.key('password')}
                  {...form.getInputProps('password')}
                  maw={400}
                />
              </div>
            </FocusTrap>
            <Button type="submit" mt="sm">
              Submit
            </Button>
          </form>
        </Box>
      </Card>
    </Center>
  );
};
