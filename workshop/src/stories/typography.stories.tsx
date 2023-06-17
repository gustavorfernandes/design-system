import { Typography as TypographyComponent } from 'typography';

export const Typography = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <TypographyComponent variant="h1" as="h1">
      Lorem Ipsum
    </TypographyComponent>
    <TypographyComponent variant="h2" as="h2">
      Lorem Ipsum
    </TypographyComponent>
    <TypographyComponent as="p">Lorem Ipsum</TypographyComponent>
  </div>
);
