var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// https://deno.land/x/bext@v0.1.2/mod.ts
var mod_exports = {};
__export(mod_exports, {
  default: () => mod_default,
  isBrowser: () => isBrowser,
  isChrome: () => isChrome,
  isDeno: () => isDeno,
  isFirefox: () => isFirefox
});

// https://deno.land/x/bext@v0.1.2/utilities/predicates.ts
var DENO = "DENO";
var CHROME = "CHROME";
var FIREFOX = "FIREFOX";
function isBrowser(toCheck) {
  let currentBrowser = CHROME;
  try {
    const userAgent = navigator?.userAgent || "";
    if (/firefox/i.test(userAgent)) {
      currentBrowser = FIREFOX;
    } else if (/deno/i.test(userAgent)) {
      currentBrowser = DENO;
    }
  } catch (_) {
  }
  if (!toCheck)
    currentBrowser;
  if (toCheck === CHROME && currentBrowser === CHROME)
    return true;
  if (toCheck === FIREFOX && currentBrowser === FIREFOX)
    return true;
  if (toCheck === DENO && currentBrowser === DENO)
    return true;
  return false;
}
function isChrome() {
  return isBrowser(CHROME);
}
function isDeno() {
  return isBrowser(DENO);
}
function isFirefox() {
  return isBrowser(FIREFOX);
}

// https://deno.land/x/bext@v0.1.2/mock_browser/main.ts
var listeners = {
  addListener: () => {
  },
  removeListener: () => {
  },
  hasListener: () => {
  }
};
var main_default = {
  permissions: {
    contains: () => {
    },
    request: () => {
    }
  },
  runtime: {
    onMessage: listeners,
    openOptionsPage: () => {
    },
    lastError: {
      message: ""
    }
  },
  storage: {
    sync: {
      get: () => {
      },
      set: () => {
      }
    }
  },
  tabs: {
    onUpdated: listeners,
    query: () => {
    },
    sendMessage: () => {
    }
  }
};

// https://deno.land/x/bext@v0.1.2/mod.ts
var browserAPI = globalThis.chrome;
if (isFirefox()) {
  browserAPI = globalThis.browser;
}
if (isDeno()) {
  browserAPI = main_default;
}
var mod_default = browserAPI;

