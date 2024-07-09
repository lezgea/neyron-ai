import React from 'react';
import RegisterForm from './registerForm';

const Register = () => {
  return (
    <main className="ai-main ai-main--login">
      <section className="ai-section ai-section--login">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__body">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
