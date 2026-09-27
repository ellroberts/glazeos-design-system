// Every story renders with the real tokens and component styles.
import '../src/styles/index.css';
import '../src/styles/components.css';
// The per-client colours a real site injects at :root (see demo-theme.css).
import './demo-theme.css';

/** Toolbar switch between two example clients, so it's obvious which values come from the client. */
const THEMES = {
  demo: 'Demo Glazing (navy / blue)',
  green: 'Example client (green)',
};

export default {
  globalTypes: {
    client: {
      description: 'Client theme (the colours each site injects)',
      toolbar: {
        title: 'Client',
        icon: 'paintbrush',
        items: Object.entries(THEMES).map(([value, title]) => ({ value, title })),
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { client: 'demo' },
  decorators: [
    (story, context) => {
      document.documentElement.dataset.client = context.globals.client || 'demo';
      return story();
    },
  ],
  parameters: {
    layout: 'padded',
    backgrounds: {
      options: {
        light: { name: 'Light', value: '#ffffff' },
        surface: { name: 'Surface', value: '#f5f7fa' },
        dark: { name: 'Dark (secondary)', value: '#16202b' },
      },
    },
  },
};
