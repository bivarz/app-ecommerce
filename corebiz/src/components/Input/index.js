import React, { useState, useRef } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from './Input';
import MsgDone from './MsgDone';

import { Container } from './styles';

function FormIn() {
  const [submit, setSubmit] = useState(false);
  const formRef = useRef(null);

  const handleClose = () => {
    setSubmit(true);
  };

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('Preencha com seu nome completo'),
        email: Yup.string()
          .email('Preencha com um e-mail válido')
          .required('Preencha com um e-mail válido'),
      });
      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});
      setTimeout(() => {
        setSubmit(!submit);
      }, 0);
      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });
        formRef.current.setErrors(errorMessages);
        setTimeout(() => {
          formRef.current.setErrors({});
        }, 15000);
      }
    }
  }

  return submit ? (
    <Container>
      <div className="container_content">
        <div className="container_content_title">
          <p>Participe de nossas news com promoções e novidades!</p>
        </div>

        <div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="nome" placeholder="Digite seu Nome" />
            <Input name="email" placeholder="Digite seu Email" />
            <button type="submit">Eu quero!</button>
          </Form>
        </div>
      </div>
    </Container>
  ) : (
      <MsgDone close={handleClose} />
    );
}

export default FormIn;
