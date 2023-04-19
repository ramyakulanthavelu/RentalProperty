import React from 'react';
import {
  Card,
  Spacer,
  Button,
  text,
  Input,
  Row,
  Checkbox,
  Container,
} from '@nextui-org/react';

export default function Login() {
  return (
    <div>
      <Container
        display="flex"
        alignItems="center"
        justify="center"
        css={{ minHeight: '100vh' }}
      >
        <Card css={{ mw: '420px', p: '20px' }} variant="bordered">
          <text
            size={24}
            weight="bold"
            css={{
              as: 'center',
              mb: '20px',
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
          />
          <Spacer y={1} />
          <Input
            clearable
            underlined
            fullWidth
            color="primary"
            size="lg"
            placeholder="Password"
            css={{ mb: '6px' }}
          />
          <Row justify="space-between">
            <text size={14}>Forgot password?</text>
          </Row>
          <Spacer y={1} />
          <Button>Sign in</Button>
        </Card>
      </Container>
    </div>
  );
}
