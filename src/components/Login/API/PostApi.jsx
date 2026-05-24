import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../../context/AuthContext';
import SEO from '../../SEO';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormLabel,
  FormButtonSearch,
  LinkEdit,
  FormH1,
  FormSelect,
} from './StyledComponents';

function PostApi() {
  const [searchParams] = useSearchParams();
  const planFromUrl = searchParams.get('plan') || '';
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    estado: '',
    telefone: '',
    email: '',
    plano: planFromUrl,
  });

  useEffect(() => {
    if (user?.email) {
      setData((prev) => ({ ...prev, email: user.email, nome: user.name || prev.nome }));
    }
  }, [user]);

  useEffect(() => {
    if (planFromUrl) {
      setData((prev) => ({ ...prev, plano: planFromUrl }));
    }
  }, [planFromUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api-academia-alunos.herokuapp.com/alunos', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        toast.success('Membership registered successfully! Welcome to GymTech.');
        setData({
          nome: user?.name || '',
          cpf: '',
          endereco: '',
          estado: '',
          telefone: '',
          email: user?.email || '',
          plano: '',
        });
      } else {
        toast.error('Registration failed. Please try again.');
      }
    } catch {
      toast.error('Network error. Please check your connection and try again.');
    }
    setLoading(false);
  };

  const handleChange = ({ target: { value, name } }) => {
    setData({ ...data, [name]: value });
  };

  return (
    <Container>
      <SEO
        title="Join GymTech — Select Your Membership"
        description="Complete your GymTech membership registration and start training at our smart gyms."
        path="/join"
      />
      <FormWrap>
        <Icon to="/">GymTech</Icon>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <FormH1>Complete Your Membership</FormH1>
            <FormLabel>Name</FormLabel>
            <FormInput type="text" onChange={handleChange} name="nome" value={data.nome} required />
            <FormLabel>CPF / ID</FormLabel>
            <FormInput type="text" onChange={handleChange} name="cpf" value={data.cpf} required />
            <FormLabel>Address</FormLabel>
            <FormInput type="text" onChange={handleChange} name="endereco" value={data.endereco} required />
            <FormLabel>State</FormLabel>
            <FormInput type="text" onChange={handleChange} name="estado" value={data.estado} required />
            <FormLabel>Phone</FormLabel>
            <FormInput type="tel" onChange={handleChange} name="telefone" value={data.telefone} required />
            <FormLabel>Email</FormLabel>
            <FormInput type="email" onChange={handleChange} name="email" value={data.email} required />
            <FormLabel>Membership Plan</FormLabel>
            <FormSelect name="plano" value={data.plano} onChange={handleChange} required>
              <option value="">Select a plan</option>
              <option value="Gold">Gold — $79.99/mo</option>
              <option value="Platinum">Platinum — $119.99/mo</option>
              <option value="Diamond">Diamond — $199.99/mo</option>
            </FormSelect>
            <FormButtonSearch type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Complete Registration'}
            </FormButtonSearch>
          </Form>
          <LinkEdit to="/about#locations">Find nearest gym →</LinkEdit>
        </FormContent>
      </FormWrap>
    </Container>
  );
}

export default PostApi;
