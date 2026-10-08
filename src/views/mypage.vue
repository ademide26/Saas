<script>
export default {
  name: 'MyPage',
  data() {
    return {
      currentIndex: 0,
      totalBox: 3,
      email: ''
    }
  },
methods:  {
  handleSubscribe() {
    console.log('Subscribing:', this.email)
  }
}
};
</script>

<template>
  <section class="whole-page">
    <section class="main-sect">
      <div class="nav-sect">
        <div class="pluck-frame">
          <div class="pluck-logo">
            <svg width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="22.6053" width="31.9688" height="31.9688" rx="15.9844" transform="rotate(45 22.6053 0)" fill="#6D3FFF"/>
            <rect x="35.1563" y="9.95605" width="18.9495" height="18.9495" rx="9.47473" transform="rotate(45 35.1563 9.95605)" fill="#082539" stroke="white" stroke-width="2.66407"/>
            </svg>
          </div>
          <div class="pluck">Pluck</div>
        </div>
        <div class="nav-bar">
          <div class="nav-box">
            <div class="active-nav-text">Home</div>
          </div>
          <div class="nav-box">
            <div class="nav-text">About Us</div>
          </div>
          <div class="nav-box">
            <div class="nav-text">Our Services</div>
          </div>
          <div class="nav-box">
            <div class="nav-text">Pricings</div>
          </div>
          <div class="nav-box">
            <div class="nav-text">Blogs</div>
          </div>
          <button class="trial-box">
            <div class="trial-text">FREE TRIAL NOW</div>
          </button>
        </div>
      </div>

      <div class="main-frame">
        <div class="main-text-frame">
          <h2 class="main-text">Experience a digital revolution like never before</h2>
        </div>

        <div class="main-subframe">
          <p class="main-subtext">Brace yourself for an extraordinary journey into the future of technology</p>
        </div>

        <div class="content-frame">
          <img class="content-hero" src="/Images/pluckk.png" alt="Platform dashboard preview" />
        </div>

        <div class="partner-sect">
          <div class="trusted-text">Trusted by:</div>
          <div class="partner-box">
            <div class="partner">
              <img src="/Images/shopify.png" />
            </div>
            <div class="partner">
              <img src="/Images/amazon.png" />
            </div>
            <div class="partner">
              <img src="/Images/alibaba.png" />
            </div>
            <div class="partner">
              <img src="/Images/ebay.png" />
            </div>
            <div class="partner">
              <img src="/Images/snapdeal.png" />
            </div>
            <div class="partner">
              <img src="/Images/walmart.png" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="feature-sect">

      <div class="feature-div">
        <div class="left-feature">
          <div class="header-feature">
            <div class="headline-feature">
              <h4 class="our-feature">Our Feature</h4>
              <h2 class="wtd">What you can do with our platform</h2>
            </div>
            <h4 class="what-feature">Explore what other capabilities that our platform can help you</h4>
            <button class="all-features">
              <div class="see-all">SEE ALL FEATURES</div>
            </button>
          </div>
        </div>
        <div class="right-feature">
          <div class="right-frame">
            <div class="ufi-frame">
              <div class="ufi-content">
                <div class="ufi-img">
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68.7251" height="68.7251" rx="12.8859" fill="#6D3FFF"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M34.3625 49.5626C42.7572 49.5626 49.5625 42.7573 49.5625 34.3626C49.5625 25.9679 42.7572 19.1626 34.3625 19.1626C25.9678 19.1626 19.1625 25.9679 19.1625 34.3626C19.1625 42.7573 25.9678 49.5626 34.3625 49.5626ZM28.6625 32.4626C29.7118 32.4626 30.5625 31.6119 30.5625 30.5626C30.5625 29.5133 29.7118 28.6626 28.6625 28.6626C27.6132 28.6626 26.7625 29.5133 26.7625 30.5626C26.7625 31.6119 27.6132 32.4626 28.6625 32.4626ZM41.9625 30.5626C41.9625 31.6119 41.1118 32.4626 40.0625 32.4626C39.0132 32.4626 38.1625 31.6119 38.1625 30.5626C38.1625 29.5133 39.0132 28.6626 40.0625 28.6626C41.1118 28.6626 41.9625 29.5133 41.9625 30.5626ZM41.08 41.0799C41.822 40.3379 41.822 39.1349 41.08 38.3929C40.338 37.6509 39.135 37.6509 38.393 38.3929C36.167 40.6189 32.558 40.6189 30.332 38.3929C29.59 37.6509 28.387 37.6509 27.645 38.3929C26.903 39.1349 26.903 40.3379 27.645 41.0799C31.355 44.7899 37.37 44.7899 41.08 41.0799Z" fill="white"/>
                  </svg>
                </div>
                <div class="ufi">User-Friendly-Interface</div>
                <div class="ufi-subtext">Our SaaS solution offers an intuitive and user-friendly</div>
              </div>
            </div>
            <div class="rf-frame">
              <div class="ufi-content">
                <div class="ufi-img">
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68.7251" height="68.7251" rx="12.8859" fill="white"/>
                  <path d="M20.1125 39.1126C20.1125 42.6104 22.9481 45.446 26.4459 45.446H40.6959C45.0681 45.446 48.6125 41.9016 48.6125 37.5293C48.6125 33.157 45.0681 29.6126 40.6959 29.6126C40.6431 29.6126 40.5904 29.6131 40.5378 29.6142C39.8049 25.9999 36.6098 23.2793 32.7792 23.2793C28.407 23.2793 24.8625 26.8237 24.8625 31.196C24.8625 31.7926 24.9286 32.3739 25.0537 32.9328C22.2256 33.5672 20.1125 36.0931 20.1125 39.1126Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="rf">Cloud Based</div>
                <div class="rf-subtext">Our SaaS solution offers an intuitive and user-friendly</div>
              </div>
            </div>
          </div>

          <div class="right-frame">
            <div class="rf-frame">
              <div class="ufi-content">
                <div class="ufi-img">
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68.7251" height="68.7251" rx="12.8859" fill="white"/>
                  <path d="M34.3625 39.1125V42.2792M24.8625 48.6125H43.8625C45.6114 48.6125 47.0292 47.1948 47.0292 45.4459V35.9459C47.0292 34.197 45.6114 32.7792 43.8625 32.7792H24.8625C23.1136 32.7792 21.6959 34.197 21.6959 35.9459V45.4459C21.6959 47.1948 23.1136 48.6125 24.8625 48.6125ZM40.6959 32.7792V26.4459C40.6959 22.9481 37.8603 20.1125 34.3625 20.1125C30.8647 20.1125 28.0292 22.9481 28.0292 26.4459V32.7792H40.6959Z" stroke="#111827" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="rf">Data Security</div>
                <div class="rf-subtext">Protect your valuable data with our robust security measures</div>
              </div>
            </div>
            <div class="rf-frame">
              <div class="ufi-content">
                <div class="ufi-img">
                  <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="68.7251" height="68.7251" rx="12.8859" fill="white"/>
                  <path d="M20.1125 23.2792C20.1125 21.5303 21.5303 20.1125 23.2792 20.1125H28.4713C29.1529 20.1125 29.7579 20.5486 29.9734 21.1952L32.345 28.3098C32.5941 29.0573 32.2557 29.8743 31.551 30.2267L27.977 32.0137C29.7222 35.8845 32.8406 39.0029 36.7114 40.7481L38.4984 37.1741C38.8508 36.4694 39.6678 36.131 40.4153 36.3801L47.5299 38.7517C48.1765 38.9672 48.6125 39.5722 48.6125 40.2538V45.4459C48.6125 47.1948 47.1948 48.6125 45.4459 48.6125H43.8625C30.7458 48.6125 20.1125 37.9793 20.1125 24.8625V23.2792Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="rf">24/7 Support</div>
                <div class="rf-subtext">Our dedicated support team is available around the clock</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="details-sect">
      <div class="detail-hero-frame">
        <div class="detail-hero-text"> Get in detail on how we do it</div>
        <div class="detail-hero-subtext">Brace yourself for an extraordinary journey into the future of technology.</div>
      </div>
      <div class="details-main-frame">
        <div class="details-column">
            <div class="details-left-frame">
              <div class="upper-dts-frame">
                <div class="dt-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6472 9.80405H13.7256C11.5598 9.80405 9.804 11.5598 9.804 13.7256V37.2552C9.804 39.4211 11.5598 41.1768 13.7256 41.1768H33.3336C35.4994 41.1768 37.2552 39.4211 37.2552 37.2552V13.7256C37.2552 11.5598 35.4994 9.80405 33.3336 9.80405H29.412M17.6472 9.80405C17.6472 11.9699 19.403 13.7256 21.5688 13.7256H25.4904C27.6562 13.7256 29.412 11.9699 29.412 9.80405M17.6472 9.80405C17.6472 7.63821 19.403 5.88245 21.5688 5.88245H25.4904C27.6562 5.88245 29.412 7.63821 29.412 9.80405M23.5296 23.5296H29.412M23.5296 31.3728H29.412M17.6472 23.5296H17.6668M17.6472 31.3728H17.6668" stroke="#111827" stroke-width="3.9216" stroke-linecap="round"/>
                  </svg>
                </div>
                <div class="dt-subtext">Task Based</div>
              </div>
              <div class="dt-texts">Nullam tincidunt, purus sit amet viverra auctor, quam neque dapibus dui</div>
          </div>

            <div class="details-left-frame">
              <div class="upper-dts-frame">
                <div class="dt-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.8432 13.7256V33.3336C7.8432 37.6653 14.8662 41.1768 23.5296 41.1768C32.193 41.1768 39.216 37.6653 39.216 33.3336V13.7256M7.8432 13.7256C7.8432 18.0573 14.8662 21.5688 23.5296 21.5688C32.193 21.5688 39.216 18.0573 39.216 13.7256M7.8432 13.7256C7.8432 9.39397 14.8662 5.88245 23.5296 5.88245C32.193 5.88245 39.216 9.39397 39.216 13.7256M39.216 23.5296C39.216 27.8613 32.193 31.3728 23.5296 31.3728C14.8662 31.3728 7.8432 27.8613 7.8432 23.5296" stroke="#111827" stroke-width="3.9216"/>
                  </svg>
                </div>
                <div class="dt-subtext">Data Based Center</div>
              </div>
              <div class="dt-texts">Nullam tincidunt, purus sit amet viverra auctor, quam neque dapibus dui</div>
            </div>
        </div>

        <div class="dts-center-frame">
          <img src="/Images/pluck app mobile.png" alt="Pluck mobile app preview" />
        </div>

        <div class="details-column">
          <div class="details-left-frame details-left-frame--mirror">
            <div class="details-left-frame">
              <div class="upper-dts-frame">
                <div class="dt-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.6864 13.7256V5.88245M31.3728 13.7256V5.88245M13.7256 21.5688H33.3336M9.80399 41.1768H37.2552C39.421 41.1768 41.1768 39.4211 41.1768 37.2552V13.7256C41.1768 11.5598 39.421 9.80405 37.2552 9.80405H9.80399C7.63815 9.80405 5.88239 11.5598 5.88239 13.7256V37.2552C5.88239 39.4211 7.63815 41.1768 9.80399 41.1768Z" stroke="#111827" stroke-width="3.9216" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="dt-subtext">Always Latest</div>
              </div>
              <div class="dt-texts">Nullam tincidunt, purus sit amet viverra auctor, quam neque dapibus dui</div>
            </div>
          </div>

          <div class="details-left-frame details-left-frame--mirror">
            <div class="details-left-frame">
              <div class="upper-dts-frame">
                <div class="dt-icon">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6472 5.88245V9.80405M29.412 5.88245V9.80405M17.6472 37.2552V41.1768M29.412 37.2552V41.1768M9.80399 17.6472H5.88239M9.80399 29.412H5.88239M41.1768 17.6472H37.2552M41.1768 29.412H37.2552M13.7256 37.2552H33.3336C35.4994 37.2552 37.2552 35.4995 37.2552 33.3336V13.7256C37.2552 11.5598 35.4994 9.80405 33.3336 9.80405H13.7256C11.5597 9.80405 9.80399 11.5598 9.80399 13.7256V33.3336C9.80399 35.4995 11.5597 37.2552 13.7256 37.2552ZM17.6472 17.6472H29.412V29.412H17.6472V17.6472Z" stroke="#111827" stroke-width="3.9216" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>            </div>
                <div class="dt-subtext">Precise Logics</div>
              </div>
              <div class="dt-texts">Nullam tincidunt, purus sit amet viverra auctor, quam neque dapibus dui</div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section class="testimonials-sect">
      <div class="detail-hero-frame">
        <div class="detail-hero-text">What our client say</div>
        <div class="detail-hero-subtext">Brace yourself for an extraordinary journey into the future of technology.</div>
      </div>
      <div class="reviews-frame">
        <div class="reviews-box">
          <img class="client-img" src="/Images/michelle.png" alt="michelle-muara" />
          <h3 class="client-name">Michelle Muara</h3>
          <p class="review">Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!</p>
        </div>

        <div class="reviews-box">
          <img class="client-img" src="/Images/reddington.png" alt="reddington m." />
          <h3 class="client-name">Reddington M.</h3>
          <p class="review">Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!</p>
        </div>

        <div class="reviews-box">
          <img class="client-img" src="/Images/derick.png" alt="derick-mckinney" />
          <h3 class="client-name">Derick McKinney</h3>
          <p class="review">Integration with PLUCK has transformed our app. Exceptional support and remarkable results. Highly recommended!</p>
        </div>
      </div>

      <div class="carousel-track-frame">
        <div class="carousel-track">
          <div v-for="n in totalBox" :key="n" class="carousel-segment" :class="{ 'segment-active': (n - 1) === currentIndex }"></div>
        </div>
      </div>

    </section>
    <section class="subs-sect">
      <div class="subs-box">
        <h2 class="subs-text">Ready to unlock the full potential?</h2>
      </div>

      <form class="subscribe-form" @submit.prevent="handleSubscribe">
        <input type="email" class="subscribe-input" placeholder="Your Email Address" v-model="email" required />
        <button type="submit" class="subscribe-btn">GET STARTED</button>
      </form>

    </section>
    <section class="footer">
      <div class="footer-frame">
        <div class="lhs-footer">
          <div class="pluck-frame">
            <div class="pluck-logo">
              <svg width="51" height="46" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="22.6053" width="31.9688" height="31.9688" rx="15.9844" transform="rotate(45 22.6053 0)" fill="#6D3FFF"/>
              <rect x="35.1563" y="9.95605" width="18.9495" height="18.9495" rx="9.47473" transform="rotate(45 35.1563 9.95605)" fill="#082539" stroke="white" stroke-width="2.66407"/>
              </svg>
            </div>
            <p class="pluck">Pluck</p>
          </div>
          <div class="lhs-subtext">Our SaaS platform offers a seamless API dashboard for effortless integration and management</div>
          <div type="email" class="pluck-mail">hello@pluck.com</div>
          <div class="pluck-num">+1-800-123 4567</div>
        </div>

        <div class="rhs-footer">
          <div class="company-details">
            <p class="company">Company</p>
            <div class="company-item">
              <p class="company-items">About</p>
              <p class="company-items">Services</p>
              <p class="company-items">Careers</p>
              <p class="company-items">Blog</p>
              <p class="company-items">Pricing</p>
            </div>
          </div>

          <div class="company-details">
            <p class="company">Contact</p>
            <div class="company-item">
              <p class="company-items">Help</p>
              <p class="company-items">FAQs</p>
              <p class="company-items">Press</p>
              <p class="company-items">Terms & Conditions</p>
              <p class="company-items">Partners</p>
            </div>
          </div>

          <div class="company-details">
            <p class="company">Discover</p>
            <div class="company-item">
              <p class="company-items">Affliate</p>
              <p class="company-items">Partner Program</p>
            </div>
          </div>

        </div>
      </div>

      <hr class="hor-line" />

      <div class="copyright-frame">
        <p class="copyright">Copyright © 2032 Pluck®. All rights reserved.</p>
        <div class="social-media">
          <div class="brand-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99543 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black"/>
            </svg>
          </div>
          <div class="brand-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" fill="black"/>
            </svg>
          </div>
          <div class="brand-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>


