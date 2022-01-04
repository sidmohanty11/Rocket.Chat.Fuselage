(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1096:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(13);var colors=__webpack_require__(381),esm=__webpack_require__(96),create=__webpack_require__(170),package_0=__webpack_require__(382),logo=__webpack_require__.p+"static/media/logo.d570bdd1.svg";esm.c.setConfig({theme:Object(create.a)({base:"light",brandTitle:package_0.name,brandImage:logo,brandUrl:package_0.homepage,colorPrimary:colors.n500,colorSecondary:colors.b500})})},381:function(module){module.exports=JSON.parse('{"n100":"#f7f8fa","n200":"#f2f3f5","n300":"#eeeff1","n400":"#e4e7ea","n500":"#cbced1","n600":"#9ea2a8","n700":"#6c727a","n800":"#2f343d","n900":"#1f2329","b100":"#e8f2ff","b200":"#d1ebfe","b300":"#76b7fc","b400":"#549df9","b500":"#1d74f5","b600":"#095ad2","b700":"#10529e","b800":"#01336b","b900":"#012247","g100":"#e5fbf4","g200":"#c0f6e4","g300":"#96f0d2","g400":"#6ce9c0","g500":"#2de0a5","g600":"#1ecb92","g700":"#19ac7c","g800":"#158d65","g900":"#106d4f","r100":"#fddade","r200":"#fbb5be","r300":"#f98f9d","r400":"#f76a7d","r500":"#f5455c","r600":"#db0c27","r700":"#b30a20","r800":"#8b0719","r900":"#630512","y100":"#fff6d6","y200":"#ffecad","y300":"#ffe383","y400":"#ffd95a","y500":"#ffd031","y600":"#f3be08","y700":"#dfac00","y800":"#b68d00","y900":"#8e6d00","p100":"#f9effc","p200":"#edd0f7","p300":"#dca0ef","p400":"#ca71e7","p500":"#9f22c7","p600":"#7f1b9f","p700":"#5f1477","p800":"#4a105d","p900":"#350b42","o100":"#fde8d7","o200":"#fad1b0","o300":"#f7b27b","o400":"#f59b53","o500":"#f38c39","o600":"#e26d0e","o700":"#bd5a0b","o800":"#974809","o900":"#713607","white":"#ffffff"}')},382:function(module){module.exports=JSON.parse('{"name":"@rocket.chat/onboarding-ui","version":"0.31.0","description":"Set of components and functions for the onboarding experience on Rocket.Chat","keywords":["rocketchat"],"author":{"name":"Rocket.Chat","url":"https://rocket.chat/"},"homepage":"https://github.com/RocketChat/Rocket.Chat.Fuselage#readme","license":"MIT","publishConfig":{"access":"public"},"repository":{"type":"git","url":"git+https://github.com/RocketChat/Rocket.Chat.Fuselage.git","directory":"packages/onboarding-ui"},"main":"dist/cjs/index.js","module":"dist/esm/index.js","types":"dist/esm/index.d.ts","files":["/dist"],"scripts":{"build":"run-s .:build:clean .:build:esm .:build:cjs",".:build:clean":"rimraf dist",".:build:esm":"tsc -p tsconfig-esm.json",".:build:cjs":"tsc -p tsconfig-cjs.json","lint":"lint","lint-and-fix":"lint-and-fix","lint-staged":"lint-staged","test":"jest --runInBand","docs":"typedoc","storybook":"start-storybook -p 6006","build-storybook":"build-storybook","update-storybook":"run-s .:update-storybook:build-storybook .:update-storybook:purge-refs .:update-storybook:loki-update resolve",".:update-storybook:build-storybook":"run-s build-storybook",".:update-storybook:purge-refs":"rimraf .loki/reference",".:update-storybook:loki-update":"loki update --targetFilter=\'.*\\\\.docker\' --chromeDockerImage=chinello/alpine-chrome:93 --chromeFlags=\'--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\' --verboseRenderer --requireReference --reactUri file:./storybook-static","loki:test-ci":"loki test --targetFilter=\'.*\\\\.app\' --chromeFlags=\'--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\' --requireReference --verboseRenderer --reactUri file:./storybook-static","resolve":"resolve-loki"},"bugs":{"url":"https://github.com/RocketChat/Rocket.Chat.Fuselage/issues"},"devDependencies":{"@rocket.chat/eslint-config-alt":"^0.31.0","@rocket.chat/fuselage-polyfills":"^0.31.0","@rocket.chat/fuselage-tokens":"^0.31.0","@rocket.chat/prettier-config":"^0.31.0","@storybook/addon-essentials":"^6.3.4","@storybook/addons":"^6.3.4","@storybook/react":"^6.3.4","@storybook/source-loader":"^6.3.4","@storybook/theming":"^6.3.4","@types/jest":"^27.0.2","@types/react":"^17.0.34","@types/react-dom":"^17.0.11","countries-list":"^2.6.1","eslint":"^8.2.0","jest":"^27.3.1","lint-all":"^0.31.0","lint-staged":"^11.2.6","loki":"^0.28.1","npm-run-all":"^4.1.5","prettier":"^2.3.2","react":"^17.0.2","react-dom":"^17.0.2","resolve-loki":"workspace:tools/resolve-loki","rimraf":"^3.0.2","storybook-dark-mode":"^1.0.8","ts-jest":"^27.0.7","typedoc":"^0.22.8","typescript":"^4.3.4"},"dependencies":{"@rocket.chat/fuselage":"^0.31.0","@rocket.chat/fuselage-hooks":"^0.31.0","@rocket.chat/icons":"^0.31.0","@rocket.chat/logo":"^0.31.0","@rocket.chat/styled":"^0.31.0","i18next":"^20.3.2","react-hook-form":"^7.10.1","react-i18next":"^11.11.0","tslib":"^2.3.1"},"peerDependencies":{"@rocket.chat/fuselage-polyfills":"*","react":"17.0.2","react-dom":"17.0.2"},"loki":{"configurations":{"desktop.desktop":{"target":"chrome.docker","width":1440,"height":896,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"tablet.desktop":{"target":"chrome.docker","width":768,"height":970,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"mobile.desktop":{"target":"chrome.docker","preset":"iPhone 7"},"desktop":{"target":"chrome.app","width":1440,"height":896,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"tablet":{"target":"chrome.app","width":768,"height":970,"deviceScaleFactor":1,"mobile":false,"fitWindow":false},"mobile":{"target":"chrome.app","preset":"iPhone 7"}}}}')},615:function(module,exports,__webpack_require__){__webpack_require__(616),__webpack_require__(1096),__webpack_require__(1088),__webpack_require__(1097),__webpack_require__(1093),__webpack_require__(1091),__webpack_require__(1090),__webpack_require__(1092),__webpack_require__(1089),__webpack_require__(1094),__webpack_require__(1095),module.exports=__webpack_require__(1082)},692:function(module,exports){}},[[615,2,3]]]);