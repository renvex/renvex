"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { Chip } from "@/shared/ui/kit/chip";
import { Text } from "@/shared/ui/kit/text";
import { Title } from "@/shared/ui/kit/title";

const getPartners = () => [
  {
    img: {
      url: "/images/partners/fxpro-b.svg",
      size: { width: 65, height: 65 },
    },
    text: "Fxpro",
    webUrl: "https://www.fxpro.com/",
  },
  {
    img: {
      url: "/images/partners/markets-global-b.svg",
      size: { width: 228, height: 29 },
    },
    text: "IC Markets",
    webUrl: "https://www.icmarkets.com/",
  },
  {
    img: {
      url: "/images/partners/revolut-b.svg",
      size: { width: 180, height: 20 },
    },
    text: "Revolut",
    webUrl: "https://www.revolut.com/",
  },
  {
    img: {
      url: "/images/partners/xtb-b.svg",
      size: { width: 148, height: 57 },
    },
    text: "Xtb",
    webUrl: "https://www.xtb.com/",
  },
  {
    img: {
      url: "/images/partners/trade.svg",
      size: { width: 140, height: 50 },
    },
    text: "Trade Republic",
    webUrl: "https://traderepublic.com/",
  },
  {
    img: {
      url: "/images/partners/swiss-b.svg",
      size: { width: 201, height: 50 },
    },
    text: "Swissquote",
    webUrl: "https://www.swissquote.com/",
  },
  {
    img: {
      url: "/images/partners/jadetrax-b.svg",
      size: { width: 201, height: 40 },
    },
    text: "JadeTrax",
    webUrl: "https://jadetrax.live/",
  },
];

const ArrowLeftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.08"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
      stroke="white"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const OurPartners = () => {
  const t = useTranslations("home.ourPartners");

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 1500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const partners = getPartners();

  return (
    <div className="bg-white">
      <section className="container py-20" id="verified-brokers">
        <div className="flex flex-col gap-[55px]">
          <section className="flex flex-col items-center gap-4 text-center">
            <Chip variant="light">
              <Text
                size="lg"
                weight={500}
                color="blue"
                className="max-md:text-sm"
              >
                {t("subtitle", { fallback: "Confidence built on evidence" })}
              </Text>
            </Chip>
            <Title as="h3" size="6xl" color="black">
              {t("title", { fallback: "Our Partners" })}
            </Title>
            <Text className="text-black/90">
              {t("description", {
                fallback:
                  "Renvex collaborates with globally recognized trading platforms and verified data providers to ensure accuracy and transparency in every comparison.",
              })}
            </Text>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5">
        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-[117px] w-[200px] bg-linear-to-r from-white to-transparent max-md:hidden" />

          <button
            onClick={scrollPrev}
            className="absolute top-[20px] left-[38px] z-20 flex h-[52px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#2841C1] max-md:hidden"
            aria-label="Previous"
          >
            <ArrowLeftIcon />
          </button>

          <section className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div
                  key={partner.text}
                  className="flex min-w-[220px] shrink-0 justify-center"
                >
                  <PartnerCard {...partner} />
                </div>
              ))}
            </div>
          </section>

          <button
            onClick={scrollNext}
            className="absolute top-[20px] right-[38px] z-20 flex h-[52px] w-[70px] cursor-pointer items-center justify-center rounded-full bg-[#2841C1] max-md:hidden"
            aria-label="Next"
          >
            <ArrowRightIcon />
          </button>

          <div className="pointer-events-none absolute top-0 right-0 z-10 h-[117px] w-[200px] bg-linear-to-l from-white to-transparent max-md:hidden" />
        </div>

        <div className="hidden gap-10 max-md:flex">
          <button
            onClick={scrollPrev}
            className="flex h-[52px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#2841C1]"
            aria-label="Previous"
          >
            <ArrowLeftIcon />
          </button>
          <button
            onClick={scrollNext}
            className="flex h-[52px] w-[100px] cursor-pointer items-center justify-center rounded-full bg-[#2841C1]"
            aria-label="Next"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </section>
    </div>
  );
};

const PartnerCard = ({
  img,
  text,
  webUrl,
}: {
  img: { url: string; size: { width: number; height: number } };
  text: string;
  webUrl: string;
}) => {
  return (
    <Link
      href={webUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-[7px] px-5 text-center"
    >
      <section className="flex h-[85px] w-[300px] items-center justify-center rounded-[40px] bg-[rgba(173,191,255,0.25)]">
        <Image
          src={img.url}
          alt={text}
          width={img.size.width}
          height={img.size.height}
          unoptimized
        />
      </section>
      <Text size="lg" className="text-black">
        {text}
      </Text>
    </Link>
  );
};
