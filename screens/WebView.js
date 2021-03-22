import * as React from "react";
import { WebView } from "react-native-webview";

const WebViewScreen = () => {
    return <WebView source={{ uri: "http://www.oncloud.tech/" }} />;
}

export default WebViewScreen;