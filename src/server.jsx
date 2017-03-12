import Express from 'express';
import React from 'react';
import {Provider} from 'react-redux';
import {renderToString} from 'react-dom/server'
import {RoutingContext, match} from 'react-router';
import {get} from 'superagent';
import cookieParser from 'cookie-parser';

/* configure constants */
import {SITE, SERVER, URL} from './config/config'

/* configure store */
import configureStore from './store'

/* Routes */
import routes from 'components/routes.react';

/* action */
import {fetchUserInfo} from 'actions/user'

/* configure Express server on 3000 port*/
const app = Express();

app.use(cookieParser());
app.use(handleRender);

function renderFullPage(html, initialState) {
    return `
        <html lang="zh-cn">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta name="description" content="${SITE.description}">
            <meta name="keywords" content="">
            <meta name="robots" content="index,follow">
            <meta name="application-name" content="${SITE.applicationName}" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="msapplication-tap-highlight" content="no">
            <META name="author" content="${SITE.author}">
            <title>${SITE.title}</title>
            <style>
                [data-loader='circle-side']{position:relative;width:25px;height:25px;-webkit-animation:circle infinite .75s linear;-moz-animation:circle infinite .75s linear;-o-animation:circle infinite .75s linear;animation:circle infinite .75s linear;border:2px solid #fff;border-top-color:rgba(0,0,0,.2);border-right-color:rgba(0,0,0,.2);border-bottom-color:rgba(0,0,0,.2);border-radius:100%}@-webkit-keyframes circle{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes circle{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes circle{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes circle{0%{-webkit-transform:rotate(0);-ms-transform:rotate(0);-o-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}
                #app {
                    font-family: "Open Sans",sans-serif;
                }
            </style>
        </head>
        <body>
        <div id="app">
            ${html}
        </div>
        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
        <script type="text/javascript">
            WebFontConfig = {
                google: { families: [ 'Open+Sans:400,300:latin' ] }
            };
            (function() {
                var wf = document.createElement('script');
                wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
                wf.type = 'text/javascript';
                wf.async = 'true';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(wf, s);
            })(); </script>

        <script src="http://res.ichangemun.com/iseat-admin-lib/bundle.js?v=201703121456"></script>

        </body>
        </html>
    `
}

function checkAdmin(successHtml,failedHtml) {

}

function handleRender(req, res) {
    match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
            res.status(500).end(`Internal Server Error ${err}`);
        } else if (redirectLocation) {
            res.redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            if (typeof req.cookies !== 'undefined') {
                var token = req.cookies.token;
            }
            if (typeof token === 'undefined') {
                res.redirect(URL.sso + '?redirect=' + URL.site)
            } else {
                console.log('token: ' + token);
                // Fixme: solve the admin verify problem
                get(URL.sso + '/private/api/auth/verify?token=' + token)
                    .type('application/json')
                    .accept('application/json')
                    .end(function (err, data) {
                        try {
                            if (data.body.result === 0) {
                                const store = configureStore();
                                const state = store.getState();
                                // Fixme: need to solve async action problem (ref: https://github.com/reactjs/redux/issues/99)
                                Promise.all([
                                    store.dispatch(fetchUserInfo()),
                                ]).then(() => {
                                    const html = renderToString(
                                        <Provider store={store}>
                                            <RoutingContext {...renderProps} />
                                        </Provider>
                                    );
                                    res.end(renderFullPage(html, store.getState()));
                                });
                            } else {
                                res.redirect(URL.sso + '?redirect=' + URL.site)
                            }
                        } catch (e) {
                            console.log('GET request failed!');
                        }
                    });
            }
        } else {
            res.status(404).end('Not found');
        }
    });
}

app.listen(SERVER.port, function () {
    console.log(SERVER.name + ' app listening on port 3001!')
});