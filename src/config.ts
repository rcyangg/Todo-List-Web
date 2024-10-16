import { STAGE } from '@/appenv.types';

export interface ConfigProps {
  jojoApiConfig: {
    endpoint: string;
  }
}

export const config: { [stage in STAGE]: ConfigProps } = {
  dev: {
    jojoApiConfig: {
      endpoint: 'http://localhost:8080'
    }
  }

}