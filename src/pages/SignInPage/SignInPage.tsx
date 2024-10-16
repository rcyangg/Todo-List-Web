import React from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import {
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

interface SignInPageProps {
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SignInPage = (props: SignInPageProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  // Checks if there’s a from value stored in the location’s state
  // If from is not available (perhaps if they navigated directly to /sign-in), it defaults to /tasks
  const from = location.state?.from?.pathname || '/tasks';

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: { email: '', password: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      email: (value) => (/\S+@\S+\.\S+/.test(value) ? null : 'Please enter a valid email address!'),
      password: (value) =>
        value.length > 6 ? null : 'The password must be at least 6 characters long!',
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    axios
      .post(
        'http://localhost:63339/realms/quarkus/protocol/openid-connect/token',
        new URLSearchParams({
          client_id: 'backend-service',
          client_secret: 'secret',
          grant_type: 'password',
          username: values.email,
          password: values.password,
        })
      )
      .then((response) => {
        if (response.status === 200 && response.data) {
          console.log(response.data);
          props.setIsSignedIn(true);
          localStorage.setItem('access_token', response.data.access_token);
          navigate(from, { replace: true });
        } else {
          props.setIsSignedIn(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Center h="100vh">
      <Card shadow="sm" padding="lg" radius="md" withBorder w={500} maw={800}>
        <Box maw={800} mx="auto" w={800}>
          <Group>
            <Text>Sign In</Text>
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
