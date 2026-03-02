import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

// Simulador de fetch de post real
async function getPost(slug: string) {
  // En el futuro esto vendrá de un CMS (Contentful, Sanity, WordPress, Markdown)
  return {
    title: `Asesoría en Isapres: La Guía Definitiva`,
    slug,
    description:
      "Aprende los factores más importantes a considerar antes de cambiar de Isapre en Chile este año.",
    date: "2025-01-01T00:00:00.000Z",
    content: "<p>Contenido del artículo vendría iterado aquí.</p>",
    authorName: "Experto en Salud",
  };
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post no encontrado" };
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://expertoensalud.cl";

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${baseUrl}/blog/${post.slug}`,
      authors: [post.authorName],
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: post.authorName,
      url: "https://expertoensalud.cl",
    },
    publisher: {
      "@type": "Organization",
      name: "Experto en Salud",
      logo: {
        "@type": "ImageObject",
        url: "https://expertoensalud.cl/logo.png",
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://expertoensalud.cl/blog/${post.slug}`,
    },
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white py-16 sm:py-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("es-CL", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>Por {post.authorName}</span>
            </div>
          </header>

          <div
            className="prose prose-lg prose-blue mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
