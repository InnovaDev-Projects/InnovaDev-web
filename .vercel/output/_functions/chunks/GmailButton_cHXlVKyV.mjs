import { e as createComponent, f as createAstro, r as renderTemplate, m as maybeRenderHead } from './astro/server_BnuYbohY.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$GmailButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GmailButton;
  const { text } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<button class="bg-purple-600 px-8 py-4 rounded-full font-semibold transition-colors duration-300" id="gmail-button"> ', ' </button> <script>\n    const btn = document.getElementById("gmail-button");\n    function openGmail() {\n        const email = "innova.contact@gmail.com";\n        const subject = "Solicitud de Cotizaci\xF3n";\n        const body = "Hola, me interesa solicitar una cotizaci\xF3n para:";\n\n        // URL para Gmail web\n        const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;\n\n        window.open(gmailUrl, "_blank");\n    }\n    btn?.addEventListener("click", openGmail);\n<\/script>'], ["", '<button class="bg-purple-600 px-8 py-4 rounded-full font-semibold transition-colors duration-300" id="gmail-button"> ', ' </button> <script>\n    const btn = document.getElementById("gmail-button");\n    function openGmail() {\n        const email = "innova.contact@gmail.com";\n        const subject = "Solicitud de Cotizaci\xF3n";\n        const body = "Hola, me interesa solicitar una cotizaci\xF3n para:";\n\n        // URL para Gmail web\n        const gmailUrl = \\`https://mail.google.com/mail/?view=cm&to=\\${email}&su=\\${encodeURIComponent(subject)}&body=\\${encodeURIComponent(body)}\\`;\n\n        window.open(gmailUrl, "_blank");\n    }\n    btn?.addEventListener("click", openGmail);\n<\/script>'])), maybeRenderHead(), text);
}, "D:/Proyectos/innovadev/src/components/GmailButton.astro", void 0);

export { $$GmailButton as $ };
