import { transform as _transform } from '@philpl/buble';
import { transform as babelTransform } from "@babel/standalone";

export default (code, transpileOptions = {}) => {
  const tcode = babelTransform(code, { presets: ["env", "react"] }).code;

  const opts = {
    ...transpileOptions,
    objectAssign: 'object.assign',
    transforms: {
      modules: false,
      dangerousForOf: true,
      dangerousTaggedTemplateString: true,
      ...transpileOptions.transforms
    }
  };

  return _transform(tcode, opts).code;
};
