import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../components/auth/register/register.component';

export const leaveGuard: CanDeactivateFn<RegisterComponent> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.shouldExit();
};

// ng g guard services/guards/leave
