/*
import React, { useState } from 'react';
import { MyVariableQuery } from './types';

interface VariableQueryProps {
  query: MyVariableQuery;
  onChange: (query: MyVariableQuery, definition: string) => void;
}

export const VariableQueryEditor: React.FC<VariableQueryProps> = ({ onChange, query }) => {
  const [state, setState] = useState(query);

  const saveQuery = () => {
    onChange(state, `${state.query} (${state.featureOfInterestId})`);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) =>
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });

  return (
    <>
      <div className="gf-form">
        <span className="gf-form-label width-10">FeatureOfInterest</span>
        <input
          name="FeatureOfInterest"
          className="gf-form-input"
          onBlur={saveQuery}
          onChange={handleChange}
          value={state.featureOfInterestId}
        />
      </div>
    </>
  );
};
*/
