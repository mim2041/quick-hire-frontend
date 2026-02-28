import type { Metadata } from "next";
import "@/app/globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { Suspense } from "react";
import Loading from "@/components/common/Loading";
import { Navbar } from "@/components/siteSettings/navbar";
import { Footer } from "@/components/siteSettings/footer";

export const metadata: Metadata = {
  title: "QuickHire - Find Your Dream Job",
  description:
    "Great platform for the job seeker searching for new career heights",
  icons: { icon: "/favicon.ico" },
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Suspense fallback={<Loading />}>
        <div className="hero-navbar-bg">
          <Navbar />
        </div>
        <div>{children}</div>
        <Footer />
      </Suspense>
      <Toaster position="top-right" richColors closeButton />
    </NextIntlClientProvider>
  );
}
