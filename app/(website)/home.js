"use client"
// import Link from "next/link";
// import Container from "@/components/container";
import PostList from "@/components/postlist";
import {images, cafeImages, academyImages} from '@/lib/images'
import {useMediaQuery} from 'react-responsive';

import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Pagination, Autoplay, Parallax, Scrollbar, EffectFade, EffectCards} from "swiper/modules";
import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/react';
import 'swiper/css';

export default function Post({posts}) {
    return (
        <>
            {/*{posts && (*/}
            {/*  <Container>*/}
            {/*    <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">*/}
            {/*      {posts.slice(0, 2).map(post => (*/}
            {/*        <PostList*/}
            {/*          key={post._id}*/}
            {/*          post={post}*/}
            {/*          aspect="landscape"*/}
            {/*          preloadImage={true}*/}
            {/*        />*/}
            {/*      ))}*/}
            {/*    </div>*/}
            {/*    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">*/}
            {/*      {posts.slice(2, 14).map(post => (*/}
            {/*        <PostList key={post._id} post={post} aspect="square" />*/}
            {/*      ))}*/}
            {/*    </div>*/}

            {/*  </Container>*/}
            {/*)}*/}
            <Container>
                <EnfaInformationSlider/>
                <div
                    className="mt-16"
                ></div>
                <EnfaTouchSlider givenImages={cafeImages} givenText={"Enfa Cafe ile Sicak Bir Hizmet..."}
                                 textLeft={true}/>
                <div
                    className="mt-16 mb-16"
                ></div>
                <EnfaTouchSlider givenImages={academyImages} givenText={"Yetkinlik Atolyeleri..."} textLeft={false}/>
            </Container>
        </>
    );
}

const EnfaInformationSlider = () => {
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});
    //
    // if (isMobile) {
    //     return <SpecialComponent />;
    // }

    return (
        <section className='py-12'>
            <div className='container relative'>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                    onSwiper={swiper => console.log(swiper)}
                    className='h-96 w-full rounded-lg'
                    pagination={{type: 'bullets'}}
                    autoplay={{delay: 2500}}
                    lazyPreloadPrevNext={true}
                    lazyPreloadPrevNextAmount={3}
                    spaceBetween={15}
                    crossFade={true}
                    fadeEffect={{crossFade: true}}
                    speed={3000}
                    effect='fade'
                    grabCursor={true}
                    loop={true}
                    // ref={swiperRef}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Banner imgSrc={image.src} imgAlt={image.alt}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/*<div className="swiper-button-next-custom absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer">Next</div>*/}
                {/*<div className="swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer">Prev</div>*/}
            </div>
        </section>
    );
}


const Banner = ({imgSrc, imgAlt, title, subtitle,}) => {
    // this banner is for ActiveSlider
    // on a full image, there is a text
    // and a button
    // the button is a link to a page
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-5 h-full'>
                <div className='relative md:col-span-3'>
                    <Image
                        src={imgSrc}
                        alt={imgAlt}
                        layout='fill'

                        className='block h-full w-full object-cover rounded-r-xl'
                    />
                </div>
                <div className='flex flex-col items-center justify-center rounded-tl-xl md:col-span-2'>
                    <h1 className='mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>Başlık
                        1</h1>
                    <p className='text-lg text-center'>Alt Metin Açıklama ve kısa ve net....</p>
                    {/*<button className='px-4 py-2 bg-blue-500 text-white rounded'>Your Button</button>*/}
                </div>
            </div>
        </>
    );
}

const EnfaTouchSlider = ({givenImages, givenText, textLeft = true}) => {
    if (textLeft) {
        return (
            // TODO: side it the text to the right
            <div className="grid grid-cols-5 h-full ">
                <h3 className='relative col-span-3 mr-4 mt-2 mb-3 text-2xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>{givenText}</h3>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Autoplay]}
                    className='col-span-2 h-96 w-full rounded-lg'
                    pagination={{type: 'bullets'}}
                    autoplay={{delay: 2500}}
                    lazyPreloadPrevNext={true}
                    lazyPreloadPrevNextAmount={3}
                    loop={true}
                >
                    {
                        givenImages.map((imageData, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex'>
                                    <Image
                                        src={imageData.src}
                                        alt={imageData.imgAlt}
                                        layout='fill'
                                        className='block h-full w-2/5 object-cover rounded-xl'
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>)
    } else {
        return (
            // TODO: side the text to the left
            <div className="grid grid-cols-5 h-full w-full">
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Pagination, Autoplay]}
                    className='col-span-2 h-96 w-full rounded-lg'
                    pagination={{type: 'bullets'}}
                    autoplay={{delay: 2500}}
                    lazyPreloadPrevNext={true}
                    lazyPreloadPrevNextAmount={3}
                    loop={true}
                >
                    {
                        givenImages.map((imageData, index) => (
                            <SwiperSlide key={index}>
                                <div className='flex'>
                                    <Image
                                        src={imageData.src}
                                        alt={imageData.imgAlt}
                                        layout='fill'

                                        className='block h-full w-2/5 object-cover rounded-xl'
                                    />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <h3 className='relative col-span-3 ml-4 mt-2 mb-3 text-2xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white'>{givenText}</h3>
            </div>)
    }


}