// https://esm.sh/stable/preact@10.16.0/denonext/preact.development.mjs
var n;
var l;
var u;
var t;
var i;
var o;
var r;
var f;
var e;
var c = {};
var s = [];
var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var h = Array.isArray;
function v(n2, l22) {
  for (var u22 in l22)
    n2[u22] = l22[u22];
  return n2;
}
function p(n2) {
  var l22 = n2.parentNode;
  l22 && l22.removeChild(n2);
}
function y(l22, u22, t22) {
  var i22, o22, r22, f22 = {};
  for (r22 in u22)
    "key" == r22 ? i22 = u22[r22] : "ref" == r22 ? o22 = u22[r22] : f22[r22] = u22[r22];
  if (arguments.length > 2 && (f22.children = arguments.length > 3 ? n.call(arguments, 2) : t22), "function" == typeof l22 && null != l22.defaultProps)
    for (r22 in l22.defaultProps)
      void 0 === f22[r22] && (f22[r22] = l22.defaultProps[r22]);
  return d(l22, f22, i22, o22, null);
}
function d(n2, t22, i22, o22, r22) {
  var f22 = { type: n2, props: t22, key: i22, ref: o22, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == r22 ? ++u : r22 };
  return null == r22 && null != l.vnode && l.vnode(f22), f22;
}
function k(n2) {
  return n2.children;
}
function b(n2, l22) {
  this.props = n2, this.context = l22;
}
function g(n2, l22) {
  if (null == l22)
    return n2.__ ? g(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u22; l22 < n2.__k.length; l22++)
    if (null != (u22 = n2.__k[l22]) && null != u22.__e)
      return u22.__e;
  return "function" == typeof n2.type ? g(n2) : null;
}
function m(n2) {
  var l22, u22;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l22 = 0; l22 < n2.__k.length; l22++)
      if (null != (u22 = n2.__k[l22]) && null != u22.__e) {
        n2.__e = n2.__c.base = u22.__e;
        break;
      }
    return m(n2);
  }
}
function w(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !x.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(x);
}
function x() {
  var n2, l22, u22, t22, o22, r22, e22, c22, s2;
  for (i.sort(f); n2 = i.shift(); )
    n2.__d && (l22 = i.length, t22 = void 0, o22 = void 0, r22 = void 0, c22 = (e22 = (u22 = n2).__v).__e, (s2 = u22.__P) && (t22 = [], o22 = [], (r22 = v({}, e22)).__v = e22.__v + 1, L(s2, e22, r22, u22.__n, void 0 !== s2.ownerSVGElement, null != e22.__h ? [c22] : null, t22, null == c22 ? g(e22) : c22, e22.__h, o22), M(t22, e22, o22), e22.__e != c22 && m(e22)), i.length > l22 && i.sort(f));
  x.__r = 0;
}
function P(n2, l22, u22, t22, i22, o22, r22, f22, e22, a22, v22) {
  var p2, y2, _2, b22, g22, m22, w22, x2, P2, S2, H2 = 0, I2 = t22 && t22.__k || s, T22 = I2.length, j22 = T22, z22 = l22.length;
  for (u22.__k = [], p2 = 0; p2 < z22; p2++)
    null != (b22 = u22.__k[p2] = null == (b22 = l22[p2]) || "boolean" == typeof b22 || "function" == typeof b22 ? null : "string" == typeof b22 || "number" == typeof b22 || "bigint" == typeof b22 ? d(null, b22, null, null, b22) : h(b22) ? d(k, { children: b22 }, null, null, null) : b22.__b > 0 ? d(b22.type, b22.props, b22.key, b22.ref ? b22.ref : null, b22.__v) : b22) && (b22.__ = u22, b22.__b = u22.__b + 1, -1 === (x2 = A(b22, I2, w22 = p2 + H2, j22)) ? _2 = c : (_2 = I2[x2] || c, I2[x2] = void 0, j22--), L(n2, b22, _2, i22, o22, r22, f22, e22, a22, v22), g22 = b22.__e, (y2 = b22.ref) && _2.ref != y2 && (_2.ref && O(_2.ref, null, b22), v22.push(y2, b22.__c || g22, b22)), null != g22 && (null == m22 && (m22 = g22), S2 = !(P2 = _2 === c || null === _2.__v) && x2 === w22, P2 ? -1 == x2 && H2-- : x2 !== w22 && (x2 === w22 + 1 ? (H2++, S2 = true) : x2 > w22 ? j22 > z22 - w22 ? (H2 += x2 - w22, S2 = true) : H2-- : H2 = x2 < w22 && x2 == w22 - 1 ? x2 - w22 : 0), w22 = p2 + H2, S2 = S2 || x2 == p2 && !P2, "function" != typeof b22.type || x2 === w22 && _2.__k !== b22.__k ? "function" == typeof b22.type || S2 ? void 0 !== b22.__d ? (e22 = b22.__d, b22.__d = void 0) : e22 = g22.nextSibling : e22 = $(n2, g22, e22) : e22 = C(b22, e22, n2), "function" == typeof u22.type && (u22.__d = e22)));
  for (u22.__e = m22, p2 = T22; p2--; )
    null != I2[p2] && ("function" == typeof u22.type && null != I2[p2].__e && I2[p2].__e == u22.__d && (u22.__d = I2[p2].__e.nextSibling), q(I2[p2], I2[p2]));
}
function C(n2, l22, u22) {
  for (var t22, i22 = n2.__k, o22 = 0; i22 && o22 < i22.length; o22++)
    (t22 = i22[o22]) && (t22.__ = n2, l22 = "function" == typeof t22.type ? C(t22, l22, u22) : $(u22, t22.__e, l22));
  return l22;
}
function $(n2, l22, u22) {
  return null == u22 || u22.parentNode !== n2 ? n2.insertBefore(l22, null) : l22 == u22 && null != l22.parentNode || n2.insertBefore(l22, u22), l22.nextSibling;
}
function A(n2, l22, u22, t22) {
  var i22 = n2.key, o22 = n2.type, r22 = u22 - 1, f22 = u22 + 1, e22 = l22[u22];
  if (null === e22 || e22 && i22 == e22.key && o22 === e22.type)
    return u22;
  if (t22 > (null != e22 ? 1 : 0))
    for (; r22 >= 0 || f22 < l22.length; ) {
      if (r22 >= 0) {
        if ((e22 = l22[r22]) && i22 == e22.key && o22 === e22.type)
          return r22;
        r22--;
      }
      if (f22 < l22.length) {
        if ((e22 = l22[f22]) && i22 == e22.key && o22 === e22.type)
          return f22;
        f22++;
      }
    }
  return -1;
}
function H(n2, l22, u22, t22, i22) {
  var o22;
  for (o22 in u22)
    "children" === o22 || "key" === o22 || o22 in l22 || T(n2, o22, null, u22[o22], t22);
  for (o22 in l22)
    i22 && "function" != typeof l22[o22] || "children" === o22 || "key" === o22 || "value" === o22 || "checked" === o22 || u22[o22] === l22[o22] || T(n2, o22, l22[o22], u22[o22], t22);
}
function I(n2, l22, u22) {
  "-" === l22[0] ? n2.setProperty(l22, null == u22 ? "" : u22) : n2[l22] = null == u22 ? "" : "number" != typeof u22 || a.test(l22) ? u22 : u22 + "px";
}
function T(n2, l22, u22, t22, i22) {
  var o22;
  n:
    if ("style" === l22)
      if ("string" == typeof u22)
        n2.style.cssText = u22;
      else {
        if ("string" == typeof t22 && (n2.style.cssText = t22 = ""), t22)
          for (l22 in t22)
            u22 && l22 in u22 || I(n2.style, l22, "");
        if (u22)
          for (l22 in u22)
            t22 && u22[l22] === t22[l22] || I(n2.style, l22, u22[l22]);
      }
    else if ("o" === l22[0] && "n" === l22[1])
      o22 = l22 !== (l22 = l22.replace(/Capture$/, "")), l22 = l22.toLowerCase() in n2 ? l22.toLowerCase().slice(2) : l22.slice(2), n2.l || (n2.l = {}), n2.l[l22 + o22] = u22, u22 ? t22 || n2.addEventListener(l22, o22 ? z : j, o22) : n2.removeEventListener(l22, o22 ? z : j, o22);
    else if ("dangerouslySetInnerHTML" !== l22) {
      if (i22)
        l22 = l22.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l22 && "height" !== l22 && "href" !== l22 && "list" !== l22 && "form" !== l22 && "tabIndex" !== l22 && "download" !== l22 && "rowSpan" !== l22 && "colSpan" !== l22 && l22 in n2)
        try {
          n2[l22] = null == u22 ? "" : u22;
          break n;
        } catch (n3) {
        }
      "function" == typeof u22 || (null == u22 || false === u22 && "-" !== l22[4] ? n2.removeAttribute(l22) : n2.setAttribute(l22, u22));
    }
}
function j(n2) {
  return this.l[n2.type + false](l.event ? l.event(n2) : n2);
}
function z(n2) {
  return this.l[n2.type + true](l.event ? l.event(n2) : n2);
}
function L(n2, u22, t22, i22, o22, r22, f22, e22, c22, s2) {
  var a22, p2, y2, d22, _2, g22, m22, w22, x2, C2, S2, $2, A2, H2, I2, T22 = u22.type;
  if (void 0 !== u22.constructor)
    return null;
  null != t22.__h && (c22 = t22.__h, e22 = u22.__e = t22.__e, u22.__h = null, r22 = [e22]), (a22 = l.__b) && a22(u22);
  try {
    n:
      if ("function" == typeof T22) {
        if (w22 = u22.props, x2 = (a22 = T22.contextType) && i22[a22.__c], C2 = a22 ? x2 ? x2.props.value : a22.__ : i22, t22.__c ? m22 = (p2 = u22.__c = t22.__c).__ = p2.__E : ("prototype" in T22 && T22.prototype.render ? u22.__c = p2 = new T22(w22, C2) : (u22.__c = p2 = new b(w22, C2), p2.constructor = T22, p2.render = B), x2 && x2.sub(p2), p2.props = w22, p2.state || (p2.state = {}), p2.context = C2, p2.__n = i22, y2 = p2.__d = true, p2.__h = [], p2._sb = []), null == p2.__s && (p2.__s = p2.state), null != T22.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = v({}, p2.__s)), v(p2.__s, T22.getDerivedStateFromProps(w22, p2.__s))), d22 = p2.props, _2 = p2.state, p2.__v = u22, y2)
          null == T22.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
        else {
          if (null == T22.getDerivedStateFromProps && w22 !== d22 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(w22, C2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(w22, p2.__s, C2) || u22.__v === t22.__v)) {
            for (u22.__v !== t22.__v && (p2.props = w22, p2.state = p2.__s, p2.__d = false), u22.__e = t22.__e, u22.__k = t22.__k, u22.__k.forEach(function(n3) {
              n3 && (n3.__ = u22);
            }), S2 = 0; S2 < p2._sb.length; S2++)
              p2.__h.push(p2._sb[S2]);
            p2._sb = [], p2.__h.length && f22.push(p2);
            break n;
          }
          null != p2.componentWillUpdate && p2.componentWillUpdate(w22, p2.__s, C2), null != p2.componentDidUpdate && p2.__h.push(function() {
            p2.componentDidUpdate(d22, _2, g22);
          });
        }
        if (p2.context = C2, p2.props = w22, p2.__P = n2, p2.__e = false, $2 = l.__r, A2 = 0, "prototype" in T22 && T22.prototype.render) {
          for (p2.state = p2.__s, p2.__d = false, $2 && $2(u22), a22 = p2.render(p2.props, p2.state, p2.context), H2 = 0; H2 < p2._sb.length; H2++)
            p2.__h.push(p2._sb[H2]);
          p2._sb = [];
        } else
          do {
            p2.__d = false, $2 && $2(u22), a22 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
          } while (p2.__d && ++A2 < 25);
        p2.state = p2.__s, null != p2.getChildContext && (i22 = v(v({}, i22), p2.getChildContext())), y2 || null == p2.getSnapshotBeforeUpdate || (g22 = p2.getSnapshotBeforeUpdate(d22, _2)), P(n2, h(I2 = null != a22 && a22.type === k && null == a22.key ? a22.props.children : a22) ? I2 : [I2], u22, t22, i22, o22, r22, f22, e22, c22, s2), p2.base = u22.__e, u22.__h = null, p2.__h.length && f22.push(p2), m22 && (p2.__E = p2.__ = null);
      } else
        null == r22 && u22.__v === t22.__v ? (u22.__k = t22.__k, u22.__e = t22.__e) : u22.__e = N(t22.__e, u22, t22, i22, o22, r22, f22, c22, s2);
    (a22 = l.diffed) && a22(u22);
  } catch (n3) {
    u22.__v = null, (c22 || null != r22) && (u22.__e = e22, u22.__h = !!c22, r22[r22.indexOf(e22)] = null), l.__e(n3, u22, t22);
  }
}
function M(n2, u22, t22) {
  for (var i22 = 0; i22 < t22.length; i22++)
    O(t22[i22], t22[++i22], t22[++i22]);
  l.__c && l.__c(u22, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l.__e(n3, u3.__v);
    }
  });
}
function N(l22, u22, t22, i22, o22, r22, f22, e22, s2) {
  var a22, v22, y2, d22 = t22.props, _2 = u22.props, k22 = u22.type, b22 = 0;
  if ("svg" === k22 && (o22 = true), null != r22) {
    for (; b22 < r22.length; b22++)
      if ((a22 = r22[b22]) && "setAttribute" in a22 == !!k22 && (k22 ? a22.localName === k22 : 3 === a22.nodeType)) {
        l22 = a22, r22[b22] = null;
        break;
      }
  }
  if (null == l22) {
    if (null === k22)
      return document.createTextNode(_2);
    l22 = o22 ? document.createElementNS("http://www.w3.org/2000/svg", k22) : document.createElement(k22, _2.is && _2), r22 = null, e22 = false;
  }
  if (null === k22)
    d22 === _2 || e22 && l22.data === _2 || (l22.data = _2);
  else {
    if (r22 = r22 && n.call(l22.childNodes), v22 = (d22 = t22.props || c).dangerouslySetInnerHTML, y2 = _2.dangerouslySetInnerHTML, !e22) {
      if (null != r22)
        for (d22 = {}, b22 = 0; b22 < l22.attributes.length; b22++)
          d22[l22.attributes[b22].name] = l22.attributes[b22].value;
      (y2 || v22) && (y2 && (v22 && y2.__html == v22.__html || y2.__html === l22.innerHTML) || (l22.innerHTML = y2 && y2.__html || ""));
    }
    if (H(l22, _2, d22, o22, e22), y2)
      u22.__k = [];
    else if (P(l22, h(b22 = u22.props.children) ? b22 : [b22], u22, t22, i22, o22 && "foreignObject" !== k22, r22, f22, r22 ? r22[0] : t22.__k && g(t22, 0), e22, s2), null != r22)
      for (b22 = r22.length; b22--; )
        null != r22[b22] && p(r22[b22]);
    e22 || ("value" in _2 && void 0 !== (b22 = _2.value) && (b22 !== l22.value || "progress" === k22 && !b22 || "option" === k22 && b22 !== d22.value) && T(l22, "value", b22, d22.value, false), "checked" in _2 && void 0 !== (b22 = _2.checked) && b22 !== l22.checked && T(l22, "checked", b22, d22.checked, false));
  }
  return l22;
}
function O(n2, u22, t22) {
  try {
    "function" == typeof n2 ? n2(u22) : n2.current = u22;
  } catch (n3) {
    l.__e(n3, t22);
  }
}
function q(n2, u22, t22) {
  var i22, o22;
  if (l.unmount && l.unmount(n2), (i22 = n2.ref) && (i22.current && i22.current !== n2.__e || O(i22, null, u22)), null != (i22 = n2.__c)) {
    if (i22.componentWillUnmount)
      try {
        i22.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, u22);
      }
    i22.base = i22.__P = null, n2.__c = void 0;
  }
  if (i22 = n2.__k)
    for (o22 = 0; o22 < i22.length; o22++)
      i22[o22] && q(i22[o22], u22, t22 || "function" != typeof n2.type);
  t22 || null == n2.__e || p(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function B(n2, l22, u22) {
  return this.constructor(n2, u22);
}
function D(u22, t22, i22) {
  var o22, r22, f22, e22;
  l.__ && l.__(u22, t22), r22 = (o22 = "function" == typeof i22) ? null : i22 && i22.__k || t22.__k, f22 = [], e22 = [], L(t22, u22 = (!o22 && i22 || t22).__k = y(k, null, [u22]), r22 || c, c, void 0 !== t22.ownerSVGElement, !o22 && i22 ? [i22] : r22 ? null : t22.firstChild ? n.call(t22.childNodes) : null, f22, !o22 && i22 ? i22 : r22 ? r22.__e : t22.firstChild, o22, e22), M(f22, u22, e22);
}
n = s.slice, l = { __e: function(n2, l22, u22, t22) {
  for (var i22, o22, r22; l22 = l22.__; )
    if ((i22 = l22.__c) && !i22.__)
      try {
        if ((o22 = i22.constructor) && null != o22.getDerivedStateFromError && (i22.setState(o22.getDerivedStateFromError(n2)), r22 = i22.__d), null != i22.componentDidCatch && (i22.componentDidCatch(n2, t22 || {}), r22 = i22.__d), r22)
          return i22.__E = i22;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && void 0 === n2.constructor;
}, b.prototype.setState = function(n2, l22) {
  var u22;
  u22 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = v({}, this.state), "function" == typeof n2 && (n2 = n2(v({}, u22), this.props)), n2 && v(u22, n2), null != n2 && this.__v && (l22 && this._sb.push(l22), w(this));
}, b.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), w(this));
}, b.prototype.render = k, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l22) {
  return n2.__v.__b - l22.__v.__b;
}, x.__r = 0, e = 0;