<style scoped>
.hor-line {
  width: 100%;
  border: none;
  border-top: none;
  border-top: 1px solid #EBECEF;
  margin: 0;
  color: #000000;
}
.brand-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39.73px;
  height: 39.73px;
  background: #DEE9F3;
  border-radius: 7.44846px;
}
.social-media {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
  margin-right: 0;
}
.copyright {
  margin: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: rgba(31, 31, 57, 0.5);
}
.copyright-frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 80px 260px;
}
.discover-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 26px;
  width: 100%;
  height: 202px;
  box-sizing: border-box;
}
.company-items {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.5);
  margin: 0;
}
.company-item {
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  align-self: stretch;
  gap: 46px;
}
.company {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  color: #2E2A4A;
  margin: 0;
}
.company-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 26px;
  flex-shrink: 0;
}
.rhs-footer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 80px;
}
.pluck-num {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.5);
}
.pluck-mail {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.5);
}
.lhs-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 34px;
  color: rgba(31, 31, 57, 0.5);
}
.lhs-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  width: 452px;
  height: 275.21px;
}
.footer-frame {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 100px 260px;
  gap: 85px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  background: #FFFFFF;
}
.subscribe-form {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16.1224px 16.1224px 16.1224px 32.2449px;
  gap: 13.01px;
  width: 512px;
  height: 79px;
  background: #FFFFFF;
  border: 1.12857px solid #EBECEF;
  border-radius: 13.007px;
}

