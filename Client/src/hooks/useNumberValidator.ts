import { useState } from "react";
import { MuiTelInputCountry } from "mui-tel-input";
import { SupportedCountries } from "../models/SupportedCountries";
import { useQuery } from "react-query";
import { fetchCountries } from "../services/Api";
import { ValidationService } from "../services/ValidationService";

const useNumberValidator = () => {
  // react query goes here
  const { data: validationService } = useQuery(
    "supportedCountries",
    fetchCountries,
    {
      select: (data) => new ValidationService(data),
    }
  );

  return {
    validationService,
  };
};

export default useNumberValidator;
