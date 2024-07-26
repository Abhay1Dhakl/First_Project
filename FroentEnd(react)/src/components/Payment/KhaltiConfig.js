import KhaltiCheckout from "khalti-checkout-web";
import axios from 'axios';
import myKey from "./KhaltiKey";
let config = {
  // replace this key with yours
  publicKey: myKey.publicTestKey,
  productIdentity: "1234567890",
  productName: "Tourism packages",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: {
          Authorization: myKey.secretKey,
        },
      };

      axios
        .post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(payload);
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
