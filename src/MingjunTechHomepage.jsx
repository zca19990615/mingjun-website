import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Network,
  Building2,
  CloudSun,
} from "lucide-react";

const company = "东莞市明钧电子科技有限公司";

const navItems = ["首页", "关于我们", "解决方案", "项目案例", "联系我们"];

const businessAreas = [
  "智能设备方案设计",
  "物联网平台开发",
  "生产与批量交付",
  "现场部署与运维支持",
];

const solutions = [
  {
    title: "智能设备方案设计",
    desc: "根据客户项目需求，完成传感器选型、硬件方案设计、PCB 与模组适配、固件开发、结构外壳设计和软件界面规划。适用于传感监测终端、数据采集设备、联网控制设备和定制化项目终端等开发场景。",
    scope: "服务内容：需求梳理、硬件方案、嵌入式开发、结构适配、软件界面规划。",
  },
  {
    title: "物联网平台开发",
    desc: "围绕多台设备、多个点位和长期运行场景，提供设备联网、数据上报、后台管理、数据看板、接口对接和数据导出服务，便于客户进行设备管理和数据留存。",
    scope: "服务内容：设备接入、数据采集、后台管理、数据看板、API 接口与数据导出。",
  },
  {
    title: "生产与批量交付",
    desc: "在样机验证通过后，按项目要求推进物料采购、整机装配、功能测试、设备编号、二维码标签、包装出货和交付记录整理，支持小批量试产和批量项目交付。",
    scope: "服务内容：物料采购、整机装配、批量测试、设备编号、包装出货、交付记录。",
  },
  {
    title: "现场部署与运维支持",
    desc: "根据项目现场需求，提供设备安装指导、联网配置、后台账号配置、数据检查和后续维护支持。对于工程监测和分布式光纤相关项目，可配合完成设备配套、数据采集和平台展示。",
    scope: "服务内容：安装指导、联网配置、数据检查、后台维护、项目协作与售后支持。",
  },
];

const serviceSteps = [
  {
    no: "01",
    title: "需求确认",
    desc: "明确使用场景、监测参数、设备数量、联网方式、数据格式和交付周期。",
  },
  {
    no: "02",
    title: "方案设计",
    desc: "完成传感器、模组、PCB、结构、软件界面和数据链路的方案确认。",
  },
  {
    no: "03",
    title: "样机验证",
    desc: "进行样机开发、固件调试、功能测试、数据上报和使用场景验证。",
  },
  {
    no: "04",
    title: "批量交付",
    desc: "完成设备编号、二维码、批量测试、包装出货、现场使用支持和后续维护。",
  },
];

const cases = [
  {
    label: "室内环境与健康研究",
    title: "剑桥大学相关研究：室内环境与人类健康监测设备",
    desc: "围绕室内环境与人类健康研究需求，交付环境监测终端及配套定制软件。设备支持 PM、CO₂、温湿度等参数采集，具备设备编号、批量管理、数据上报和后台查看功能，适用于大规模、多点位、长期监测项目。",
    info: [
      ["交付规模", "约 10,000 台"],
      ["监测参数", "PM / CO₂ / 温湿度"],
      ["交付内容", "环境监测终端、定制软件、数据接口与批量管理支持"],
    ],
  },
  {
    label: "室外空气质量监测",
    title: "园区与校园空气质量监测设备项目",
    desc: "面向校园、园区和户外点位，提供室外空气质量监测终端。设备可根据现场需求配置颗粒物、温湿度、噪声、气象等模块，并支持多点位联网、远程数据查看和数据导出。",
    info: [
      ["交付规模", "约 300–800 台"],
      ["应用场景", "校园、园区、户外监测点位"],
      ["交付内容", "监测终端、联网配置、后台管理与数据导出"],
    ],
  },
  {
    label: "工程现场环境监测",
    title: "工程现场扬尘与环境监测项目",
    desc: "面向施工现场、工程项目和临时监测点，提供扬尘、噪声、温湿度等环境监测设备。系统支持现场设备安装、数据联网、后台查看和后期维护，便于项目方进行环境数据留存与管理。",
    info: [
      ["交付规模", "约 100–300 台"],
      ["监测内容", "扬尘、噪声、温湿度"],
      ["交付内容", "现场设备、联网配置、后台查看与维护支持"],
    ],
  },
  {
    label: "分布式光纤监测",
    title: "风电与结构安全分布式光纤监测协作项目",
    desc: "围绕风电叶片、桥梁、边坡等结构监测场景，参与分布式光纤设备配套、数据采集和方案协作。项目可根据现场布点需求，结合光纤传感数据、温度、应变和振动变化，实现关键位置的连续监测与预警展示。",
    info: [
      ["应用方向", "风电叶片、桥梁、边坡、结构安全"],
      ["采集内容", "温度、应变、振动变化"],
      ["交付方式", "联合方案、设备配套、数据采集与平台展示"],
    ],
  },
];

