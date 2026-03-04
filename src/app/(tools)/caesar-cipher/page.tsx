import CaesarCipher from "@/components/tools/caesar-cipher";
import { getTitle, getKeywords, getDescription, getHref } from "@/utils/SEO";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: getTitle("caesar-cipher"),
  description: getDescription("caesar-cipher"),
  keywords: getKeywords("caesar-cipher"),
  openGraph: {
    title: getTitle("caesar-cipher"),
    description: getDescription("caesar-cipher"),
    type: "website",
    url: getHref("caesar-cipher"),
    siteName: "OpensourceToolkit",
    images: [
      {
        url: "https://opensourcetoolkit.com/seo/1.png",
        width: 1200,
        height: 630,
        alt: "Caesar Cipher Encoder/Decoder - Encrypt and decrypt text with shift cipher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: getTitle("caesar-cipher"),
    description: getDescription("caesar-cipher"),
    images: ["https://opensourcetoolkit.com/seo/1.png"],
  },
};

export default function Page() {
  return <CaesarCipher />;
}
