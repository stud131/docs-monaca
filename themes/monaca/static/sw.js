const CACHE_NAME = 'docs-monaca-index-cache-v2';
const origin = self.location.origin;

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      return cache.addAll(preFetchUrls['index']);
    })
  );
});

self.addEventListener('message', function (event) {
  caches.open(CACHE_NAME)
  .then(function (cache) {
    const lang = event.data.lang;
    for (let category in preFetchUrls[lang]) {
      if (event.data.url === `${origin}/${lang}${category}`) {
        // cache will be changed when index page
        cache.match(`/${lang}/`)
        .then(function (response) {
          if (!response) {
            // when switch language, also switch caches
            const prevLang = lang === 'en' ? 'ja' : 'en';
            for (let key in preFetchUrls[prevLang]) {
              for (let index in preFetchUrls[prevLang][key]) {
                cache.delete(preFetchUrls[prevLang][key][index]);
              }
            }
          } else {
            // cache only current contents
            for (let key in preFetchUrls[lang]) {
              if (['/', category].includes(key)) continue;
              for (let index in preFetchUrls[lang][key]) {
                cache.delete(preFetchUrls[lang][key][index]);
              }
            }
          }
        })
        .then(function () {
          cache.addAll(preFetchUrls[lang][category]);
        })
      break;
      }
    }
  })
})

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open(CACHE_NAME)
    .then(function (cache) {
      return cache.match(event.request)
      .then(function (response) {

        // DevTools opening will trigger these o-i-c requests, which this SW can't handle.
        // It shouldn't cause any issues, but it causes an error message in console.
        // This is here to get rid of the error message.
        if (event.request.cache === 'only-if-cached' && event.request.mode !== 'same-origin') return;

        // Cache hit - return response
        if (response) {
          return response;
        } else {
          return fetch(event.request)
          .then(function (response) {
            for (let url of whiteListUrls) {
              if (
                (response.url.indexOf(origin) === 0 && response.url.indexOf(url) > 0) ||
                (response.url.indexOf(url) === 0)
              ) {
                cache.add(response.url);
              }
            }
            return response;
          })
        }
      })
    })
  );
});

const whiteListUrls = [
  '/css/',
  '/images/',
  '/fonts/',
  '/js/',
  '/theme-original/',
  'https://static.tumblr.com/'
]