function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{desc}</p>}
    </div>
  );
}

function HeroSky() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-blue-400">
      <div className="absolute inset-x-0 top-0 h-40 bg-white/45" />
      <div className="absolute left-[-4%] top-14 h-36 w-[36rem] rounded-full bg-white/75 blur-2xl" />
      <div className="absolute left-[28%] top-20 h-28 w-[30rem] rounded-full bg-white/55 blur-2xl" />
      <div className="absolute right-[-6%] top-16 h-40 w-[42rem] rounded-full bg-white/70 blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#075b9a] via-[#0b76b8]/80 to-transparent" />
      <div className="absolute bottom-24 left-0 h-[3px] w-full bg-sky-800/45" />
      <div className="absolute bottom-20 left-[6%] h-[5px] w-[88%] bg-sky-900/60" />
      <div className="absolute bottom-12 left-0 flex w-full justify-around opacity-70">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="h-16 w-[3px] bg-sky-900/55" />
        ))}
      </div>
      <div className="absolute bottom-20 right-[18%] h-24 w-24 border-l-[5px] border-t-[5px] border-sky-900/60 rotate-45" />
      <div className="absolute bottom-20 right-[8%] h-28 w-28 border-l-[5px] border-t-[5px] border-sky-900/60 rotate-45" />
    </div>
  );
}

