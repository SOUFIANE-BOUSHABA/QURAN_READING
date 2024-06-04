'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Galery = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);
    return (
        <section className="ezy__portfolio9_2oxF4Ulm py-14 md:py-24 text-white z-[20]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-6 lg:gap-12">
                    <div className="col-span-12 md:col-span-4 md:mt-6 lg:mt-12 md:pt-6 lg:pt-12">
                        <div className="xl:my-12 xl:py-12">
                            <div className="mb-6 md:my-12 lg:py-12">
                                <h2 className="text-3xl leading-none md:text-[45px] mb-6">معرضنا</h2>
                                <p className="text-lg leading-8 mb-2">
                                    اكتشف مجموعة من الأعمال الفنية الإسلامية المذهلة، التي تجمع بين التراث والثقافة.
                                </p>
                                <div className="col-span-12 mt-6"        data-aos="fade-up">
                                    <button className="m-1 bg-blue-600 text-white rounded px-3 py-1.5">الكل</button>
                                    <button className="m-1 hover:bg-blue-600 hover:text-white rounded transition duration-300 px-3 py-1.5">
                                        خط عربي
                                    </button>
                                    <button className="m-1 hover:bg-blue-600 hover:text-white rounded transition duration-300 px-3 py-1.5">
                                        فن إسلامي
                                    </button>
                                    <button className="m-1 hover:bg-blue-600 hover:text-white rounded transition duration-300 px-3 py-1.5">
                                        زخرفة
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6 "        data-aos="fade-up">
                            <img
                                src="OIG1 (1).jpg"
                                alt="عمل فني إسلامي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">فن إسلامي</h5>
                                <p className="mb-0">لوحة فنية رائعة</p>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6 "        data-aos="fade-up">
                            <img
                                src="OIG1 (2).jpg"
                                alt="فن الخط العربي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">خط عربي</h5>
                                <p className="mb-0">كتابة بديعة</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:mt-6 md:pt-6 lg:mt-12 lg:pt-12">
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG1.i4xK.CINunN_d2.jpg"
                                alt="تصميم زخرفي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">زخرفة</h5>
                                <p className="mb-0">تصميم متقن</p>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG4 (2).jpg"
                                alt="فن إسلامي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">فن إسلامي</h5>
                                <p className="mb-0">جماليات الفن الإسلامي</p>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG1.jpg"
                                alt="تصميم زخرفي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">زخرفة</h5>
                                <p className="mb-0">فن الزخرفة الإسلامية</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG2.jpg"
                                alt="لوحة إسلامية"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">فن إسلامي</h5>
                                <p className="mb-0">لوحة بديعة</p>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG4 (1).jpg"
                                alt="خط عربي"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">خط عربي</h5>
                                <p className="mb-0">جماليات الخط</p>
                            </div>
                        </div>
                        <div className="group rounded-xl overflow-hidden relative mt-6"        data-aos="fade-up">
                            <img
                                src="OIG4.jpg"
                                alt="فن الزخرفة"
                                className="max-w-full h-auto w-full"
                            />
                            <div className="absolute left-4 right-4 top-1/2 rounded-xl bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 bg-blur-sm bg-saturate-200 -translate-y-1/2 opacity-0 transition duration-300 group-hover:opacity-100 text-center p-6 lg:py-12">
                                <h5 className="font-medium text-xl">زخرفة</h5>
                                <p className="mb-0">تصميم فني رائع</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Galery;
