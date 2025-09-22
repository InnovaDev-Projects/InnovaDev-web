import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, l as renderScript, k as renderComponent, n as renderHead, o as renderSlot } from './astro/server_BnuYbohY.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="flex justify-center p-4 sticky top-0 z-50"> <div class="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-3 max-w-4xl"> <ul class="flex items-center justify-center space-x-8"> <li> <a href="/" class="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50">
Inicio
</a> </li> <li> <a href="/services" class="text-gray-700 hover:text-purple-600 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50">
Servicios
</a> </li> <li> <a href="/about" class="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-gray-50">
Nosotros
</a> </li> </ul> </div> </nav>`;
}, "D:/Proyectos/innovadev/src/components/Nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Proyectos/innovadev/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Proyectos/innovadev/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Nav", $$Nav, {})} <div> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "D:/Proyectos/innovadev/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
