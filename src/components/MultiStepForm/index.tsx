import Router from "next/router";
import React from "react";
import { Props } from './typings';

export function MultiStepForm({ firstStep, onSubmit, onFail, stateName, children }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const form = e.currentTarget;
    const data = new FormData(form);
    let formData = Object.fromEntries(data);

    // Get existing data
    if (!firstStep) {
      const existingData = sessionStorage.getItem(stateName);

      if (existingData) {
        formData = { ...JSON.parse(existingData), ...formData };
      } else {
        onFail();
      }
    }

    sessionStorage.setItem(stateName, JSON.stringify(formData));

    onSubmit(formData);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
