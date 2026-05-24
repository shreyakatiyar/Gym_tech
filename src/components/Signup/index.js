import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';
import SEO from '../SEO';
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  FormContent,
  Form,
  FormH1,
  FormInput,
  FormLabel,
  Text,
  FormLink,
  ErrorText,
} from '../Login/LogInElements';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirect = searchParams.get('redirect') || '/join';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      toast.error('Passwords do not match.');
      return;
    }

    setLoading(true);
    const result = register({ name, email, password });

    if (result.success) {
      toast.success('Account created! Welcome to GymTech.');
      navigate(decodeURIComponent(redirect));
    } else {
      setError(result.error);
      toast.error(result.error);
    }
    setLoading(false);
  };

  return (
    <>
      <SEO
        title="Sign Up — GymTech"
        description="Create your GymTech account and start your smart fitness journey today."
        path="/signup"
      />
      <Container>
        <FormWrap>
          <Icon to="/">GymTech</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Create Account</FormH1>
              {error && <ErrorText>{error}</ErrorText>}
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <FormInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Min. 6 characters"
                required
                minLength={6}
              />
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <FormInput
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Repeat password"
                required
                minLength={6}
              />
              <FormButton type="submit" disabled={loading}>
                {loading ? 'Creating account...' : 'Sign Up'}
              </FormButton>
              <Text>
                Already have an account? <FormLink to={`/login?redirect=${encodeURIComponent(redirect)}`}>Log in</FormLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Signup;
