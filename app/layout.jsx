import "./globals.css";
import { Urbanist } from "next/font/google";
import { Providers } from "./providers";
import Script from 'next/script';

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Coco Site",
  description: "Ultra classy Coco page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="drift" strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              "use strict";
              !function() {
                var t = window.driftt = window.drift = window.driftt || [];
                if (!t.init) {
                  if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                  t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
                  t.factory = function(e) {
                    return function() {
                      var n = Array.prototype.slice.call(arguments);
                      return n.unshift(e), t.push(n), t;
                    };
                  }, t.methods.forEach(function(e) {
                    t[e] = t.factory(e);
                  }), t.load = function(t) {
                    var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                    o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                    var i = document.getElementsByTagName("script")[0];
                    i.parentNode.insertBefore(o, i);
                  };
                }
              }();
              drift.SNIPPET_VERSION = '0.3.1';
              drift.load('ukmsd9r4dznd');
            `
          }}>
        </Script>
      </head>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}