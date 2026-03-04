"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/shared/lib/utils/cn";
import { TrustPilotIcon } from "@/shared/ui/icons/trust-pilot";
import { Chip } from "@/shared/ui/kit/chip";
import { Text } from "@/shared/ui/kit/text";
import { Title } from "@/shared/ui/kit/title";

import st from "./reviews.module.css";

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

const getReviews = () => [
  {
    imgUrl: "/images/home/partner-6.svg",
    link: "https://es.trustpilot.com/review/www.fxpro.com",
    starsUrl: "/images/home/stars-fxpro.svg",
  },
  {
    imgUrl: "/images/home/partner-3.svg",
    link: "https://es.trustpilot.com/review/icmarkets.com",
    starsUrl: "/images/home/stars-icmarkets.svg",
  },
  {
    imgUrl: "/images/home/revolut.svg",
    link: "https://es.trustpilot.com/review/www.revolut.com",
    starsUrl: "/images/home/stars-revolut.svg",
  },
  /*{
    imgUrl: "/images/home/partner-5.svg",
    link: "https://es.trustpilot.com/review/xtb.com",
    starsUrl: "/images/home/stars-xtb.svg",
  },*/
  {
    imgUrl: "/images/home/trade-republic.svg",
    link: "https://es.trustpilot.com/review/www.traderepublic.com",
    starsUrl: "/images/home/stars-traderepublic.svg",
  },
  {
    imgUrl: "/images/home/partner-4.svg",
    link: "https://es.trustpilot.com/review/swissquote.com",
    starsUrl: "/images/home/stars-swissquote.svg",
  },
  {
    imgUrl: "/images/home/jadetrax.svg",
    link: "https://es.trustpilot.com/review/jadetrax.live",
    starsUrl: "/images/home/stars-jadetrax.svg",
  },
];

export const Reviews = () => {
  const t = useTranslations("home.reviews");
  const reviews = getReviews();

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="bg-white">
      <section className="container py-20">
        <div className="flex flex-col gap-10">
          <section className="flex flex-col items-center gap-4 text-center">
            <Chip variant="light">
              <Text
                size="lg"
                weight={500}
                color="blue"
                className="max-md:text-sm"
              >
                {t("chip", {
                  fallback: "Verified reputation through independent insight",
                })}
              </Text>
            </Chip>
            <Title as="h3" size="6xl" color="black">
              {t("title.0", { fallback: "Partners Rated by" })}{" "}
              <span>{t("title.1", { fallback: "Traders" })}</span>
            </Title>
            <Text className="text-black/90">
              {t("description.0", {
                fallback:
                  "Our broker network is validated not only through Renvex analytics but through transparent public feedback.",
              })}
              <br />
              {t("description.1", {
                fallback:
                  "See how our verified partners perform on Trustpilot — rated by traders who use them every day.",
              })}
            </Text>
          </section>
        </div>
      </section>

      <section className="flex flex-col items-center gap-5">
        <div className="relative w-full">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-[200px] bg-linear-to-r from-white to-transparent max-md:hidden" />

          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-[38px] z-20 flex h-[52px] w-[70px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2841C1] max-md:hidden"
            aria-label="Previous"
          >
            <ArrowLeftIcon />
          </button>

          <section className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {reviews.map((review) => (
                <div
                  key={review.imgUrl}
                  className="flex min-w-[400px] shrink-0 justify-center max-md:max-w-[330px] max-md:min-w-[350px]"
                >
                  <ReviewCard {...review} />
                </div>
              ))}
            </div>
          </section>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-[38px] z-20 flex h-[52px] w-[70px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2841C1] max-md:hidden"
            aria-label="Next"
          >
            <ArrowRightIcon />
          </button>

          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-[200px] bg-linear-to-l from-white to-transparent max-md:hidden" />
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

const ReviewCard = ({
  imgUrl,
  link,
  starsUrl,
}: {
  imgUrl: string;
  link: string;
  starsUrl: string;
}) => (
  <Link
    href={link}
    target="_blank"
    className={cn(
      st.bg,
      "relative mx-2.5 flex w-[400px] flex-col items-center gap-10 overflow-hidden rounded-[48px] px-10 pt-10 pb-[120px] max-md:mx-2 max-md:w-full max-md:max-w-[350px] max-md:px-5 max-md:pt-6 max-md:pb-[72px]",
    )}
  >
    <div className="flex h-[85px] w-[300px] items-center justify-center rounded-[40px] bg-white">
      <Image src={imgUrl} alt="review" width={300} height={85} unoptimized />
    </div>
    <div className="flex items-center justify-center gap-10">
      <Image src={starsUrl} alt="stars" width={160} height={30} unoptimized />
      <TrustPilotIcon />
    </div>
    <Image
      className="absolute bottom-7 left-10 opacity-10 max-md:left-6 max-md:h-[70px] max-md:w-[70px]"
      src="/images/home/star.svg"
      alt="star"
      width={95}
      height={90}
    />
    <Image
      className="absolute right-0 bottom-5 opacity-10 max-md:h-[70px] max-md:w-[210px]"
      src="/images/home/trust.svg"
      alt="star"
      width={248}
      height={88}
    />
  </Link>
);
