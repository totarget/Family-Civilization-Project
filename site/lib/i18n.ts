export type Lang = "zh" | "en";

export function isLang(value: string): value is Lang {
  return value === "zh" || value === "en";
}

export const dict = {
  zh: {
    htmlLang: "zh-CN",
    switchTo: "English",
    home: "首页",
    manifesto: "宣言",
    books: "书籍",
    volumeI: "第一卷",
    startHere: "从这里开始",
    about: "关于",
    videos: "视频",
    dictionary: "词典",
    github: "GitHub",
    humans: "HUMANS ARE ENDS",
    brand: "家庭文明工程 Family Civilization Project",
    footer: "家庭文明工程 — 让相爱的人不再相互伤害。",
    readVolume: "阅读第一卷",
    readManifesto: "阅读宣言",
    startButton: "从这里开始",
  },
  en: {
    htmlLang: "en",
    switchTo: "中文",
    home: "Home",
    manifesto: "Manifesto",
    books: "Books",
    volumeI: "Volume I",
    startHere: "Start Here",
    about: "About",
    videos: "Videos",
    dictionary: "Dictionary",
    github: "GitHub",
    humans: "HUMANS ARE ENDS",
    brand: "Family Civilization Project",
    footer: "Family Civilization Project — Let those who love one another stop hurting one another.",
    readVolume: "Read Volume I",
    readManifesto: "Read Manifesto",
    startButton: "Start Here",
  },
} as const;

export function otherLang(lang: Lang): Lang {
  return lang === "zh" ? "en" : "zh";
}
