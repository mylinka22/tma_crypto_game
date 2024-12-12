import './App.scss'
import {THEME, TonConnectUIProvider} from "@tonconnect/ui-react";
import {Header} from "./components/Header/Header";
import {TxForm} from "./components/TxForm/TxForm";
import {Footer} from "./components/Footer/Footer";
import {TonProofDemo} from "./components/TonProofDemo/TonProofDemo";
import {CreateJettonDemo} from "./components/CreateJettonDemo/CreateJettonDemo";

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://ton-connect.github.io/demo-dapp-with-react-ui/tonconnect-manifest.json"
          uiPreferences={{ theme: THEME.DARK }}
          walletsListConfiguration={{
            includeWallets: [
              {
                appName: "telegram-wallet",
                name: "Wallet",
                imageUrl: "https://wallet.tg/images/logo-288.png",
                aboutUrl: "https://wallet.tg/",
                universalLink: "https://t.me/wallet?attach=wallet",
                bridgeUrl: "https://bridge.ton.space/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "tonwallet",
                name: "TON Wallet",
                imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                universalLink: "https://wallet.ton.org/ton-connect",
                jsBridgeKey: "tonwallet",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                platforms: ["chrome", "android"]
              },
              {
                appName: "nicegramWallet",
                name: "Nicegram Wallet",
                imageUrl: "https://static.nicegram.app/icon.png",
                aboutUrl: "https://nicegram.app",
                universalLink: "https://nicegram.app/tc",
                deepLink: "nicegram-tc://",
                jsBridgeKey: "nicegramWallet",
                bridgeUrl: "https://tc.nicegram.app/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "tokenpocket",
                name: "TokenPocket",
                imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
                aboutUrl: "https://www.tokenpocket.pro",
                universalLink: "https://tp-lab.tptool.pro/ton-connect/",
                jsBridgeKey: "tokenpocket",
                bridgeUrl: "https://ton-connect.mytokenpocket.vip/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "dewallet",
                name: "DeWallet",
                imageUrl: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
                aboutUrl: "https://delabwallet.com",
                universalLink: "https://t.me/dewallet?attach=wallet",
                bridgeUrl: "https://bridge.dewallet.pro/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "cdcTonWallet",
                name: "Crypto.com DeFi Wallet",
                imageUrl: "https://apro-ncw-api-file.crypto.com/wallet/logo",
                aboutUrl: "https://crypto.com/defi-wallet",
                universalLink: "https://wallet.crypto.com/deeplink/ton-connect",
                deepLink: "dfw://",
                jsBridgeKey: "cdcTonWallet",
                bridgeUrl: "https://wallet.crypto.com/sse/tonbridge",
                platforms: ["ios", "android", "chrome"]
              },
              {
                appName: "tobi",
                name: "Tobi",
                imageUrl: "https://app.tobiwallet.app/icons/logo.png",
                aboutUrl: "https://tobi.fun",
                universalLink: "https://t.me/TobiCopilotBot?attach=wallet",
                bridgeUrl: "https://ton-bridge.tobiwallet.app/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "trustwalletTon",
                name: "Trust",
                imageUrl: "https://assets-cdn.trustwallet.com/dapps/trust.logo.png",
                aboutUrl: "https://trustwallet.com/about-us",
                bridgeUrl: "https://tonconnect.trustwallet.com/bridge",
                jsBridgeKey: "trustwalletTon",
                platforms: ["chrome", "ios", "android"]
              },
              {
                appName: "bitgetWalletLite",
                name: "Bitget Wallet Lite",
                imageUrl: "https://raw.githubusercontent.com/bitgetwallet/download/main/logo/png/bitget_wallet_lite_logo.png",
                aboutUrl: "https://web3.bitget.com",
                universalLink: "https://t.me/BitgetWallet_TGBot?attach=wallet",
                bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "onekey",
                name: "OneKey",
                imageUrl: "https://common.onekey-asset.com/logo/onekey-x288.png",
                aboutUrl: "https://onekey.so",
                jsBridgeKey: "onekeyTonWallet",
                platforms: ["chrome"]
              },
              {
                appName: "tomoWallet",
                name: "Tomo Wallet",
                imageUrl: "https://pub.tomo.inc/logo.png",
                aboutUrl: "https://www.tomo.inc/",
                universalLink: "https://t.me/tomowalletbot?attach=wallet",
                bridgeUrl: "https://go-bridge.tomo.inc/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "hpyTonWallet",
                name: "HyperPay Wallet",
                imageUrl: "https://onchain-oss.hyperpay.online/images/logo.png",
                aboutUrl: "https://www.hyperpay.tech",
                universalLink: "https://www.hyperpay.tech/download&deeplink=hyperpay://web3/wallet/tonconnect",
                jsBridgeKey: "hpyTonWallet",
                bridgeUrl: "https://onchain-wallet.hyperpay.online/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: "unstoppable",
                name: "Unstoppable Wallet",
                imageUrl: "https://unstoppable.money/logo288.png",
                aboutUrl: "https://unstoppable.money/",
                universalLink: "https://unstoppable.money/ton-connect",
                bridgeUrl: "https://bridge.unstoppable.money/bridge",
                platforms: ["ios", "android", "macos", "windows", "linux"]
              },
              {
                appName: 'foxwallet',
                name: 'FoxWallet',
                imageUrl: 'https://hc.foxwallet.com/img/logo.png',
                aboutUrl: 'https://foxwallet.com/',
                jsBridgeKey: 'foxwallet',
                platforms: ['ios', 'android', 'macos', 'windows', 'linux']
              },
              {
                appName: "jambo",
                name: "Jambo",
                imageUrl: "https://cdn-prod.jambotechnology.xyz/content/jambo_288x288_02da416a6c.png",
                aboutUrl: "https://www.jambo.technology/",
                deepLink: "jambotc://",
                universalLink: "https://jambophone.xyz/",
                bridgeUrl: "https://bridge.tonapi.io/bridge",
                jsBridgeKey: "jambowallet",
                platforms: ['android', 'macos', 'windows', 'linux']
              }
            ]
          }}
          actionsConfiguration={{
              twaReturnUrl: 'https://t.me/DemoDappWithTonConnectBot/demo'
          }}
      >
        <div className="app">
            <Header />
            {/*<TxForm />*/}
            {/*<CreateJettonDemo />*/}
            {/*<TonProofDemo />*/}
            {/*<Footer />*/}
        </div>
      </TonConnectUIProvider>
  )
}

export default App
