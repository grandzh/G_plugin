function loadAirAPI() {
    getAirAPI()
}
function getAirAPI() {
    $('.mousediv').remove();
    var dayCount = parseInt(localStorage["dayCount"] || "5");
    var host = getHost();
    $.ajax({
        url: host + "tianqi/json/IAQI.json?t=" + new Date().getTime(),
        success: function(data) {
            var pmobj = JSON.parse(data);
            $("#weatherList > div").each(function(i, n) {
                var self = this;
                var cityId = $(self).attr("_cityid");
                if (typeof pmobj[cityId] != 'undefined' && parseInt(pmobj[cityId].AQIValue) > 0) {
                    var wd = $(self).find(".atC").html();
                    var sd = $(self).find(".atSD").html();
                    var city = $(self).find(".city1").html();
                    var pmdesc = pmobj[cityId].AQIPrompt;
                    var showAPI = parseInt(pmobj[cityId].AQIValue);
                    var str = '<div class="word"><span style="font-weight:bold;color:#545454;">PM2.5:</span><span class="lv3" style="background:' + getPmCol(showAPI) + '">' + getPmLv(showAPI) + '</span></div>';
                    var tip = '<div class="arrow2"></div><div class="arrow"></div>' + '<div class="top-box">' + '	<div class="city">' + city + '</div>' + '	<div class="api" style="font-weight:bold;color:' + getPmCol(showAPI) + '">' + showAPI + '</div>' + '	<div class="lvl">' + pmdesc + '</div>' + '</div>' + '</div>';
                    $.ajax({
                        type: 'GET',
                        url: host + "tianqi/json/IAQI_" + cityId + ".json?t=" + new Date().getTime(),
                        success: function(data) {
                            var pm = "<img src='/images/nodata.png' border='0' style='position: absolute;top:50%;left:50%;margin-top:-68px;margin-left:-128px;'>";
                            iaqiobj = JSON.parse(data);
                            if (typeof iaqiobj.AQIData != "undefined" && iaqiobj.AQIData != "") {
                                var pm = iaqiobj.AQIData;
                                if (i == 0) {
                                    $("#ycpm").html(pm)
                                }
                            }
                            $(self).find("#xqpm").html(pm);
                            $(self).find("#tip").html(tip);
                            $(self).find("#showPM").html(str);
                            var htmlObj = $("<div class='mousediv' style='cursor:pointer;opacity:0;width:100px;height:80px;position:absolute;top:" + (i * 88 + 65) + "px;background:gray;left:2px;z-index:100;'></div>");
                            $(htmlObj).unbind({
                                mouseenter: function() {},
                                mouseleave: function() {}
                            }).bind({
                                mouseenter: function() {
                                    $(self).find("#tip").stop().animate({
                                        left: "100",
                                        opacity: 1
                                    },
                                    "fast").css("display", "block")
                                },
                                mouseleave: function() {
                                    $(self).find("#xqpm").hide();
                                    $(self).find("#tip").stop().animate({
                                        left: "0",
                                        opacity: 0
                                    },
                                    "fast", 
                                    function() {
                                        $(self).find("#tip").hide()
                                    })
                                },
                                click: function() {
                                    $("#ycpm").html($(self).find("#xqpm").html())
                                }
                            });
                            $(self).find("#wdTD").html('<span class="atC" title="温度：' + wd + '">' + wd + '</span>&nbsp;/&nbsp;<span class="atSD" title="湿度：' + sd + '">' + sd + '</span>');
                            $(self).find("#sdTD").empty();
                            $("#bodyDiv").append($(htmlObj))
                        }
                    })
                }
            })
        },
        error: function() {
            console.log("error")
        }
    })
}