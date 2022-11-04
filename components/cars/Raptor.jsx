import styles from "../../styles/Cars.module.css";
import Image from "next/image";
import Link from "next/link";
import fordRaptor from "../../public/FordRaptor.png";
import { BiTimer } from "react-icons/bi";

const Raptor = () => {
  return (
    <div className={styles.container}>
      <h2>2020 Ford Raptor</h2>
      <Image
        alt="2020 Ford Raptor"
        src={fordRaptor}
        width={432}
        height={259}
      ></Image>
      <hr />
      <div className={styles.carStats}>
        <div className={styles.carStatsLeft}>
          <div>
            <BiTimer />
            <span>5.3 sec</span>
          </div>
          <div>
            <svg
              width="26.5"
              height="26.5"
              viewBox="0 0 28 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7079 22.7935C11.0398 22.8697 11.2522 23.2244 11.1822 23.5857C11.1212 23.9004 10.866 24.1166 10.5817 24.1166C10.5398 24.1166 10.4972 24.1119 10.4544 24.1021C6.87186 23.28 4.06897 20.2289 3.31385 16.3292C3.2439 15.9679 3.45629 15.6132 3.78826 15.5371C4.11995 15.461 4.44598 15.6921 4.51601 16.0534C5.17073 19.435 7.60125 22.0806 10.7079 22.7935ZM12.9882 14.241C12.9882 13.8717 12.7132 13.5724 12.3739 13.5724H12.3718C12.0325 13.5724 11.7586 13.8717 11.7586 14.241C11.7586 14.6103 12.0346 14.9097 12.3739 14.9097C12.7132 14.9097 12.9882 14.6103 12.9882 14.241ZM27.0196 0.90861V9.05092C27.0196 9.42022 26.7446 9.71954 26.4054 9.71954C26.0661 9.71954 25.7911 9.42022 25.7911 9.05092V8.2375H16.2665L14.184 12.1639C14.547 12.5391 14.8121 13.0256 14.9327 13.5725H17.888V10.388C17.888 10.0187 18.163 9.71939 18.5023 9.71939C18.8416 9.71939 19.1165 10.0187 19.1165 10.388V14.2213C19.1167 14.2279 19.1168 14.2345 19.1168 14.2412C19.1168 16.437 18.2266 18.4107 16.8182 19.7571C16.8039 19.7736 16.7886 19.7895 16.7725 19.8046C16.2166 20.326 15.5904 20.7408 14.9209 21.0381C14.1427 21.385 13.2923 21.578 12.4017 21.582C12.4003 21.5822 12.3991 21.582 12.3979 21.582C12.3962 21.582 12.3949 21.582 12.3933 21.582C12.3916 21.5821 12.39 21.5821 12.3884 21.582C12.3867 21.582 12.385 21.582 12.3834 21.582C12.3817 21.582 12.3798 21.582 12.3782 21.582C12.3763 21.582 12.3728 21.5815 12.3729 21.582C11.1601 21.582 10.0206 21.2315 9.03614 20.6189C9.0244 20.6125 9.01266 20.6057 9.00113 20.5985C8.98891 20.5909 8.97703 20.5828 8.9655 20.5744C6.97076 19.2978 5.62896 16.9368 5.62896 14.2413C5.62896 11.5457 6.97082 9.18472 8.96557 7.90817C8.9771 7.89978 8.98898 7.8916 9.00119 7.88403C9.01273 7.87675 9.0244 7.86999 9.03621 7.8636C10.0209 7.25084 11.1599 6.90049 12.3732 6.90049C12.4222 6.90049 12.47 6.90673 12.5157 6.91861C12.5615 6.90673 12.6092 6.90049 12.6583 6.90049H15.9013C15.9088 6.90026 15.9164 6.90026 15.9238 6.90049H25.7912V3.05941H12.6582C12.6092 3.05941 12.5616 3.05317 12.516 3.04143C12.4704 3.05317 12.4228 3.05941 12.3738 3.05941C6.70875 3.05941 2.10057 8.07548 2.10057 14.241C2.10057 20.4066 6.70874 25.4227 12.373 25.4227C16.3272 25.4227 19.9746 22.9064 21.6653 19.0122C21.6937 18.947 21.7304 18.8891 21.7736 18.8392C22.3523 17.4485 22.6769 15.907 22.6827 14.2851C22.6825 14.2795 22.6825 14.274 22.6825 14.2684V10.3879C22.6825 10.0186 22.9574 9.71932 23.2967 9.71932C23.636 9.71932 23.911 10.0186 23.911 10.3879V14.2212C23.9111 14.2278 23.9112 14.2344 23.9112 14.2411C23.9112 21.144 18.7519 26.76 12.4103 26.76C12.3979 26.76 12.3855 26.76 12.373 26.76C6.03136 26.7598 0.87207 21.144 0.87207 14.241C0.87207 7.33814 6.03136 1.72217 12.373 1.72217C12.4221 1.72217 12.4699 1.72841 12.5156 1.7403C12.5614 1.72841 12.6091 1.72217 12.6582 1.72217H25.7911V0.90861C25.7911 0.539309 26.0661 0.23999 26.4054 0.23999C26.7446 0.23999 27.0196 0.539309 27.0196 0.90861ZM6.89138 13.5724H9.81317C9.93376 13.0255 10.1988 12.539 10.5619 12.1638L9.10159 9.41034C7.8965 10.3798 7.06542 11.8697 6.89138 13.5724ZM9.10145 19.0718L10.5619 16.3183C10.1988 15.9431 9.93369 15.4566 9.8131 14.9097H6.89131C7.06542 16.6126 7.89636 18.1023 9.10145 19.0718ZM14.5815 19.7422L13.121 16.9883C12.8838 17.065 12.6328 17.1062 12.3731 17.1062C12.1133 17.1062 11.8624 17.065 11.6251 16.9883L10.1645 19.7422C10.8411 20.0652 11.5882 20.2447 12.3731 20.2447C12.3745 20.2447 12.3759 20.2447 12.3774 20.2447C12.3792 20.2447 12.3807 20.2447 12.3824 20.2447C12.3838 20.2447 12.3856 20.2447 12.3869 20.2447C12.3884 20.2447 12.3899 20.2446 12.3915 20.2447C12.3928 20.2445 12.3944 20.2446 12.3958 20.2446C12.3964 20.2446 12.3965 20.2446 12.3971 20.2446C13.0967 20.2412 13.7836 20.0933 14.4231 19.8146C14.4764 19.7913 14.529 19.7671 14.5815 19.7422ZM12.373 15.7688C13.1469 15.7688 13.7765 15.0834 13.7765 14.241C13.7765 13.3987 13.1469 12.7132 12.373 12.7132C11.599 12.7132 10.9693 13.3987 10.9693 14.241C10.9693 15.0834 11.599 15.7688 12.373 15.7688ZM14.184 16.3182L15.6444 19.0717C16.8493 18.1023 17.6803 16.6123 17.8543 14.9097H14.9327C14.8121 15.4565 14.547 15.9431 14.184 16.3182ZM14.848 8.23743H12.6582C12.6092 8.23743 12.5616 8.23119 12.516 8.21945C12.4704 8.23119 12.4228 8.23743 12.3738 8.23743C11.5886 8.23743 10.8412 8.41684 10.1644 8.74001L11.625 11.4938C11.8622 11.4171 12.1132 11.3759 12.373 11.3759C12.6326 11.3759 12.8837 11.4171 13.1208 11.4938L14.848 8.23743Z"
                fill="black"
              />
            </svg>
            <span>450 hp</span>
          </div>
        </div>
        <div className={styles.carStatsRight}>
          <span className={styles.carPrice}>$250</span>
          <span>/day</span>
        </div>
      </div>
      <Link href="/">BOOK NOW</Link>
    </div>
  );
};
export default Raptor;
