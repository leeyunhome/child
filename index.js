/* Javascript 샘플 코드 */


var xhr = new XMLHttpRequest();
var url = 'http://api.data.go.kr/openapi/child-prtc-zn-std'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+'7oOUqZC7uBlZ1HxFsJgqo6h0ULNXz5ubAiI9NEB4WLQbAZvi2hYe%2FezKMM3JetUZjDn2Xtkzcbpdaw57twWr7w%3D%3D'; /*Service Key*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지 번호*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /*한 페이지 결과 수*/
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('xml'); /*XML/JSON 여부*/
queryParams += '&' + encodeURIComponent('fcltyKnd') + '=' + encodeURIComponent('초등학교'); /*시설종류*/
queryParams += '&' + encodeURIComponent('trgetFcltyNm') + '=' + encodeURIComponent('경산초등학교'); /*대상시설명*/
queryParams += '&' + encodeURIComponent('rdnmadr') + '=' + encodeURIComponent('경상북도 경산시 경안로 84'); /*소재지도로명주소*/
queryParams += '&' + encodeURIComponent('lnmadr') + '=' + encodeURIComponent('경상북도 경산시 삼남동 13-2'); /*소재지지번주소*/
queryParams += '&' + encodeURIComponent('latitude') + '=' + encodeURIComponent('35.8153038'); /*위도*/
queryParams += '&' + encodeURIComponent('hardness') + '=' + encodeURIComponent('128.739838319'); /*경도*/
queryParams += '&' + encodeURIComponent('institutionNm') + '=' + encodeURIComponent('경상북도 경산시'); /*관리기관명*/
queryParams += '&' + encodeURIComponent('cmptncPolcsttnNm') + '=' + encodeURIComponent('경산경찰서'); /*관할경찰서명*/
queryParams += '&' + encodeURIComponent('cctvYn') + '=' + encodeURIComponent('Y'); /*CCTV설치여부*/
queryParams += '&' + encodeURIComponent('cctvNumber') + '=' + encodeURIComponent('8'); /*CCTV설치대수*/
queryParams += '&' + encodeURIComponent('prtcareaRw') + '=' + encodeURIComponent('18'); /*보호구역도로폭*/
queryParams += '&' + encodeURIComponent('referenceDate') + '=' + encodeURIComponent('2019-09-10'); /*데이터기준일자*/
queryParams += '&' + encodeURIComponent('insttCode') + '=' + encodeURIComponent('5130000'); /*제공기관코드*/
queryParams += '&' + encodeURIComponent('insttNm') + '=' + encodeURIComponent(''); /*제공기관명*/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: '+this.status+' Headers: '+JSON.stringify(this.getAllResponseHeaders())+' Body: '+this.responseText);
    }
};

xhr.send('');