import { useEffect } from 'react';

interface Props {
  title?: string;
  description?: string;
}

const SEOHead = ({ title, description }: Props) => {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};

export default SEOHead;