export default function MingjunTechHomepage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded bg-sky-700 text-white">
              <Network className="h-6 w-6" />
            </div>
            <div>
              <div className="text-lg font-bold tracking-wide text-sky-800">明钧科技</div>
              <div className="text-xs uppercase tracking-[0.22em] text-slate-500">MINGJUN TECH</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-700 lg:flex">
            {navItems.map((item) => (
              <a key={item} href={item === "首页" ? "#" : `#${item}`} className="transition hover:text-sky-700">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 text-sm text-slate-500 md:flex">
            <span>中文</span>
            <span className="text-slate-300">/</span>
            <span>English</span>
          </div>
        </div>
      </header>

      <section className="relative h-[620px] overflow-hidden">
        <HeroSky />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/48 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 md:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/85 px-4 py-2 text-sm font-medium text-sky-800 shadow-sm">
              <CloudSun className="h-4 w-4" />
              智能设备定制 · 物联网平台 · 项目交付
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
              智能设备与物联网数据解决方案服务商
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">
              {company} 面向国内外高校、科研单位、企业和工程项目，提供智能设备定制开发、物联网数据平台、传感监测终端、数据采集系统与项目交付服务。
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#解决方案" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-700 px-7 py-3 font-semibold text-white shadow-xl shadow-sky-200 transition hover:bg-sky-800">
                查看解决方案 <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#项目案例" className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white/90 px-7 py-3 font-semibold text-slate-900 shadow-sm transition hover:bg-white">
                查看项目案例
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 bg-sky-800 py-5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 text-center text-sm text-white md:grid-cols-4">
          {businessAreas.map((item) => (
            <a key={item} href="#解决方案" className="bg-sky-700/40 px-4 py-3 transition hover:bg-white hover:text-sky-800">
              {item}
            </a>
          ))}
        </div>
      </section>

      <section id="关于我们" className="px-5 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.22em] text-sky-700">Company Profile</div>
              <h2 className="text-3xl font-semibold text-slate-950 md:text-4xl">公司简介</h2>
            </div>
            <div className="space-y-5 text-base leading-9 text-slate-700">
              <p>
                {company} 位于广东东莞，主要面向国内外高校、科研单位、企业客户和工程项目，提供智能设备定制开发、物联网数据平台、传感监测终端、数据采集系统与项目交付服务。
              </p>
              <p>
                公司服务内容包括需求沟通、方案设计、硬件开发、软件定制、设备生产、数据接入、批量测试、包装出货和后续维护，适用于样机开发、小批量试产和批量项目交付。
              </p>
              <p>
                团队已参与室内环境与健康研究、空气质量监测、工地环境监测、数据采集终端、分布式光纤监测协作等项目，相关项目服务、设备交付或技术支持曾覆盖新加坡国立大学、剑桥大学、湖南大学等国内外高校及科研单位。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="解决方案" className="bg-slate-50 px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Solutions & Services"
            title="解决方案与服务内容"
            desc="服务内容按项目执行链条展开，从方案设计、平台开发到生产交付和后续维护，便于客户快速判断合作方式。"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((item, index) => (
              <div key={item.title} className="border-t border-sky-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="text-3xl font-semibold text-sky-100">0{index + 1}</span>
                  <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                </div>
                <p className="text-base leading-8 text-slate-700">{item.desc}</p>
                <p className="mt-5 border-l-4 border-sky-700 pl-4 text-sm leading-7 text-slate-600">{item.scope}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-slate-200 pt-12">
            <div className="mb-8 max-w-3xl">
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">Service Process</div>
              <h3 className="text-3xl font-semibold text-slate-950">服务流程</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">
                服务流程按项目执行顺序展开，重点确认需求、方案、样机和批量交付，减少反复沟通和后期返工。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-4">
              {serviceSteps.map((step) => (
                <div key={step.no} className="border-l border-sky-200 pl-5">
                  <div className="text-sm font-semibold text-sky-700">{step.no}</div>
                  <h4 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="项目案例" className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Cases"
            title="项目案例"
            desc="以下为官网展示样式稿，项目名称、交付数量和合作主体可在正式上线前按合同与交付记录进一步核准。"
          />
          <div className="space-y-8">
            {cases.map((item, index) => (
              <article key={item.title} className="grid gap-8 border-t border-slate-200 pt-8 lg:grid-cols-[0.28fr_0.72fr]">
                <div>
                  <div className="text-sm font-semibold text-sky-700">0{index + 1}</div>
                  <div className="mt-3 text-sm text-slate-500">{item.label}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950 md:text-3xl">{item.title}</h3>
                  <p className="mt-5 text-base leading-8 text-slate-700">{item.desc}</p>
                  <div className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
                    {item.info.map(([name, value]) => (
                      <div key={name} className="grid gap-2 py-4 text-sm md:grid-cols-[140px_1fr]">
                        <div className="font-medium text-slate-950">{name}</div>
                        <div className="leading-7 text-slate-600">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sky-800 px-5 py-14 text-white md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">有智能设备定制、数据平台或监测项目需求？</h2>
            <p className="mt-4 max-w-2xl text-sky-100">可以先从样机或小批量项目开始，确认传感器、软件、数据、结构和交付要求，再逐步推进批量应用。</p>
          </div>
          <a href="#联系我们" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-sky-800 transition hover:bg-sky-50">
            联系我们 <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer id="联系我们" className="bg-white px-5 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-sky-700 text-white">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="text-2xl font-semibold text-slate-950">{company}</div>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600">
              智能设备定制开发、物联网数据平台、传感监测终端与项目交付服务商。
            </p>
          </div>
          <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <Mail className="h-5 w-5 text-sky-700" />
              <span>商务合作：请填写邮箱</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <Phone className="h-5 w-5 text-sky-700" />
              <span>联系电话：请填写号码</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:col-span-2">
              <MapPin className="h-5 w-5 text-sky-700" />
              <span>中国 · 广东 · 东莞</span>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-100 pt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Mingjun Electronic Technology. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
