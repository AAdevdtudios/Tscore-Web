<template>
    <div>
        <!-- Navbar STart -->
        <header id="topnav" class="defaultscroll sticky">
            <div class="container">
                <!-- Logo container-->
                <a class="logo" href="index.html">
                    <img src="/Image/logo.png" height="15" class="logo-light-mode" width="150" alt="Tscore Logo">
                    <img src="/Image/logo.png" height="24" class="logo-dark-mode" alt="Tscore Logo" width="150">
                </a>
                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a class="navbar-toggle" id="isToggle" onclick="toggleMenu()">
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

                <!--Login button Start-->
                <ul class="buy-button list-inline mb-0">
                    <li class="list-inline-item mb-0">
                        <button @click="$router.push('/login')" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight">
                            <div class="login-btn-primary"><span class="btn btn-soft-primary">
                                    <Icon name="material-symbols-light:login" /> Get Started
                                </span></div>
                            <div class="login-btn-light"><span class="btn btn-icon btn-pills btn-light">
                                    <Icon name="material-symbols-light:login" />
                                </span></div>
                        </button>
                    </li>
                </ul>
                <!--Login button End-->

                <div id="navigation">
                    <!-- Navigation Menu-->
                    <ul class="navigation-menu">
                        <li><a href="/" class="sub-menu-item">Home</a></li>
                        <li><nuxt-link to="/#about-us" class="sub-menu-item">About US</nuxt-link></li>
                        <li><nuxt-link to="/#services" class="sub-menu-item">Services</nuxt-link></li>
                        <li><nuxt-link href="/contact" class="sub-menu-item">Contact</nuxt-link></li>
                    </ul><!--end navigation menu-->
                </div><!--end navigation-->
            </div><!--end container-->
        </header><!--end header-->
        <!-- Navbar End -->
        <slot />
        <!-- Footer Start -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="footer-py-60">
                            <div class="row">
                                <div class="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                                    <a href="#" class="logo-footer">
                                        <img src="/Image/logo.png" height="24" alt="">
                                    </a>
                                    <p class="mt-4">Start working with Landrick that can provide everything you need to
                                        generate awareness, drive traffic, c*9onnect.</p>
                                    <ul class="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                    data-feather="facebook" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                    data-feather="instagram" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                    data-feather="twitter" class="fea icon-sm fea-social"></i></a></li>
                                        <li class="list-inline-item"><a href="javascript:void(0)" class="rounded"><i
                                                    data-feather="linkedin" class="fea icon-sm fea-social"></i></a></li>
                                    </ul><!--end icon-->
                                </div><!--end col-->

                                <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="footer-head">Company</h5>
                                    <ul class="list-unstyled footer-list mt-4">
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> About us</nuxt-link></li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Services</nuxt-link></li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Team</nuxt-link></li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Pricing</nuxt-link></li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Blog</nuxt-link></li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Login</nuxt-link></li>
                                    </ul>
                                </div><!--end col-->

                                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="footer-head">Usefull Links</h5>
                                    <ul class="list-unstyled footer-list mt-4">
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Terms of Services</nuxt-link>
                                        </li>
                                        <li><nuxt-link to="/#about-us" class="text-foot"><i
                                                    class="uil uil-angle-right-b me-1"></i> Privacy Policy</nuxt-link></li>
                                    </ul>
                                </div><!--end col-->

                                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <h5 class="footer-head">Newsletter</h5>
                                    <p class="mt-4">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div class="row" style="flex-wrap: wrap;">
                                            <div class="col-lg-12">
                                                <div class="foot-subscribe mb-3">
                                                    <label class="form-label">Write your email <span
                                                            class="text-danger">*</span></label>
                                                    <div class="form-icon position-relative">
                                                        <i data-feather="mail" class="fea icon-sm icons"></i>
                                                        <input type="email" name="email" id="emailsubscribe"
                                                            class="form-control ps-5 rounded" placeholder="Your email : "
                                                            required>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="d-grid">
                                                    <input type="submit" id="submitsubscribe" name="send"
                                                        class="btn btn-soft-primary" value="Subscribe">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div><!--end col-->
                            </div><!--end row-->
                        </div>
                    </div><!--end col-->
                </div><!--end row-->
            </div><!--end container-->

            <div class="footer-py-30 footer-bar">
                <div class="container text-center">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <div class="text-sm-start">
                                <p class="mb-0"> Landrick. Design with <i class="mdi mdi-heart text-danger"></i> by <a
                                        href="https://shreethemes.in/" target="_blank" class="text-reset">Shreethemes</a>.
                                </p>
                            </div>
                        </div><!--end col-->

                        <div class="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                            <ul class="list-unstyled text-sm-end mb-0">
                                <li class="list-inline-item"><nuxt-link to="/#about-us"><img
                                            src="/images/payments/american-ex.png" class="avatar avatar-ex-sm"
                                            title="American Express" alt=""></nuxt-link></li>
                                <li class="list-inline-item"><nuxt-link to="/#about-us"><img
                                            src="/images/payments/discover.png" class="avatar avatar-ex-sm" title="Discover"
                                            alt=""></nuxt-link></li>
                                <li class="list-inline-item"><nuxt-link to="/#about-us"><img
                                            src="/images/payments/master-card.png" class="avatar avatar-ex-sm"
                                            title="Master Card" alt=""></nuxt-link></li>
                                <li class="list-inline-item"><nuxt-link to="/#about-us"><img
                                            src="/images/payments/paypal.png" class="avatar avatar-ex-sm" title="Paypal"
                                            alt=""></nuxt-link></li>
                                <li class="list-inline-item"><nuxt-link to="/#about-us"><img src="/images/payments/visa.png"
                                            class="avatar avatar-ex-sm" title="Visa" alt=""></nuxt-link></li>
                            </ul>
                        </div><!--end col-->
                    </div><!--end row-->
                </div><!--end container-->
            </div>
        </footer><!--end footer-->
        <!-- Footer End -->
        <VitePwaManifest />
    </div>
</template>

<style>
@import url('/ALLcss.css');
</style>

<script setup lang="ts">

const get_stuff = () => { }
useHead({
    script: [
        {
            src: '/libs/bootstrap/js/bootstrap.bundle.min.js'
        },
        {
            src: '/libs/tiny-slider/min/tiny-slider.js'
        },
        {
            src: '/libs/tobii/js/tobii.min.js'
        },
        {
            src: '/libs/feather-icons/feather.min.js'
        },
        {
            src: '/Scripts/plugins.init.js',
        },
        {
            src: '/Scripts/app.js',
        },
    ]
})

</script>