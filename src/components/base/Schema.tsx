import { HeadProvider } from "react-head";

interface SchemaProps {
  schema: Record<string, any>;
}

/**
 * Reusable component for adding structured data (Schema.org) to pages
 * Works with react-head for React 19 compatibility
 *
 * @example
 * <Schema schema={faqSchema} />
 *
 * @example
 * const productSchema = {
 *   "@context": "https://schema.org",
 *   "@type": "Product",
 *   "name": "3D Walkthrough Service"
 * };
 * <Schema schema={productSchema} />
 */
export default function Schema({ schema }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
