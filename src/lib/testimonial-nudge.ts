export const TESTIMONIAL_DWELL_MS = 18000;
// Replace sample details and target when the real testimonial section is ready.
export const testimonialNudge = { name: "Alex", target: "#testimonials" };
export function canShowTestimonialNudge(visible: boolean, blocked: boolean, dismissed: boolean) {
  return visible && !blocked && !dismissed;
}
export const nudgeCopy: Record<
  string,
  { sample: string; line: string; close: string; preview: string }
> = {
  en: {
    sample: "Sample testimonial",
    line: "See what {name} has to say about Shivam.",
    close: "Dismiss testimonial popup",
    preview: "This is a preview. The real person and testimonial will be connected here later.",
  },
  de: {
    sample: "Beispielstimme",
    line: "Erfahre, was {name} über Shivam sagt.",
    close: "Hinweis schließen",
    preview:
      "Dies ist eine Vorschau. Die echte Person und ihre Empfehlung werden später verknüpft.",
  },
  es: {
    sample: "Testimonio de ejemplo",
    line: "Mira lo que {name} dice sobre Shivam.",
    close: "Cerrar aviso",
    preview:
      "Esta es una vista previa. La persona y el testimonio reales se conectarán más adelante.",
  },
  fr: {
    sample: "Témoignage exemple",
    line: "Découvrez ce que {name} dit de Shivam.",
    close: "Fermer le message",
    preview: "Ceci est un aperçu. La personne et le témoignage réels seront ajoutés plus tard.",
  },
  hi: {
    sample: "नमूना प्रशंसापत्र",
    line: "देखें {name}, Shivam के बारे में क्या कहते हैं।",
    close: "संदेश बंद करें",
    preview: "यह एक नमूना है। वास्तविक व्यक्ति और प्रशंसापत्र बाद में जोड़े जाएँगे।",
  },
  "zh-CN": {
    sample: "示例推荐",
    line: "看看 {name} 对 Shivam 的评价。",
    close: "关闭提示",
    preview: "这只是预览。真实人物和推荐内容将在之后添加。",
  },
  ms: {
    sample: "Contoh testimoni",
    line: "Lihat pendapat {name} tentang Shivam.",
    close: "Tutup pemberitahuan",
    preview: "Ini ialah pratonton. Individu dan testimoni sebenar akan dihubungkan kemudian.",
  },
  ko: {
    sample: "추천사 예시",
    line: "{name}이 Shivam에 대해 하는 이야기를 보세요.",
    close: "알림 닫기",
    preview: "미리보기입니다. 실제 인물과 추천사는 나중에 연결됩니다.",
  },
};
