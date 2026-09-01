import type { SectionContent } from '../content/types';

interface SectionHeadingProps {
  content: SectionContent;
  align?: 'left' | 'center';
}

export function SectionHeading({ content, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{content.eyebrow}</p>
      <h2>{content.title}</h2>
      <p>{content.introduction}</p>
    </header>
  );
}
