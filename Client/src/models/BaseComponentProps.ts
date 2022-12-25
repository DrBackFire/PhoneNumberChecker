import { ValidationService } from "../services/ValidationService";

export interface BaseComponentProps {
  validationService: ValidationService | undefined;
}
