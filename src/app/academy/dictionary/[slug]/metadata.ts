import { Metadata } from 'next';
import { findTermBySlug } from '../utils';

interface MetadataProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const { slug } = params;
  const term = findTermBySlug(slug);

  if (!term) {
    return {
      title: 'Terim Bulunamadı - FinanQA Sözlük',
      description: 'Aradığınız finans terimi bulunamadı.',
    };
  }

  const title = `${term.term} Nedir? - FinanQA Finans Sözlüğü`;
  const description = `${term.definition} ${term.detailedDefinition ? term.detailedDefinition.substring(0, 100) + '...' : ''} FinanQA Finans Sözlüğü'nde ${term.term} terimini detaylı olarak öğrenin.`;

  return {
    title,
    description,
    keywords: [
      term.term,
      ...(term.synonyms || []),
      ...(term.tags || []),
      term.category,
      'finans',
      'sözlük',
      'terim',
      'tanım'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://finanqa.com/academy/dictionary/${slug}`,
      siteName: 'FinanQA',
      locale: 'tr_TR',
      images: [
        {
          url: `/api/og/dictionary/${slug}`,
          width: 1200,
          height: 630,
          alt: `${term.term} - FinanQA Finans Sözlüğü`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/api/og/dictionary/${slug}`],
      creator: '@finanqa',
      site: '@finanqa',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://finanqa.com/academy/dictionary/${slug}`,
    },
    other: {
      'article:author': 'FinanQA',
      'article:published_time': term.createdAt,
      'article:modified_time': term.updatedAt,
      'article:section': term.category,
      'article:tag': term.tags?.join(', ') || '',
    },
  };
} 