<script>
import {
  cartStore, increaseQty, decreaseQty, removeItem, toggleItem, setAllChecked,
  cartitemCount, cartTotal, selectedCount, selectedTotal
} from '@/store/cart'

export default {
  name: 'CartPage',
  computed: {
    items() {
      return cartStore.items
    },
    allSelected: {
      get() {
        return this.items.length > 0 && this.items.every(item => item.checked)
      },
      set(value) {
        setAllChecked(value)
      }
    },
    badgeCount() {
      return cartitemCount()
    },
    total() {
      return cartTotal()
    },
    checkoutCount() {
      return selectedCount()
    },
    checkoutTotal() {
      return selectedTotal()
    }
  },
  methods: {
    increaseQty,
    decreaseQty,
    removeItem,
    toggleItem,
    goToCheckout() {
      if (this.checkoutCount === 0) return
      this.$router.push('Cart-checkout')
    }
  }
}
</script>

<template>
  <section class="cart-sect">

    <div class="banner-bg">
        <div class="header-flex">
        <div class="header-frame">
          <div class="logo-head">
            <img class="logo" src="/Images/top.png" alt="logo" />
          </div>

          <div class="loc-sect">
            <div class="store-icon-box">
              <div class="store-icon">
                <div class="icon-state">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <mask id="mask0_8322_22996" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                          <rect width="20" height="20" fill="#D9D9D9"/>
                        </mask>
                        <g mask="url(#mask0_8322_22996)">
                          <path d="M4.74925 4.0498H15.2436C15.456 4.0498 15.6351 4.12126 15.7809 4.26418C15.9267 4.4071 15.9997 4.58418 15.9997 4.79543C15.9997 5.00668 15.9279 5.18522 15.7842 5.33105C15.6405 5.47689 15.4624 5.5498 15.2501 5.5498H4.75571C4.54335 5.5498 4.36425 5.47835 4.21841 5.33543C4.07258 5.19251 3.99966 5.01543 3.99966 4.80418C3.99966 4.59293 4.07147 4.41439 4.21508 4.26855C4.35883 4.12272 4.53689 4.0498 4.74925 4.0498ZM4.74966 16.5498C4.53716 16.5498 4.35904 16.4779 4.21529 16.3342C4.07154 16.1904 3.99966 16.0123 3.99966 15.7998V12.0498H3.583C3.34689 12.0498 3.14897 11.9526 2.98925 11.7581C2.82953 11.5637 2.78439 11.3484 2.85383 11.1123L3.85383 7.1123C3.89119 6.94828 3.97841 6.81349 4.1155 6.70793C4.25272 6.60251 4.40855 6.5498 4.583 6.5498H15.4228C15.599 6.5498 15.7544 6.60251 15.8888 6.70793C16.0233 6.81349 16.1088 6.94828 16.1455 7.1123L17.1455 11.1123C17.2149 11.3484 17.1698 11.5637 17.0101 11.7581C16.8504 11.9526 16.6524 12.0498 16.4163 12.0498H15.9997V15.794C15.9997 16.0062 15.9282 16.1852 15.7853 16.3311C15.6424 16.4769 15.4653 16.5498 15.254 16.5498C15.0428 16.5498 14.8642 16.4779 14.7184 16.3342C14.5726 16.1904 14.4997 16.0123 14.4997 15.7998V12.0498H10.9997V15.794C10.9997 16.0062 10.9278 16.1852 10.784 16.3311C10.6403 16.4769 10.4622 16.5498 10.2497 16.5498H4.74966ZM5.49966 15.0498H9.49966V12.0498H5.49966V15.0498ZM4.54133 10.5498H15.458L14.833 8.0498H5.16633L4.54133 10.5498Z" fill="#F1F0FA"/>
                        </g>
                      </svg>
                    </div>
              </div>
            </div>

            <div class="active-label">
                    <label class="active-store">Active Store</label>
                    <div class="ikj-br">Ikeja Branch</div>
            </div>

            <div class="down-box">
              <div class="down-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                        <path d="M8.39339 11.3283L14.0254 5.18428L13.2574 4.51228L8.00939 10.2403L2.76139 4.51228L2.02539 5.18428L7.62539 11.3283C7.73206 11.4349 7.86006 11.4883 8.00939 11.4883C8.15872 11.4883 8.28672 11.4349 8.39339 11.3283Z" fill="white"/>
                      </svg>
              </div>
            </div>
          </div>

          <div class="search-box-sect">
            <div class="search-box">
              <div class="text-box">
                  <input class="inner-box" placeholder="I am looking for..." />
                  <div class="vector-xbox">
                    <div class="vector-x">X</div>
                  </div>
                  <div class="search-btn-box">
                    <div class="search-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M14.1196 15C13.0796 15.9066 11.893 16.4866 10.5596 16.74C9.22631 16.9933 7.91965 16.9133 6.63965 16.5C5.35965 16.0866 4.25298 15.3733 3.31965 14.36C2.38631 13.3466 1.76631 12.1866 1.45965 10.88C1.15298 9.57329 1.17965 8.26663 1.53965 6.95996C1.89965 5.65329 2.56631 4.51329 3.53965 3.53996C4.51298 2.56663 5.65298 1.89996 6.95965 1.53996C8.26631 1.17996 9.57298 1.1533 10.8796 1.45996C12.1863 1.76663 13.3463 2.38663 14.3596 3.31996C15.373 4.25329 16.0863 5.35996 16.4996 6.63996C16.913 7.91996 16.993 9.22663 16.7396 10.56C16.4863 11.8933 15.9063 13.08 14.9996 14.12L17.9596 17.04L17.0396 17.96L14.1196 15ZM15.6396 9.07996C15.6396 7.87996 15.3396 6.77996 14.7396 5.77996C14.1396 4.77996 13.3396 3.98663 12.3396 3.39996C11.3396 2.81329 10.2463 2.51329 9.05965 2.49996C7.87298 2.48663 6.77965 2.77996 5.77965 3.37996C4.77965 3.97996 3.97965 4.77996 3.37965 5.77996C2.77965 6.77996 2.48631 7.87329 2.49965 9.05996C2.51298 10.2466 2.81298 11.34 3.39965 12.34C3.98631 13.34 4.77965 14.14 5.77965 14.74C6.77965 15.34 7.87298 15.64 9.05965 15.64C10.2463 15.64 11.3396 15.34 12.3396 14.74C13.3396 14.14 14.1396 13.34 14.7396 12.34C15.3396 11.34 15.6396 10.2533 15.6396 9.07996Z" fill="white"/>
                      </svg>
                      <svg style="opacity: 1; position: absolute;" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M12.8716 13.7519C11.8316 14.6586 10.6449 15.2386 9.3116 15.4919C7.97827 15.7452 6.6716 15.6652 5.3916 15.2519C4.1116 14.8386 3.00493 14.1252 2.0716 13.1119C1.13827 12.0986 0.518267 10.9386 0.2116 9.63191C-0.0950667 8.32525 -0.0684 7.01858 0.2916 5.71191C0.6516 4.40525 1.31827 3.26525 2.2916 2.29191C3.26493 1.31858 4.40493 0.651915 5.7116 0.291914C7.01827 -0.0680847 8.32493 -0.0947514 9.6316 0.211914C10.9383 0.518581 12.0983 1.13858 13.1116 2.07191C14.1249 3.00525 14.8383 4.11191 15.2516 5.39191C15.6649 6.67191 15.7449 7.97858 15.4916 9.31191C15.2383 10.6452 14.6583 11.8319 13.7516 12.8719L16.7116 15.7919L15.7916 16.7119L12.8716 13.7519ZM14.3916 7.83191C14.3916 6.63191 14.0916 5.53191 13.4916 4.53191C12.8916 3.53191 12.0916 2.73858 11.0916 2.15191C10.0916 1.56525 8.99827 1.26525 7.8116 1.25191C6.62493 1.23858 5.5316 1.53191 4.5316 2.13191C3.5316 2.73191 2.7316 3.53191 2.1316 4.53191C1.5316 5.53191 1.23827 6.62525 1.2516 7.81191C1.26493 8.99858 1.56493 10.0919 2.1516 11.0919C2.73827 12.0919 3.5316 12.8919 4.5316 13.4919C5.5316 14.0919 6.62493 14.3919 7.8116 14.3919C8.99827 14.3919 10.0916 14.0919 11.0916 13.4919C12.0916 12.8919 12.8916 12.0919 13.4916 11.0919C14.0916 10.0919 14.3916 9.00525 14.3916 7.83191Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div class="acc-sect">
            <div class="acc-state">
              <div class="acc-box">
                <div style="width: 20px; height: 20px;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                    <path d="M3.20833 12.5833C3.91667 12.0417 4.70833 11.6146 5.58333 11.3021C6.45833 10.9896 7.375 10.8333 8.33333 10.8333C9.29167 10.8333 10.2083 10.9896 11.0833 11.3021C11.9583 11.6146 12.75 12.0417 13.4583 12.5833C13.9444 12.0139 14.3229 11.3681 14.5938 10.6458C14.8646 9.92361 15 9.15278 15 8.33333C15 6.48611 14.3507 4.91319 13.0521 3.61458C11.7535 2.31597 10.1806 1.66667 8.33333 1.66667C6.48611 1.66667 4.91319 2.31597 3.61458 3.61458C2.31597 4.91319 1.66667 6.48611 1.66667 8.33333C1.66667 9.15278 1.80208 9.92361 2.07292 10.6458C2.34375 11.3681 2.72222 12.0139 3.20833 12.5833ZM8.33333 9.16667C7.51389 9.16667 6.82292 8.88542 6.26042 8.32292C5.69792 7.76042 5.41667 7.06944 5.41667 6.25C5.41667 5.43056 5.69792 4.73958 6.26042 4.17708C6.82292 3.61458 7.51389 3.33333 8.33333 3.33333C9.15278 3.33333 9.84375 3.61458 10.4062 4.17708C10.9688 4.73958 11.25 5.43056 11.25 6.25C11.25 7.06944 10.9688 7.76042 10.4062 8.32292C9.84375 8.88542 9.15278 9.16667 8.33333 9.16667ZM8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667ZM8.33333 15C9.06944 15 9.76389 14.8924 10.4167 14.6771C11.0694 14.4618 11.6667 14.1528 12.2083 13.75C11.6667 13.3472 11.0694 13.0382 10.4167 12.8229C9.76389 12.6076 9.06944 12.5 8.33333 12.5C7.59722 12.5 6.90278 12.6076 6.25 12.8229C5.59722 13.0382 5 13.3472 4.45833 13.75C5 14.1528 5.59722 14.4618 6.25 14.6771C6.90278 14.8924 7.59722 15 8.33333 15ZM8.33333 7.5C8.69444 7.5 8.99306 7.38194 9.22917 7.14583C9.46528 6.90972 9.58333 6.61111 9.58333 6.25C9.58333 5.88889 9.46528 5.59028 9.22917 5.35417C8.99306 5.11806 8.69444 5 8.33333 5C7.97222 5 7.67361 5.11806 7.4375 5.35417C7.20139 5.59028 7.08333 5.88889 7.08333 6.25C7.08333 6.61111 7.20139 6.90972 7.4375 7.14583C7.67361 7.38194 7.97222 7.5 8.33333 7.5Z" fill="white"/>
                  </svg>
                </div>
                <div class="acc-placement">
                  <div class="label-div">
                    <label class="acc-label">Hi, Ade</label>
                  </div>
                  <div class="acc">Account</div>
                </div>
                <div class="arrow-down">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10.0007 12.5938C9.87621 12.5938 9.75711 12.5722 9.64336 12.5292C9.52947 12.4861 9.42586 12.418 9.33253 12.3248L5.50419 8.49646C5.32822 8.32035 5.24023 8.09931 5.24023 7.83333C5.24023 7.56736 5.32822 7.34632 5.50419 7.17021C5.6803 6.99424 5.90135 6.90625 6.16732 6.90625C6.43329 6.90625 6.65433 6.99424 6.83044 7.17021L10.0007 10.3406L13.1709 7.17021C13.347 6.99424 13.568 6.90625 13.834 6.90625C14.1 6.90625 14.321 6.99424 14.4971 7.17021C14.6731 7.34632 14.7611 7.56736 14.7611 7.83333C14.7611 8.09931 14.6731 8.32035 14.4971 8.49646L10.6688 12.3248C10.5754 12.418 10.4718 12.4861 10.3579 12.5292C10.2442 12.5722 10.1251 12.5938 10.0007 12.5938Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>

            <div class="vert">
              <div class="vert-line"></div>
            </div>

            <div class="shop-sect">
              <div class="shop-box-sect">
                <div class="shop-box">
                  <div class="shop-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <mask id="mask0_8337_27522" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="#D9D9D9"/>
                      </mask>
                      <g mask="url(#mask0_8337_27522)">
                        <path d="M6.6155 21C6.15517 21 5.77083 20.8458 5.4625 20.5375C5.15417 20.2292 5 19.8448 5 19.3845V8.6155C5 8.15517 5.15417 7.77083 5.4625 7.4625C5.77083 7.15417 6.15517 7 6.6155 7H8.5V6.5C8.5 5.52817 8.84042 4.70192 9.52125 4.02125C10.2019 3.34042 11.0282 3 12 3C12.9718 3 13.7981 3.34042 14.4788 4.02125C15.1596 4.70192 15.5 5.52817 15.5 6.5V7H17.3845C17.8448 7 18.2292 7.15417 18.5375 7.4625C18.8458 7.77083 19 8.15517 19 8.6155V19.3845C19 19.8448 18.8458 20.2292 18.5375 20.5375C18.2292 20.8458 17.8448 21 17.3845 21H6.6155ZM6.6155 20H17.3845C17.5385 20 17.6796 19.9359 17.8077 19.8078C17.9359 19.6796 18 19.5385 18 19.3845V8.6155C18 8.4615 17.9359 8.32042 17.8077 8.19225C17.6796 8.06408 17.5385 8 17.3845 8H15.5V10.5C15.5 10.6423 15.4523 10.7613 15.3568 10.8568C15.2613 10.9523 15.1423 11 15 11C14.8577 11 14.7387 10.9523 14.6432 10.8568C14.5477 10.7613 14.5 10.6423 14.5 10.5V8H9.5V10.5C9.5 10.6423 9.45225 10.7613 9.35675 10.8568C9.26125 10.9523 9.14233 11 9 11C8.85767 11 8.73875 10.9523 8.64325 10.8568C8.54775 10.7613 8.5 10.6423 8.5 10.5V8H6.6155C6.4615 8 6.32042 8.06408 6.19225 8.19225C6.06408 8.32042 6 8.4615 6 8.6155V19.3845C6 19.5385 6.06408 19.6796 6.19225 19.8078C6.32042 19.9359 6.4615 20 6.6155 20ZM9.5 7H14.5V6.5C14.5 5.79617 14.2593 5.2035 13.778 4.722C13.2965 4.24067 12.7038 4 12 4C11.2962 4 10.7035 4.24067 10.222 4.722C9.74067 5.2035 9.5 5.79617 9.5 6.5V7Z" fill="white"/>
                      </g>
                    </svg>
                  </div>
                  <div class="cart-badge">
                    <text class="badge-num">{{ badgeCount }}</text>
                  </div>

                </div>
                <div class="price">₦{{ total.toLocaleString() }}</div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div class="down-banner">
          <div class="down-frame">
            <div class="catebrands">
            <div class="cate-menu">
              <div class="cate-state">
                <div class="menu-box">
                  <div class="menu-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M2.25 13.5V12H15.75V13.5H2.25ZM2.25 9.75V8.25H15.75V9.75H2.25ZM2.25 6V4.5H15.75V6H2.25Z" fill="white"/>
                    </svg>
                  </div>
                </div>
                <div class="categories">Categories</div>
              </div>
            </div>

            <div class="brand-sect">
              <div class="brand-state">
                <div class="award-box">
                  <div class="award-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <mask id="mask0_8337_27424" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                        <rect width="18" height="18" fill="#D9D9D9"/>
                      </mask>
                      <g mask="url(#mask0_8337_27424)">
                        <path d="M9 10.8563L10.425 11.7188C10.5625 11.8062 10.7 11.8031 10.8375 11.7094C10.975 11.6156 11.025 11.4875 10.9875 11.325L10.6125 9.69375L11.8875 8.5875C12.0125 8.475 12.05 8.34063 12 8.18438C11.95 8.02813 11.8375 7.94375 11.6625 7.93125L9.99375 7.8L9.3375 6.2625C9.275 6.1125 9.1625 6.0375 9 6.0375C8.8375 6.0375 8.725 6.1125 8.6625 6.2625L8.00625 7.8L6.3375 7.93125C6.1625 7.94375 6.05 8.02813 6 8.18438C5.95 8.34063 5.9875 8.475 6.1125 8.5875L7.3875 9.69375L7.0125 11.325C6.975 11.4875 7.025 11.6156 7.1625 11.7094C7.3 11.8031 7.4375 11.8062 7.575 11.7188L9 10.8563ZM6.4875 15H4.5C4.0875 15 3.73438 14.8531 3.44063 14.5594C3.14688 14.2656 3 13.9125 3 13.5V11.5125L1.55625 10.05C1.41875 9.9 1.3125 9.73438 1.2375 9.55313C1.1625 9.37187 1.125 9.1875 1.125 9C1.125 8.8125 1.1625 8.62812 1.2375 8.44687C1.3125 8.26562 1.41875 8.1 1.55625 7.95L3 6.4875V4.5C3 4.0875 3.14688 3.73438 3.44063 3.44063C3.73438 3.14688 4.0875 3 4.5 3H6.4875L7.95 1.55625C8.1 1.41875 8.26562 1.3125 8.44687 1.2375C8.62812 1.1625 8.8125 1.125 9 1.125C9.1875 1.125 9.37187 1.1625 9.55313 1.2375C9.73438 1.3125 9.9 1.41875 10.05 1.55625L11.5125 3H13.5C13.9125 3 14.2656 3.14688 14.5594 3.44063C14.8531 3.73438 15 4.0875 15 4.5V6.4875L16.4438 7.95C16.5813 8.1 16.6875 8.26562 16.7625 8.44687C16.8375 8.62812 16.875 8.8125 16.875 9C16.875 9.1875 16.8375 9.37187 16.7625 9.55313C16.6875 9.73438 16.5813 9.9 16.4438 10.05L15 11.5125V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H11.5125L10.05 16.4438C9.9 16.5813 9.73438 16.6875 9.55313 16.7625C9.37187 16.8375 9.1875 16.875 9 16.875C8.8125 16.875 8.62812 16.8375 8.44687 16.7625C8.26562 16.6875 8.1 16.5813 7.95 16.4438L6.4875 15ZM7.125 13.5L9 15.375L10.875 13.5H13.5V10.875L15.375 9L13.5 7.125V4.5H10.875L9 2.625L7.125 4.5H4.5V7.125L2.625 9L4.5 10.875V13.5H7.125Z" fill="white"/>
                      </g>
                    </svg>
                  </div>
                </div>
                <div class="brands">Brands</div>
              </div>
            </div>

            <div class="nav-barsect">
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">Deals</div>
              </div>
              </div>
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">Buy Again</div>
              </div>
              </div>
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">Back in stock</div>
              </div>
              </div>
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">Popular</div>
              </div>
              </div>
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">New Items</div>
              </div>
              </div>
              <div class="nav-box">
              <div class="nav-sect">
                <div class="text">Kessington</div>
              </div>
              </div>
            </div>


            </div>
          </div>
        </div>
    </div>
  </section>


  <section class="cat-sect">
    <div class="main-container">
      <div class="cart-heading">Cart</div>
      <div class="wholecat">
        <div class="slots">
          <section class="filter-opt">
            <div class="select-all-cont">
              <input type="checkbox" class="checkbox" id="checkbox" v-model="allSelected" />
              <label for="checkbox" class="check-text">Select all</label>
            </div>

            <div class="cart-filters">
              <div class="input-chip">
                <div class="input-layer">
                  <div class="layer-text">All</div>
                </div>
              </div>

              <div class="batch-box">
                <div class="batch-inside">
                  <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M3.62458 3H14.3996C14.5768 3 14.7252 3.06012 14.845 3.18037C14.9647 3.3005 15.0246 3.44944 15.0246 3.62719C15.0246 3.80494 14.9647 3.95319 14.845 4.07194C14.7252 4.19069 14.5768 4.25006 14.3996 4.25006H3.62458C3.44758 4.25006 3.29914 4.18994 3.17927 4.06969C3.05952 3.94944 2.99964 3.8005 2.99964 3.62287C2.99964 3.44512 3.05952 3.29688 3.17927 3.17813C3.29914 3.05937 3.44758 3 3.62458 3ZM3.6872 15C3.51008 15 3.36164 14.9401 3.24189 14.8204C3.12202 14.7005 3.06208 14.5521 3.06208 14.3751V10.275H2.70583C2.50883 10.275 2.34814 10.1989 2.22377 10.0468C2.09939 9.89481 2.05802 9.72088 2.09964 9.525L2.8997 5.75006C2.92883 5.60006 3.0007 5.47919 3.11533 5.38744C3.22983 5.29581 3.36002 5.25 3.50589 5.25H14.506C14.6517 5.25 14.7819 5.29581 14.8965 5.38744C15.0111 5.47919 15.083 5.60006 15.1121 5.75006L15.9122 9.525C15.9538 9.72088 15.9125 9.89481 15.7881 10.0468C15.6636 10.1989 15.5028 10.275 15.3058 10.275H14.9496V14.3751C14.9496 14.5521 14.8895 14.7005 14.7694 14.8204C14.6491 14.9401 14.5001 15 14.3224 15C14.1448 15 13.9966 14.9401 13.8778 14.8204C13.7591 14.7005 13.6997 14.5521 13.6997 14.3751V10.275H10.3371V14.3751C10.3371 14.5521 10.2772 14.7005 10.1575 14.8204C10.0377 14.9401 9.88927 15 9.71214 15H3.6872ZM4.31214 13.7499H9.0872V10.275H4.31214V13.7499ZM3.44964 9.02494H14.5622L14.0246 6.50006H3.9872L3.44964 9.02494Z" fill="#444654"/>
                    </svg>
                  </div>
                  <div class="batch-text">Batch products</div>
                </div>
              </div>

              <div class="batch-box">
                <div class="batch-inside">
                  <div class="d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_8369_9924)">
                        <path d="M11.9024 11.4376L9.37494 9.9376V6.54011C9.37494 6.24011 9.13494 6.0001 8.83494 6.0001H8.78994C8.48994 6.0001 8.24994 6.24011 8.24994 6.54011V10.0801C8.24994 10.3426 8.38494 10.5901 8.61744 10.7251L11.3549 12.3676C11.6099 12.5176 11.9399 12.4426 12.0899 12.1876C12.2474 11.9251 12.1649 11.5876 11.9024 11.4376ZM15.8849 3.75761L13.5749 1.83761C13.2599 1.57511 12.7874 1.61261 12.5174 1.93511C12.2549 2.25011 12.2999 2.72261 12.6149 2.99261L14.9174 4.91261C15.2324 5.17511 15.7049 5.13761 15.9749 4.81511C16.2449 4.50011 16.1999 4.02761 15.8849 3.75761ZM3.07494 4.91261L5.37744 2.99261C5.69994 2.72261 5.74494 2.25011 5.47494 1.93511C5.21244 1.61261 4.73994 1.57511 4.42494 1.83761L2.11494 3.75761C1.79994 4.02761 1.75494 4.50011 2.02494 4.81511C2.28744 5.13761 2.75994 5.17511 3.07494 4.91261ZM8.99994 3.00011C5.27244 3.00011 2.24994 6.02261 2.24994 9.7501C2.24994 13.4776 5.27244 16.5001 8.99994 16.5001C12.7274 16.5001 15.7499 13.4776 15.7499 9.7501C15.7499 6.02261 12.7274 3.00011 8.99994 3.00011ZM8.99994 15.0001C6.10494 15.0001 3.74994 12.6451 3.74994 9.7501C3.74994 6.85511 6.10494 4.50011 8.99994 4.50011C11.8949 4.50011 14.2499 6.85511 14.2499 9.7501C14.2499 12.6451 11.8949 15.0001 8.99994 15.0001Z" fill="#525C8A"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_8369_9924">
                          <rect width="18" height="18" fill="white"/>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="batch-text">Out of stock soon</div>
                </div>
              </div>
            </div>
          </section>

          <section class="cart-item" v-for="item in items" :key="item.id">
          <div class="cart-checkbox">
            <input type="checkbox" class="checkbox" :id="'item-' + item.id" :checked="item.checked" @change="toggleItem(item.id)" />
          </div>

          <div class="prd-cont-info">
            <img class="cart-img" :src="item.image" />
            <div class="cart-info">
              <div class="prd-name-info">
                <div class="prd-name-innfo">
                  <div class="prd-name">{{ item.name }}</div>
                  <div class="prdlabel">
                    <div class="prdlabel-price">₦{{ item.price.toLocaleString() }}</div>
                  </div>
                </div>

                <div class="prd-label">{{ item.brand }}</div>
                <div class="label-cont">
                  <div class="input-type">
                    <div class="type-text">Cash & Carry</div>
                  </div>
                  <div class="prd-label-box">
                    <div class="d-flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6.00692 6.56997C5.94476 6.56997 5.88496 6.56243 5.82755 6.54734C5.77021 6.53226 5.71255 6.5103 5.65455 6.48147L1.7488 4.46409C1.67821 4.42468 1.62659 4.37493 1.59392 4.31484C1.56126 4.25476 1.54492 4.18947 1.54492 4.11897C1.54492 4.04847 1.56126 3.98318 1.59392 3.92309C1.62659 3.86293 1.67821 3.81313 1.7488 3.77372L5.65455 1.75647C5.71255 1.72763 5.77021 1.70568 5.82755 1.69059C5.88496 1.67551 5.94476 1.66797 6.00692 1.66797C6.06592 1.66797 6.12409 1.67551 6.18142 1.69059C6.23884 1.70568 6.29655 1.72763 6.35455 1.75647L10.2684 3.77372C10.3358 3.81313 10.3868 3.86293 10.4215 3.92309C10.4564 3.98318 10.4738 4.04847 10.4738 4.11897C10.4738 4.18947 10.4564 4.25476 10.4215 4.31484C10.3868 4.37493 10.3358 4.42468 10.2684 4.46409L6.35455 6.48147C6.29655 6.5103 6.23884 6.53226 6.18142 6.54734C6.12409 6.56243 6.06592 6.56997 6.00692 6.56997ZM6.00692 8.01172L10.0564 5.93572C10.0837 5.92005 10.1378 5.92055 10.2189 5.93722C10.2712 5.95005 10.3119 5.9748 10.341 6.01147C10.3702 6.04822 10.3848 6.09318 10.3848 6.14634C10.3848 6.19126 10.3752 6.22989 10.3559 6.26222C10.3368 6.29455 10.3063 6.32243 10.2647 6.34584L6.35455 8.35597C6.29655 8.38805 6.23884 8.41184 6.18142 8.42734C6.12409 8.44293 6.06592 8.45072 6.00692 8.45072C5.94476 8.45072 5.88496 8.44293 5.82755 8.42734C5.77021 8.41184 5.71255 8.38805 5.65455 8.35597L1.75117 6.34584C1.70626 6.32243 1.67363 6.29455 1.6533 6.26222C1.63296 6.22989 1.6228 6.19126 1.6228 6.14634C1.6228 6.09734 1.63896 6.05343 1.6713 6.01459C1.70371 5.97584 1.74605 5.95005 1.7983 5.93722C1.82388 5.92439 1.85038 5.91759 1.8778 5.91684C1.90521 5.91601 1.93288 5.9223 1.9608 5.93572L6.00692 8.01172ZM6.00692 9.89247L10.0564 7.81659C10.0837 7.80084 10.1378 7.8013 10.2189 7.81797C10.2712 7.8308 10.3119 7.85555 10.341 7.89222C10.3702 7.92897 10.3848 7.97393 10.3848 8.02709C10.3848 8.07201 10.3752 8.11064 10.3559 8.14297C10.3368 8.17539 10.3063 8.20326 10.2647 8.22659L6.35455 10.2367C6.29655 10.2688 6.23884 10.2926 6.18142 10.3081C6.12409 10.3237 6.06592 10.3315 6.00692 10.3315C5.94476 10.3315 5.88496 10.3237 5.82755 10.3081C5.77021 10.2926 5.71255 10.2688 5.65455 10.2367L1.75117 8.22659C1.70626 8.20326 1.67363 8.17539 1.6533 8.14297C1.63296 8.11064 1.6228 8.07201 1.6228 8.02709C1.6228 7.97809 1.63896 7.93418 1.6713 7.89534C1.70371 7.85659 1.74605 7.8308 1.7983 7.81797C1.82388 7.80514 1.85038 7.79834 1.8778 7.79759C1.90521 7.79676 1.93288 7.80309 1.9608 7.81659L6.00692 9.89247Z" fill="#0D2000"/>
                      </svg>
                    </div>
                    <div class="label-text">Roll</div>
                  </div>
                </div>
              </div>

              <div class="btm-prd-cont">
                <div class="action-box">
                  <div class="action-text">Save or later</div>
                  <div class="action-div"></div>
                  <div class="remv" @click="removeItem(item.id)">Remove</div>
                </div>

                <div class="add-to-cart">
                  <button class="qty-btn qty-minus" type="button" @click="decreaseQty(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3.5 8H12.5" stroke="#444654" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </button>
                  <div class="qty-num">{{ item.quantity }}</div>
                  <button class="qty-btn qty-plus" type="button" @click="increaseQty(item.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3.5V12.5M3.5 8H12.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        </div>

        <div class="summary-box">
          <div class="summary">Summary</div>

          <div class="item-info">
            <div class="item-frames">
              <div class="item-frame">
                <div class="item">Item(s) total</div>
                <div class="item-price">₦{{ checkoutTotal.toLocaleString() }}</div>
              </div>
              <div class="item-frame">
                <div class="item">Delivery Fee</div>
                <div class="item-price">Free</div>
              </div>
            </div>

            <div class="subtotal-box">
              <div class="subtotal">Subtotal</div>
              <div class="subtotal-price">₦{{ checkoutTotal.toLocaleString() }}</div>
            </div>
          </div>

          <div class="code-box">
            <div class="code-frame">
              <div class="promo-code">
                <input class="code" placeholder="Promo code"/>
              </div>
              <div class="apply-box">
                <button class="apply-btn">Apply</button>
              </div>
            </div>
          </div>

          <button class="btn check-out-btn" type="button" :disabled="checkoutCount === 0" @click="goToCheckout">
            <div class="check-out-text">Check Out ({{ checkoutCount }})</div>
          </button>

          <div class="pts-box">
            <div class="pts-state">
              <div class="pts">You will earn 50 cash points</div>
              <div class="icon-box">
                <div class="payment-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clip-path="url(#clip0_8369_2033)">
                      <path d="M15.3327 5.33366V12.0003C15.3327 12.7337 14.7327 13.3337 13.9993 13.3337H3.33268C2.96602 13.3337 2.66602 13.0337 2.66602 12.667C2.66602 12.3003 2.96602 12.0003 3.33268 12.0003H13.9993V5.33366C13.9993 4.96699 14.2993 4.66699 14.666 4.66699C15.0327 4.66699 15.3327 4.96699 15.3327 5.33366ZM2.66602 10.667C1.55935 10.667 0.666016 9.77366 0.666016 8.66699V4.66699C0.666016 3.56033 1.55935 2.66699 2.66602 2.66699H10.666C11.7727 2.66699 12.666 3.56033 12.666 4.66699V9.33366C12.666 10.067 12.066 10.667 11.3327 10.667H2.66602ZM4.66602 6.66699C4.66602 7.77366 5.55935 8.66699 6.66602 8.66699C7.77268 8.66699 8.66602 7.77366 8.66602 6.66699C8.66602 5.56033 7.77268 4.66699 6.66602 4.66699C5.55935 4.66699 4.66602 5.56033 4.66602 6.66699Z" fill="#008731"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_8369_2033">
                        <rect width="16" height="16" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.check-out-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.add-to-cart {
  display: flex;
  width: 125px;
  justify-content: space-between;
  align-items: center;
}

.qty-btn {
  display: flex;
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 0;
  cursor: pointer;
}

.qty-minus {
  border: 1px solid var(--State-Layers-Outline-Opacity-16, rgba(116, 118, 133, 0.16));
  background: transparent;
}

.qty-plus {
  border: none;
  background: var(--Schemes-Primary, #0F38B3);
}

.qty-num {
  color: var(--Schemes-On-Surface, #1A1B23);
  font-family: "Instrument Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
}
.remv {
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
}

.action-div {
  display: flex;
flex-direction: column;
align-items: center;
align-self: stretch;
  width: 1px;
height: 16px;
background: var(--State-Layers-Outline-Opacity-10, rgba(116, 118, 133, 0.10));
}

.action-text {
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
}

.action-box {
  display: flex;
padding: 0 var(--spacing-and-corners-0-pt, 0);
align-items: center;
gap: var(--spacing-and-corners-16-pt, 16px);
}

.btm-prd-cont {
  display: flex;
justify-content: space-between;
align-items: flex-end;
align-self: stretch;
}
.prdlabel-price {
  color: var(--Schemes-On-Surface, #1A1B23);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-large, 16px);
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
}
.prdlabel {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-end;
gap: 8px;
flex: 1 0 0;
}
.label-text {
  color: var(--Schemes-On-Tertiary-Fixed, #0D2000);
text-align: center;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
}
.type-text {
  color: var(--Extended-Colors-On-Warning-Container, #6D4C00);
text-align: center;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-small, 11px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 145.455% */
}
.prd-label-box {
display: flex;
height: 16px;
padding: 0 var(--spacing-and-corners-4-pt, 4px) 0 var(--spacing-and-corners-2-pt, 2px);
align-items: center;
gap: var(--spacing-and-corners-2-pt, 2px);
border-radius: var(--spacing-and-corners-2-pt, 2px);
background: var(--Schemes-Tertiary-Fixed, #CAEEA6);
}
.input-type {
 display: flex;
padding: var(--spacing-and-corners-0-pt, 0) var(--spacing-and-corners-4-pt, 4px);
justify-content: center;
align-items: center;
gap: 8px;
border-radius: var(--spacing-and-corners-2-pt, 2px);
background: var(--Extended-Colors-Warning-Container, #FCBB31);
}
.label-cont {
  display: flex;
justify-content: flex-end;
align-items: flex-end;
gap: 8px;
}
.prd-label {
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-small, 12px);
font-style: normal;
font-weight: 400;
line-height: 16px;
letter-spacing: 0.4px;
align-self: stretch;
}
.prd-name {
color: var(--Schemes-On-Surface, #1A1B23);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-large, 16px);
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
align-self: stretch;
}
.prd-name-info {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: var(--spacing-and-corners-4-pt, 4px);
flex: 1 0 0;
align-self: stretch;
}
.prd-name-innfo {
 display: flex;
align-items: flex-start;
gap: var(--spacing-and-corners-8-pt, 8px);
align-self: stretch;

}
.cart-info {
  display: flex;
padding: var(--spacing-and-corners-8-pt, 8px) 0;
flex-direction: column;
align-items: flex-start;
gap: var(--spacing-and-corners-20-pt, 20px);
flex: 1 0 0;
}
.cart-img {
width: 104px;
height: 104px;
padding: 8px;
gap: 8px;
aspect-ratio: 1/1;
object-fit: contain;
background: transparent;
border-radius: 8px;
}
.prd-cont-info {
  display: flex;
align-items: flex-start;
gap: var(--spacing-and-corners-16-pt, 16px);
flex: 1 0 0;
}
.cart-checkbox {
  display: flex;
padding: var(--spacing-and-corners-8-pt, 8px) 0;
justify-content: center;
align-items: center;
gap: 8px;
}
.cart-item {
  display: flex;
padding: var(--spacing-and-corners-12-pt, 12px) var(--spacing-and-corners-8-pt, 8px);
align-items: center;
gap: var(--spacing-and-corners-8-pt, 8px);
align-self: stretch;
border-bottom: 1px solid var(--State-Layers-Outline-Opacity-10, rgba(116, 118, 133, 0.10));
background: var(--Schemes-Surface-Container-Lowest, #FFF);
}
.batch-text {
  color: var(--Schemes-On-Surface-Variant, #444654);
text-align: center;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px;
letter-spacing: 0.15px;
}
.batch-inside {
  display: flex;
padding: 6px var(--spacing-and-corners-8-pt, 8px);
align-items: center;
gap: var(--spacing-and-corners-4-pt, 4px);
}
.batch-box {
  display: flex;
height: 32px;
justify-content: center;
align-items: center;
border-radius: var(--spacing-and-corners-8-pt, 8px);
border: 1px solid var(--State-Layers-Outline-Opacity-16, rgba(116, 118, 133, 0.16));
}
.check-text {
  color: var(--Schemes-On-Surface, #1A1B23);
font-family: "Instrument Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;

}
.checkbox {
  display: flex;
align-items: center;
gap: 8px;
}
.select-all-cont {
  display: flex;
align-items: center;
gap: var(--spacing-and-corners-20-pt, 20px);
}
.payment-icon {
flex: 1 0 0;
align-self: stretch;
align-items: center;
display: flex;
}
.icon-box {
  display: flex;
width: 24px;
height: 24px;
padding: var(--spacing-and-corners-4-pt, 4px);
align-items: flex-start;
gap: 10px;
}
.pts {
  display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;
color: var(--Extended-Colors-Success-Container, #008731);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-small, 11px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 145.455% */
}
.pts-state {
  display: flex;
padding: var(--spacing-and-corners-8-pt, 8px) var(--spacing-and-corners-0-pt, 0);
justify-content: center;
align-items: center;
gap: var(--spacing-and-corners-12-pt, 12px);
flex: 1 0 0;
align-self: stretch;
}
.pts-box {
  display: flex;
height: 40px;
min-height: 40px;
padding: 0 var(--spacing-and-corners-8-pt, 8px);
flex-direction: column;
justify-content: center;
align-items: flex-start;
align-self: stretch;
border-radius: var(--spacing-and-corners-8-pt, 8px);
background: var(--Extended-Colors-On-Success-Container, #F7FFF2);
}
.check-out-text {
color: var(--Schemes-On-Primary, #FFF);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.check-out-btn {
  display: flex;
justify-content: center;
align-items: center;
border-radius: 100px;
background: var(--Schemes-Primary, #0F38B3);
flex: 1 0 0;
align-self: stretch;
border-radius: 100px;
}
.apply-btn {
  padding: 0 12px;
  border-radius: var(--spacing-and-corners-12-pt, 12px);
  border: none;
  background: transparent;
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
  cursor: pointer;
}
.apply-box {
  display: flex;
height: 48px;
justify-content: center;
align-items: center;
position: absolute;
right: 0;
top: 0;
}
.code::placeholder {
  color: var(--Schemes-On-Surface-Variant, #444654);
  opacity: 0.5;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.code {
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
width: 100%;
border: none;
background: transparent;
outline: none;
padding-right: 100px;
}
.promo-code {
  display: flex;
padding: 4px 0;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex: 1 0 0;
align-self: stretch;
}
.code-frame {
  display: flex;
height: 48px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
flex: 1 0 0;
position: relative;
border-radius: var(--spacing-and-corners-12-pt, 12px);
background: var(--Schemes-Surface-Container, #EEEDF7);
padding-left: 14px;
}
.code-box {
  display: flex;
padding: var(--spacing-and-corners-4-pt, 4px) 0;
justify-content: center;
align-items: flex-start;
gap: var(--spacing-and-corners-0-pt, 0);
align-self: stretch;
}
.subtotal-price {
  overflow: hidden;
color: var(--Schemes-On-Surface, #1A1B23);
text-overflow: ellipsis;

/* material-theme/title/medium */
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Title-medium, 16px);
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.15px;
display: -webkit-box;
-webkit-box-orient: vertical;
line-clamp: 2;
}
.subtotal {
  color: var(--Schemes-On-Surface, #1A1B23);

/* material-theme/label/large */
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-large, 14px);
font-style: normal;
font-weight: 600;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}
.subtotal-box {
  display: flex;
padding-top: var(--spacing-and-corners-16-pt, 16px);
justify-content: space-between;
align-items: center;
align-self: stretch;
border-top: 1px solid var(--State-Layers-Outline-Opacity-10, rgba(116, 118, 133, 0.10));
}
.item-priced {
  overflow: hidden;
color: var(--Schemes-Primary, #0F38B3);
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
line-clamp: 2;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.item-price {
  overflow: hidden;
color: var(--M3-sys-light-on-surface-variant, var(--Schemes-On-Surface-Variant, #444654));
text-overflow: ellipsis;
display: -webkit-box;
-webkit-box-orient: vertical;
line-clamp: 2;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.item {
  color: var(--Schemes-On-Surface-Variant, #444654);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.item-frame {
  display: flex;
height: 40px;
padding: var(--spacing-and-corners-8-pt, 8px) 0;
justify-content: space-between;
align-items: center;
align-self: stretch;
}
.item-frames {
  display: flex;
flex-direction: column;
align-items: flex-start;
gap: 2px;
align-self: stretch;
}
.item-info {
  display: flex;
padding: 0 var(--spacing-and-corners-0-pt, 0);
flex-direction: column;
align-items: flex-start;
gap: var(--spacing-and-corners-12-pt, 12px);
align-self: stretch;
}
.summary {
  align-self: stretch;
line-clamp: 1;
overflow: hidden;
color: var(--Schemes-On-Surface, #1A1B23);
text-overflow: ellipsis;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Title-medium, 16px);
font-style: normal;
font-weight: 700;
line-height: 24px; /* 150% */
letter-spacing: 0.15px;
}
.summary-box {
  display: flex;
width: 385px;
padding: var(--spacing-and-corners-20-pt, 20px);
flex-direction: column;
align-items: center;
gap: var(--spacing-and-corners-16-pt, 16px);
  flex-shrink: 0;
  border-radius: var(--spacing-and-corners-16-pt, 16px);
background: var(--Schemes-Surface-Container-Lowest, #FFF);
}
.slots {
  display: flex;
padding: var(--spacing-and-corners-24-pt, 24px) var(--spacing-and-corners-24-pt, 24px) var(--102-pt, 102px) var(--spacing-and-corners-24-pt, 24px);
flex-direction: column;
align-items: flex-start;
gap: var(--spacing-and-corners-8-pt, 8px);
flex: 1 0 0;
border-radius: var(--spacing-and-corners-16-pt, 16px);
background: var(--Schemes-Surface-Container-Lowest, #FFF);
}
.filter-opt {
  display: flex;
  padding: var(--spacing-and-corners-0-pt, 0) var(--spacing-and-corners-8-pt, 8px) var(--spacing-and-corners-20-pt, 20px) var(--spacing-and-corners-8-pt, 8px);
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: var(--spacing-and-corners-0-pt, 0);
  border-bottom: 1px solid var(--State-Layers-Outline-Variant-Opacity-16, rgba(196, 197, 214, 0.16));
}
.layer-text {
  color: var(--Schemes-On-Secondary-Container, #495481);
text-align: center;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
}
.input-layer {
  display: flex;
padding: 6px var(--spacing-and-corners-8-pt, 8px);
justify-content: center;
align-items: center;
gap: var(--spacing-and-corners-4-pt, 4px);
}
.input-chip {
  display: flex;
height: 32px;
justify-content: center;
align-items: center;
border-radius: var(--spacing-and-corners-8-pt, 8px);
background: var(--Schemes-Secondary-Container, #C0C9FF);
}
.cart-filters {
  display: flex;
align-items: center;
gap: 8px;
}
.wholecat {
display: flex;
align-items: flex-start;
gap: var(--spacing-and-corners-24-pt, 24px);
flex: 1 0 0;
align-self: stretch;
}
.cart-heading {
  color: #000;
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Title-large, 22px);
font-style: normal;
font-weight: 500;
line-height: 28px; /* 127.273% */
align-self: stretch;
}
.main-container {
  display: flex;
max-width: 1200px;
width: 100%;
flex-direction: column;
align-items: flex-start;
gap: 20px;
flex: 1 0 0;
}
.text {
  color: var(--material-theme-white, #FFF);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Label-medium, 12px);
font-style: normal;
font-weight: 500;
line-height: 16px; /* 133.333% */
letter-spacing: 0.15px;
}
.nav-sect {
  display: flex;
height: 32px;
flex-direction: column;
justify-content: center;
}
.nav-box {
  display: flex;
padding: 0 12px;
white-space: nowrap;
  flex-shrink: 0;
border-radius: 9999px;
border: 1px solid var(--State-Layers-Outline-Variant-Opacity-16, rgba(196, 197, 214, 0.16));
}
.nav-barsect {
  display: flex;
justify-content: flex-end;
align-items: center;
gap: var(--spacing-and-corners-8-pt, 8px);
flex-shrink: 0;
align-self: stretch;
padding-left: 62%;
}
.brands {
  color: var(--material-theme-white, #FFF);
font-family: var(--font-family-Font-1, "Helvetica Neue");
font-size: 13.5px;
font-style: normal;
font-weight: var(--font-weight-700, 700);
line-height: var(--line-height-17_5, 17.5px); /* 129.63% */
}
.award-icon {
  width: 18px;
height: 18px;
aspect-ratio: 1/1;
  display: flex;
  align-items: center;
}
.award-box {
  display: flex;
width: 24px;
padding-right: 8px;
}
.brand-sect {
  border-radius: 9999px;
border: 2px solid var(--State-Layers-Surface-Opacity-16, rgba(251, 248, 255, 0.16));
display: flex;
}
.brand-state {
  display: flex;
height: 32px;
padding: 6.25px 12px 7.75px 12px;
border-radius: 100px;
}
.catebrands {
  display: flex;
align-items: flex-start;
gap: 8px;
}
.down-frame {
  display: flex;
width: 100%;
align-items: center;
max-width: 1200px;;
flex-shrink: 0;
}
.categories {
  color: var(--material-theme-white, #FFF);
font-family: var(--font-family-Font-1, "Helvetica Neue");
font-size: 13.5px;
font-style: normal;
font-weight: var(--font-weight-700, 700);
line-height: var(--line-height-17_5, 17.5px); /* 129.63% */
}
.menu-icon {
  display: flex;
  align-items: center;
}
.menu-box {
  display: flex;
width: 24px;
padding-right: 8px;
}
.cate-menu {
  display: flex;
flex-direction: column;
align-items: flex-start;
border-radius: 9999px;
border: 2px solid var(--State-Layers-Surface-Opacity-16, rgba(251, 248, 255, 0.16));
}
.cate-state {
display: flex;
height: 32px;
padding: 6.25px 12px 7.75px 12px;
align-items: flex-end;
border-radius: 100px;
align-items: center;
}
.down-banner {
  display: flex;
width: 100%;
height: 56px;
padding: 0 80px;
justify-content: center;
align-items: center;
flex-shrink: 0;
background: var(--State-Layers-Primary-Fixed-Dim-Opacity-16, rgba(184, 196, 255, 0.16));
}
.badge-num {
  color: var(--Schemes-On-Tertiary-Container, #4F6D33);
text-align: center;
font-family: var(--font-family-Font-1, "Helvetica Neue");
font-size: var(--font-size-12, 12px);
font-style: normal;
font-weight: var(--font-weight-700, 700);
line-height: var(--width-16, 16px); /* 133.333% */
}
.cart-badge {
  display: flex;
width: 16.96px;
height: 16px;
min-width: var(--width-16, 16px);
padding: 0 4px;
flex-direction: column;
align-items: center;
position: absolute;
left: 15px;
bottom: 11.55px;
border-radius: 1000px;
background: var(--Schemes-Tertiary-Container, #CAEEA6);
}
.price {
  color: var(--material-theme-white, #FFF);

/* material-theme/label/large */
font-family: "Instrument Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}
.shop-icon {
  display: flex;
width: 28px;
height: 24px;
padding-right: 4px;
flex-direction: column;
align-items: flex-start;
}
.shop-box {
  display: flex;
width: 28px;
height: 24px;
padding-right: 4px;
flex-direction: column;
align-items: flex-start;
position: relative;
}
.shop-box-sect {
  display: flex;
min-width: var(--width-64, 64px);
min-height: var(--width-52, 52px);
padding: 6px 14.42px 5.5px 14.42px;
flex-direction: column;
justify-content: center;
align-items: center;
}
.shop-sect {
  display: flex;
  width: 100%;
padding-left: 8px;
flex-direction: column;
align-items: flex-start;
align-self: stretch;
}
.vert-line {
  width: 1px;
height: 28px;
background: #FFF;
}
.vert {
  display: flex;
padding: 12px var(--spacing-and-corners-0-pt, 0);
flex-direction: column;
align-items: center;
align-self: stretch;
opacity: 0.3;
}
.acc-label {
  color: var(--material-theme-white, #FFF);
font-family: "Instrument Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}
.label-div {
  display: flex;
height: 20px;
max-width: var(--width-128, 128px);
flex-direction: column;
align-items: flex-start;
align-self: stretch;
}
.acc {
  color: var(--material-theme-white, #FFF);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-medium, 14px);
font-style: normal;
font-weight: 700;
line-height: 20px; /* 142.857% */
letter-spacing: 0.25px;
}
.acc-placement {
  display: flex;
padding: 0 8px;
flex-direction: column;
align-items: flex-start;
}
.acc-sect {
  display: flex;
height: 52px;
align-items: flex-start;
}
.acc-state {
  display: flex;
height: 52px;
padding: 4px 16px 4px 12px;
align-items: center;
border-radius: 32px;
}
.acc-box {
  display: flex;
  width: 100%;
align-items: center;
gap: 8px;
}
.search-btn {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-btn-box {
display: flex;
width: 32px;
height: 32px;
padding: 1px 6px;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
border-radius: 32px;
right: 6px;
background: var(--Schemes-Primary, #0F38B3);
}
.header-frame {
  display: flex;
max-width: 1200px;
align-items: center;
gap: 24px;
flex: 1 0 0;
}
::placeholder {
  color: var(--Schemes-On-Surface, #1A1B23);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-large, 16px);
font-style: normal;
font-weight: 500;
line-height: 24px; /* 150% */
letter-spacing: 0.5px;
}
.icon-state {
  display: flex;
width: 32px;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 100px;
background: var(--State-Layers-Surface-Opacity-16, rgba(251, 248, 255, 0.16));
}
.vector-x {
  display: flex;
width: 24.01px;
height: 23.99px;
padding: 4.702px 4.712px;
justify-content: center;
align-items: center;
fill: var(--color-core-black, #000);
opacity: var(--z-index-100, 1);
}
.vector-xbox {
  display: flex;
height: 52px;
padding: 0 12px;
flex-direction: column;
justify-content: center;
align-items: flex-end;
position: absolute;
right: 48px;
top: 0;
}
.inner-box {
  border: none;
  height: 19px;
outline: none;
flex: 1 0 0;
min-width: 0;
background: transparent;
}
.text-box {
  display: flex;
  width: 100%;
  padding-left: 24px;
  padding-right: 32px;
  justify-content: center;
  align-items: center;
  height: 52px;
  position: relative;
}
.search-box {
  display: flex;
align-items: flex-start;
gap: 8px;
width: 100%;
border-radius: 9999px;
background: var(--material-theme-white, #FFF);
height: 52px;
flex: 1 0 0;
}
.search-box-sect {
display: flex;
padding-left: 24px;
width: 100%;
justify-content: center;
align-items: center;
flex: 1 0 0;
}
.down-icon {
  width: 16.02px;
height: 16px;
}
.down-box {
  display: flex;
width: 16px;
height: 28px;
padding: 5px 0 7px 0;
align-items: center;
align-self: stretch;
border-radius: 24px;
}
.ikj-br {
  display: flex;
align-items: flex-start;
align-self: stretch;
opacity: 0.8;
color: var(--material-theme-white, #FFF);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Body-small, 12px);
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
letter-spacing: 0.4px;
}
.active-store {
  color: var(--material-theme-white, #FFF);
font-family: var(--Font-style-family-title, "Instrument Sans");
font-size: var(--Font-size-Title-small, 14px);
font-style: normal;
font-weight: 500;
line-height: 20px; /* 142.857% */
letter-spacing: 0.1px;
}
.active-label {
  display: flex;
flex-direction: column;
align-items: flex-start;
flex: 1 0 0;
}
.store-icon {
  width: 20px;
height: 20px;
aspect-ratio: 1/1;
}
.store-icon-box {
  display: flex;
justify-content: center;
padding: 10px;
align-items: center;
}
.loc-sect {
  display: flex;
width: 212px;
align-items: center;
justify-content: space-between;
gap: 12px;
padding: 4px 12px 4px 4px;
border-radius: 32px;
background: var(--State-Layers-Primary-Fixed-Opacity-10, rgba(221, 225, 255, 0.10));
}
.logo-head {
  display: flex;
width: 64px;
max-width: 100%;
height: 52px;
padding-right: 12px;
flex-direction: column;
align-items: flex-start;
}
.logo {
  display: flex;
width: 52px;
height: 52px;
padding: 8px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 37px;
}
.header-flex {
display: flex;
width: 100%;
height: 84px;
padding: 16px 80px;
justify-content: center;
align-items: center;
flex-shrink: 0;
}
.banner-bg {
  display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background: radial-gradient(230.33% 225.47% at 57.16% -24.78%, var(--Palettes-Primary-10, #001354) 0%, var(--Palettes-Primary-30, #1039B3) 100%);
}
.cart-sect {
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background: radial-gradient(230.33% 225.47% at 57.16% -24.78%, var(--Palettes-Primary-10, #001354) 0%, var(--Palettes-Primary-30, #1039B3) 100%);
position: relative;
}
.cat-sect {
  display: flex;
width: 100%;
padding: 24px 80px;
flex-direction: column;
align-items: center;
gap: 8px;
flex: 1 0 0;
background: var(--Schemes-Surface-Bright, #FBF8FF);
}

@media (max-width: 600px) {
  .header-flex,
  .down-banner,
  .cat-sect,
  .summary-box {
    box-sizing: border-box;
  }
  .header-flex {
    height: auto;
    min-height: 84px;
    padding: 16px 20px;
  }
  .header-frame {
    flex-wrap: wrap;
  }
  .loc-sect {
    width: auto;
    max-width: 100%;
  }
  .search-box-sect {
    flex-basis: 100%;
    padding-left: 0;
  }
  .down-banner {
    padding: 0 16px;
  }
  .catebrands {
    max-width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .catebrands::-webkit-scrollbar {
    display: none;
  }
  .cate-menu,
  .brand-sect {
    flex-shrink: 0;
  }
  .nav-barsect {
    padding-left: 0;
  }
  .cat-sect {
    padding: 16px;
  }
  .main-container {
    flex-direction: column;
    align-items: stretch;
  }
  .wholecat {
    flex-direction: column;
    align-items: stretch;
  }
  .slots {
    padding: 12px;
  }
  .summary-box {
    width: 100%;
  }
  .filter-opt {
    flex-wrap: wrap;
    row-gap: 12px;
  }
  .cart-filters {
    flex-wrap: wrap;
  }
  .input-chip,
  .batch-box {
    flex-shrink: 0;
  }

  .cart-item {
    padding: 12px 0;
    gap: 4px;
  }
  .prd-cont-info {
    gap: 12px;
    min-width: 0;
  }
  .cart-img {
    width: 72px;
    height: 72px;
    padding: 4px;
    box-sizing: border-box;
  }
  .cart-info {
    min-width: 0;
  }
  .action-box {
    gap: 12px;
  }
  .btm-prd-cont {
    flex-wrap: wrap;
    row-gap: 8px;
  }
}
</style>
