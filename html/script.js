function newStream(name) {
    switch (name) {
        case 'SkyRadio [NL]':
            changeStream('https://25323.live.streamtheworld.com/SKYRADIO.mp3');
            break;
        case 'SkyRadio Hits [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR01.mp3');
            break;
        case 'SkyRadio Lounge [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR07.mp3');
            break;
        case 'SkyRadio Lovesongs [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR03.mp3');
            break;
        case 'SkyRadio NonStop @ Work [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR24.mp3');
            break;
        case 'SkyRadio 80s Hits [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR04.mp3');
            break;
        case 'SkyRadio 90s Hits [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR05.mp3');
            break;
        case 'SkyRadio Christmas [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR08.mp3');
            break;
        case 'SkyRadio Movies [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR28.mp3');
            break;
        case 'SkyRadio Smooth Hits [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/SRGSTR15.mp3');
            break;
        case 'Radio 538 [NL]':
            changeStream('https://22723.live.streamtheworld.com/RADIO538.mp3');
            break;
        case 'QMusic [NL]':
            changeStream('http://icecast-qmusicnl-cdp.triple-it.nl/Qmusic_nl_live_32.aac');
            break;
        case 'Slam! [NL]':
            changeStream('https://21273.live.streamtheworld.com/SLAM_MP3_SC?');
            break;
        case 'Radio Comercial [PT]':
            changeStream('http://mcrscast.mcr.iol.pt/comercial?.aac');
            break;
        case 'RFM [PT]':
            changeStream('https://20073.live.streamtheworld.com/RFMAAC.aac');
            break;
        case 'RFM Oceano Pacífico [PT]':
            changeStream('https://20723.live.streamtheworld.com/OCEANPACIFICAAC.aac');
            break;
        case 'CidadeFM [PT]':
            changeStream('http://mcrscast.mcr.iol.pt/cidadefm?.aac');
            break;
        case 'HiperFM [PT]':
            changeStream('https://centova.radio.com.pt/proxy/500?mp=/stream');
            break;
        case 'Radio Veronica [NL]':
            changeStream('http://playerservices.streamtheworld.com/api/livestream-redirect/VERONICA.mp3');
            break;
        case 'HitFM [N/A]':
            changeStream('http://stream.zeno.fm/88ck6ggfqm0uv');
            break;
    }
    document.getElementById('cp').innerHTML = "Currently selected: " + name;
    document.getElementById('title').innerHTML = name + " @ Pafias | Radio";
}

function setBackground(name) {
    switch (name) {
        case 'skyblue':
            document.body.style.background = 'url("skyblue.png")';
            break;
        case 'pinkpurple':
            document.body.style.background = 'url("pinkpurple.png")';
            break;
        case 'orangered':
            document.body.style.background = 'url("orangered.png")';
            break;
        case 'limegreen':
            document.body.style.background = 'url("limegreen.png")';
            break;
        case 'colorful':
            document.body.style.background = 'url("colorful.png")';
            break;
    }
    document.body.style.backgroundSize = '100% 100%';
}

function changeStream(link) {
    var audio = document.getElementById('audio');
    var source = document.getElementById('source');
    source.src = link;
    audio.pause();
    audio.load();
    audio.play();
}

function hideControls() {
    document.getElementById('audio').controls = false;
}

function showControls() {
    document.getElementById('audio').controls = true;
}
