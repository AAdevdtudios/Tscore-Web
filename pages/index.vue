<template>
    <div>
        <!-- Hero Start -->
        <section class="home-slider position-relative">
            <div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="bg-home bg-animation-left d-flex align-items-center"
                            style="background-image:url('/image/bg1.png')">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                            <h1 class="heading mb-3">Witness the Thrill of Victory</h1>
                                            <p class="para-desc">Experience the adrenaline-pumping excitement as top
                                                athletes showcase their skills in intense and pivotal moments. Our live
                                                streams bring you front and center for every heart-stopping play.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="bg-home bg-animation-left d-flex align-items-center"
                            style="background-image:url('/image/bg2.png')">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                            <h1 class="heading mb-3">Legends in Action</h1>
                                            <p class="para-desc">Catch your favorite sports icons live in action. From
                                                incredible goals to game-changing moves, our live streams feature the
                                                biggest names in the game doing what they do best. Don't miss a single
                                                moment!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="bg-home bg-animation-left d-flex align-items-center"
                            style="background-image:url('/image/bg3.png')">
                            <div class="container">
                                <div class="row align-items-center">
                                    <div class="col-lg-7 col-md-7">
                                        <div class="title-heading position-relative mt-4" style="z-index: 1;">
                                            <h1 class="heading mb-3">Beyond the Game</h1>
                                            <p class="para-desc">Get exclusive access to the world behind the game. Our live
                                                streams not only bring you the action on the field but also take you behind
                                                the scenes, giving you a glimpse into the lives of your favorite athletes
                                                and the dedication they bring to their sport.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </section><!--end section-->
        <!-- Hero End -->
        <!-- Partners start -->
        <section class="pt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-2 col-md-2 col-6 text-center">
                        <img src="/images/client/amazon.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center">
                        <img src="/images/client/google.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                        <img src="/images/client/lenovo.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                        <img src="/images/client/paypal.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                        <img src="/images/client/shopify.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->

                    <div class="col-lg-2 col-md-2 col-6 text-center mt-4 mt-sm-0">
                        <img src="/images/client/spotify.svg" class="avatar avatar-ex-sm" alt="">
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Partners End -->
        <!-- Section Start -->
        <section class="section overflow-hidden" id="services">
            <div class="container pb-5 mb-md-5">
                <div class="row">
                    <LandingServices v-for="(item, index) in services" :key="index" :title="item.title"
                        :subtitle="item.subtitle" :icon="item.icon" />
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100" id="about-us">
                <div class="row align-items-center">
                    <div class="col-lg-5 order-2 order-lg-1 mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <div class="section-title me-lg-4">
                            <h1 class="title mb-3">Why Choose us ?</h1>
                            <p class="para-desc text-muted">We Offer Lives scores, Football highlights and much more. Never
                                miss a single game again. Available On </p>

                            <div class="row" style="flex-wrap: wrap;">
                                <div class="col-12">
                                    <div class="d-flex align-items-center pt-4">
                                        <h2><i data-feather="shield" class="fea icon-m-md text-primary"></i></h2>
                                        <div class="ms-3">
                                            <h5>Websites</h5>
                                            <p class="text-muted mb-0">Get thrilling sport games of your choice online.</p>
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-12">
                                    <div class="d-flex align-items-center pt-4">
                                        <h2><i data-feather="cpu" class="fea icon-m-md text-primary"></i></h2>
                                        <div class="ms-3">
                                            <h5>Mobile</h5>
                                            <p class="text-muted mb-0">Get to download the app on your PlayStore Or
                                                AppStore.</p>
                                        </div>
                                    </div>
                                </div><!--end col-->

                                <div class="col-12 pt-4">
                                    <a href="javascript:void(0)" class="btn btn-outline-primary">Install Now <i
                                            class="uil uil-angle-right-b"></i></a>
                                </div><!--end col-->
                            </div>
                        </div>
                    </div><!--end col-->

                    <div class="col-lg-7 order-1 order-lg-2">
                        <div class="saas-feature-shape-right position-relative">
                            <img src="/Image/mobile.png" class="img-fluid mx-auto d-block rounded shadow" alt="">
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container pt-4 mt-100 mt-60">
                <div class="row justify-content-center" id="counter">
                    <div class="col-12 text-center">
                        <div class="section-title">
                            <LandingHeader content-left="Build responsive, mobile-first projects on the web
                                with the world's most popular front-end component library" title="Overall">
                                <template #special>
                                    <span class="text-primary"><span class="counter-value"
                                            data-target="333">1</span>k+</span>client are
                                    using, Get Started
                                </template>
                            </LandingHeader>

                            <div class="mt-2">
                                <button @click="$router.push('/login')" class="btn btn-primary m-1">Get Started <i
                                        class="uil uil-angle-right-b"></i></button>
                            </div>
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="container mt-100 mt-60">
                <LandingHeader content="TSCORE" content-left="Watch live match with"
                    content-right="we provide up-to date games and live match fully" title="Our Pricing Rates" />

                <div class="row">
                    <LandingPricing v-for="(item, index) in pricingValues" :key="index" :title="item.title"
                        :price="item.price" :operations=item.operations :label="item.label" />
                    <!--end col-->
                </div><!--end row-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- Section End -->
    </div>
</template>

<script setup lang="ts">
import type { ServiceProps } from '~/components/Landing/Services.vue';

const services: ServiceProps[] = [
    {
        title: "Exciting Matchup Ahead",
        icon: "uil uil-airplay h2 text-primary",
        subtitle: "Don't miss the action as your favorite teams battle it out on the field.It's game time excitement like never before!."
    },
    {
        title: "Sneak Peek Behind the Scenes",
        icon: "uil uil-calendar-alt h2 text-primary",
        subtitle: "Our exclusive content gives you VIP access to the heart of the sport, making you a part of the action like never before."
    },
    {
        title: "Top Plays of the Week",
        icon: "uil uil-clock h2 text-primary",
        subtitle: "From spectacular goals to game-winning saves, experience the essence of each match in a bite- sized format."
    },
]

type PricingType = {
    title: string,
    price: string,
    label?: string,
    operations: string[]
}

const pricingValues: PricingType[] = [
    {
        "title": "Silver",
        "price": "500",
        "operations": ["Full Access", "Live Matches"]
    },
    {
        "title": "Gold",
        "price": "300",
        "operations": ["Full Access", "Live Matches", "3 Months"]
    },
    {
        "title": "Premium",
        "price": "700",
        label: "Best",
        "operations": ["Full Access", "Live Matches", "6 Months"]
    },
    {
        "title": "Diamond",
        "price": "900",
        "operations": ["Full Access", "Live Matches", "1 Year"]
    },
]
</script>