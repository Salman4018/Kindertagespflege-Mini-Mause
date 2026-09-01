import type { SiteContent } from '../content/types';
import type { ReactNode } from 'react';

type IconName = SiteContent['highlights'][number]['icon'];

interface IconProps {
  name: IconName;
}

const paths: Record<IconName, ReactNode> = {
  heart: (
    <path d="M12 20.2 4.8 13A4.8 4.8 0 0 1 11.6 6.2l.4.5.4-.5A4.8 4.8 0 1 1 19.2 13L12 20.2Z" />
  ),
  leaf: (
    <path d="M19.8 4.2C12.5 4.3 6.7 7.5 5.4 12.3c-.7 2.5.2 4.7 2 6.1 2.8-5 6.7-7.8 9.6-9.2-2.6 1.9-5.9 5-8 9.8 2.3 1 5.2.1 6.7-2 2.6-3.5 3.4-8.2 4.1-12.8Z" />
  ),
  home: (
    <path d="m3.8 10.9 8.2-7 8.2 7v8.7a.8.8 0 0 1-.8.8h-5v-6.2H9.6v6.2h-5a.8.8 0 0 1-.8-.8v-8.7Z" />
  ),
};

export function Icon({ name }: IconProps) {
  return (
    <svg className="icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}
