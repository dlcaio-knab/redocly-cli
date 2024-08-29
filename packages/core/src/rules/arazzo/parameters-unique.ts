import type { ArazzoRule } from '../../visitors';
import type { UserContext } from '../../walk';

export const ParametersUnique: ArazzoRule = () => {
  return {
    Parameters: {
      enter(parameters, { report, location }: UserContext) {
        if (!parameters) return;
        const seenParameters = new Set();

        for (const parameter of parameters) {
          if (seenParameters.has(parameter?.name)) {
            report({
              message: 'The parameter `name` must be unique amongst listed parameters.',
              location: location.child([parameters.indexOf(parameter)]),
            });
          }

          if (seenParameters.has(parameter?.reference)) {
            report({
              message: 'The parameter `reference` must be unique amongst listed parameters.',
              location: location.child([parameters.indexOf(parameter)]),
            });
          }

          parameter?.name
            ? seenParameters.add(parameter.name)
            : seenParameters.add(parameter.reference);
        }
      },
    },
  };
};
