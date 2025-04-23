function FindProxyForURL(url, host) {
  // 设定你本地代理的地址和端口，假设你正在本地运行 Trojan 客户端，监听在 10808 端口
  var proxy = "SOCKS5 127.0.0.1:10808";  // 替换为你本地代理的实际端口
  
  // 所有请求都走代理
  return proxy;
}