.subscribe-input {
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: 'Inter';
  font-size: 18px;
  color: #1F1F39;
}

.subscribe-input::placeholder {
  color: rgba(31, 31, 57, 0.5);
}

.subscribe-btn {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 24px;
  background: #6D3FFF;
  border: none;
  border-radius: 8px;
  font-family: 'Source Sans Pro';
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #FFFFFF;
  cursor: pointer;
}
.subs-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  text-align: center;
  margin: 0;
  color: #FFFFFF;
  align-self: stretch;
}
.subs-textbox {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
.subs-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  gap: 50px;
  width: 100%;
  align-self: stretch;
}
.subs-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 260px;
  gap: 40px;
  width: 100%;
  height: 520px;
  box-sizing: border-box;
  background: #2E2A4A;
}
.carousel-segment.segment-active {
  width: 48px;
  background: var(--Schemes-Primary, #0F38B3);
}
.carousel-segment {
  width: 24px;
  height: 4px;
  border-radius: 100px;
  background: var(--Schemes-Outline-Variant, #C4C5D6);
  transition: background 0.3s ease-in, width 0.3s ease-in;
}
.carousel-track {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 141.5px;
}
.carousel-track-frame {
  display: flex;
  justify-content: center;
  align-self: stretch;
}
.review {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  text-align: center;
  color: rgba(31, 31, 57, 0.5);
  align-self: stretch;
  margin: 0;
}
.client-name {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #1F1F39;
  margin: 0;
}
.client-img {
  background-repeat: no-repeat;
  align-items: center;
  width: 164px;
  height: 164px;
}
.reviews-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  gap: 29px;
  background: #FFFFFF;
  border-radius: 10px;
}
.reviews-frame {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 1202px;
  height: auto;
  box-sizing: border-box;
}
.testimonials-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 260px;
  gap: 100px;
  align-self: stretch;
}
.dts-center-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.dts-center-frame img {
  width: 100%;
  max-width: 380px;
  height: auto;
}
.details-left-frame--mirror {
  align-items: flex-start;
}
.details-left-frame--mirror .upper-dts-frame {
  align-items: flex-start;
  margin: 0;
}
.details-left-frame--mirror .dt-icon {
  margin-left: 0;
  margin-right: auto;
}
.details-left-frame--mirror .dt-subtext,
.details-left-frame--mirror .dt-texts {
  text-align: left;
}
.dt-texts {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  text-align: right;
  color: rgba(31, 31, 57, 0.5);
}
.dt-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  text-align: right;
  color: #1F1F39;
}
.dt-icon {
  display: flex;
  margin-left: auto;
  align-items: center;
}
.upper-dts-frame {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0px;
  gap: 20px;
  margin: 0 auto;
}
.details-left-frame {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
  width: 183px;
}
.details-main-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 167px;
}
.details-column {
  display: flex;
  flex-direction: column;
  gap: 80px; /* match the actual vertical spacing from Figma */
}
.detail-hero-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: rgba(31, 31, 57, 0.5);
}
.detail-hero-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 80px;
  text-align: center;
  color: #1F1F39;
}
.detail-hero-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: 0px;
  gap: 25px;
}
.details-sect {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 260px;
  gap: 100px;
  width: 100%;
}
.partner {
  flex-grow: 0;
  mix-blend-mode: luminosity;
}
.partner-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
}
.trusted-text {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 151%;
  color: #797980;
}
.partner-sect  {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 60px;
  height: 70px;
  width: 100%;
  padding: 0;
  padding: 60px 10%;
  align-self: stretch;
}
.rf-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}
.rf {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #FFFFFF;
}
.rf-frame {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  height: 362.73px;
  border-radius: 10px;
  width: 280.5px;
}
.ufi-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 38px;
  text-align: center;
  color: rgba(31, 31, 57, 0.5);
}
.ufi {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #252525;
}
.ufi-img {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  align-items: center;
}
.ufi-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 22px;
}
.ufi-frame {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  height: 362.73px;
  background: #FFFFFF;
  border: 1px solid #EBECEF;
  border-radius: 10px;
  width: 280.5px;
}
.right-frame {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 372.73px;
}
.right-feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  width: 100%;
  height: 785.45px;
}
.see-all {
  height: 28px;
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  color: #6D3FFF;
}
.all-features {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 8px;
  background: #FFFFFF;
  border: 2px solid #6D3FFF;
  border-radius: 8px;
  width: 180px;
}
.what-feature {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  color: rgba(255, 255, 255, 0.5);
  align-self: stretch;
  margin: 0;
}
.wtd {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 80px;
  color: #FFFFFF;
  align-self: stretch;
  margin: 0;
}
.our-feature {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  color: rgba(255, 255, 255, 0.5);
  align-self: stretch;
  margin: 0;
}
.headline-feature {
  display: flex;
  align-items: center;
  align-self: stretch;
  flex-direction: column;
  gap: 24px;
}
.header-feature {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;
}
.left-feature {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 785.45px;
}
.feature-div {
  display: flex;
  align-items: center;
  gap: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-self: stretch;
}
.feature-sect {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 260px;
  background: #6D3FFF;
}
.content-hero {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.content-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  padding: 0 20%;
  background-color: #F3F8FF;
  filter: drop-shadow(0px -31.6556px 23.2141px rgba(0, 0, 0, 0.03));
}
.main-subtext {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  text-align: center;
  color: rgba(31, 31, 57, 0.5);
}
.main-subframe {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  padding: 60px 20%;
  box-sizing: border-box;
  height: 48px;
}
.main-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 80px;
  text-align: center;
  margin: 0;
  color: #1F1F39;
}
.main-text-frame {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 60px 20%;
}
.main-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.trial-text {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #312D47;
}
.trial-box {
  display: flex;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 8.07px;
  background: #DEE9F3;
  border-radius: 8px;
  border: transparent;
}
.nav-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #6B7280;
}
.active-nav-text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #000000;
}
.nav-box {
  display: flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
}
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 32px;
  margin-left: auto;
  align-self: stretch;
}
.pluck {
  font-family: 'Inter';
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  display: flex;
  align-items: center;
  color: #000000;
  margin: 0;
}
.pluck-logo {
  display: flex;
  width: 50px;
  height: 45px;
}
.pluck-frame {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 8px;
}
.nav-sect {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 120px;
  justify-content: space-between;
  flex-direction: row;
  flex: 1 0 0;
}
.main-sect {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.whole-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: #FFFFFF;
}
</style>
