import { e as createComponent, m as maybeRenderHead, k as renderComponent, h as addAttribute, r as renderTemplate } from '../chunks/astro/server_BnuYbohY.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CtPqvhWY.mjs';
/* empty css                                 */
import { $ as $$GmailButton } from '../chunks/GmailButton_cHXlVKyV.mjs';
export { renderers } from '../renderers.mjs';

const logo = new Proxy({"src":"/_astro/innovadev.C7VA075M.jpg","width":1440,"height":1440,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Proyectos/innovadev/src/assets/innovadev.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex items-center justify-center px-10 py-16"> <div class="max-w-6xl mx-auto"> <div class="grid lg:grid-cols-2 gap-12 items-center"> <div class="text-center lg:text-left"> <h1 class="text-4xl lg:text-5xl font-bold mb-6"> <span class="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
Innovadev
</span> </h1> <!-- Descripción --> <p class="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
Transformamos tus ideas en soluciones digitales innovadoras.
                    Desde desarrollo web personalizado hasta aplicaciones
                    móviles de vanguardia, creamos experiencias tecnológicas que
                    impulsan el crecimiento de tu negocio.
</p> <!-- Botones de Acción --> <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"> ${renderComponent($$result, "GmailButton", $$GmailButton, { "text": "Comenzar proyecto" })} </div> </div> <!-- Logo/Imagen --> <div class="flex justify-center lg:justify-end"> <div class="relative"> <img${addAttribute(logo.src, "src")} alt="Innovadev Logo" class="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 shadow-purple-500 shadow-2xl"> <!-- Elementos decorativos --> <div class="absolute -top-4 -right-4 w-20 h-20 bg-purple-900 rounded-full opacity-20 animate-pulse"></div> <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-900 rounded-full opacity-30 animate-pulse" style="animation-delay: 1s;"></div> </div> </div> </div> </div> </section>`;
}, "D:/Proyectos/innovadev/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Innovadev" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ` })}`;
}, "D:/Proyectos/innovadev/src/pages/index.astro", void 0);

const $$file = "D:/Proyectos/innovadev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
