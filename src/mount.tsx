import { StrictMode } from 'react';
import type { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { contentByLanguage, getDocumentLanguage } from './locales';
import type { SiteContent } from './content/types';
import './styles/tokens.css';
import './styles/global.css';
import './styles/components.css';
import './styles/responsive.css';

export function mountPage(render: (content: SiteContent) => ReactNode) {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element not found');
  }

  createRoot(rootElement).render(
    <StrictMode>{render(contentByLanguage[getDocumentLanguage()])}</StrictMode>,
  );
}