// https://esm.sh/stable/preact@10.16.0/denonext/hooks.development.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = [];
var e2 = l.__b;
var a2 = l.__r;
var v2 = l.diffed;
var l2 = l.__c;
var m2 = l.unmount;
function d2(t22, u22) {
  l.__h && l.__h(r2, t22, o2 || u22), o2 = 0;
  var i22 = r2.__H || (r2.__H = { __: [], __h: [] });
  return t22 >= i22.__.length && i22.__.push({ __V: c2 }), i22.__[t22];
}
function F(n2, r22) {
  var u22 = d2(t2++, 7);
  return z2(u22.__H, r22) ? (u22.__V = n2(), u22.i = r22, u22.__h = n2, u22.__V) : u22.__;
}
function T2(n2, t22) {
  return o2 = 8, F(function() {
    return n2;
  }, t22);
}
function b2() {
  for (var t22; t22 = f2.shift(); )
    if (t22.__P && t22.__H)
      try {
        t22.__H.__h.forEach(k2), t22.__H.__h.forEach(w2), t22.__H.__h = [];
      } catch (r22) {
        t22.__H.__h = [], l.__e(r22, t22.__v);
      }
}
l.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, l.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i22 = (r2 = n2.__c).__H;
  i22 && (u2 === r2 ? (i22.__h = [], r2.__h = [], i22.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
  })) : (i22.__h.forEach(k2), i22.__h.forEach(w2), i22.__h = [], t2 = 0)), u2 = r2;
}, l.diffed = function(t22) {
  v2 && v2(t22);
  var o22 = t22.__c;
  o22 && o22.__H && (o22.__H.__h.length && (1 !== f2.push(o22) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o22.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
  })), u2 = r2 = null;
}, l.__c = function(t22, r22) {
  r22.some(function(t3) {
    try {
      t3.__h.forEach(k2), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w2(n2);
      });
    } catch (u22) {
      r22.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r22 = [], l.__e(u22, t3.__v);
    }
  }), l2 && l2(t22, r22);
}, l.unmount = function(t22) {
  m2 && m2(t22);
  var r22, u22 = t22.__c;
  u22 && u22.__H && (u22.__H.__.forEach(function(n2) {
    try {
      k2(n2);
    } catch (n3) {
      r22 = n3;
    }
  }), u22.__H = void 0, r22 && l.__e(r22, u22.__v));
};
var g2 = "function" == typeof requestAnimationFrame;
function j2(n2) {
  var t22, r22 = function() {
    clearTimeout(u22), g2 && cancelAnimationFrame(t22), setTimeout(n2);
  }, u22 = setTimeout(r22, 100);
  g2 && (t22 = requestAnimationFrame(r22));
}
function k2(n2) {
  var t22 = r2, u22 = n2.__c;
  "function" == typeof u22 && (n2.__c = void 0, u22()), r2 = t22;
}
function w2(n2) {
  var t22 = r2;
  n2.__c = n2.__(), r2 = t22;
}
function z2(n2, t22) {
  return !n2 || n2.length !== t22.length || t22.some(function(t3, r22) {
    return t3 !== n2[r22];
  });
}

// https://deno.land/std@0.138.0/fmt/colors.ts
var { Deno } = globalThis;
var noColor = typeof Deno?.noColor === "boolean" ? Deno.noColor : true;
var ANSI_PATTERN = new RegExp(
  [
    "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|"),
  "g"
);

// components/options_button.tsx
function OptionsButton() {
  const onClick = T2(() => {
    mod_exports.default.runtime.openOptionsPage();
  }, []);
  return /* @__PURE__ */ y("button", {
    onClick
  }, "Options");
}

// extension/popup.tsx
var mountPoint = document.getElementById("mount");
if (mountPoint) {
  D(
    /* @__PURE__ */ y("main", null, /* @__PURE__ */ y("h1", null, "deco.cx assistant"), /* @__PURE__ */ y("span", null, "this site:"), /* @__PURE__ */ y(OptionsButton, null)),
    mountPoint
  );
}
