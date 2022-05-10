import store from "./store";

window.onload = function () {
    if (typeof window.aleereum !== "undefined") {
        const provider = window["aleereum"];

        if (provider.isAle) {
            store.commit("IS_ALE", true); // is ale wallet connected?
            store.commit("M_SET_DAPP_ACCOUNT", provider.account); // what account is connected?
            store.commit("M_SET_DAPP_CONNECT", provider.isConnected); // what is the current ale wallet account connected?
            store.commit("M_SET_DAPP_NETWORK", provider.networkId); // what network is ale wallet connected to?
            store.commit("IS_ALE_ENABLED", !provider.islocked);

        } else {
            store.commit("HAS_ALE", false);
        }
    } else {
        store.commit("IS_ALE", false);
    }
};
