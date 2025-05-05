import Script from 'next/script';

interface StructuredDataProps {
  data: Record<string, unknown>;
  id: string;
}

export const StructuredData = ({ data, id }: StructuredDataProps) => (
  <Script
    id={id}
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    strategy="worker"
  />
);
