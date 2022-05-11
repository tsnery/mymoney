import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Svg, { Path } from 'react-native-svg'

export function Logo() {
  return (
    <Svg width={RFValue(120)} height={RFValue(69)} viewBox="0 0 120 69" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M68.7768 12.0197C68.8967 12.1901 68.9998 12.3737 69.0839 12.5686C74.0438 13.9067 77.6952 18.3349 77.6952 23.5771C77.6952 29.8757 72.4243 35 65.9455 35C62.563 35 59.5104 33.6028 57.3646 31.3715H49.2193C47.4662 31.3715 46.04 29.9849 46.04 28.2806C46.04 27.3018 46.5109 26.4283 47.2436 25.8616C46.5109 25.2949 46.04 24.4215 46.04 23.4426C46.04 22.4638 46.5109 21.5904 47.2436 21.0237C46.5109 20.457 46.04 19.5835 46.04 18.6047C46.04 17.6259 46.5109 16.7525 47.2436 16.1857C46.5109 15.619 46.04 14.7456 46.04 13.7668C46.04 12.0625 47.4662 10.6759 49.2193 10.6759H51.0218C50.6699 10.1785 50.4634 9.57679 50.4634 8.92884C50.4634 8.28089 50.67 7.67917 51.0218 7.18181H45.487C43.734 7.18181 42.3077 5.7952 42.3077 4.0909C42.3077 2.38661 43.734 1 45.487 1H62.4205C64.1735 1 65.5998 2.38661 65.5998 4.0909C65.5998 4.73885 65.3932 5.34057 65.0413 5.83794H70.5762C72.3292 5.83794 73.7555 7.22454 73.7555 8.92884C73.7555 10.6331 72.3292 12.0197 70.5762 12.0197H68.7768ZM72.3732 8.92884C72.3732 7.96555 71.5671 7.18181 70.5762 7.18181H53.6427C52.6518 7.18181 51.8457 7.96555 51.8457 8.92884C51.8457 9.89213 52.6518 10.6759 53.6427 10.6759H66.1527H70.5762C71.5671 10.6759 72.3732 9.89213 72.3732 8.92884ZM43.69 4.0909C43.69 5.05419 44.4961 5.83794 45.487 5.83794H62.4205C63.4114 5.83794 64.2175 5.05419 64.2175 4.0909C64.2175 3.12762 63.4114 2.34387 62.4205 2.34387H45.487C44.4961 2.34387 43.69 3.12762 43.69 4.0909ZM66.1527 12.0197H49.2193C48.2285 12.0197 47.4223 12.8035 47.4223 13.7668C47.4223 14.7301 48.2285 15.5138 49.2193 15.5138H57.6309C59.7592 13.4395 62.7008 12.1542 65.9455 12.1542C66.2794 12.1542 66.6099 12.1686 66.9369 12.1953C66.6977 12.0826 66.4311 12.0197 66.1527 12.0197ZM56.4499 16.8577H49.2193C48.2284 16.8577 47.4223 17.6414 47.4223 18.6047C47.4223 19.5681 48.2284 20.3517 49.2193 20.3517H54.6734C55.0586 19.0814 55.6653 17.9027 56.4499 16.8577ZM54.356 21.6956H49.2193C48.2284 21.6956 47.4223 22.4793 47.4223 23.4426C47.4223 24.406 48.2284 25.1897 49.2193 25.1897H54.3134C54.2364 24.6627 54.1957 24.1245 54.1957 23.5771C54.1957 22.9363 54.2512 22.3079 54.356 21.6956ZM47.4223 28.2806C47.4223 29.2439 48.2284 30.0276 49.2193 30.0276H56.2539C55.5109 28.9758 54.9443 27.7977 54.5956 26.5335H49.2193C48.2284 26.5335 47.4223 27.3172 47.4223 28.2806ZM55.578 23.5771C55.578 29.1347 60.2289 33.6561 65.9455 33.6561C71.662 33.6561 76.3129 29.1347 76.3129 23.5771C76.3129 18.0195 71.662 13.4981 65.9455 13.4981C60.2289 13.4981 55.578 18.0195 55.578 23.5771ZM64.1824 21.2802C64.1824 22.0967 64.9718 22.7609 65.9421 22.7609C67.7945 22.7609 69.3016 24.1228 69.3016 25.7969C69.3016 27.2219 68.2094 28.42 66.742 28.7452V29.0811C66.742 29.5105 66.3838 29.8588 65.9421 29.8588C65.5005 29.8588 65.1423 29.5105 65.1423 29.0811V28.7452C63.6748 28.42 62.5827 27.2219 62.5827 25.7969C62.5827 25.3675 62.9409 25.0193 63.3826 25.0193C63.8243 25.0193 64.1824 25.3675 64.1824 25.7969C64.1824 26.6134 64.9718 27.2776 65.9421 27.2776C66.9125 27.2776 67.7018 26.6134 67.7018 25.7969C67.7018 24.9804 66.9125 24.3161 65.9421 24.3161C64.0897 24.3161 62.5827 22.9542 62.5827 21.2802C62.5827 19.8553 63.6748 18.6571 65.1423 18.3319V17.9275C65.1423 17.4981 65.5005 17.1499 65.9421 17.1499C66.3838 17.1499 66.742 17.4981 66.742 17.9275V18.3319C68.2094 18.6571 69.3016 19.8553 69.3016 21.2802C69.3016 21.7096 68.9434 22.0579 68.5017 22.0579C68.06 22.0579 67.7018 21.7096 67.7018 21.2802C67.7018 20.4637 66.9125 19.7995 65.9421 19.7995C64.9718 19.7995 64.1824 20.4637 64.1824 21.2802Z" fill="#FF872C" />
      <Path d="M69.0839 12.5686L68.8543 12.6677L68.9022 12.7785L69.0188 12.8099L69.0839 12.5686ZM68.7768 12.0197V11.7697H68.2951L68.5724 12.1637L68.7768 12.0197ZM57.3646 31.3715L57.5448 31.1982L57.4711 31.1215H57.3646V31.3715ZM47.2436 25.8616L47.3966 26.0594L47.6522 25.8616L47.3966 25.6639L47.2436 25.8616ZM47.2436 21.0237L47.3966 21.2214L47.6522 21.0237L47.3966 20.8259L47.2436 21.0237ZM47.2436 16.1857L47.3966 16.3835L47.6522 16.1857L47.3966 15.988L47.2436 16.1857ZM51.0218 10.6759V10.9259H51.505L51.2259 10.5315L51.0218 10.6759ZM51.0218 7.18181L51.2259 7.32619L51.5049 6.93181H51.0218V7.18181ZM65.0413 5.83794L64.8373 5.69355L64.5582 6.08794H65.0413V5.83794ZM57.6309 15.5138V15.7638H57.7325L57.8053 15.6928L57.6309 15.5138ZM66.9369 12.1953L66.9165 12.4444L67.0434 11.9691L66.9369 12.1953ZM56.4499 16.8577L56.6498 17.0078L56.9502 16.6077H56.4499V16.8577ZM54.6734 20.3517V20.6017H54.8588L54.9126 20.4243L54.6734 20.3517ZM54.356 21.6956L54.6024 21.7378L54.6524 21.4456H54.356V21.6956ZM54.3134 25.1897V25.4397H54.6025L54.5607 25.1536L54.3134 25.1897ZM56.2539 30.0276V30.2776H56.7365L56.4581 29.8834L56.2539 30.0276ZM54.5956 26.5335L54.8366 26.4671L54.7859 26.2835H54.5956V26.5335ZM66.742 28.7452L66.6879 28.5011L66.492 28.5445V28.7452H66.742ZM65.1423 28.7452H65.3923V28.5445L65.1964 28.5011L65.1423 28.7452ZM65.1423 18.3319L65.1964 18.576L65.3923 18.5326V18.3319H65.1423ZM66.742 18.3319H66.492V18.5326L66.6879 18.576L66.742 18.3319ZM69.3134 12.4695C69.2225 12.2589 69.111 12.0602 68.9812 11.8758L68.5724 12.1637C68.6824 12.3199 68.777 12.4886 68.8543 12.6677L69.3134 12.4695ZM77.9452 23.5771C77.9452 18.2145 74.2107 13.6928 69.149 12.3272L69.0188 12.8099C73.8768 14.1206 77.4452 18.4552 77.4452 23.5771H77.9452ZM65.9455 35.25C72.5556 35.25 77.9452 30.0204 77.9452 23.5771H77.4452C77.4452 29.731 72.2929 34.75 65.9455 34.75V35.25ZM57.1844 31.5448C59.376 33.8237 62.4931 35.25 65.9455 35.25V34.75C62.6329 34.75 59.6448 33.3819 57.5448 31.1982L57.1844 31.5448ZM49.2193 31.6215H57.3646V31.1215H49.2193V31.6215ZM45.79 28.2806C45.79 30.1295 47.3349 31.6215 49.2193 31.6215V31.1215C47.5976 31.1215 46.29 29.8402 46.29 28.2806H45.79ZM47.0907 25.6639C46.301 26.2746 45.79 27.2192 45.79 28.2806H46.29C46.29 27.3844 46.7208 26.582 47.3966 26.0594L47.0907 25.6639ZM45.79 23.4426C45.79 24.5041 46.301 25.4486 47.0907 26.0594L47.3966 25.6639C46.7208 25.1412 46.29 24.3388 46.29 23.4426H45.79ZM47.0907 20.8259C46.301 21.4367 45.79 22.3812 45.79 23.4426H46.29C46.29 22.5465 46.7208 21.7441 47.3966 21.2214L47.0907 20.8259ZM45.79 18.6047C45.79 19.6661 46.301 20.6107 47.0907 21.2214L47.3966 20.8259C46.7208 20.3033 46.29 19.5009 46.29 18.6047H45.79ZM47.0907 15.988C46.301 16.5987 45.79 17.5433 45.79 18.6047H46.29C46.29 17.7085 46.7208 16.9062 47.3966 16.3835L47.0907 15.988ZM45.79 13.7668C45.79 14.8282 46.301 15.7727 47.0907 16.3835L47.3966 15.988C46.7208 15.4653 46.29 14.663 46.29 13.7668H45.79ZM49.2193 10.4259C47.3349 10.4259 45.79 11.9178 45.79 13.7668H46.29C46.29 12.2071 47.5976 10.9259 49.2193 10.9259V10.4259ZM51.0218 10.4259H49.2193V10.9259H51.0218V10.4259ZM50.2134 8.92884C50.2134 9.63092 50.4374 10.2827 50.8178 10.8203L51.2259 10.5315C50.9024 10.0743 50.7134 9.52265 50.7134 8.92884H50.2134ZM50.8178 7.03742C50.4375 7.57498 50.2134 8.22674 50.2134 8.92884H50.7134C50.7134 8.33504 50.9025 7.78337 51.2259 7.32619L50.8178 7.03742ZM45.487 7.43181H51.0218V6.93181H45.487V7.43181ZM42.0577 4.0909C42.0577 5.93987 43.6026 7.43181 45.487 7.43181V6.93181C43.8653 6.93181 42.5577 5.65053 42.5577 4.0909H42.0577ZM45.487 0.75C43.6026 0.75 42.0577 2.24193 42.0577 4.0909H42.5577C42.5577 2.53128 43.8653 1.25 45.487 1.25V0.75ZM62.4205 0.75H45.487V1.25H62.4205V0.75ZM65.8498 4.0909C65.8498 2.24193 64.3049 0.75 62.4205 0.75V1.25C64.0421 1.25 65.3498 2.53128 65.3498 4.0909H65.8498ZM65.2454 5.98232C65.6257 5.44476 65.8498 4.793 65.8498 4.0909H65.3498C65.3498 4.6847 65.1607 5.23637 64.8373 5.69355L65.2454 5.98232ZM70.5762 5.58794H65.0413V6.08794H70.5762V5.58794ZM74.0055 8.92884C74.0055 7.07987 72.4606 5.58794 70.5762 5.58794V6.08794C72.1978 6.08794 73.5055 7.36921 73.5055 8.92884H74.0055ZM70.5762 12.2697C72.4606 12.2697 74.0055 10.7778 74.0055 8.92884H73.5055C73.5055 10.4885 72.1978 11.7697 70.5762 11.7697V12.2697ZM68.7768 12.2697H70.5762V11.7697H68.7768V12.2697ZM70.5762 7.43181C71.4357 7.43181 72.1232 8.11022 72.1232 8.92884H72.6232C72.6232 7.82089 71.6985 6.93181 70.5762 6.93181V7.43181ZM53.6427 7.43181H70.5762V6.93181H53.6427V7.43181ZM52.0957 8.92884C52.0957 8.11022 52.7832 7.43181 53.6427 7.43181V6.93181C52.5204 6.93181 51.5957 7.82089 51.5957 8.92884H52.0957ZM53.6427 10.4259C52.7832 10.4259 52.0957 9.74746 52.0957 8.92884H51.5957C51.5957 10.0368 52.5204 10.9259 53.6427 10.9259V10.4259ZM66.1527 10.4259H53.6427V10.9259H66.1527V10.4259ZM70.5762 10.4259H66.1527V10.9259H70.5762V10.4259ZM72.1232 8.92884C72.1232 9.74746 71.4357 10.4259 70.5762 10.4259V10.9259C71.6985 10.9259 72.6232 10.0368 72.6232 8.92884H72.1232ZM45.487 5.58794C44.6275 5.58794 43.94 4.90952 43.94 4.0909H43.44C43.44 5.19886 44.3647 6.08794 45.487 6.08794V5.58794ZM62.4205 5.58794H45.487V6.08794H62.4205V5.58794ZM63.9675 4.0909C63.9675 4.90952 63.28 5.58794 62.4205 5.58794V6.08794C63.5428 6.08794 64.4675 5.19886 64.4675 4.0909H63.9675ZM62.4205 2.59387C63.28 2.59387 63.9675 3.27228 63.9675 4.0909H64.4675C64.4675 2.98295 63.5428 2.09387 62.4205 2.09387V2.59387ZM45.487 2.59387H62.4205V2.09387H45.487V2.59387ZM43.94 4.0909C43.94 3.27228 44.6275 2.59387 45.487 2.59387V2.09387C44.3647 2.09387 43.44 2.98295 43.44 4.0909H43.94ZM49.2193 12.2697H66.1527V11.7697H49.2193V12.2697ZM47.6723 13.7668C47.6723 12.9482 48.3598 12.2697 49.2193 12.2697V11.7697C48.0971 11.7697 47.1723 12.6588 47.1723 13.7668H47.6723ZM49.2193 15.2638C48.3598 15.2638 47.6723 14.5854 47.6723 13.7668H47.1723C47.1723 14.8747 48.0971 15.7638 49.2193 15.7638V15.2638ZM57.6309 15.2638H49.2193V15.7638H57.6309V15.2638ZM65.9455 11.9042C62.6338 11.9042 59.6301 13.2163 57.4564 15.3348L57.8053 15.6928C59.8883 13.6628 62.7678 12.4042 65.9455 12.4042V11.9042ZM66.9572 11.9461C66.6239 11.9189 66.2866 11.9042 65.9455 11.9042V12.4042C66.2722 12.4042 66.596 12.4183 66.9165 12.4444L66.9572 11.9461ZM66.1527 12.2697C66.3933 12.2697 66.6236 12.3241 66.8303 12.4214L67.0434 11.9691C66.7719 11.8412 66.469 11.7697 66.1527 11.7697V12.2697ZM49.2193 17.1077H56.4499V16.6077H49.2193V17.1077ZM47.6723 18.6047C47.6723 17.7861 48.3598 17.1077 49.2193 17.1077V16.6077C48.097 16.6077 47.1723 17.4968 47.1723 18.6047H47.6723ZM49.2193 20.1017C48.3598 20.1017 47.6723 19.4234 47.6723 18.6047H47.1723C47.1723 19.7127 48.097 20.6017 49.2193 20.6017V20.1017ZM54.6734 20.1017H49.2193V20.6017H54.6734V20.1017ZM56.2499 16.7076C55.4483 17.7753 54.8281 18.9802 54.4341 20.2792L54.9126 20.4243C55.2892 19.1827 55.8822 18.0301 56.6498 17.0078L56.2499 16.7076ZM49.2193 21.9456H54.356V21.4456H49.2193V21.9456ZM47.6723 23.4426C47.6723 22.624 48.3598 21.9456 49.2193 21.9456V21.4456C48.097 21.4456 47.1723 22.3346 47.1723 23.4426H47.6723ZM49.2193 24.9397C48.3598 24.9397 47.6723 24.2613 47.6723 23.4426H47.1723C47.1723 24.5507 48.097 25.4397 49.2193 25.4397V24.9397ZM54.3134 24.9397H49.2193V25.4397H54.3134V24.9397ZM53.9457 23.5771C53.9457 24.1369 53.9874 24.6872 54.066 25.2258L54.5607 25.1536C54.4855 24.6382 54.4457 24.112 54.4457 23.5771H53.9457ZM54.1096 21.6534C54.0024 22.2794 53.9457 22.9218 53.9457 23.5771H54.4457C54.4457 22.9507 54.4999 22.3365 54.6024 21.7378L54.1096 21.6534ZM49.2193 29.7776C48.3598 29.7776 47.6723 29.0993 47.6723 28.2806H47.1723C47.1723 29.3886 48.097 30.2776 49.2193 30.2776V29.7776ZM56.2539 29.7776H49.2193V30.2776H56.2539V29.7776ZM54.3546 26.6C54.7112 27.8927 55.2905 29.0971 56.0497 30.1718L56.4581 29.8834C55.7313 28.8545 55.1774 27.7026 54.8366 26.4671L54.3546 26.6ZM49.2193 26.7835H54.5956V26.2835H49.2193V26.7835ZM47.6723 28.2806C47.6723 27.4619 48.3598 26.7835 49.2193 26.7835V26.2835C48.097 26.2835 47.1723 27.1726 47.1723 28.2806H47.6723ZM65.9455 33.4061C60.3602 33.4061 55.828 28.99 55.828 23.5771H55.328C55.328 29.2794 60.0975 33.9061 65.9455 33.9061V33.4061ZM76.0629 23.5771C76.0629 28.99 71.5307 33.4061 65.9455 33.4061V33.9061C71.7934 33.9061 76.5629 29.2794 76.5629 23.5771H76.0629ZM65.9455 13.7481C71.5307 13.7481 76.0629 18.1642 76.0629 23.5771H76.5629C76.5629 17.8748 71.7934 13.2481 65.9455 13.2481V13.7481ZM55.828 23.5771C55.828 18.1642 60.3602 13.7481 65.9455 13.7481V13.2481C60.0975 13.2481 55.328 17.8748 55.328 23.5771H55.828ZM65.9421 22.5109C65.0677 22.5109 64.4324 21.9199 64.4324 21.2802H63.9324C63.9324 22.2734 64.8759 23.0109 65.9421 23.0109V22.5109ZM69.5516 25.7969C69.5516 23.9615 67.9082 22.5109 65.9421 22.5109V23.0109C67.6809 23.0109 69.0516 24.2841 69.0516 25.7969H69.5516ZM66.7961 28.9893C68.3584 28.6431 69.5516 27.358 69.5516 25.7969H69.0516C69.0516 27.0857 68.0605 28.197 66.6879 28.5011L66.7961 28.9893ZM66.992 29.0811V28.7452H66.492V29.0811H66.992ZM65.9421 30.1088C66.5152 30.1088 66.992 29.6552 66.992 29.0811H66.492C66.492 29.3659 66.2524 29.6088 65.9421 29.6088V30.1088ZM64.8923 29.0811C64.8923 29.6552 65.3691 30.1088 65.9421 30.1088V29.6088C65.6318 29.6088 65.3923 29.3659 65.3923 29.0811H64.8923ZM64.8923 28.7452V29.0811H65.3923V28.7452H64.8923ZM62.3327 25.7969C62.3327 27.358 63.5259 28.6431 65.0882 28.9893L65.1964 28.5011C63.8238 28.197 62.8327 27.0857 62.8327 25.7969H62.3327ZM63.3826 24.7693C62.8095 24.7693 62.3327 25.2228 62.3327 25.7969H62.8327C62.8327 25.5121 63.0723 25.2693 63.3826 25.2693V24.7693ZM64.4324 25.7969C64.4324 25.2228 63.9556 24.7693 63.3826 24.7693V25.2693C63.6929 25.2693 63.9324 25.5121 63.9324 25.7969H64.4324ZM65.9421 27.0276C65.0677 27.0276 64.4324 26.4366 64.4324 25.7969H63.9324C63.9324 26.7901 64.8759 27.5276 65.9421 27.5276V27.0276ZM67.4518 25.7969C67.4518 26.4366 66.8166 27.0276 65.9421 27.0276V27.5276C67.0084 27.5276 67.9518 26.7901 67.9518 25.7969H67.4518ZM65.9421 24.5661C66.8166 24.5661 67.4518 25.1571 67.4518 25.7969H67.9518C67.9518 24.8036 67.0084 24.0661 65.9421 24.0661V24.5661ZM62.3327 21.2802C62.3327 23.1155 63.9761 24.5661 65.9421 24.5661V24.0661C64.2034 24.0661 62.8327 22.7929 62.8327 21.2802H62.3327ZM65.0882 18.0878C63.5259 18.4341 62.3327 19.7191 62.3327 21.2802H62.8327C62.8327 19.9915 63.8238 18.8802 65.1964 18.576L65.0882 18.0878ZM64.8923 17.9275V18.3319H65.3923V17.9275H64.8923ZM65.9421 16.8999C65.3691 16.8999 64.8923 17.3534 64.8923 17.9275H65.3923C65.3923 17.6427 65.6318 17.3999 65.9421 17.3999V16.8999ZM66.992 17.9275C66.992 17.3534 66.5152 16.8999 65.9421 16.8999V17.3999C66.2524 17.3999 66.492 17.6427 66.492 17.9275H66.992ZM66.992 18.3319V17.9275H66.492V18.3319H66.992ZM69.5516 21.2802C69.5516 19.7191 68.3584 18.4341 66.7961 18.0878L66.6879 18.576C68.0605 18.8802 69.0516 19.9915 69.0516 21.2802H69.5516ZM68.5017 22.3079C69.0748 22.3079 69.5516 21.8543 69.5516 21.2802H69.0516C69.0516 21.565 68.812 21.8079 68.5017 21.8079V22.3079ZM67.4518 21.2802C67.4518 21.8543 67.9286 22.3079 68.5017 22.3079V21.8079C68.1914 21.8079 67.9518 21.565 67.9518 21.2802H67.4518ZM65.9421 20.0495C66.8166 20.0495 67.4518 20.6405 67.4518 21.2802H67.9518C67.9518 20.287 67.0084 19.5495 65.9421 19.5495V20.0495ZM64.4324 21.2802C64.4324 20.6405 65.0677 20.0495 65.9421 20.0495V19.5495C64.8759 19.5495 63.9324 20.287 63.9324 21.2802H64.4324Z" fill="#FF872C" />
      <Path d="M0 57.6626C0 61.1925 2.42671 63.5804 5.58357 63.5804C7.7311 63.5804 9.25584 62.4799 9.96452 61.2548V63.6427C9.96452 66.0721 8.39683 67.3595 6.31373 67.3595C4.38095 67.3595 2.98506 66.4251 2.55556 65.0547H0.622783C1.00934 67.4841 3.22129 68.9999 6.31373 68.9999C9.77125 68.9999 11.9402 66.7781 11.9402 63.6427V52.0147H9.96452V54.0912C9.27731 52.8661 7.7311 51.8279 5.58357 51.8279C2.42671 51.8279 0 54.1119 0 57.6626ZM9.96452 57.6834C9.96452 60.362 8.11765 61.9193 5.97012 61.9193C3.8226 61.9193 1.9972 60.3412 1.9972 57.6626C1.9972 54.984 3.8226 53.4682 5.97012 53.4682C8.11765 53.4682 9.96452 55.0463 9.96452 57.6834Z" fill="white" />
      <Path d="M26.4099 57.6834C26.4099 54.0912 23.8114 51.8279 20.4612 51.8279C17.1326 51.8279 14.5126 54.0912 14.5126 57.6834C14.5126 61.2964 17.0467 63.5804 20.3753 63.5804C23.7255 63.5804 26.4099 61.2964 26.4099 57.6834ZM16.5098 57.6834C16.5098 54.8179 18.3781 53.4682 20.4398 53.4682C22.4584 53.4682 24.4127 54.8179 24.4127 57.6834C24.4127 60.5696 22.4155 61.9193 20.3753 61.9193C18.3352 61.9193 16.5098 60.5696 16.5098 57.6834Z" fill="white" />
      <Path d="M30.1032 63.3937H32.5729V53.8837H34.7634V51.9526H32.5729V51.1428C32.5729 49.8346 33.0883 49.3363 34.5916 49.3363V47.3637C31.4991 47.3637 30.1032 48.5057 30.1032 51.1428V51.9526H28.7073V53.8837H30.1032V63.3937Z" fill="white" />
      <Path d="M36.933 63.3937H39.3812V51.9526H36.933V63.3937ZM38.1786 50.4368C39.0376 50.4368 39.7248 49.7723 39.7248 48.921C39.7248 48.0697 39.0376 47.4052 38.1786 47.4052C37.2981 47.4052 36.6109 48.0697 36.6109 48.921C36.6109 49.7723 37.2981 50.4368 38.1786 50.4368Z" fill="white" />
      <Path d="M50.9923 63.3937H53.419V56.6453C53.419 53.4476 51.3359 51.7657 48.5656 51.7657C47.1482 51.7657 45.8382 52.3264 45.0436 53.2607V51.9526H42.5955V63.3937H45.0436V56.9983C45.0436 54.9011 46.2248 53.8214 48.0287 53.8214C49.8111 53.8214 50.9923 54.9011 50.9923 56.9983V63.3937Z" fill="white" />
      <Path d="M55.7257 57.6212C55.7257 61.1512 58.1954 63.5806 61.2663 63.5806C63.2421 63.5806 64.6594 62.667 65.4111 61.691V63.3937H67.8807V51.9526H65.4111V53.6137C64.6809 52.6793 63.3065 51.7657 61.3093 51.7657C58.1954 51.7657 55.7257 54.0913 55.7257 57.6212ZM65.4111 57.6628C65.4111 60.1337 63.6716 61.5249 61.8247 61.5249C59.9993 61.5249 58.2383 60.0922 58.2383 57.6212C58.2383 55.1503 59.9993 53.8214 61.8247 53.8214C63.6716 53.8214 65.4111 55.2126 65.4111 57.6628Z" fill="white" />
      <Path d="M79.4931 63.3937H81.9198V56.6453C81.9198 53.4476 79.8367 51.7657 77.0664 51.7657C75.6491 51.7657 74.3391 52.3264 73.5445 53.2607V51.9526H71.0963V63.3937H73.5445V56.9983C73.5445 54.9011 74.7256 53.8214 76.5296 53.8214C78.312 53.8214 79.4931 54.9011 79.4931 56.9983V63.3937Z" fill="white" />
      <Path d="M84.2266 57.6628C84.2266 61.255 86.6318 63.5806 90.0249 63.5806C92.9241 63.5806 94.8139 62.0233 95.4796 59.7807H92.8382C92.3872 60.9643 91.4852 61.5872 90.0249 61.5872C88.0492 61.5872 86.7392 60.1752 86.7392 57.6628C86.7392 55.1711 88.0492 53.7591 90.0249 53.7591C91.4852 53.7591 92.4301 54.4651 92.8382 55.5656H95.4796C94.8139 53.1569 92.9241 51.7657 90.0249 51.7657C86.6318 51.7657 84.2266 54.0913 84.2266 57.6628Z" fill="white" />
      <Path d="M102.902 53.7591C104.727 53.7591 106.166 54.8804 106.209 56.6453H99.6589C99.9166 54.8388 101.248 53.7591 102.902 53.7591ZM108.442 59.9884H105.801C105.35 60.8812 104.512 61.5872 103.009 61.5872C101.205 61.5872 99.8092 60.4452 99.6374 58.5556H108.679C108.743 58.1611 108.764 57.7874 108.764 57.3928C108.764 54.029 106.381 51.7657 103.009 51.7657C99.5086 51.7657 97.1034 54.0705 97.1034 57.6628C97.1034 61.255 99.616 63.5806 103.009 63.5806C105.908 63.5806 107.777 61.9817 108.442 59.9884Z" fill="white" />
      <Path d="M120 60.196C119.871 56.0639 113.192 57.3513 113.192 55.0465C113.192 54.2782 113.88 53.7591 115.19 53.7591C116.521 53.7591 117.316 54.4443 117.401 55.441H119.85C119.721 53.1569 117.96 51.7657 115.275 51.7657C112.484 51.7657 110.723 53.24 110.723 55.0672C110.723 59.2616 117.595 57.9742 117.595 60.2168C117.595 61.0058 116.843 61.5872 115.426 61.5872C114.073 61.5872 113.149 60.8189 113.063 59.8845H110.529C110.637 61.961 112.634 63.5806 115.469 63.5806C118.261 63.5806 120 62.1271 120 60.196Z" fill="white" />
    </Svg>
  )
}