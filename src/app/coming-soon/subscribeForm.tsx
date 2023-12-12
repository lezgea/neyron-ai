'use client';
import React, { useState } from 'react';
import { FormEvent } from 'react';
import axios from 'axios';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  return (
    <form>
      <div className="form-group">
        <label id="email">Stay tuned for an awesome experience!</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@mail.com"
        />
      </div>
      <button type="submit">Subscribe</button>
    </form>
  );
};

export default SubscribeForm;
