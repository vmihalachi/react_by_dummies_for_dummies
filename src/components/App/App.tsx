import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';
import { HomePage } from '../../pages/HomePage/HomePage';

export const App: React.FC = () =>  (
  <FluentProvider theme={teamsLightTheme}>
    <HomePage/>
  </FluentProvider>
)