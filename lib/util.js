export function bytesToSize(bytes) {
  if ( bytes === 0 ) return '0 B'
  var k = 1024, // or 1000
      sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k))

  return (bytes / Math.pow(k, i)).toFixed(1) + ' ' + sizes[i]
}

export function getCommonBrowersInfo() {
  var _maq = _maq || []
  _maq.push(['_setAccount', 'uuid'])
  var params = {}
    //Document对象数据
    if (document) {
        params.domain = document.domain || '' //获取域名
        params.url = document.URL || ''       //当前Url地址
        params.title = document.title || ''
        params.referrer = document.referrer || ''  //上一跳路径
    }
    //Window对象数据
    if (window) {
        if(window.screen){
            params.sh = window.screen.height || 0    //获取显示屏信息
            params.sw = window.screen.width || 0
            params.cd = window.screen.colorDepth || 0
        }
        if(window.performance){
            const loadTime =  window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
            params.loadTime = `${(loadTime / 1000).toFixed(2)} 秒`
            params.jsHeapSizeLimit = `${bytesToSize(window.performance.memory.jsHeapSizeLimit)} 使用了${bytesToSize(window.performance.memory.usedJSHeapSize)}`
        }
    }
    //navigator对象数据
    if (navigator) {
        params.lang = navigator.language || ''    //获取所用语言种类
    }
    //解析_maq配置
    if (_maq) {
        for (var i in _maq) {                      //获取埋点阶段，传递过来的用户行为
            switch (_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1]
                    break
                default:
                    break
            }
        }
    }
    return params
}