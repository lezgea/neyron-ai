import React from 'react';
import LoginForm from './loginForm';

const Login = () => {
  return (
    <main className="ai-main ai-main--login">
      <section className="ai-section ai-section--login">
        <div className="container">
          <div className="ai-section__content">
            <div className="ai-section__body">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