const preFetchUrls = {
  'index': [
    '/en/sitemap/',
    '/en/products_guide/',
    '/en/faq/',
    '/en/features/',
    '/en/reference/',
    '/en/reference/service_integration/',
    '/en/release_notes/',
    '/en/sampleapp/samples/',
    '/en/sampleapp/tips/',
    '/en/tutorials/',
    '/en/environment/',
    '/ja/sitemap/',
    '/ja/products_guide/',
    '/ja/faq/',
    '/ja/features/',
    '/ja/reference/',
    '/ja/reference/service_integration/',
    '/ja/release_notes/',
    '/ja/sampleapp/samples/',
    '/ja/sampleapp/tips/',
    '/ja/tutorials/'
  ],
  'en': {
    '/': [
      '/en/'
    ],
    '/products_guide/': [
      // Product Guides
      '/en/products_guide/monaca_intro/',
      '/en/products_guide/team_dashboard/',
      // Product Guides - Backend
      '/en/products_guide/backend/',
      '/en/products_guide/backend/current_backend/',
      '/en/products_guide/backend/current_backend/control_operations/',
      '/en/products_guide/backend/current_backend/control_panel/',
      '/en/products_guide/backend/current_backend/tutorial/',
      '/en/products_guide/backend/new_backend/',
      '/en/products_guide/backend/new_backend/backend_operations/',
      '/en/products_guide/backend/new_backend/control_panel/',
      '/en/products_guide/backend/new_backend/getting_started/',
      // Product Guides - Debugger
      '/en/products_guide/debugger/',
      '/en/products_guide/debugger/debug/',
      '/en/products_guide/debugger/features/',
      '/en/products_guide/debugger/installation/',
      '/en/products_guide/debugger/installation/debugger_android/',
      '/en/products_guide/debugger/installation/debugger_emulator/',
      '/en/products_guide/debugger/installation/debugger_ios/',
      '/en/products_guide/debugger/troubleshooting/',
      '/en/products_guide/debugger/tutorials/',
      // Product Guides - Migration
      '/en/products_guide/migration/',
      '/en/products_guide/migration/angular_migration/',
      '/en/products_guide/migration/ionic_migration/',
      '/en/products_guide/migration/key_point/',
      '/en/products_guide/migration/react_migration/',
      '/en/products_guide/migration/telerik_migration/',
      '/en/products_guide/migration/vue_migration/',
      // Product Guides - Monaca CLI
      '/en/products_guide/monaca_cli/',
      '/en/products_guide/monaca_cli/build_publish/',
      '/en/products_guide/monaca_cli/cli_commands/',
      '/en/products_guide/monaca_cli/dependencies/',
      '/en/products_guide/monaca_cli/dependencies/components/',
      '/en/products_guide/monaca_cli/dependencies/cordova_plugin/',
      '/en/products_guide/monaca_cli/dependencies/custom_cordova_plugin/',
      '/en/products_guide/monaca_cli/dependencies/file_dir/',
      '/en/products_guide/monaca_cli/overview/',
      '/en/products_guide/monaca_cli/pairing_debugging/',
      '/en/products_guide/monaca_cli/templates/',
      '/en/products_guide/monaca_cli/templates/vue_onsen/',
      '/en/products_guide/monaca_cli/troubleshooting/',
      '/en/products_guide/monaca_cli/tutorial/',
      // Product Guides - Monaca IDE
      '/en/products_guide/monaca_ide/',
      '/en/products_guide/monaca_ide/build/',
      '/en/products_guide/monaca_ide/build/build_android/',
      '/en/products_guide/monaca_ide/build/build_error/',
      '/en/products_guide/monaca_ide/build/build_history/',
      '/en/products_guide/monaca_ide/build/build_pwa/',
      '/en/products_guide/monaca_ide/build/build_winrt/',
      '/en/products_guide/monaca_ide/build/ios/',
      '/en/products_guide/monaca_ide/build/ios/build_ios/',
      '/en/products_guide/monaca_ide/build/ios/import_export/',
      '/en/products_guide/monaca_ide/changes/',
      '/en/products_guide/monaca_ide/dependencies/',
      '/en/products_guide/monaca_ide/dependencies/components/',
      '/en/products_guide/monaca_ide/dependencies/cordova_plugin/',
      '/en/products_guide/monaca_ide/dependencies/custom_cordova_plugin/',
      '/en/products_guide/monaca_ide/dependencies/file_dir/',
      '/en/products_guide/monaca_ide/deploy/',
      '/en/products_guide/monaca_ide/deploy/amazon_store/',
      '/en/products_guide/monaca_ide/deploy/appstore/',
      '/en/products_guide/monaca_ide/deploy/appstore/app_store_connect/',
      '/en/products_guide/monaca_ide/deploy/appstore/app_submission/',
      '/en/products_guide/monaca_ide/deploy/google_play/',
      '/en/products_guide/monaca_ide/deploy/non_market_deploy/',
      '/en/products_guide/monaca_ide/editor/',
      '/en/products_guide/monaca_ide/monaca_ci/',
      '/en/products_guide/monaca_ide/monaca_ci/firebase/',
      '/en/products_guide/monaca_ide/monaca_ci/overview/',
      '/en/products_guide/monaca_ide/monaca_ci/supported_services/',
      '/en/products_guide/monaca_ide/overview/',
      '/en/products_guide/monaca_ide/terminal/',
      '/en/products_guide/monaca_ide/tutorial/',
      '/en/products_guide/monaca_ide/version_control/',
      '/en/products_guide/monaca_ide/version_control/git_ssh_integration/',
      '/en/products_guide/monaca_ide/version_control/github_integration/',
      '/en/products_guide/monaca_ide/version_control/introduction/',
      // Product Guides - Monaca Localkit
      '/en/products_guide/monaca_localkit/',
      '/en/products_guide/monaca_localkit/build_publish/',
      '/en/products_guide/monaca_localkit/dependencies/',
      '/en/products_guide/monaca_localkit/dependencies/components/',
      '/en/products_guide/monaca_localkit/dependencies/cordova_plugin/',
      '/en/products_guide/monaca_localkit/dependencies/custom_cordova_plugin/',
      '/en/products_guide/monaca_localkit/dependencies/file_dir/',
      '/en/products_guide/monaca_localkit/overview/',
      '/en/products_guide/monaca_localkit/pairing_debugging/',
      '/en/products_guide/monaca_localkit/troubleshooting/',
      '/en/products_guide/monaca_localkit/tutorial/',
      // Product Guides - Onsen UI
      '/en/products_guide/onsenui/',
      // Product Guides - Push Notification
      '/en/products_guide/push_notification/',
      '/en/products_guide/push_notification/apns/',
      '/en/products_guide/push_notification/gcm/',
      '/en/products_guide/push_notification/overview/'
    ],
    '/faq/': [
      // FAQ
      '/en/faq/application/',
      '/en/faq/build/',
      '/en/faq/debugger/',
      '/en/faq/environment/',
      '/en/faq/general/',
      '/en/faq/subscription/',
      '/en/faq/usage/',
      // Supported Environment
      '/en/environment/'
    ],
    '/features/': [
      // Features
      '/en/features/database/',
      '/en/features/push/',
      '/en/features/sns/'
    ],
    '/reference/': [
      // API Reference - Configuration Files
      '/en/reference/config/',
      '/en/reference/config/android/',
      '/en/reference/config/android/android_configuration/',
      '/en/reference/config/android/android_manifest/',
      '/en/reference/config/android/config_xml/',
      '/en/reference/config/ios/',
      '/en/reference/config/ios/config_xml/',
      '/en/reference/config/ios/ios_configuration/',
      '/en/reference/config/ios/monacaApp_info_plist/',
      // API Reference - Cordova Plugins
      '/en/reference/cordova_7.1/',
      '/en/reference/cordova_7.1/battery-status/',
      '/en/reference/cordova_7.1/camera/',
      '/en/reference/cordova_7.1/contacts/',
      '/en/reference/cordova_7.1/device-motion/',
      '/en/reference/cordova_7.1/device-orientation/',
      '/en/reference/cordova_7.1/device/',
      '/en/reference/cordova_7.1/dialogs/',
      '/en/reference/cordova_7.1/file-transfer/',
      '/en/reference/cordova_7.1/file/',
      '/en/reference/cordova_7.1/geolocation/',
      '/en/reference/cordova_7.1/globalization/',
      '/en/reference/cordova_7.1/inappbrowser/',
      '/en/reference/cordova_7.1/media-capture/',
      '/en/reference/cordova_7.1/media/',
      '/en/reference/cordova_7.1/network-information/',
      '/en/reference/cordova_7.1/splashscreen/',
      '/en/reference/cordova_7.1/statusbar/',
      '/en/reference/cordova_7.1/vibration/',
      '/en/reference/cordova_7.1/whitelist/',
      // API Reference - Monaca API
      '/en/reference/monaca_api/',
      '/en/reference/monaca_api/cloud/',
      '/en/reference/monaca_api/cloud/collection/',
      '/en/reference/monaca_api/cloud/collection_item/',
      '/en/reference/monaca_api/cloud/criteria/',
      '/en/reference/monaca_api/cloud/device/',
      '/en/reference/monaca_api/cloud/error/',
      '/en/reference/monaca_api/cloud/mailer/',
      '/en/reference/monaca_api/cloud/other/',
      '/en/reference/monaca_api/cloud/push/',
      '/en/reference/monaca_api/cloud/user/',
      '/en/reference/monaca_api/cloud_management/',
      '/en/reference/monaca_api/cloud_management/collection/',
      '/en/reference/monaca_api/cloud_management/collection_item/',
      '/en/reference/monaca_api/cloud_management/push/',
      '/en/reference/monaca_api/cloud_management/user/',
      '/en/reference/monaca_api/monaca_api_guide/',
      '/en/reference/monaca_api/utility/',
      // API Reference - Power Plugins
      '/en/reference/power_plugins/',
      '/en/reference/power_plugins/html5_resource_encryption/',
      '/en/reference/power_plugins/in-app_updater/',
      '/en/reference/power_plugins/secure_storage/',
      '/en/reference/power_plugins/sqlcipher/',
      // API Reference - Service Integration
      '/en/reference/service_integration',
      '/en/reference/service_integration/',
      '/en/reference/service_integration/apps_flyer/',
      '/en/reference/service_integration/repro/',
      // API Reference - Third-party Cordova Plugins
      '/en/reference/third_party_phonegap/',
      '/en/reference/third_party_phonegap/barcode_scanner/',
      '/en/reference/third_party_phonegap/custom_config/',
      '/en/reference/third_party_phonegap/datepicker/',
      '/en/reference/third_party_phonegap/phonegap_plugin_barcodescanner/',
      '/en/reference/third_party_phonegap/share/',
      '/en/reference/third_party_phonegap/webintent/'
    ],
    '/release_notes/': [
      // Release Notes
      '/en/release_notes/',
      '/en/release_notes/20180918_monaca_cli_3.0/'
    ],
    '/sampleapp/samples/': [
      // Samples
      '/en/sampleapp/samples/admob/',
      '/en/sampleapp/samples/age-calc/',
      '/en/sampleapp/samples/backend_memo/',
      '/en/sampleapp/samples/break_the_bricks/',
      '/en/sampleapp/samples/clock/',
      '/en/sampleapp/samples/facebook_sso/',
      '/en/sampleapp/samples/flickr/',
      '/en/sampleapp/samples/hello_world/',
      '/en/sampleapp/samples/ibeacon/',
      '/en/sampleapp/samples/memo_application/',
      '/en/sampleapp/samples/omikuji/',
      '/en/sampleapp/samples/onsen_ui_minimum_project/',
      '/en/sampleapp/samples/onsen_ui_sliding_menu/',
      '/en/sampleapp/samples/onsen_ui_tabbar_navigator/',
      '/en/sampleapp/samples/sample_rss_reader/',
      '/en/sampleapp/samples/shinkansen/',
      '/en/sampleapp/samples/todo/',
      '/en/sampleapp/samples/twitter_sso/'
    ],
    '/sampleapp/tips/': [
      // Tips
      '/en/sampleapp/tips/database/',
      '/en/sampleapp/tips/media/',
      '/en/sampleapp/tips/splashScreen/'
    ],
    '/tutorials': [
      // Tutorials
      '/en/tutorials/app_version/',
      '/en/tutorials/firebase/',
      '/en/tutorials/google_analytics/',
      '/en/tutorials/in-app_purchase/',
      '/en/tutorials/ionic_keyboard/',
      '/en/tutorials/monaca_cli/',
      '/en/tutorials/monaca_cli/building_app/',
      '/en/tutorials/monaca_cli/publishing_app/',
      '/en/tutorials/monaca_cli/starting_project/',
      '/en/tutorials/monaca_cli/testing_debugging/',
      '/en/tutorials/monaca_ide/',
      '/en/tutorials/monaca_ide/building_app/',
      '/en/tutorials/monaca_ide/publishing_app/',
      '/en/tutorials/monaca_ide/starting_project/',
      '/en/tutorials/monaca_ide/testing_debugging/',
      '/en/tutorials/monaca_localkit/',
      '/en/tutorials/monaca_localkit/building_app/',
      '/en/tutorials/monaca_localkit/publishing_app/',
      '/en/tutorials/monaca_localkit/starting_project/',
      '/en/tutorials/monaca_localkit/testing_debugging/',
      '/en/tutorials/phonegap_push/',
      '/en/tutorials/social_sharing/',
      '/en/tutorials/sqlite/'
    ]
  },
  'ja': {
    '/': [
      '/ja/'
    ],
    '/products_guide/': [
      // Product Guides
      '/ja/products_guide/monaca_intro/',
      '/ja/products_guide/team_dashboard/',
      // Product Guides - Backend
      '/ja/products_guide/backend/',
      '/ja/products_guide/backend/current_backend/',
      '/ja/products_guide/backend/current_backend/control_operations/',
      '/ja/products_guide/backend/current_backend/control_panel/',
      '/ja/products_guide/backend/current_backend/tutorial/',
      '/ja/products_guide/backend/new_backend/',
      '/ja/products_guide/backend/new_backend/backend_operations/',
      '/ja/products_guide/backend/new_backend/control_panel/',
      '/ja/products_guide/backend/new_backend/getting_started/',
      // Product Guides - Debugger
      '/ja/products_guide/debugger/',
      '/ja/products_guide/debugger/debug/',
      '/ja/products_guide/debugger/features/',
      '/ja/products_guide/debugger/installation/',
      '/ja/products_guide/debugger/installation/debugger_android/',
      '/ja/products_guide/debugger/installation/debugger_emulator/',
      '/ja/products_guide/debugger/installation/debugger_ios/',
      '/ja/products_guide/debugger/troubleshooting/',
      '/ja/products_guide/debugger/tutorials/',
      // Product Guides - Migration
      '/ja/products_guide/migration/',
      '/ja/products_guide/migration/angular_migration/',
      '/ja/products_guide/migration/ionic_migration/',
      '/ja/products_guide/migration/key_point/',
      '/ja/products_guide/migration/react_migration/',
      '/ja/products_guide/migration/telerik_migration/',
      '/ja/products_guide/migration/vue_migration/',
      // Product Guides - Monaca CLI
      '/ja/products_guide/monaca_cli/',
      '/ja/products_guide/monaca_cli/build_publish/',
      '/ja/products_guide/monaca_cli/cli_commands/',
      '/ja/products_guide/monaca_cli/dependencies/',
      '/ja/products_guide/monaca_cli/dependencies/components/',
      '/ja/products_guide/monaca_cli/dependencies/cordova_plugin/',
      '/ja/products_guide/monaca_cli/dependencies/custom_cordova_plugin/',
      '/ja/products_guide/monaca_cli/dependencies/file_dir/',
      '/ja/products_guide/monaca_cli/overview/',
      '/ja/products_guide/monaca_cli/pairing_debugging/',
      '/ja/products_guide/monaca_cli/templates/',
      '/ja/products_guide/monaca_cli/templates/vue_onsen/',
      '/ja/products_guide/monaca_cli/troubleshooting/',
      '/ja/products_guide/monaca_cli/tutorial/',
      // Product Guides - Monaca IDE
      '/ja/products_guide/monaca_ide/',
      '/ja/products_guide/monaca_ide/build/',
      '/ja/products_guide/monaca_ide/build/build_android/',
      '/ja/products_guide/monaca_ide/build/build_error/',
      '/ja/products_guide/monaca_ide/build/build_history/',
      '/ja/products_guide/monaca_ide/build/build_pwa/',
      '/ja/products_guide/monaca_ide/build/build_winrt/',
      '/ja/products_guide/monaca_ide/build/ios/',
      '/ja/products_guide/monaca_ide/build/ios/build_ios/',
      '/ja/products_guide/monaca_ide/build/ios/import_export/',
      '/ja/products_guide/monaca_ide/changes/',
      '/ja/products_guide/monaca_ide/dependencies/',
      '/ja/products_guide/monaca_ide/dependencies/components/',
      '/ja/products_guide/monaca_ide/dependencies/cordova_plugin/',
      '/ja/products_guide/monaca_ide/dependencies/custom_cordova_plugin/',
      '/ja/products_guide/monaca_ide/dependencies/file_dir/',
      '/ja/products_guide/monaca_ide/deploy/',
      '/ja/products_guide/monaca_ide/deploy/amazon_store/',
      '/ja/products_guide/monaca_ide/deploy/appstore/',
      '/ja/products_guide/monaca_ide/deploy/appstore/app_store_connect/',
      '/ja/products_guide/monaca_ide/deploy/appstore/app_submission/',
      '/ja/products_guide/monaca_ide/deploy/google_play/',
      '/ja/products_guide/monaca_ide/deploy/non_market_deploy/',
      '/ja/products_guide/monaca_ide/editor/',
      '/ja/products_guide/monaca_ide/monaca_ci/',
      '/ja/products_guide/monaca_ide/monaca_ci/firebase/',
      '/ja/products_guide/monaca_ide/monaca_ci/overview/',
      '/ja/products_guide/monaca_ide/monaca_ci/supported_services/',
      '/ja/products_guide/monaca_ide/overview/',
      '/ja/products_guide/monaca_ide/terminal/',
      '/ja/products_guide/monaca_ide/tutorial/',
      '/ja/products_guide/monaca_ide/version_control/',
      '/ja/products_guide/monaca_ide/version_control/git_ssh_integration/',
      '/ja/products_guide/monaca_ide/version_control/github_integration/',
      '/ja/products_guide/monaca_ide/version_control/introduction/',
      // Product Guides - Monaca Localkit
      '/ja/products_guide/monaca_localkit/',
      '/ja/products_guide/monaca_localkit/build_publish/',
      '/ja/products_guide/monaca_localkit/dependencies/',
      '/ja/products_guide/monaca_localkit/dependencies/components/',
      '/ja/products_guide/monaca_localkit/dependencies/cordova_plugin/',
      '/ja/products_guide/monaca_localkit/dependencies/custom_cordova_plugin/',
      '/ja/products_guide/monaca_localkit/dependencies/file_dir/',
      '/ja/products_guide/monaca_localkit/overview/',
      '/ja/products_guide/monaca_localkit/pairing_debugging/',
      '/ja/products_guide/monaca_localkit/troubleshooting/',
      '/ja/products_guide/monaca_localkit/tutorial/',
      // Product Guides - Onsen UI
      '/ja/products_guide/onsenui/',
      // Product Guides - Push Notification
      '/ja/products_guide/push_notification/',
      '/ja/products_guide/push_notification/apns/',
      '/ja/products_guide/push_notification/gcm/',
      '/ja/products_guide/push_notification/overview/'
    ],
    '/faq/': [
      // FAQ
      '/ja/faq/application/',
      '/ja/faq/build/',
      '/ja/faq/debugger/',
      '/ja/faq/environment/',
      '/ja/faq/general/',
      '/ja/faq/subscription/',
      '/ja/faq/usage/'
    ],
    '/features/': [
      // Features
      '/ja/features/database/',
      '/ja/features/push/',
      '/ja/features/sns/'
    ],
    '/reference/': [
      // API Reference - Configuration Files
      '/ja/reference/config/',
      '/ja/reference/config/android/',
      '/ja/reference/config/android/android_configuration/',
      '/ja/reference/config/android/android_manifest/',
      '/ja/reference/config/android/config_xml/',
      '/ja/reference/config/ios/',
      '/ja/reference/config/ios/config_xml/',
      '/ja/reference/config/ios/ios_configuration/',
      '/ja/reference/config/ios/monacaApp_info_plist/',
      // API Reference - Cordova Plugins
      '/ja/reference/cordova_7.1/',
      '/ja/reference/cordova_7.1/battery-status/',
      '/ja/reference/cordova_7.1/camera/',
      '/ja/reference/cordova_7.1/contacts/',
      '/ja/reference/cordova_7.1/device-motion/',
      '/ja/reference/cordova_7.1/device-orientation/',
      '/ja/reference/cordova_7.1/device/',
      '/ja/reference/cordova_7.1/dialogs/',
      '/ja/reference/cordova_7.1/file-transfer/',
      '/ja/reference/cordova_7.1/file/',
      '/ja/reference/cordova_7.1/geolocation/',
      '/ja/reference/cordova_7.1/globalization/',
      '/ja/reference/cordova_7.1/inappbrowser/',
      '/ja/reference/cordova_7.1/media-capture/',
      '/ja/reference/cordova_7.1/media/',
      '/ja/reference/cordova_7.1/network-information/',
      '/ja/reference/cordova_7.1/splashscreen/',
      '/ja/reference/cordova_7.1/statusbar/',
      '/ja/reference/cordova_7.1/vibration/',
      '/ja/reference/cordova_7.1/whitelist/',
      // API Reference - Monaca API
      '/ja/reference/monaca_api/',
      '/ja/reference/monaca_api/cloud/',
      '/ja/reference/monaca_api/cloud/collection/',
      '/ja/reference/monaca_api/cloud/collection_item/',
      '/ja/reference/monaca_api/cloud/criteria/',
      '/ja/reference/monaca_api/cloud/device/',
      '/ja/reference/monaca_api/cloud/error/',
      '/ja/reference/monaca_api/cloud/mailer/',
      '/ja/reference/monaca_api/cloud/other/',
      '/ja/reference/monaca_api/cloud/push/',
      '/ja/reference/monaca_api/cloud/user/',
      '/ja/reference/monaca_api/cloud_management/',
      '/ja/reference/monaca_api/cloud_management/collection/',
      '/ja/reference/monaca_api/cloud_management/collection_item/',
      '/ja/reference/monaca_api/cloud_management/push/',
      '/ja/reference/monaca_api/cloud_management/user/',
      '/ja/reference/monaca_api/monaca_api_guide/',
      '/ja/reference/monaca_api/utility/',
      // API Reference - Power Plugins
      '/ja/reference/power_plugins/',
      '/ja/reference/power_plugins/html5_resource_encryption/',
      '/ja/reference/power_plugins/in-app_updater/',
      '/ja/reference/power_plugins/secure_storage/',
      '/ja/reference/power_plugins/sqlcipher/',
      // API Reference - Service Integration
      '/ja/reference/service_integration',
      '/ja/reference/service_integration/',
      '/ja/reference/service_integration/apps_flyer/',
      '/ja/reference/service_integration/repro/',
      // API Reference - Third-party Cordova Plugins
      '/ja/reference/third_party_phonegap/',
      '/ja/reference/third_party_phonegap/barcode_scanner/',
      '/ja/reference/third_party_phonegap/custom_config/',
      '/ja/reference/third_party_phonegap/datepicker/',
      '/ja/reference/third_party_phonegap/phonegap_plugin_barcodescanner/',
      '/ja/reference/third_party_phonegap/share/',
      '/ja/reference/third_party_phonegap/webintent/'
    ],
    '/release_notes/': [
      // Release Notes
      '/ja/release_notes/20180918_monaca_cli_3.0/'
    ],
    '/sampleapp/samples/': [
      // Samples
      '/ja/sampleapp/samples/admob/',
      '/ja/sampleapp/samples/age-calc/',
      '/ja/sampleapp/samples/backend_memo/',
      '/ja/sampleapp/samples/break_the_bricks/',
      '/ja/sampleapp/samples/clock/',
      '/ja/sampleapp/samples/facebook_sso/',
      '/ja/sampleapp/samples/flickr/',
      '/ja/sampleapp/samples/hello_world/',
      '/ja/sampleapp/samples/ibeacon/',
      '/ja/sampleapp/samples/memo_application/',
      '/ja/sampleapp/samples/omikuji/',
      '/ja/sampleapp/samples/onsen_ui_minimum_project/',
      '/ja/sampleapp/samples/onsen_ui_sliding_menu/',
      '/ja/sampleapp/samples/onsen_ui_tabbar_navigator/',
      '/ja/sampleapp/samples/sample_rss_reader/',
      '/ja/sampleapp/samples/shinkansen/',
      '/ja/sampleapp/samples/todo/',
      '/ja/sampleapp/samples/twitter_sso/'
    ],
    '/sampleapp/': [
      // Tips
      '/ja/sampleapp/tips/database/',
      '/ja/sampleapp/tips/media/',
      '/ja/sampleapp/tips/splashScreen/'
    ],
    '/tutorials': [
      // Tutorials
      '/ja/tutorials/app_version/',
      '/ja/tutorials/firebase/',
      '/ja/tutorials/google_analytics/',
      '/ja/tutorials/in-app_purchase/',
      '/ja/tutorials/ionic_keyboard/',
      '/ja/tutorials/monaca_cli/',
      '/ja/tutorials/monaca_cli/building_app/',
      '/ja/tutorials/monaca_cli/publishing_app/',
      '/ja/tutorials/monaca_cli/starting_project/',
      '/ja/tutorials/monaca_cli/testing_debugging/',
      '/ja/tutorials/monaca_ide/',
      '/ja/tutorials/monaca_ide/building_app/',
      '/ja/tutorials/monaca_ide/publishing_app/',
      '/ja/tutorials/monaca_ide/starting_project/',
      '/ja/tutorials/monaca_ide/testing_debugging/',
      '/ja/tutorials/monaca_localkit/',
      '/ja/tutorials/monaca_localkit/building_app/',
      '/ja/tutorials/monaca_localkit/publishing_app/',
      '/ja/tutorials/monaca_localkit/starting_project/',
      '/ja/tutorials/monaca_localkit/testing_debugging/',
      '/ja/tutorials/phonegap_push/',
      '/ja/tutorials/social_sharing/',
      '/ja/tutorials/sqlite/'
    ]
  }
};
